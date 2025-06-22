import concurrently, {Command} from 'concurrently';
import {getDeferredPromise} from 'softkave-js-utils';
import {ValueOf} from 'type-fest';

export const kDevEnvironment = {
  dev: 'dev',
  devForTest: 'dev:test',
  test: 'test',
} as const;

export type DevEnvironment = ValueOf<typeof kDevEnvironment>;

const kMongoCmdsForEnv: Record<DevEnvironment, string> = {
  [kDevEnvironment.dev]: 'pnpm mongo:dev',
  [kDevEnvironment.devForTest]: 'pnpm mongo:test',
  [kDevEnvironment.test]: 'pnpm mongo:test',
};

const kServerCmdsForEnv: Record<DevEnvironment, string> = {
  [kDevEnvironment.dev]: 'pnpm dev',
  [kDevEnvironment.devForTest]: 'pnpm dev:test',
  [kDevEnvironment.test]: 'pnpm test',
};

export function resolveOnStringMatchInStream(
  cmd: Command,
  match: string,
  onMatch: (match: string) => void
): {unsubscribe: () => void} {
  let textCache = '';
  const maxCacheLength = match.length * 10;

  const subscription = cmd.stdout.subscribe({
    next: value => {
      const text = new TextDecoder().decode(value);
      textCache += text;

      // Purge old text if cache is too large, keeping only the most recent portion
      if (textCache.length > maxCacheLength) {
        // Keep the last portion that could contain a match
        // We keep match.length * 10 to ensure we don't miss matches that span chunks
        const keepLength = match.length * 10;
        textCache = textCache.slice(-keepLength);
      }

      if (textCache.includes(match)) {
        onMatch(textCache);
        subscription.unsubscribe();
      }
    },
  });
  return {
    unsubscribe: () => subscription.unsubscribe(),
  };
}

function startRedisServerAndMongodb(environment: DevEnvironment) {
  const {commands, result} = concurrently([
    {
      command: 'redis-server',
      name: 'redis',
      prefixColor: 'green',
    },
    {
      command: kMongoCmdsForEnv[environment],
      name: 'mongodb',
      prefixColor: 'blue',
    },
  ]);

  const redisCmd = commands[0];
  const mongodbCmd = commands[1];

  const redisStartedPromise = getDeferredPromise();
  const mongodbStartedPromise = getDeferredPromise();

  const redisSubscription = resolveOnStringMatchInStream(
    redisCmd,
    'Ready to accept connections',
    () => {
      redisStartedPromise.resolve();
    }
  );
  const mongodbSubscription = resolveOnStringMatchInStream(
    mongodbCmd,
    'Started replica set',
    () => {
      mongodbStartedPromise.resolve();
    }
  );

  return {
    redisCmd,
    mongodbCmd,
    result,
    redisStartedPromise,
    mongodbStartedPromise,
    redisSubscription,
    mongodbSubscription,
  };
}

function startDevServer(environment: DevEnvironment, otherArgs?: string[]) {
  return concurrently([
    {
      command: kServerCmdsForEnv[environment],
      name: 'server',
      prefixColor: 'yellow',
      ...(otherArgs ? {args: otherArgs} : {}),
    },
  ]);
}

export async function startDev(
  environment: DevEnvironment,
  otherArgs?: string[]
) {
  const {
    redisCmd,
    mongodbCmd,
    redisStartedPromise,
    mongodbStartedPromise,
    redisSubscription,
    mongodbSubscription,
  } = startRedisServerAndMongodb(environment);

  let serverCmd: Command | undefined;
  const otherReadyPromise = Promise.all([
    redisStartedPromise.promise,
    mongodbStartedPromise.promise,
  ]);

  // Start server after services are ready
  otherReadyPromise
    .then(() => {
      const {commands} = startDevServer(environment, otherArgs);
      serverCmd = commands[0];
    })
    .catch(error => {
      console.error('Failed to start services:', error.message);
      // Don't throw here, let the cleanup handle it
    });

  // Set up process exit handlers
  const cleanup = () => {
    console.log('\nShutting down development environment...');

    // Clean up subscriptions
    redisSubscription?.unsubscribe();
    mongodbSubscription?.unsubscribe();

    // Kill server process if it exists
    if (serverCmd) {
      serverCmd.kill('SIGINT');
    }

    // Kill Redis and MongoDB processes
    if (redisCmd?.kill) {
      redisCmd.kill('SIGINT');
    }
    if (mongodbCmd?.kill) {
      mongodbCmd.kill('SIGINT');
    }

    console.log('Development environment shutdown complete');
  };

  // Handle process exit signals
  const handleExit = (signal: string) => {
    console.log(`\nReceived ${signal}, shutting down...`);
    cleanup();
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  };

  process.on('SIGINT', () => handleExit('SIGINT'));
  process.on('SIGTERM', () => handleExit('SIGTERM'));

  try {
    // Wait for services to start, but don't block indefinitely
    await otherReadyPromise;
  } catch (error) {
    console.error('Error during startup:', error);
    cleanup();
    throw error;
  }

  return {
    redisCmd,
    mongodbCmd,
    serverCmd,
    cleanup, // Export cleanup function for manual cleanup if needed
  };
}

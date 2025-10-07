import {kLoggerTypes, Logger, LoggerType, NoopLogger} from 'softkave-js-utils';
import {ConsoleLogger} from './console.js';

export function getLogger(type: LoggerType = kLoggerTypes.noop): Logger {
  switch (type) {
    case kLoggerTypes.console:
      return new ConsoleLogger();
    case kLoggerTypes.noop:
      return new NoopLogger();
    default:
      throw new Error(`Invalid logger type: ${type}`);
  }
}

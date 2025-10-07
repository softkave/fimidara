import {Logger} from 'softkave-js-utils';
import {fimidxConsoleLogger} from 'softkave-node-utils/common';

export class ConsoleLogger implements Logger {
  log: (...args: unknown[]) => void = (...args) => {
    fimidxConsoleLogger.log(...args);
  };
  error: (...args: unknown[]) => void = (...args) => {
    fimidxConsoleLogger.error(...args);
  };
}

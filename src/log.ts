import { ConsoleLogger } from '@nestjs/common';
import winstonLogger from './logger.config';

export class Log extends ConsoleLogger {
  log(message: string) {
    winstonLogger.info(message);
  }

  error(message: string, trace?: string) {
    // Pass the error object with the stack trace
    const errorObject = new Error(message);
    errorObject.stack = trace;
    winstonLogger.error(message, { error: errorObject });
  }

  warn(message: string) {
    winstonLogger.warn(message);
  }

  debug(message: string) {
    winstonLogger.debug(message);
  }

  verbose(message: string) {
    winstonLogger.verbose(message);
  }
}

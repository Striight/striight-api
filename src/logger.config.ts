import { createLogger, format, transports, addColors } from 'winston';

const { combine, timestamp, printf, errors, colorize } = format;

// Define custom colors and log levels
const customColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue',
  verbose: 'cyan',
};

// Configure the winston log levels and colors
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
  verbose: 4,
};

const logColors = {
  error: customColors.error,
  warn: customColors.warn,
  info: customColors.info,
  debug: customColors.debug,
  verbose: customColors.verbose,
};

addColors(logColors);

const logger = createLogger({
  levels: logLevels,
  level: 'info',
  format: combine(
    colorize(), // Apply colors to log messages
    errors({ stack: true }), // Include stack traces
    timestamp({
      format: 'YYYY-MM-DD HH:MM:SS',
    }),
    printf(({ timestamp, level, message, stack }) => {
      const logMessage = stack ? stack : message;
      return `[${timestamp}] ${level}: ${logMessage}`;
    }),
  ),
  transports: [new transports.Console()],
});

export default logger;

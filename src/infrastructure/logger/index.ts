import { createLogger, format, transports } from 'winston';

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

export const logger = createLogger({
  levels: logLevels,
  transports: [
    new transports.File({
      filename: 'src/infrastructure/logger/server.log', // TODO: Update the transport to newrelic
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (info) => `[${info.level}]: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),
  ],
});

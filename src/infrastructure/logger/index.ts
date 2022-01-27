import winston from 'winston';

const newrelicFormatter = require('@newrelic/winston-enricher');

export const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'gw-microservice' },
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.label({ label: 'gw' }),
    newrelicFormatter()
  ),
});

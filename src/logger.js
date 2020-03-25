const winston = require('winston');

const options = {
  file: {
    level: 'info',
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    json: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
  },
};

const logger = winston.createLogger({
  exitOnError: false,
  handleRejections: true,
  transports: [
    Object.assign(
      new winston.transports.File({
        ...options.file,
        filename: 'logs/error.log',
        level: 'error',
      }),
      { handleRejections: true },
    ),
    new winston.transports.File({
      ...options.file,
      filename: 'logs/app.log',
    }),
  ],
});

/* istanbul ignore next */
logger.stream = {
  write: (message) => logger.info(message),
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  logger.add(Object.assign(new winston.transports.Console(options.console), {
    handleRejections: true,
  }));
}

module.exports = logger;

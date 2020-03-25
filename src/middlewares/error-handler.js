const logger = require('../logger');

module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500);
  res.json({
    message: req.app.get('env') === 'development'
      ? err.message
      : 'Unknown error happened',
  });
};

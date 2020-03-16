const apiRouter = require('./api.routes');
const systemRouter = require('./system.routes');

module.exports = {
  api: apiRouter,
  system: systemRouter,
};

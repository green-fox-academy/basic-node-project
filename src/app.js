const express = require('express');
const morgan = require('morgan');

const routes = require('./routes/index');
const logger = require('./logger');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use('/api', routes.api);
app.use('/system', routes.system);
app.use(morgan('combined', { stream: logger.stream }));
app.use(errorHandler);

module.exports = app;

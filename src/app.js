const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use('/api', routes.api);
app.use('/system', routes.system);

module.exports = app;

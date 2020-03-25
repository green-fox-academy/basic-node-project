require('dotenv').config();

const logger = require('./logger');
const app = require('./app');
const { dbConnection } = require('./db');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`App is listening on ${PORT}`);
});

dbConnection.once('open', () => {
  logger.info('Database connected');
});

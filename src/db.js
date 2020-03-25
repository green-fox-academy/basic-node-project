const mongoose = require('mongoose');

const logger = require('./logger');

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB,
  MONGO_USER,
  MONGO_PASSWORD,
} = process.env;

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}`, {
  dbName: MONGO_DB,
  user: MONGO_USER,
  pass: MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  logger.error(`Couldn't connect to database: ${err}`);
});

module.exports.dbConnection = mongoose.connection;

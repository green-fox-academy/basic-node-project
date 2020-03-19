require('dotenv').config();

const app = require('./app');
const { dbConnection } = require('./db');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`); // eslint-disable-line
});

dbConnection.once('open', () => {
  console.log('Database connected'); // eslint-disable-line
});

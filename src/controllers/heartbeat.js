const mongoose = require('mongoose');

const getSystemStatus = (req, res) => {
  res.json({
    db: mongoose.connection.readyState === 1,
  });
};

module.exports = { getSystemStatus };

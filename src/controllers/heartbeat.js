const mongoose = require('mongoose');

const getSystemStatus = async (req, res) => {
  res.json({
    db: mongoose.connection.readyState === 1,
  });
};

module.exports = { getSystemStatus };

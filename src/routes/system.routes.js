const express = require('express');

const router = express.Router();

const heartbeatController = require('../controllers/heartbeat');

router.get('/heartbeat', heartbeatController.getSystemStatus);

module.exports = router;

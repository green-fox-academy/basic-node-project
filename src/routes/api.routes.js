const express = require('express');
const cors = require('cors');
const helloWorldController = require('../controllers/hello-world');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloWorldController.getHelloWorld);

module.exports = router;

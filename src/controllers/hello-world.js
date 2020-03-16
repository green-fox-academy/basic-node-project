const helloWorldService = require('../services/hello-world');

const getHelloWorld = (req, res) => {
  helloWorldService.getHelloWorld()
    .then((data) => res.status(200).json(data));
};

module.exports = {
  getHelloWorld,
};

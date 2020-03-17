const { expect } = require('chai');
const service = require('./hello-world');

describe('HelloWorld service', () => {
  it('Should resolve with a hello world object', (done) => {
    const expected = {
      helloWorld: { message: 'Hello World!' },
    };

    service.getHelloWorld()
      .then((actual) => {
        expect(actual).to.deep.equal(expected);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('GET /system/heartbeat', () => {
  it('should respond with 200 - OK', (done) => {
    request(app)
      .get('/system/heartbeat')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, data) => {
        if (err) return done(err);
        expect(data.body.status).to.equal('ok');
        return done();
      });
  });
});

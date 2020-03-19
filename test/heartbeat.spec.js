const request = require('supertest');
const { expect } = require('chai');

const mockDb = require('./mock-db');
const app = require('../src/app');

describe('GET /system/heartbeat', () => {
  beforeEach(async () => mockDb.connect());

  afterEach(async () => mockDb.closeDatabase());

  it('should respond with 200 - OK', (done) => {
    request(app)
      .get('/system/heartbeat')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, data) => {
        if (err) return done(err);
        expect(data.body.db).to.equal(true);
        return done();
      });
  });

  it('should respond with 200 - NOT OK', (done) => {
    mockDb.closeDatabase().then(() => {
      request(app)
        .get('/system/heartbeat')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, data) => {
          if (err) return done(err);
          expect(data.body.db).to.equal(false);
          return done();
        });
    });
  });
});

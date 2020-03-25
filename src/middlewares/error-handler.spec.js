const sinon = require('sinon');
const { expect } = require('chai');

const errorHandler = require('./error-handler');
const logger = require('../logger');

describe('error-handler', () => {
  let loggerStub;

  beforeEach(() => {
    loggerStub = sinon.stub(logger, 'error');
  });

  afterEach(() => {
    loggerStub.restore();
  });


  it('Should log errors properly', () => {
    const mockError = { message: 'test-message' };
    const mockRequest = {
      originalUrl: 'test/endpoint',
      method: 'GET',
      ip: '0.0.0.0',
      app: { get: () => 'production' },
    };
    const mockResponse = {
      status() {},
      json() {},
    };
    const expectedLogMessage = '500 - test-message - test/endpoint - GET - 0.0.0.0';

    errorHandler(mockError, mockRequest, mockResponse);

    sinon.assert.calledOnceWithExactly(loggerStub, expectedLogMessage);
  });

  it('Should send response properly prod', () => {
    const mockError = {};
    const mockRequest = {
      app: { get: () => 'production' },
    };
    const mockResponse = {
      status: sinon.spy(),
      json: sinon.spy(),
    };

    errorHandler(mockError, mockRequest, mockResponse);

    expect(mockResponse.status.calledOnceWithExactly(500)).to.equals(true);
    expect(mockResponse.json.calledOnce).to.equals(true);
    expect(mockResponse.json.firstCall.args[0]).to.deep.equal({ message: 'Unknown error happened' });
  });

  it('Should send response properly dev', () => {
    const mockError = { message: 'test-error-message' };
    const mockRequest = {
      app: { get: () => 'development' },
    };
    const mockResponse = {
      status: sinon.spy(),
      json: sinon.spy(),
    };

    errorHandler(mockError, mockRequest, mockResponse);

    expect(mockResponse.status.calledOnceWithExactly(500)).to.equals(true);
    expect(mockResponse.json.calledOnce).to.equals(true);
    expect(mockResponse.json.firstCall.args[0]).to.deep.equal({ message: 'test-error-message' });
  });
});

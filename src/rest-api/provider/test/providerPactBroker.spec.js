const { Verifier } = require('@pact-foundation/pact');
const { server, provider } = require('../provider');
const path = require('path');

var opts = {
  providerBaseUrl: 'http://localhost:8081',
  provider: 'validDate provider',
  pactBrokerUrl: 'http://pact_broker.com:9292',
  pactBrokerUsername: '',
  pactBrokerPassword: '',
  publishVerificationResult: true,
  consumerVersion: '1.0',
  providerVersion: '1.0',
  logLevel: 'DEBUG',
  timeout: 120000,
  tags: ["prod", "test"]
};

describe('Pact Provider verification', () => {
  it('Should validate the date consumer', async () => {
    const output = await new Verifier().verifyProvider(opts);
    console.log(output);
  });
});

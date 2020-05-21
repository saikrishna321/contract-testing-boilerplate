const { Verifier } = require('@pact-foundation/pact');
const { server, provider } = require('../provider');
const path = require('path');

var opts = {
  providerBaseUrl: 'http://localhost:8081',
  provider: 'validDate provider',
  pactBrokerUrl: 'http://localhost:8282/',
  pactBrokerUsername: process.env.PACT_USERNAME,
  pactBrokerPassword: process.env.PACT_PASSWORD,
  publishVerificationResult: true,
  consumerVersion: '1.0',
  providerVersion: '1.0',
  logLevel: 'DEBUG',
  timeout: 120000,
};

describe('Pact Provider verification', () => {
  it('Should validate the date consumer', async () => {
    const output = await new Verifier().verifyProvider(opts);
    console.log(output);
  });
});

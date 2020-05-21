const { Verifier } = require('@pact-foundation/pact');
const { server, provider } = require('../provider');
const path = require('path');

var opts = {
  providerBaseUrl: 'http://localhost:8081',
  provider: 'validDate provider',
  pactBrokerUrl: 'https://test.pact.dius.com.au',
  pactBrokerUsername: 'dXfltyFMgNOFZAxr8io9wJ37iUpY42M',
  pactBrokerPassword: 'O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1',
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

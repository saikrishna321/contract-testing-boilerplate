let pact = require('@pact-foundation/pact-node');
const path = require('path');

let opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../../../pacts/')],
  pactBroker: 'https://test.pact.dius.com.au',
  pactBrokerUsername: 'dXfltyFMgNOFZAxr8io9wJ37iUpY42M',
  pactBrokerPassword: 'O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1',
  consumerVersion: '1.0',
};

pact
  .publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing complete!');
    console.log('');
    console.log('Head over to http://localhost:8282/ and login with');
    console.log('=> Username:', process.env.PACT_USERNAME);
    console.log('=> Password:', process.env.PACT_PASSWORD);
    console.log('to see your published contracts.');
  })
  .catch((e) => {
    console.log('Pact contract publishing failed: ', e);
  });

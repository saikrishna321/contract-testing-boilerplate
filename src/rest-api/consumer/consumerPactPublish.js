let pact = require('@pact-foundation/pact-node');
const path = require('path');

let opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../../../pacts/')],
  pactBroker: 'http://localhost:8282/',
  pactBrokerUsername: process.env.PACT_USERNAME,
  pactBrokerPassword: process.env.PACT_PASSWORD,
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

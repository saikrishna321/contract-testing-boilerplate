const { Verifier } = require('@pact-foundation/pact');
const {server, provider } = require('../provider')
const path = require('path')

var opts = {
    providerBaseUrl: "http://localhost:8081",
    pactUrls: [
      path.resolve(__dirname, "../../../../pacts/dateconsumer-validdate_provider.json")
    ]
  };
  
describe('Pact Provider verification', () =>{
  before(async => {
    server.listen(8081, () => {
      console.log('Provider Service listening on http://localhost:8081')
    })
  })
  it('Should validate the date consumer',async () =>{
    await new Verifier().verifyProvider(opts);
  })
})
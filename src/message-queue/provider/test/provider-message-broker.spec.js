const { MessageProviderPact, Message } = require("@pact-foundation/pact");
const { validDateProvider, invalidProvider } = require("../date-provider");
const path = require("path");

describe("Message provider tests", () => {
  // 2 Pact setup
  const p = new MessageProviderPact({
    messageProviders: {
      "a request for a date": () => validDateProvider()
    },
    provider: "dateHandler provider",
    providerVersion: "1.0",
    logLevel: "trace",
    pactBrokerUrl: "https://@@@@.pact.dius.com.au/",
    pactBrokerUsername: process.env.PACT_USERNAME,
    pactBrokerPassword: process.env.PACT_PASSWORD,
    publishVerificationResult: true
  });

  // 3 Verify the interactions
  describe("Date Client", () => {
    it("Should return a valid date format message integration client", () => {
      return p.verify();
    });
  });
});

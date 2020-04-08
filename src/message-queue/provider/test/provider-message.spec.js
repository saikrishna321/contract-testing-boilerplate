const { MessageProviderPact, Message } = require("@pact-foundation/pact");
const { validDateProvider, invalidProvider } = require("../date-provider");
const path = require("path");

describe("Message provider tests", () => {
  // 2 Pact setup
  const p = new MessageProviderPact({
    messageProviders: {
      "a request for valid date format": () => validDateProvider()
    },
    provider: "dateHandler provider",
    providerVersion: "1.0.0",
    logLevel: "DEBUG",
    pactUrls: [
      path.resolve(
        __dirname,
        "../../../../pacts/datehandler_consumer-datehandler_provider.json"
      )
    ]
  });

  // 3 Verify the interactions
  describe("Date Client", () => {
    it("Should return a valid date format message integration client", () => {
      return p.verify();
    });
  });
});

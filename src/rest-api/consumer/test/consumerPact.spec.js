const { Pact } = require("@pact-foundation/pact");
const { Consumer } = require("../consumer");
const path = require("path");
const chai = require("chai");
const interactions = require("../pact/interactions");

const expect = chai.expect;
const MOCK_SERVER_PORT = 9123;

describe("Pact Consumer", () => {
  const provider = new Pact({
    consumer: "DateConsumer",
    provider: "validDate provider",
    port: MOCK_SERVER_PORT,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    logLevel: "ERROR",
    pactfile_write_mode: "update",
    spec: 1
  });

  describe("Consumer Driven Contract", () => {
    before(() => {
      return provider.setup();
    });

    after(() => {
      return provider.finalize();
    });
    describe("When a call to date provider is made", () => {
      afterEach(() => {
        provider.removeInteractions();
      });

      describe("and valid date is provided", () => {
        it("can process the JSON payload from the date provider", async () => {
          provider.addInteraction(interactions.validDate);
          const response = await Consumer.fetchDate("2018-11-29");
          expect(response.body).to.have.property("count", 5);
          expect(response.body).to.have.property("test");
          expect(response.body).to.have.property("validDate");
        });
      });
      describe("and invalid date is provided", () => {
        it("Should thrown error when date param is null", async () => {
          provider.addInteraction(interactions.invalidDate);
          const response = await Consumer.fetchDate("");
          expect(response.body).to.have.property(
            "error",
            "validDate is required"
          );
        });
      });
    });
  });
});

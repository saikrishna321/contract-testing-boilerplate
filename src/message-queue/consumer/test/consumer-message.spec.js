const { dateMessageHandler } = require("../date-handler");
const {
  MessageConsumerPact,
  synchronousBodyHandler
} = require("@pact-foundation/pact");
const { somethingLike: like, term } = require("@pact-foundation/pact").Matchers;
const path = require("path");

const dateRegex =
  "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\+|\\-)\\d{2}:\\d{2}";
describe("date handler consumer tests", () => {
  const messagePact = new MessageConsumerPact({
    consumer: "dateHandler consumer",
    dir: path.resolve(process.cwd(), "pacts"),
    pactfileWriteMode: "update",
    provider: "dateHandler provider",
    logLevel: "INFO"
  });

  describe("receive date event", () => {
    it("should accept a valid date", () => {
      return messagePact
        .given("some state")
        .expectsToReceive("a request for valid date format")
        .withContent({
          test: "NO",
          validDate: term({
            generate: "2018-11-29T15:45:45+00:00",
            matcher: dateRegex
          }),
          count: like(5)
        })
        .withMetadata({
          "content-type": "application/json"
        })
        .verify(synchronousBodyHandler(dateMessageHandler));
    });
  });
});

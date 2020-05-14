# Pact Boilerplate for Js Consumer and Provider

## What is PACT?

Pact is a contract testing tool. Contract testing is a way to ensure that services (such as an API provider and a client) can communicate with each other. Without contract testing, the only way to know that services can communicate is by using expensive and brittle integration tests.

### Setup

- Install yarn https://yarnpkg.com/lang/en/docs/install/#mac-stable

  ```
       yarn install
  ```

- set PACT_USERNAME and PACT_PASSWORD as environment variables when publishing/verifying the contract to/from pact-broker

### Run Consumer contract

```
    yarn consumer-service-test
```

### Publish Consumer Contract to pact-broker

```
   yarn publish-consumer
```

Above command generates a consumer pact file which can be shared with the provider for verification.

Example:

```
{
  "consumer": {
    "name": "DateConsumer"
  },
  "provider": {
    "name": "validDate provider"
  },
  "interactions": [
    {
      "description": "a request for JSON data",
      "providerState": "valid date",
      "request": {
        "method": "GET",
        "path": "/provider/validDate",
        "query": "date=2018-11-29"
      },
      "response": {
        "status": 200,
        "headers": {
          "Content-Type": "application/json; charset=utf-8"
        },
        "body": {
          "test": "NO",
          "validDate": {
            "json_class": "Pact::Term",
            "data": {
              "generate": "2018-11-29T15:45:45+00:00",
              "matcher": {
                "json_class": "Regexp",
                "o": 0,
                "s": "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\+|\\-)\\d{2}:\\d{2}"
              }
            }
          },
          "count": {
            "json_class": "Pact::SomethingLike",
            "contents": 5
          }
        }
      }
    },
    {
      "description": "a request for JSON data",
      "providerState": "null date",
      "request": {
        "method": "GET",
        "path": "/provider/validDate",
        "query": "date="
      },
      "response": {
        "status": 400,
        "headers": {
          "Content-Type": "application/json; charset=utf-8"
        },
        "body": {
          "error": "validDate is required"
        }
      }
    }
  ],
  "metadata": {
    "pactSpecification": {
      "version": "1.0.0"
    }
  }
}

```

![Screenshot](consumer.png)

### Run Provider Verification against pact-broker

```
    yarn provider-pact-broker
```

Above command will verify consumer contract.

### Run Provider Verification against local Pact

```
  yarn provider-pact-local
```

![Screenshot](provider.png)

#### Windows + Linux

Instructions can be found - https://github.com/pact-foundation/pact-ruby-standalone/releases

### [GraphQL Consumer Example](https://github.com/pact-foundation/pact-js/blob/feat/message-pact/examples/graphql/consumer.spec.ts)

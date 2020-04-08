const chai = require('chai');
const nock = require('nock');
const expect = chai.expect;
const API_PORT = 8081;
const { Consumer } = require('../consumer.js');

const API_HOST = `http://localhost:${API_PORT}`;

describe('Consumer Test', () => {
  it('can get the date from provider', async () => {
    nock(API_HOST)
      .get('/provider/validDate?date=2020-11-11')
      .reply(200, {
        date: '2020, November 11, 2020',
        format: 'valid',
        expiry: 'lifetime',
        count: 5
      });

    const response = await Consumer.parseDate('2020-11-11');
    expect(response).to.deep.equal({
      date: '2020, November 11, 2020',
      format: 'valid',
      expiry: 'lifetime',
      count: 2.5
    });
  });
});

const request = require('superagent');
const API_HOST = 'http://localhost';
const API_PORT = 9123;
const moment = require('moment');

const API_ENDPOINT = `${API_HOST}:${API_PORT}`;

class Consumer {
  async fetchDate(givenDate) {
    try {
      return await request.get(
        `${API_ENDPOINT}/provider/validDate?date=${givenDate}`
      );
    } catch (err) {
      return err.response;
    }
  }

  async parseDate(givenDate) {
    const response = await this.fetchDate(givenDate);
    if (response.body.error) {
      return { error: 'validDate is required' };
    }
    if (moment(response.body.validDate).isValid()) {
      return {
        date: moment(givenDate, moment.ISO_8601).format('YYYY, LL'),
        format: 'valid',
        expiry: 'lifetime',
        count: response.body.count * 0.5,
      };
    }
  }
}

const consumer = new Consumer();
module.exports = { Consumer: consumer };

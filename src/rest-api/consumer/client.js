const { Consumer } = require('./consumer');

Consumer.fetchDate(new Date().toISOString()).then(
  response => {
    console.log(response);
  },
  error => {
    console.error(error);
  }
);

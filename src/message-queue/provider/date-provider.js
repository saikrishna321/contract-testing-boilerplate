const validDateProvider = function() {
  return { test: "NO", validDate: "2018-11-29T15:45:45+00:00", count: 5 };
};

const invalidProvider = function() {
  return { TEST: "No", validDate: "2018-11-29T15:45:45+00:00", count: 5 };
};

module.exports = {
  validDateProvider,
  invalidProvider
};

const dateMessageHandler = function(date) {
  console.log(date);
  if (!date.test && !date.validDate && !date.count) {
    throw new Error("missing fields");
  }
  return;
};

module.exports = {
  dateMessageHandler
};

var express = require('express');
var app = express();
const moment = require('moment');

app.get('/provider/validDate', function(req, res) {
  let validDate = req.query.date;
  if (!validDate) {
    res.status(404);
    res.json({ error: 'validDate is required' });
  } else if (!moment(validDate, moment.ISO_8601).isValid()) {
    res.status(404);
    res.json({ error: `'${validDate}' is not a date` });
  } else {
    if (moment(validDate).isValid) {
      res.json({
        test: 'NO',
        validDate: moment(new Date(), moment.ISO_8601).format(
          'YYYY-MM-DDTHH:mm:ssZ'
        ),
        count: 10,
      });
    } else {
      res.status(404);
      res.send();
    }
  }
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = {
  server,
};

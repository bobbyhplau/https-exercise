var https = require("https");

var httpsOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

https.get(httpsOptions, function(response) {

  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log('Chuck Received:\n');
    console.log(data, "\n");
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });
});
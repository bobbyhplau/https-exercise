var https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantrix.github.io',
    path: '/http-examples/step2.html'
  };

  var buffer = '';


  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

      buffer += data;
    });

    response.on('end', function() {

      console.log(buffer);
    });
  });

}

getAndPrintHTML();
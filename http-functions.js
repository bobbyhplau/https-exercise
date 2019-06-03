var https = require("https");

module.exports = function getAndPrintHTML(options, callback) {

  var buffer = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

      buffer += data;
    });

    response.on('end', function() {
      printHTML(buffer);
    });
  });

}

function printHTML(html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantrix.github.io',
  path: '/http-examples/step4.html'
};
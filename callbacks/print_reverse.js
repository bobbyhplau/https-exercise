var getHTML = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var reverse = function(data) {

  reverseString = "";

  for (var i = data.length - 1; i >= 0; i--) {

    reverseString += data.charAt(i);
  }

  return reverseString;
}

function printReverse (html) {

  console.log(reverse(html));
}

getHTML(requestOptions, printReverse);

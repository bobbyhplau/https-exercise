var getHTML = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var leet = function (data) {

  data.replace("i", "1");
  data.replace("I", "1");
  data.replace("l", "1");
  data.replace("z", "2");
  data.replace("Z", "2");
  data.replace("e", "3");
  data.replace("E", "3");
  data.replace("a", "4");
  data.replace("A", "4");
  data.replace("s", "5");
  data.replace("S", "5");
  data.replace("t", "7");
  data.replace("T", "7");
  data.replace("b", "8");
  data.replace("B", "8");
  data.replace("o", "0");
  data.replace("O", "0");

  return data;
}

function printLowerCase (html) {

  console.log(leet(html));
}

getHTML(requestOptions, printLowerCase);

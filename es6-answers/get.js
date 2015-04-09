var http = require('http');
var data = '';

function get(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(res) {
      res.on('data', function(chunk) {
        data += chunk;
      });

      res.on('end', function() {
        resolve(data);
      });
    }).on('error', function(e) {
      reject(e.message);
    });
  })
}

module.exports = get;

// reject(e)
// you always want the error object, for the stack trace and whatnot
// also, `var data` needs to go inside the "get" function
// otherwise calling it twice will have the first call's data in it too.

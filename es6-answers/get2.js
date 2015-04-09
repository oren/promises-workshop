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

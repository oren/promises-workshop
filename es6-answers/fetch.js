var http = require('http');
var data = '';

function get(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(res) {
      res.on('data', function(chunk) {
        data += chunk;
      });

      res.on('end', function() {
        resolve(JSON.parse(data));
      });
    }).on('error', function(e) {
      reject(e.message);
    });
  })
}

get('http://localhost:1337')
  .then(console.log)
  .catch(console.error)

// more elegant option
// npm install bl

// var bl = require('bl'); 
// 
// function get2(url) {
//   return new Promise(function(resolve, reject) {
//     http.get(url, function(res) {
//       res.pipe(bl(function (err, data) {
//         resolve(JSON.parse(data));
//       }))
//     })
//   })
// }
// 
// get2('http://localhost:1337')
//   .then(console.log)
//   .catch(console.error)

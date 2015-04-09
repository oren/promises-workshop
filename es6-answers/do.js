var get = require('./get.js');

var getUserId = get('http://localhost:7000');

function getUser(id) {
  return get('http://localhost:7001/' + id);
}

getUserId.then(getUser).then(JSON.parse).then(console.log).catch(errorHandle);

function errorHandle(err) {
  console.error('error: ', err);
}

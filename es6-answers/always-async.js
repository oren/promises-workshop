var promise = new Promise(function (resolve, reject) {
  resolve('SECOND');
  console.log('FIRST');
})

promise.then(console.log);

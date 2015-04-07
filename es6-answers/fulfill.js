var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('RESOLVED!')
  }, 300)
})

promise.then(console.log)

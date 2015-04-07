var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject({message: 'REJECTED!'})
  }, 300)
})

promise.then(undefined).catch(errorHandler);

// this is another option:
// promise.then(undefined, errorHandler)

function errorHandler(obj) {
  console.log(obj.message);
}

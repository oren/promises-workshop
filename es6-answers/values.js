var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('MANHATTAN');
  }, 300)
})

promise.then(attachTitle).then(console.log);

function attachTitle(value) {
  return 'DR. ' + value;
}

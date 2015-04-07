function throwMyGod () {
  throw new Error('OH NOES');
}

function iterate (num) {
  console.log(num);
  return ++ num;
}

var promise = new Promise(function (resolve, reject) {
  resolve(iterate(1));
})

promise.then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(throwMyGod)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(undefined, console.log)

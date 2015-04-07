function parsePromised(obj) {
  return new Promise(function (resolve, reject) {
    // resolve(JSON.parse(obj));  // another option

    var res;

    try {
      res = JSON.parse(obj);        
      resolve('success');
    } catch (e) {
      reject(e);
    }
  })
}

parsePromised(process.argv[2]).then(undefined).catch(console.log)

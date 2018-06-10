function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value);
  }
  setTimeout(loadComplete, 100);
}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    function loadComplete() {
      resolve(value);
    }
    setTimeout(loadComplete, 100);
  });
}

function addSomePromises (somePromise) {
   return new Promise((resolve, reject) => {
    if (somePromise) {
      resolve(somePromise+somePromise);
    } else {
      reject (somePromise + somePromise+somePromise);
    }
  });
}

//const outputPromise = addSomePromises(somePromise)

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}

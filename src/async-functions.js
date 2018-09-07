function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value);
  }
  setTimeout(loadComplete, 100);
};

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    function loadComplete() {
      resolve(value);
    }
    setTimeout(loadComplete, 100);
  });
};

function addSomePromises (somePromise) {
  return somePromise 
    .then((result) => result.repeat(2))
    .catch((error) => error.repeat(3)) 
};

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}

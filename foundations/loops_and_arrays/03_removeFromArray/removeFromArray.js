const removeFromArray = function(array, ...args) {
  const result = array.filter(function(item) {
    return !args.includes(item);
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;

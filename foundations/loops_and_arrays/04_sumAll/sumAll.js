const sumAll = function(a, b) {
  if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(b) || b <= 0) {
    return "ERROR";
  }

  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

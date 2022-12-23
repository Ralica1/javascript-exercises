const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  return word.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;

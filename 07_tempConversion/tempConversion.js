const convertToCelsius = function(fahrenheit) {
  let fahrenheitTemp = fahrenheit;
  let celsius = (fahrenheitTemp - 32) * 5 / 9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let celsiusTemp = celsius;
  let fahrenheit = celsiusTemp * 9 / 5 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

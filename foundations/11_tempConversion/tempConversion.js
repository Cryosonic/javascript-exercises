const convertToCelsius = function(fahren) {
  let converted = 0;
  converted = (Number(fahren) - 32) * (5/9);
  if (converted - Math.floor(converted) == 0) {
    return converted;
  } else {
    return Number(converted.toFixed(1));
  }
};

const convertToFahrenheit = function(cels) {
  let converted = 0;
  converted = (Number(cels) * (9/5)) + 32;
  if (converted - Math.floor(converted) == 0) {
    return converted;
  } else {
    return Number(converted.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

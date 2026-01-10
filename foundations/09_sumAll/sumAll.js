const sumAll = function(firstNum, secondNum) {
  let result = 0;

  const sumRange = (small, large) => {
    for (let i = small; i <= large; i++) {
      result += i;
    }
  }

  const checkNegative = (num) => {return num <= 0 ? false : true;}

  const checkFloat = (num) => {
    if (checkNegative(num)) {
      if (num - Math.floor(num) != 0) {
        return false;
      } else {
        return true;
      }
    }
    
  }

  const checkNumber = (num) => {
    if (checkFloat(num)) {
      return typeof num != "number" ? false : true;
    }
  }

  if (checkNumber(firstNum) && checkNumber(secondNum)) {
    if (firstNum < secondNum) {
      sumRange(firstNum, secondNum);
    } else {
      sumRange(secondNum, firstNum);
    }
  } else {
    result = "ERROR";
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;

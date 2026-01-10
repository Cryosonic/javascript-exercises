const removeFromArray = function(arr, ...targets) {
  const resultArray = arr;
  const toRemove = targets;

  toRemove.forEach((el)=>{
    if(resultArray.includes(el)) {
      while(resultArray.includes(el)) {
        resultArray.splice(resultArray.indexOf(el),1)
      }
    }
  })

  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;

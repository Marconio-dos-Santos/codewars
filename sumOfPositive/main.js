/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
/*
function positiveSum(arr){
  //see if number is positive or not
  let newArr = arr.filter(num => num > 0)
  //add all positive numbers
  return newArr.reduce((acc,c) => acc + c,0)
  //return
}

console.log(positiveSum([10,-1,10,-1]),18)
*/

function positiveSum(arr){
    return arr.filter(num => num > 0).reduce((acc,c) => acc + c,0)
  }
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

  //P: Just take numbers? Or Strings ? Special characters
  //R: Sum of square numbers
  //E: 
  //P:
  //make a function that takes in an array 
function squareSum(arr){
    return arr.map(num=>num**2).reduce((acc,c) => acc + c,0)
  }

  //map thru array and square each lil element

  //return
  console.log(squareSum([1,2,5]),30)
  console.log(squareSum([2,5,8]),93)
  console.log(squareSum([3,3,3]),27)
  

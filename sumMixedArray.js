// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x){
    let res = []
    x.forEach(x => {
       res.push(Number(x))
    })
       return res.reduce((acc,cur) => acc + cur,0)
  }
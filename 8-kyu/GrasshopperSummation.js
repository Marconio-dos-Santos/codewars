//PREP
//P take a number and add all values from 1 to the number, always numbers and integers greater than 0.
//R console.log total numbers between 1 and the chosen number
//E:
var summation = function (num) {
let solution = 0
for(let i = 0 ; i <= num; i++){
    solution += i
}
return solution
}

  //summation(8) // 1+2+3+4+5 = 15
  //summation(3) // 1+2 = 3

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//PREP
//P check se a string se a quantidade de 'x' for igual a de 'o' return true se não return false

//R return true ou false 

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false 

function XO(str) {
    let x = 0
    let o = 0
    let xo = str.toLowerCase().split('').filter((i) => i.includes('o') || i.includes('x') )
      for(let i = 0 ; i < xo.length ; i++){
        if(xo[i] == 'x'){
          x++
        }if(xo[i] == 'o'){
          o++
        }
      }
    return x == o
  }

  // ou
  function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
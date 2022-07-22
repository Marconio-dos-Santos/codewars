// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// obs: no metodo reduce para multiplicação em vez de valor inicial 0 deve se usar 1
function grow(x){
    return x.reduce((acc,cur) => acc*cur,1)
  }

// Notes

  //make it negative 1 to -1, -5 to -5, 0 to 0, 0,12 to -0,12
  // P: 
  // number, negative or not, can be float
  // check if is negative number 
  // if not make it negative negative

  // R:
  // console/return
  // E:
  function makeNegative(num) {
         let result = num > 0 ? -num : num
         console.log(result)
         return result
}

makeNegative(1)     // return -1
makeNegative(-5)    // return -5
makeNegative(0)     // return 0
makeNegative(0.12)  // return -0,12
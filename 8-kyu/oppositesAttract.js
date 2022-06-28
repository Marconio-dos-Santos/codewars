
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
//PREP
//P Take 2 numbers for each flower check if it's even or odd
//return true or false

//E: 
    //lovefunc(1,4), true
    //lovefunc(2,2), false
    //lovefunc(0,1), true
function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 == 1 ||
       flower1 % 2 == 1 && flower2 % 2 == 0){
        return true
    }
    return false
  }
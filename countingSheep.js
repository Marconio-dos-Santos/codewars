// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//PREP 

// P contar quantas ovelhas exitem no array/lista onde true significa presente, checar por valores errados como null/undefined

// R retorne a quantidade de ovelhas do array/lista

//E :
// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    

    function countSheeps(arrayOfSheep) {
        let result = 0
        for(let i = 0 ; i < arrayOfSheep.length; i++){
            if(arrayOfSheep[i] == true){
                result += 1
            }
        }
        return result
      }
    
      console.log(countSheeps(array1))
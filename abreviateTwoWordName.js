//PREP

//P Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//R: The output should be two capital letters with a dot separating them.

//E: It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
function abbrevName(name){
    let initialName = name.split(' ').filter(initialName[0].charAt(0) && initialName[1].charAt(0)).toUpperCase()
    initialName.join('.')
    console.log(initialName)
}
abbrevName('marconio santos')

// ou 

// function abbrevName(name){
//     let initialName = name.split(' ')
//     let initialLetter = (initialName[0][0] +'.'+ initialName[0][1]).toUpperCase()
//     console.log(initialLetter)
// }
// abbrevName('marconio santos')
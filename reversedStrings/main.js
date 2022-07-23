// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let newString = ''
    for(var i = str.length -1; i >= 0; i-- ){
      newString += str[i]
      console.log(i)
    }
    console.log(newString)
    return newString
  }
  solution('Wello world')
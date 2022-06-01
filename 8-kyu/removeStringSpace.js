//PREP

//P Remove Space from string

//R Return the string without spacing

//E 
function noSpace(x){
    let result = ''
    for(let index = 0; index < x.length; index++){
      if(x[index] !== ' '){
        result += x[index]
      }
    }
      return result
  }


  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))// '8j8mBliB8gimjB8B8jlB'
  console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'),'88Bifk8hB8BB8BBBB888chl8BhBfd')
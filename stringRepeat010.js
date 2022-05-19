// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


//PREP

//P dois parametros 
//  numeros, inteiros, positivo
//  palavra com letras maiusculas e minusculas, simbolos, e pode ter espaço
//R console.log ou return
//E:
function repeatStr(n, s){
    let newWord = []
    for(let i = 0 ; i < n; i++){
        newWord += s + ' '
    }
    return newWord
}

//repeatStr(6, 'I')     // 'IIIIII'
//repeatStr(4, 'Hello') // 'HelloHelloHelloHello'
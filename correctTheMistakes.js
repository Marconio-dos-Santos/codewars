// strings ou 5 1 0, uperCase and LowerCase 


// retorne uma nova string subistituindo os numeros pelos caracteres correto

function correct(string){
    return string.replace(/1/g, 'I').replace(/5/g, 'S').replace(/0/g, 'O')
}
// g after the number /5/g is global flag so the regex doesn't stop on the first match

console.log(correct("L0ND0N"),"LONDON") 
console.log(correct("DUBL1N"),"DUBLIN")
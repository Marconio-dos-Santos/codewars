//PREP
//P criar uma função que faça 4 operações matematicas, a função deve ter 3 argumentos. 
//com a operation(string/char), value1(number),  value2(number) 

//R retornar o resultado apos aplicar a operação escolhida

//E: 
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
    //objeto com propriedades e funções como valor
  let mathIt = {
    '+' : ()=> value1+value2,
    '-' : ()=> value1-value2,
    '*' : ()=> value1*value2,
    '/' : ()=> value1/value2,
  }
  //usar o parametro como key-value pair para retornar a propriedade com a operação matematica como valor
  return mathIt[operation](value1,value2)
}
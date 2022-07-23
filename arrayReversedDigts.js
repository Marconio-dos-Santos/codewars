//PREP

//P Given a random non-negative number, 
//R Return the digits of this number whithin an array in reverse order.

//E:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//Sintaxe
//Array.from(arrayLike[, mapFn[, thisArg]])

//'ArrayLike' Um array-like ou um objeto iterável para converter em array.
// String(n) same as String(n).split('') dando a capacidade de ter seus elementos individuais acessados por índices numérios (n[0]), e vários outros métodos pertencentes ao tipo por exemplo .map().
//mapFn Função map() que será chamada para cada elemento do array.".map(Number)"
// Number para retornar um numero de cada elemento do array


function digitize(n){
    result =  Array.from(String(n), Number).reverse()
    return result
}
// ou dessa maneira 
function digitize(n){
    //transfoma em string
    n = String(n)  
    // cria um array vazio
    let numReverso = []
    // cria um loop para acessar cada elemento pela propriedade length do paramentro n pelo seu index
    for(let i = 0; i<n.length;i++){
        //adiciona um numero ao array de strings
      numReverso.push(n[i])
    }
    // retorna um novo array de numeros com o metodo .map() e invertendo a ordem com .reverse()
   return numReverso.map(Number).reverse()
   }



   //digitize(123456)
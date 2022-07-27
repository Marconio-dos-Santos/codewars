// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because square 9 is 81 and square 1 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    // num = 3212 
    return Number(num
      //converte para string com metodo num.toString()agora o numero e do tipo string  num ='3212'
      .toString()
      //.split('') para separar os numeros num = '3','2','1','2'
      .split('')
      //.map(i => i*i)retornar o valor ao quadrado de cada elemento do array ['9','4','1','4']
      .map(i => i*i)
      //.join('')juntar todos os numeros ['9414'] 
      .join('')
    )
      //retorne o resultado como number de duas maneiras colocando todo os metodos dentro de
      //Number(num.toString().split('').map(i => i*i).join(''))
      // ou concatenando um sinal de + com num.toString()
      // assim +num.toString().split('').map(i => i*i).join('')
  
  }
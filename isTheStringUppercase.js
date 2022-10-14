//P sempre strings, string sem letras == true, caracteres especiais contam como letra maiuscula

//R true ou false 

//Exemplos
// isUperCase('c' =>  false, 'c is not upper case');
// isUperCase('HELLO I AM DONALD' => true, 'HELLO I AM DONALD' is upper case');


String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }
  
//   Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//?----------------------------------------------------------------------------------------------------------------------------------------------------
//+ ---charAt---

//* What it does: takes in an index and a string and returns the specific character at that location.

//* How it works: Sees if the specified index passed into the method matches any index available whith the string, then returns the character at that index, if available.

//* Time Complexity: O(1) ?

//* Examples: 
// let text1 = "Sample Text"
// console.log(1, text1.charAt(0))
// console.log(2, text1.charAt(text1.length-1))
// console.log(3, text1.charAt("0"))
// console.log(4, text1.charAt("test"))
// let test1 = ''
// console.log(5, test1.charAt(''))

//?----------------------------------------------------------------------------------------------------------------------------------------------------
//+ ---charCodeAt---

//* What it does:takes in an index value and a string and returns an integer for the UTF-16 value located at that index.

//* How it works:Sees if the specified index passed into the method matches any index available whith the string, then returns the UTF-16 integer value at that index, if available. if the integer value is larger than 655536, then charCodeAt(i+1) should be used to get the other half of the value pair.


//* Examples:
// let text2 = "Sample Text!"
// console.log(1, text2.charCodeAt(0))
// console.log(2, text2.charCodeAt(text2.length-1))
// console.log(3, text2.charCodeAt(1))
// console.log(4, text2.charCodeAt(15))

//?----------------------------------------------------------------------------------------------------------------------------------------------------
//+ ---concat---

//* What it does: jois strings together an outputs a single string.

//* How it works:takes in a calling string and concatenetes qll strings passed in as arguments to the methodos in sequence.


//* Examples:
let text3 = "Seample Text"
console.log(1, text3.concat('!'))
console.log(2, text3.concat('!','This is a second argument!'))
console.log(3, text3.concat('!', 9000))
console.log(4, text3.concat(true))
console.log(4, text3.concat(null))
console.log(4, text3.concat([1,2,3]))
console.log(5, text3.concat({thing: "other_thing"}))
console.log(5, text3.concat(''))

//?----------------------------------------------------------------------------------------------------------------------------------------------------

//* What it does:

//* How it works:


//* Examples:.

//?----------------------------------------------------------------------------------------------------------------------------------------------------

//* What it does:

//* How it works:


//* Examples:

//?----------------------------------------------------------------------------------------------------------------------------------------------------

//* What it does:

//* How it works:


//* Examples:

//?----------------------------------------------------------------------------------------------------------------------------------------------------
//?----------------------------------------------------------------------------------------------------------------------------------------------------

//* What it does:

//* How it works:


//* Examples:

//?----------------------------------------------------------------------------------------------------------------------------------------------------

//* What it does:

//* How it works:


//* Examples:

//?----------------------------------------------------------------------------------------------------------------------------------------------------

//* What it does:

//* How it works:


//* Examples:

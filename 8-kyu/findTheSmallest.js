//P:
// Given an array of integers your solution should find the smallest integer.
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// Can be negative, whole number
//R: Return the smallest

//E:
//   Given [34, 15, 88, 2] your solution will return 2
//   Given [34, -345, -1, 100] your solution will return -345

// class TheSmallestIntegerFinder{
//     findTheSmallestInt(args){
//         let smallest = args[0]
//         for(let i = 0; i < args.length ; i++){
//             if(args[i] < smallest){
//                 smallest = args[i]
//             }
//         }
//         return smallest
//     }
// }

// let obj = new TheSmallestIntegerFinder()

// console.log(obj.findTheSmallestInt([34, -345, -1, 100])) // will return -345

// Or using Math.min()

class TheSmallestIntegerFinder{
    findTheSmallestInt(args){
        return Math.min(...args)
    }
}
let obj = new TheSmallestIntegerFinder()
console.log(obj.findTheSmallestInt([34, -345, -1, 100])) // will return -345
// Get your shorts on - this is on array workout!
//## Array Cardio Day1 

// Some data we can work whith

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Nick', 'Becher, Henry', 'Beethoven, Ludwig', 'Begin, Mnachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milto', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendel', 'Bethea, Erin', 'Bevan, Aneurin', 'Bavel, Ken', 'Biden, Joseph', 'Bierse, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototipe.filter()
//                                                  1. Filter the list of inventors for those who were in the 1500's
/*
const inventor1500 = inventors.filter(function (inventor) {
    if(inventor.year >= 1500 && inventor.year < 1600){
        return true; // keep it!
    }
});

console.table(inventor1500);
*/
//-------------------------- Arrow Function---------------------------------------------
const inventor1500 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600 ))
    
console.table(inventor1500);

//Array.protoype.map()
//                                               2. Give us un array of the inventory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.log(fullNames)

//Array.protoype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const birthdate = inventors.sort((a, b) => a.year - b.year)

console.table(birthdate)

//Array.prototype.reduce()
// 4. Now many years did all the inventors live

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);

console.log(`total inventor's years: ${totalYears}`)

// Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year
    const nextGuy = b.passed - b.year
    return lastGuy > nextGuy ? -1 : 1
})
console.table(oldest)

// 6. Create a list of Boulevards in Paris that contain ' de anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*
const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'))
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'))
*/

// 7. Sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1;
})
console.table(alpha)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0
    }
    obj[item]++
    return obj
}, {})

console.log(transportation)
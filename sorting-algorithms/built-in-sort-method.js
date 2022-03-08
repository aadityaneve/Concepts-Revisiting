let stringArr = [
    'Hii',
    'Bye',
    'Cricket',
    'Basketball',
    'Football',
    'Badminton',
    'Tennis',
];

let numberArr = [1, 9, 7, 6, 4, 0, 9, 8, 2];

// Will Sort String array in alphabetical order
let newStringArr = stringArr.sort();
console.log('Alphabetical Order:', newStringArr);

// Will Sort String array by length
function compareByLength(string1, string2) {
    return string1.length - string2.length;
}
newStringArr = stringArr.sort(compareByLength);
console.log('Sort by length:', newStringArr);

// Will Sort Number array in ascending order
// if num1 - num2 returns negative value, then num1 comes first then num2
// if num1 - num2 returns positive value, then num2 comes first then num1
function numberCompare(num1, num2) {
    return num1 - num2;
}
let newNumberArr = numberArr.sort(numberCompare);
console.log('Sort by number:', newNumberArr);

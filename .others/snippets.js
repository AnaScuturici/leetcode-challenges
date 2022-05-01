// JS snippets (https://javascript.plainenglish.io/18-useful-javascript-snippets-for-common-tasks-you-can-use-from-today-96fa03ce3df6)

// max item of an array
const maxItemOfArray = (arr) => [...arr].sort((a, b) => b - a).slice(0, 1)[0];
let maxItem = maxItemOfArray([3, 5, 12, 5]);

// check if all items in an array are equal
const areAllEqual = array => array.every(item => item === array[0]);
let check1 = areAllEqual([3, 5, 2]); // false
let check2 = areAllEqual([3, 3, 3]); // true

// average number of the given numbers
const averageOf = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
let average = averageOf(5, 2, 4, 7); // 4.5

// reverse a string
const reverseString = str => [...str].reverse().join('');
let a = reverseString('Have a nice day!'); // !yad ecin a evaH

//  sum of the given numbers
const sumOf = (...numbers) => numbers.reduce((a, b) => a + b, 0);
let sum = sumOf(5, -3, 2, 1); // 5

// find a given word in a string and replace with another one.
const findAndReplace = (string, wordToFind, wordToReplace) => string.split(wordToFind).join(wordToReplace);
let result = findAndReplace('I like banana', 'banana', 'apple'); // I like apple

// convert a color in RGB mode to Hex
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
let hex = RGBToHex(255, 255, 255); // ffffff

// shuffle items in an array
const shuffle = ([...array]) => {
    let m = array.length;
    
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [array[m], array[i]] = [array[i], array[m]];
    }
    return array;
  };
  shuffle([5, 4, 3, 6, 20]);

  // removes false values from an array, which include false, undefined, NaN, empty
const removeFalseValues = arr => arr.filter(item => item);
let array = removeFalseValues([3, 4, false, '', 5, true, undefined, NaN, '']); // [3, 4, 5, true]

// removes duplicated item from an array
const removeDuplicatedValues = array => [...new Set(array)];
let arr = removeDuplicatedValues([5, 3, 2, 5, 6, 1, 1, 6]); // [5, 3, 2, 6, 1]

// returns time in string from a Date object
const getTimeFromDate = date => date.toTimeString().slice(0, 8);
let time = getTimeFromDate(new Date()); // 09:46:08

// capitalizes the first letter of all words in a string
const capitalizeAllWords = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
let str = capitalizeAllWords('i love reading books'); // I Love Reading Books

// difference in days between two dates
const getDayDiff = (date1, date2) => (date2 - date1) / (1000 * 3600 * 24);
let diff = getDayDiff(new Date('2020–04–01'), new Date('2020–08–15')); // 136

// convert an angle from radian to degree
const radianToDegree = radian => (radian * 180.0) / Math.PI;
let degree = radianToDegree(2.3); // 131.78

// checks if a given string is a valid JSON
const isValidJSON = string => {
    try {
      JSON.parse(string);
      return true;
    } catch (error) {
      return false;
    }
  };
let checkA = isValidJSON('{“title”: “javascript”, “price”: 14}'); // true
let checkB = isValidJSON('{“title”: “javascript”, “price”: 14, subtitle}'); // false

// converts a given string into an array of words
const toWords = (string, pattern = /[^a-zA-Z-]+/) => string.split(pattern).filter(item => item);
let words = toWords('I want to be come a great programmer'); // [“I”, “want”, “to”, “be”, “come”, “a”, “great”, “programmer”]

// validates if a number is valid
const isValidNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n;
let test = isValidNumber(10); // true
let test2 = isValidNumber('a'); // false

// Swapping two values in one line without any temporary variable using the destructive method
let x = 1;
let y = 2;
[y, x] = [x, y];
console.log(x, y) // prints 2 1



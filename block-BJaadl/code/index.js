let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(array) {
  return [...array].sort((a, b) => a.length - b.length).pop;
}
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
function wordsLength(str) {
  return str.length;
}
let word = words.map(wordsLength);
console.log(word);
// - Create a new array that only contains word with atleast one vowel.
let vowelIncludes = words.filter(word => {
  if (
    word.toLowerCase().includes("a") ||
    word.toLowerCase().includes("e") ||
    word.toLowerCase().includes("i") ||
    word.toLowerCase().includes("o") ||
    word.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(vowelIncludes);

// - Find the index of the word "rhythm"
function found(str) {
  return str === "rhythm";
}
let findItem = words.findIndex(found);
console.log(findItem);
// - Create a new array that contians words not starting with vowel.
let filterWord = words.filter(
  w =>
    !(
      w.startsWith("a") ||
      w.startsWith("e") ||
      w.startsWith("i") ||
      w.startsWith("o") ||
      w.startsWith("u")
    )
);
console.log(filterWord);
// - Create a new array that contianse words not ending with vowel
let filterWord = words.filter(
  w =>
    !(
      w.endsWith("a") ||
      w.endsWith("e") ||
      w.endsWith("i") ||
      w.endsWith("o") ||
      w.endsWith("u")
    )
);
console.log(filterWord);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let total = numbers.reduce((acc, cv) => acc + cv, 0);
console.log(total);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multipliedby3(number) {
  return number % 3 === 0;
}
numbers.filter(multipliedby3);
// - Create a new array that contains only even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);
// - Create  a new array that contains only odd numbers.
function odd(number) {
  return number % 2 !== 0;
}
numbers.filter(odd);
// - Create a new array that should have true for even number and false for odd numbers.
function num(number) {
  if (number % 2 === 0) {
    console.log(true);
  } else {
    flase;
  }
}
numbers.map(num);

// - Sort the above number in assending order.
function assending(a, b) {
  return a - b;
}
numbers.sort(assending);
// - Does sort mutate the original array?
yes;
// - Find the sum of the numbers in the array.
const reducer = (acc, cv) => acc + cv;
console.log(numbers.reduce(reducer, 0));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let sum = 0;
function add(number) {
  sum = sum + number;
}
numbers.forEach(add);
console.log(sum / numbers.length);

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let sum = 0;
function add(str) {
  sum = sum + str.length;
}
strings.forEach(add);
console.log(sum / strings.length);

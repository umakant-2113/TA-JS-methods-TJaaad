// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf("is"));
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divided = (number) => number % 3;
console.log(numbers.every(divided));
// -  Sort Array from smallest to largest

function compare(a, b) {
  return a-b
}
numbers.sort(compare);
// - Remove the last word in strings
console.log(strings.pop());
// - Find largest number in numbers
function largest(num) {
  return num > 50;

}
numbers.find(largest);
// - Find longest string in strings
for (let str of strings) {
  if (str.length > 6) {
    console.log(str);
  }
  
}
// - Find all the even numbers
for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num)
  }
}
// - Find all the odd numbers
for (let num of numbers) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
// - Place a new word at the start of the array use (unshift)
let newString = strings.unshift("elements");
console.log(newString);
// - Make a subset of numbers array [18,9,7,11]
let sub = [];
for (let num of numbers) {
  if (num === 18 || num === 9 || num === 7 || num === 11) {
    sub.push(num)
  }
} console.log(sub);

// - Make a subset of strings array ['a','collection']
let subset = []
for (let str of strings) {
  if (str.length < 2 ||str.length > 8) {
    subset.push(str);
    
  }
}console.log(subset);
// - Replace 12 & 18 with 1221 and 1881

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
const nerAr = numbers.map(ele => {
  if (ele === 12) {
    return 1221;
  } else if (ele === 18) {
    return 1881;
  }
  return ele;
});
console.log(nerAr);
// - Replace words in strings array with the length of the word
const itemName = customers.map(item => {
  item.firstname;
});
console.log(itemName);
// - Find the sum of the length of words using above question
var strings = ["This", "is", "a", "collection", "of", "words"];
for

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'


// - Create new array with only first name


const itemName = customers.map((item) => {
  return item.firstname
  
});
console.log(itemName);

// - Create new array with all the full names (ex: "Joe Blogs")
const itemName = customers.map(item => {
  return item.firstname + item.lastname;
});
console.log(itemName);
// - Sort the array created above alphabetically
console.log(itemName.sort())

// - Create a new array that contains only user who has at least one vowel in the firstname.
const itemName = customers.map(item => {
  item.firstname
});
console.log(itemName);
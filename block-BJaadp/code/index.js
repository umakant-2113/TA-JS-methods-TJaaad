let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
persons.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0) / persons.length;
// Find the average grade of male

let averageMale = persons.filter(p => p.sex === "M");
averageMale.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0) / averageMale.length;
// Find the average grade of female
let averageFemale = persons.filter(p => p.sex === "F");
averageFemale.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0) / averageFemale.length;
// Find the highest grade
persons
  .reduce((acc, cv) => {
    return acc.concat(cv.grade);
  }, [])
  .sort((a, b) => a - b)
  .pop();
// Find the highest grade in male
let maleGrade = persons.filter(p => p.sex === "M");
maleGrade
  .reduce((acc, cv) => {
    return acc.concat(cv.grade);
  }, [])
  .sort((a, b) => a - b)
  .pop();
// Fi(nd the highest grade in female
let femaleGrade = persons
  .filter(p => p.sex === "F")
  .reduce((acc, cv) => {
    return acc.concat(cv.grade);
  }, [])
  .sort((a, b) => a - b)
  .pop();
// Find the highest grade for people whose name starts with 'J' or 'P'

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];
fruitBasket.reduce((allname, fruitName) => {
  if (fruitName in allname) {
    allname[fruitName]++;
  } else {
    allname[fruitName] = 1;
  }
  return allname;
}, {});
/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
fruitBasket.reduce((allname, fruitName) => {
  if (fruitName in allname) {
    [allname[fruitName]++];
  } else {
    [(allname[fruitName] = 1)];
  }
  return allname;
}, []);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
data.reduce((acc, cv) => {
  return acc.concat(cv);
}, []);
// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];
dataTwo
  .join(" ")
  .split("  ")
  .reduce((acc, cv) => {
    return acc.concat(cv);
  }, []);

// Using reduce flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
pipeline.reduce((acc, cv) => {
  acc = cv(acc);
  return acc;
}, 3);
function increment(num) {
  return num + 1;
}
function double(num) {
  return num * 1;
}
function decrement(num) {
  return num - 1;
}
function triple(num) {
  return num * 3;
}
function half(num) {
  return Math.round(num / 2);
}

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
function increment(num) {
  return num + 1;
}
function half(num) {
  return Math.round(num / 2);
}
function double(num) {
  return num * 2;
}
function decrement(num) {
  return num - 1;
}
function triple(num) {
  return num * 3;
}
pipeline2.reduce((acc, cv) => {
  acc = cv(acc);
  return acc;
}, 8);

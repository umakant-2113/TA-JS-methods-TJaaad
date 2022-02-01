let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Papaya";
console.log(fruits);
// Remove the last element from fruits array

console.log(delete fruits[fruits.length - 1]);
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
console.log(delete fruits[0]);
// Log the element on index 0 and 1
console.log(fruits.slice(0, 2));
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
let fruits = [" ", "Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
let fruits = [" ", "Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
fruits.unshift("Guava");
console.log(fruits);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Dragon Fruit");
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
let fruits = ["Dragon Fruit", "Guava", "Banana", "Orange", "Apple", "Mango"];
if (fruits.slice(0, 2) === ["Dragon Fruit , guava"]);
{
  console.log(true);
}

let fruits = [" ", "Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
fruits.unshift("Guava");
console.log(fruits);
fruits.unshift("Dragon Fruit");
if (fruits.slice(0, 2) === ["Dragon Fruit , guava"]);
{
  console.log(true);
}
// Update the value of index 1 to `Pears`
let fruits = [" ", "Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
fruits.unshift("Guava");
console.log(fruits);
fruits.unshift("Dragon Fruit");
if (fruits.slice(0, 2) === ["Dragon Fruit , guava"]);
{
  console.log(true);
}
fruits[1] = "Pears";
console.log(fruits);

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
let fruits = ["Dragon Fruit", "Pears", "Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 0, "Lemon", "Kiwi");
console.log(fruits);

// Remove (slice) all the element from index 5
let fruits = ["Dragon Fruit", "Pears", "Banana", "Orange", "Apple", "Mango"];
fruits.slice(0, 5);
console.log(fruits);

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ["Berries", "Melons"];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
let fruits = [
  "Dragon Fruit",
  "Lemon",
  "Kiwi",
  "Pears",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
];
let moreFruits = ["Berries", "Melons"];

console.log(fruits.concat(moreFruits));

// Log the name of all fruit in console
console.log(fruits.concat(moreFruits));
// Convert each fruit name to lowercase and log it
let fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let fruit of fruits) {
  console.log(fruit.toLowerCase());
}
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let fruit of fruits) {
  let lowerCaseFruits = fruit.toLowerCase();
  console.log(lowerCaseFruits);
}
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.slice(0, 2));
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
console.log(numbersTwo.flat(2));
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

// Use forEach to log all the elements of numberThree array
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let num = numbersThree.flat(4);
num.forEach(element => console.log(element));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let num = numbersThree.flat(4);
num.forEach(element => console.log(element * 2));
// Create a new variable named  that store the numberThree array (each element should be multiplied by 3). Use map
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let tripleNumbers = numbersThree.flat(4);
tripleNumbers.forEach(element => console.log(element * 3));
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let tripleNumbers = numbersThree.flat(4);
tripleNumbers.forEach(element => console.log(element / 2));
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let oddNumbers = [];
let num = numbersThree.flat(4);
for (let number of num) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
}
console.log(oddNumbers);
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let evenNumbers = [];
let num = numbersThree.flat(4);
for (let number of num) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
console.log(evenNumbers);
// Find the index of 10 in numbersThree array
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let num = numbersThree.flat(4);
console.log(num[num.length - 1]);
// Reverse the values of numbersThree array
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let num = numbersThree.flat(4);
for (let i = 10; i >= 0; i--) {
  console.log(num[i]);
}
// Reverse the values of numbersTwo array
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let num = numbersTwo.flat(2);
console.log(num[num.length - 1]);

for (let i = 6; i >= 0; i--) {
  console.log(num[i]);
}
// Join all fruits with '-', convert to uppercase and log it
let mfruits = [
  "Dragon Fruit",
  "Lemon",
  "Kiwi",
  "Pears",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
];
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let moreFruits = ["Berries", "Melons"];
let allFruits = fruits.concat(mfruits, moreFruits);
console.log(allFruits);
for (let fruit of allFruits) {
  console.log(fruit.toUpperCase());
}
// Join all fruits with '&', convert to lowercase and log it
let mfruits = [
  "Dragon Fruit",
  "Lemon",
  "Kiwi",
  "Pears",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
];
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let moreFruits = ["Berries", "Melons"];
let allFruits = fruits.concat(mfruits, moreFruits);
console.log(allFruits);
for (let fruit of allFruits) {
  console.log(fruit.toLowerCase());
}

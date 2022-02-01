Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

<!-- it is convert array to string   it is not take any parameter  -->

var elements = ['Fire', 'Air', 'Water'];
console.log(element.join());
out put<!-- Fire,Air,Water  -->

var elements = ['Fire', 'Air', 'Water'];
console.log(element.join(""));

<!-- outpot   "FireAirWater" -->

var elements = ['Fire', 'Air', 'Water'];
console.log(element.join("-"))

<!-- "Fire-Air-Water" -->

3. `flat`
   <!-- flat method create a new array   with all sub-array elements concatenated into it recursively up to the specified depth-->
   <!-- it take one parameter depth level  -->
   let numbers = [1,5,[8,12,[15,18,[20,22,[24,6,2]]]]];
   console.log(numbers.flat(5));

let fruits = ["Papaya",["Banana",["Guava",["pee",["Apple"]]]]];
console.log(fruits.flat(5));

let colors = ["red","black",["white","blue",["crimson","green","yellow"]]]
console.log(colors.flat(3));

4. `push`

<!-- push method adds one and more elements to the end of an array and return the new length of array . -->
<!-- it is not take any parameter  -->

let colors = ['red', 'black', 'white', 'blue', 'crimson', 'green', 'yellow']
colors.push("tometo");
console.log(colors);

let fruits =['Papaya', 'Banana', 'Guava', 'pee', 'Apple']
fruits.push("pinapple","watermelon","cucumber");
console.log(fruits);

let numbers = [1,8,3,4,5,6,7,8,9,12];
numbers.push(21,17,28,85,69);
console.log(numbrs);

5. `indexOf`

<!-- the index of method returns the first index at which a given element can be found in array  -->

<!--We can not find out the index value of any particular word, for those who have to read completely  -->

<!--when it is not found element then it is return -1  -->

let fruits =['Papaya', 'Banana', 'Guava', 'pee', 'Apple']
console.log(fruits.indexOf("Guava"));

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.indexOf(6));

let colors = ['red', 'black', 'white', 'blue', 'crimson', 'green', 'yellow']
console.log(colors.indexOf("pink"));

6.  `lastIndexOf`

<!-- the lastIndexOf methods returns the last index at which a given element can be found in the array or -1 if it is not present the array is searched backwords stating from index   -->

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.lastIndexOf(9));

let fruits = ["apple","mango","grapse","orange","papaya"];

console.log(fruits.lastIndexOf("mango"));

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.lastIndexOf("white"));

7.  `includes`

<!-- the includes method  detemines whether an array includes a certain element returning true or false as appropriate -->

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.includes(8));

let fruits = ["apple","mango","grapse","orange","papaya"];
console.log(fruits.includes("mango"));

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.includes("white"));

8. `reverse`

<!-- the reverse method an array in place the first array element become the last element and the last element become the first -->

<!-- it is not take any parameter and doing reverse -->

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.reverse());

let fruits = ["apple","mango","grapse","orange","papaya"];
console.log(fruits.reverse());

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.reverse());

9. `every`
   <!-- the every method tests whether all elements in the array pass the test implemented by the provided function it returns a boolean value -->

   <!-- a callback function test foe each element taking three arguments -->

   <!-- true if the callback function returns a truthy value foe every array element otherwise false -->

   let fruits = ["apple","mango","grapse","orange","papaya"];

const ret= (fruit)=>
return fruit.length>2;
console.log(fruits.every(ret));

let numbers = [1,8,3,4,5,6,7,8,9,12];
const num = (currentValue) =>
currentValue>15;
console.log(numbers.every(num));

10. `shift`
<!--the sift method removes the first element from an array and returns that element this method change the length of the array   -->

<!-- it is a mutate the array method -->

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.shift());

let fruits = ["apple","mango","grapse","orange","papaya"];
console.log(fruits.shift());

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.shift());

11. `splice`
<!-- splice method add and removes array elements -->

<!-- if we give stating index and end index then end index works as removel index if we do not give remove index then it is not remove ant item   -->

<!-- if we want to add any element we give the name of element after the end index -->

<!-- end index is optional if we don't provided the it is work properly -->

<!-- it is take to parameter stating index and removel index -->

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.splice(2,3));

<!-- out put [3,4,5] -->

let numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.splice(2,0,3,5,6,9,10,12));

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.splice(2,2,"blosom","carrot","orange")); 12. `find`

<!-- the find method returns the value of the first element in the provided array that satisfies the provided testing function if no values satisfy the testing function undefined is returned   -->

<!-- it given one value in answer after testing -->
<!-- it accept call back function -->

const numbers = [1,8,3,4,5,6,7,8,9,12];
const found = numbers.find(num => num>10);
console.log(found);

let colors = ["red","pink","black","yellow","crimson","blue"];
const found = colors.find(color=> color ==="red");
console.log(found);

let fruits = ["apple","mango","grapse","orange","papaya"];
const finding = fruits.found(fruit =>fruit.length>3);
console.log(finding);

13. `unshift`
    <!-- the unshift method adda one and more element to the beginning of an array and returns the new length of the array -->
    <!-- it does  mutation of an array -->
    <!-- it is give length of array  -->

const numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.unshift(26,28));

let fruits = ["apple","mango","grapse","orange","papaya"];
console.log(fruits.unshift("pemogranate"));

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.unshift("white"));

14. `findIndex`
    <!-- The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. -->
    <!-- see also the find() method which returns the value of an array element instead of its index -->
    <!-- it is give only index number of the element  -->
    const numbers = [1,8,3,4,5,6,7,8,9,12];
    const isGreater = (num) => num>8;
    console.log(numbers.findIndex(num));

let colors = ["red","pink","black","yellow","crimson","blue"];
const newColor = (color)=>color.length>5;
console.log(colors.findIndex(newColor));

let fruits = ["apple","mango","grapse","orange","papaya"];
const allFruits = (fruit)=> fruit ==="papaya";
console.log(fruits.findIndex(allFruits));

15. `filter`
<!-- The filter() method creates a new array with all elements that pass the test implemented by the provided function.

-->

 <!-- A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

 -->

const words = ["spray","limit","elite","exuberant"]
const result = (word)=>word.length>5;
console.log(words.filter(result));

const numbers = [1,8,3,4,5,6,7,8,9,12];
const result = (number)=>number>15;
console.log(numbers.filter(result));

let fruits = ["apple","mango","grapse","orange","papaya"];
const result = (fruit)=>fruits.length>3
console.log(fruits.filter(result)); 16. `forEach`

<!-- the forEach method executed a provided function once for each array  -->

const numbers = [1,8,3,4,5,6,7,8,9,12];
numbers,forEach(ele=> console.log(ele\*2));

let fruits = ["apple","mango","grapse","orange","papaya"];
fruits.forEach(fruit=>console.log(fruit)); 17. `map`

<!--  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

-->

<!--A new array with each element being the result of the callback function.  -->

const numbers = [1,8,3,4,5,6,7,8,9,12];
let doubleNumbers = (num)=>num\*2;
console.log(numbers.map(doubleNumbers));

let fruits = ["apple","mango","grapse","orange","papaya"];
let fruitsIndex = (fruit) => fruit.length>8;
console.log(fruits.map(fruitsIndex));

let colors = ["red","pink","black","yellow","crimson","blue"];
let allColors = (color,index) => color,index;
console.log(colors.map(allColors));

18. `pop`
    <!-- the pop method remove the last element from an array and returns that elements this method change of the array -->
    <!-- it does mutation   of an array-->
    let fruits = ["apple","mango","grapse","orange","papaya"];
    console.log(fruits.pop());

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(colors.pop());

const numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.pop()); 20. `reduce`

<!-- The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

 -->
 <!-- The value that results from running the “reducer” callback function to completion over the entire array. -->

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer)); 21. `slice`

<!-- slice method extract a part of the array -->

<!-- slice method returns the extract part in a new array -->

<!-- slice method does not change the original array -->
<!-- slice method given starting index value and last index value slice method take negative integers and return backword position -->

let fruits = ["apple","mango","grapse","orange","papaya"];
console.log(fruits.slice(2));

let colors = ["red","pink","black","yellow","crimson","blue"];
console.log(slice(2,5));

const numbers = [1,8,3,4,5,6,7,8,9,12];
console.log(numbers.slice(-5,-2));

22. `some`

<!-- some method test whether at least one element in the array passes the test implemented by the provided function it return true if in the array it finds an element for which the provided function returns true otherwise it returns false it does not modify the array -->

let fruits = ["apple","mango","grapse","orange","papayas"];
let ret = (fruit)=> fruit.length>6
console.log(fruits.some(ret));

let colors = ["red","pink","black","yellow","crimson","blue"];
let allColors = (color)=>color ==="yellow"
console.log(colors.some(allColors));

const numbers = [1,8,3,4,5,6,7,8,9,12];
let allNumbers = (number)=> number>5;
console.log(numbers.some(allNumbers));

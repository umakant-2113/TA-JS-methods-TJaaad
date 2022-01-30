Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   <!-- - not take anny parameter  -->
   <!-- it is convert to capital form of string . -->

let name = "umakant rajpoot"
console.log(name.toUpperCase());

- let user = "john stark"
  console.log(user.toUpperCase());

let add = "my name is umakant rajpoot i am from uttar pradesh and capital of up is lucknow"
console.log(add.toUpperCase());

3. `toLowerCase`
<!-- - is is not take ant parameter is is convert to string in lowercase -->

let user = "BRAN AND LENISTER"
console.log(user.toLowerCase());

let school = " HINND ANGEL PUBLIC SCHOOL"
console.log(school.toLowerCase());

let board = " THIS GOVERNMENT TAKE DICISION THAT HE MAKE SINGLE GOVERNMENT "
console.log(board.toLowerCase());

4. `trim`
   <!-- trim remove white space form starting and end . it is not take any parameter   -->
   let myName = " umakant rajpoot ";
   console.log(myName.trim());

let myHobbies = " "song" "movies" ";
console.log(myHobbies());

let address = " vilage name is bangra ";
console.log(address.trim()); 5. `trimEnd`

<!-- trimEnd remove is white space from ends it is not take any parameter -->

let myNickName = "Suryansh rajpoot ";
console.log(myNickName.trimEnd());

let college = "B.N v degree college rath "
console.log(college.trimEnd());

let town = "my town is rath "
console.log(town.trimEnd()); 6. `trimStart`

<!-- trimStat remove is white space from start it is not take any parameter  -->

let isAdult = " true";
console.log(isAdult.trimStart());

let myName = " umakant rajpoot"
console.log(myName.trimStart());

let myContact = " village - bangra and post - jigni "
console.log(myContact.trimStart()); 7. `concat`

<!-- it is concat to multiple string and it is not take any parameter and return string data type  -->

let text1 = "" umakant ";
let text2 = "rajpoot ";
let text3 = " aradhana ";
console.log(text1.concat('',text2,"",text3));

let name = " radha ";
let lastName = "rajpoot";
let fullName = "radha rajpoot";
console.log(name.concat("",lastName,"",fullName));

let sentence = "deepak is a good boy he want to make teacher";
let sentence2 = "but his father want to make his as farmer";
let sentence3 = "so he decide to go far away his house ";
console.log(sentence.concat("",sentence2,"",sentence3)); 8. `endsWith`

<!-- it is check that string is end of same which we gave him or not if end words match he give true otherwise he give false    -->

let userName = "person";
console.log(userName.endsWith("on"));

let fullName = "pawan kumar he is my good friends "
console.log(fullName.endsWith("nds "));

let add = "he is debtfull person but he want to pay all person which his friends cricle is become stronge"
console.log(add.endsWith("stronge")); 9. `includes`

<!-- includes is checks that is word available or not if word is available he gives true otherwise he give false answer -->

let name = "umakant rajpoot"
console.log(name.includes("r"));

let name = "umakant rajpoot"
console.log(name.includes("raj"));

let school = "my school name is hind angle public school it is my first school";
console.log(school.includes("is")); 10. `indexOf`

<!-- if want to find out indexany string then we use indexof property it is not take  any parameter  -->
<!-- indexOf method() returns -1 if the value is not found -->

let name = "ram karan rajppot he is good boy ";
console.log(name.indexOf("y"));

let fullName = "umakant rajpoot "
console.log(fullName.indexOf("q"));

let school = "chitra gupt inter college rath hamirpur"
console.log(school.indexOf("rath")); 11. `lastIndexOf`

<!-- the last index of returns the index (position ) of the last occurence of a specified value in a string  -->
<!-- the last indexof method searches  the string end to beginning  -->
<!-- the lastIndexOf  method return the index from beginning         -->
<!-- indexOf method() returns -1 if the value is not found -->

let college = " B.N . V. inter College Rath Hamirpur "
console.log(college.lastIndexOf("R"));

let text = "he is a good boy"
console.log(text.lastIndexOf("F"));

let text2 = "umakant is regular student of altCampus"
console.log(text2.lastIndexOf("is"));

12. `padEnd`

<!-- mehords pads a string with another string to  a certain length from the start of string and returns a resulting string that reaches a certain length -->

<!-- the pad length is the length of resulting once the is is paded if the pad length is less than the string length the  string is returned as is without padding -->

<!-- is is pad ing the word in last  -->

<!-- it is take two parameter. one take the length and second these word that is pad in old word -->

let name = "umakant rajpoot";
console.log(name.padEnd(20,"raja "));

let fullName = "aradhana rajpoot"
console.log(fullName.padEnd(10,"singh"));

let brother = "shrikant rajpoot and ramakant rajpoot"
console.log(brother.padEnd(40,"bangra rath hamirpur"));

13. `padStart`
<!-- mehords pads a string with another string to  a certain length from the start of string and returns a resulting string that reaches a certain length -->

<!-- the pad length is the length of resulting once the is is paded if the pad length is less than the string length the  string is returned as is without padding -->

<!-- is is pad ing the word in starting point  -->

<!-- it is take two parameter. one take the length and second these word that is pad in old word -->

let userName = "umakant rajpoot ";
console.log(userName.padStart(22,"singh "));

let school = "christ convent school rath hamirpur ";
console.log(school.padStart(30," princepal name is raja"));

let name = "umakant raj"
console.log(name.padStart(20, " singh"));

14. `repeat`
<!-- the repeat methods returns a string with a number of copies of a string -->

<!--it is take only one parameter .which numbers are pprovided .it is repeated the action equal to numbers  -->

<!-- if we do not give any number .then he give nothing. -->

let userName = "AltCampus dharamshala";
console.log(userName.repeat(2));

let userName = "AltCampus dharamshala";
console.log(userName.repeat());

let name = "umakant raj "
console.log(name.repeat(5));

15. `replace`
<!-- the replace method searches a string for a value or a regular expression  -->

<!-- the replace method returns a new string with value replaced -->

<!-- replace  method change the original string -->

<!-- is is check from stating .it is found that string .it is changes only one string if we found same string it is not change that string  -->

let name = "umakant rajpoot kumar";
console.log(name.replace("kumar","singh"));

let userName = "Alt campus is best campus for codding course ";
console.log(userName.replaceAll("campus","school"));

let userName = "Alt campus is best campus for codding course ";
console.log(userName.replace("campus","school"));

16. `slice`

<!-- slice method extract a parts of a string  -->

<!-- the slice methods returns the extract part in a new string   -->

<!-- slice method does not change original string  -->

<!-- slice method gives start index and last index value   is is take starting  index -->

<!-- if we provide one value it is copy all part it is leave only that part that is match number og index -->

let userName = "Alt campus is best campus for codding course ";
console.log(userName.slice(3,10));

let name = "umakant raj "
console.log(name.slice(3));

let name = "umakant raj "
console.log(name.slice(3,20));

17. `split`
<!-- split methods splits a string into an array of substring  -->

<!-- the split method returns the new array  -->

<!-- the split method does not change original value  -->

<!-- if we give empty string without space then he give one by one latters in array . if we give empty string with space then it is give one by one words in arrey-->

let name = "umakant raj "
console.log(name.split(""));

let name = "umakant raj "
console.log(name.split(" "));

let sentence = "he is good boy but his behavior in not good"
console.log(sentence.split(" "));

18. `substring`

<!-- the substring method extract characters between two index (position) from a string and return the substrings -->

<!-- the substring method extracts characters from start to end -->

<!-- the substring method does not change the original string -->

let name = "umakant raj "
console.log(name.substring(2,5));

let name = "umakant raj "
console.log(name.substring(2));

let sentence = "he is good boy but his behavior in not good"
console.log(sentence.substring(10,20));

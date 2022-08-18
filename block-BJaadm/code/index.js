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

// Create an array peopleName and store value of sex key from persons array
let personSex = persons.map(person => person.sex);
console.log(personSex);
// Create an array peopleGrade and store the value of grade key from persons array
let perGrade = persons.map(per => per.grade);
let peopleGrade = [];
peopleGrade.push(perGrade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let perSex = persons.map(person => person.sex);
let peopleSex = [];
peopleSex.push(perSex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = persons.filter(
  person => person.name.startsWith("J") && person.name.startsWith("P")
);
console.lig(filterName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterName = persons.filter(
  person => person.name.startsWith("A") && person.name.startsWith("C")
);
console.lig(filterName);
// Log all the filtered male ('M') in persons array
function isMale(person) {
  if (person.sex == "M") {
    return true;
  } else {
    return false;
  }
}
persons.filter(isMale);

// Log all the filtered female ('F') in persons array
function isFemale(person) {
  if (person.sex == "F") {
    return true;
  } else {
    return false;
  }
}
persons.filter(isFemale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterNameCandJ = persons.filter(
  person =>
    person.name.startsWith("C") &&
    person.name.startsWith("J") &&
    person.sex === "F"
);
console.log(filterNameCandJ);

// Log all the even numbers from peopleGrade array
function personGrade(person) {
  if (person.grade % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
persons.map(personGrade);

// Find the first name that starts with 'J' in persons array and log the object
let filterName = persons.filter(person => person.name.startsWith("J"));
console.log(filterName);

// Find the first name that starts with 'P' in persons array and log the object
let filterNameP = persons.filter(person => person.name.startsWith("p"));
console.log(filterNameP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let filterNameP = persons.filter(
  person =>
    person.name.startsWith("P") && person.grade > 10 && person.sex === "F"
);
console.log(filterNameP);
// Filter all the female from persons array and store in femalePersons array
function isFemale(person) {
  if (person.sex === "F") {
    return person.name;
  }
}
let femalePersons = persons.filter(isFemale);
let allFemaleName = femalePersons.map(isFemale);
console.log(allFemaleName);
// Filter all the male from persons array and store in malePersons array
function isMale(person) {
  if (person.sex === "M") {
    return person.name;
  }
}
let malePersons = persons.filter(isMale);
let malePersonName = malePersons.map(isMale);
console.log(malePersonName);

// Find the sum of all grades and store in gradeTotal
let sum = 0;
let gradeTotal = persons.forEach(pers => (sum = sum + pers.grade));
console.log(sum);

// Find the average grade
let sum = 0;
let gradeTotal = persons.forEach(pers => (sum = sum + pers.grade));
console.log(sum / persons.length);
// Find the average grade of male
function maleAve(person) {
  if (person.sex === "M") {
    return person.grade;
  }
}
let grade = persons.filter(maleAve);
let totalMaleGrade = grade.map(maleAve);
totalMaleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0) / totalMaleGrade.length;
// Find the average grade of female

function femaleAve(person) {
  if (person.sex === "F") {
    return person.grade;
  }
}
let femaleGrade = persons.filter(femaleAve);
let totalFemaleGrade = femaleGrade.map(femaleAve);
totalFemaleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0) / totalFemaleGrade.length;
// Find the highest grade
let peopleGrade = persons.map(per => per.grade);
peopleGrade.sort((a, b) => a - b).pop();

// Find the highest grade in male
function maleHighestGrade(person) {
  if (person.sex === "M") {
    return person.grade;
  }
}
let maleGrade = persons.filter(maleHighestGrade);
let maleGrades = maleGrade.map(maleHighestGrade);
maleGrades.sort((a, b) => a - b).pop();

// Find the highest grade in female
function female(person) {
  if (person.sex === "F") {
    return person.grade;
  }
}
femaleGrade = persons.filter(female);
let femaleHeighestGrade = femaleGrade.map(female);
femaleHeighestGrade.sort((a, b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
function highest(person) {
  if (person.sex === "M") {
    return person.grade;
  }
}
persons
  .filter(highest)
  .sort((a, b) => a - b)
  .person.startsWith("j") || person.startsWith("p").pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let personGrade = persons.map(person => person.grade);
function compare(a, b) {
  return a - b;
}
personGrade.sort(compare);
// Sort the peopleGrade in descending order
let personGrade = persons.map(person => person.grade);
function compare(a, b) {
  return b - a;
}
personGrade.sort(compare);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let personGrade = persons.map(person => person.grade);
function compare(a, b) {
  return b - a;
}
personGrade.sort(compare);

// Sort the array peopelName in ascending `ABCD..Za....z`
let personName = persons.map(person => person.name);
function compare(a, b) {
  return a.localeCompare(b);
}
personName.sort(compare);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let personName = persons.map(person => person.name);
function compare(a, b) {
  return a.localeCompare(b);
}
personName.sort(compare);

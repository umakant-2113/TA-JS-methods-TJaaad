// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople(array) {
   return got.houses.map(a=>a.people.length).reduce((acc,cv)=>{
    return acc+=cv;
},0);
}

function peopleByHouses() {
  let output  = {};
   got.houses.map(item=>{
   return output[item.name] = item.people.length;
  });
  return output;
}


function everyone() {
  let finalArr = [];
  got.houses.filter(item=>{
    item.people.map(eachName=>{
      finalArr.push(eachName.name);
    })
  })
  return finalArr;
}

function nameWithS() {
  let finalArr = [];
  got.houses.map(item=>{
    item.people.filter(eachName=>{
      if(eachName.name.toLowerCase().includes('s')){
        finalArr.push(eachName.name);
      }
    })
  })
  return finalArr;
}

function nameWithA() {
  let finalArr =[];
 got.houses.map(item=>{
   item.people.filter(eachName=>{
     if(eachName.name.toLocaleLowerCase().includes("a")){
       finalArr.push(eachName.name);
     }
   })
 }) 
 return finalArr;
}
nameWithA();

function surnameWithS() {
  let finalArr= [];
  got.houses.map(item=>{
    item.people.filter(eachName=>{
      if(eachName.name.split(' ')[1].includes('S')){
        finalArr.push(eachName.name);
      }
    })
  })
  return  finalArr;
}


function surnameWithA() {
  let finalArr =[];
  got.houses.map(item=>{
    item.people.filter(eachName=>{
      if(eachName.name.split(" ")[1].includes("A")){
        finalArr.push(eachName.name);
      }
    })
  })
  return finalArr;
}
surnameWithA();

function peopleNameOfAllHouses() {
  let output = {};
  let finalArr = [];
  got.houses.filter(item=>{
   let peoplesName = item.people.reduce((acc,cv)=>{
      acc.push(cv.name);
      return acc;
    },[])
    return output[item.name] = peoplesName;
});
return output;
}
peopleNameOfAllHouses();

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  return got.houses.reduce((acc ,eachHouse)=>{
    acc.push(eachHouse);
    return acc;
  },[]).reduce((acc,cv)=>{
    acc+= cv.people.length;
    return acc;
  },0)
}

function peopleByHouses() {
  return got.houses.reduce((acc,eachHouse)=>{
    acc.push(eachHouse);
    return acc;
  },[]).reduce((acc,cv)=>{
    acc[cv.name] = cv.people.length;
    return acc;
  },{})
}

function everyone() {
return got.houses.reduce((acc,eachHouse)=>{
  let names =eachHouse.people.reduce((peopleName,cv)=>{
    peopleName.push(cv.name);
    return peopleName;
  },[]);
  acc.push(names);
  return acc;
},[]).flat(Infinity);
}

function nameWithS() {
  return got.houses.reduce((acc,eachHouse)=>{
    let nameWithS =eachHouse.people.reduce((acc,cv)=>{
      if(cv.name.toLowerCase().includes('s')){
        acc.push(cv.name);
      }
    return acc;
    },[])
    acc.push(nameWithS);
    return acc;
  },[]).flat(Infinity);
  }



function nameWithA() {
  return got.houses.reduce((acc,eachHouse)=>{
    let nameWithA = eachHouse.people.reduce((acc,cv)=>{
      if(cv.name.toLowerCase().includes("a")){
        acc.push(cv.name);
      }
      return acc
    },[])
    acc.push(nameWithA);
    return acc
  },[]).flat(Infinity);
}


function surnameWithS() {
  return got.houses.reduce((acc,eachHouse)=>{
    let surnameWithS=eachHouse.people.reduce((acc,cv)=>{
      if(cv.name.split(" ")[1].includes("S")){
        acc.push(cv.name);
      }
      return acc;
    },[]);
    acc.push(surnameWithS)
    return acc;
  },[]).flat(Infinity);
}
surnameWithS();

function surnameWithA() {
  return got.houses.reduce((acc,eachHouse)=>{
    let surnameWithA =eachHouse.people.reduce((acc,cv)=>{
      if(cv.name.split(" ")[1].includes("A")){
        acc.push(cv.name);
      }
      return acc;
    },[]);
    acc.push(surnameWithA);
    return acc  
  },[]).flat(Infinity);
}

function peopleNameOfAllHouses() {
return got.houses.reduce((acc,eachHouse)=>{
  let peopleNameOfAllHouses = eachHouse.people.reduce((acc,cv)=>{
    acc.push(cv.name);
    return acc;
  },[]);
  acc[eachHouse.name] = peopleNameOfAllHouses;
  return acc;
},{});
}

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

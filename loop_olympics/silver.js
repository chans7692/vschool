var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for(i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

var name = [];
var occupation = [];

for(i = 0; i < peopleArray.length; i++){
    name.push(peopleArray[i].name);
    occupation.push(peopleArray[i].occupation)
}

console.log(name)
console.log(occupation)

var actor = [];
var singer = [];

for(i = 0; i < peopleArray.length; i++){
  if (i % 2){
  singer.push(peopleArray[i].name);
  } else {
    actor.push(peopleArray[i].name);
  };
}

console.log(actor)
console.log(singer)
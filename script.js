let name = "Stacey Folsom";
let age = 42;
let birthday = "May 12";
let detroitGC = true;
let lifeEvents = [
  "I was born in Mason, Michigan.",
  "I went to Northern Michigan University and then Eastern Michigan University for my M.S.",
  "I am currently working on building a better relationship with JavaScript.",
  "I'm a future graduate of the front-end bootcamp.",
];

if (detroitGC == true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

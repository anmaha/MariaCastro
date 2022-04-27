//Challenge: Arrays - Examining Elements
const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
let fourthItem = horror[3];


// Write a console.log statement below to check your work!
console.log(fourthItem)
//Challenge: Arrays - Adding Elements
const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("Another show")

// Write a console.log statement below to check your work!
console.log(netflixShows)

//Challenge: For Loops - Fundamentals
let countDown = 10;
// ADD CODE HERE
for(let i=0; i<10; i++){
  countDown = countDown -1
}

// Uncomment the below line to check your work
 console.log(countDown) // -> should print 0;

 //Challenge: For Loops and Arrays
 const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for(let i=0; i<synonyms.length; i++){
  greetings.push('Have a '+synonyms[i]+' day!')
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
for(let i=0; i<synonyms.length; i++){
console.log(greetings[i]);
}// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'

//For Loops and Array Indices
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
//bios[0] 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for(let i=0; i<3; i++){
  bios.push("My name is "+firstNames[i]+" "+lastNames[i]+" and I am from "+places[i])
}

//Challenge: For Loops - Calculating Array Elements
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for(let i=0; i<increaseByTwo.length; i++){
  increaseByTwo[i] = increaseByTwo[i] + 2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

//Challenge: Objects - Adding Properties
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

for (let i = 0; i < possibleIterable.length; i += 1) {
  if (possibleIterable[i] % 3 === 0) {
  divByThree[possibleIterable[i]] = i;
    }
}
  console.log(divByThree);
//Challenge: Objects - Evaluating Keys
const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  // iterate over properties/keys of sumMe with for in loop
  for (const property in sumMe) {
        // determine if value is a number
          if (typeof sumMe[property] === 'number') {
            //if so, add numbers to total
            total += sumMe[property];
      }
  }
  console.log(total);
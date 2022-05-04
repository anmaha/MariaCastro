// get the DOM elements
let ship = document.querySelector('.ship'); 
console.log(ship);
let aliens = [...document.querySelectorAll('.alien')]; //turns NodeList of images returned into an Array


// attack functions
const shipAttack = () =>{
    //console.log(" in shipAttack() ")
    ship.classList.toggle('ship-attack');
    console.log(ship)
}

const alienAttack = () =>{
    aliens[0].classList.toggle('alien-attack');
    console.log(alien)
}

if (Math.random() < aliens[0].accuracy) {
	console.log('You have been hit!');
}
// classes to make new ships
class Ship {
    constructor(){
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
}

class AlienShip { //aliens have hull(3,6) fp(2,4), accuracy(0.6,0.8)
    constructor(){
        this.hull = Math.random() * (6-3) + 3;
        this.firepower = Math.random() * (4-2) + 2;
        this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    }
}

let alien = []; // array to store new AlienShips with the div containing the alien
aliens.forEach((element) => {
    alien.push(Object.assign(new AlienShip(),{alien:element}));//copying a new object i.e. new AlienShip and adding a key:value of picture: string img source
})
console.log(alien);

let ussAssembly = Object.assign(new Ship(),{ship:ship});

console.log(ussAssembly);

//DOM Elements
const beginBattleButton = document.querySelector('.beginBattle');
const USstats = document.querySelector('#ussScore');
const alienStats = document.querySelector('#alienScore');

//Begin Space Battle
beginBattleButton.addEventListener('click', function(){
    // Display the ussAssembly stats and alien[0] stats
    console.log('Battle Begins');
    alienStats.innerHTML = `Alien Ship Life is ${alien[0].hull}`;
    USstats.innerHTML = `USS Assembly Life is ${ussAssembly.hull}`;
    //ussAssembly attacks first alien ship alien[]
    shipAttack();
    if (Math.random() < aliens[0].accuracy) {
        console.log('USS Assembly ');
    }   else{
        console.log('Alien Ship Hit!')
    }


})

    //If the alien[0] survives, it attacks you
//If you survive, you attack the ship again
//If it survives, it attacks you again ... etc
//If you destroy the ship, you have the option to attack the next ship or to retreat
//If you retreat, the game is over, perhaps leaving the game open for further developments or options
//You win the game if you destroy all of the aliens
//You lose the game if you are destroyed




// let command = prompt('Ready to [A]ttack or [R]etreat?')
//     if(command === "A"){
//         let target = document.querySelector('.ufo');
        
//         let explosion = document.createElement('img');
//         explosion.setAttribute('src', "https://toppng.com/uploads/preview/animated-gif-explosion-transparent-11562907793ihqhcm5ipj.png");
        
//         target.replaceWith(explosion);
//     }

// // declare objects as Object Literals
// ussAssembly = new Ship {
//     hp: 20,
//     firepower: 5,
//     accuracy: .7
    
// }


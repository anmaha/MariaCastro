// get the elements
let ship = document.querySelector('.ship');
let alien =document.querySelectorAll('.alien');

// attack functions
const shipAttack = () =>{
    console.log(" in shipAttack() ")
    ship.classList.toggle('ship-attack');
    console.log(ship)
}

const alienAttack = () =>{
    alien[0].classList.toggle('alien-attack');
    console.log(alien)
}

if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}

class Ship {
    constructor(hp,firepower,myMax,myMin){
        this.hp = hp;
        this.firepower = firepower;
        this.accuracy = Math.random() * (myMax - myMin) + myMin;
    }

}

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


// get the elements
let ship = document.querySelector('.ship');
const alien =document.querySelector('.alien');

// attack functions
const shipAttack = () =>{
    console.log(" in shipAttack() ")
    ship.classList.toggle('ship-attack');
    console.log(ship)
}

const alienAttack = () =>{
    alien.classList.toggle('alien-attack');
}

class Ship {
    constructor(){
        this.hp = hp;
        this.firepower = firepower;
        this.accuracy = this.accuracy;
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


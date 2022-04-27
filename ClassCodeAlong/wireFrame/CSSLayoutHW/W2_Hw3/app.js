const color=['blue','palevioletred','yellow','green','grey','red'];

// fo color change funcction
//random number between 9 and color.length
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min; 
}


const colorChange = () => {
  //for(let i= 0;  i<children.length; i ++){
    var randomInt = getRandomInt(0,color.length);
    for(const div of allDivs){
    div.style.backgroundColor = color[randomInt]; //color[randomNumber];
    console.log(color[randomInt]);
  } 
}
const allDivs = document.querySelectorAll('.parent\ >\ div');
console.log(allDivs);
const parent = document.querySelector(".parent");
console.log(parent);
const children = document.querySelector(".parent").children;
console.log(children);  // console.log(children.length);

parent.addEventListener('click',colorChange);

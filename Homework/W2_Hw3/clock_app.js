let temporizador;
let startTime;
let limite;

let newDate = new Date();
console.log(newDate.getTime());

// var currentTime = new Date();
// console.log(currentTime.getTime()-newDate.getTime());

  // listen for mouse clicks on the button
  document.getElementById("btnStart").addEventListener("click", botaoClicked);
  console.log("Documento carregado");


// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function botaoClicked() {
  "use strict";

  startTime = new Date();

  limite = parseInt(document.getElementById("txtTempo").value);

  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";
  // read the current time
  var currentTime = new Date();
  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // show the elapsed time
  document.getElementById("clock").innerHTML = minutos + ":" + segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutos >= limite) {
    document.getElementById("clock").className = "red";
    clearInterval(temporizador);
  } else {
    document.getElementById("clock").className = "blue";
  }

}

// for second clock edit in place
const minuteInput = document.querySelector('.minutes');
const secondInput = document.querySelector('.seconds');
const otherClock = document.querySelector('.clock2')
// add DOM manipulation
// eventlistner to minutes and seconds input
minuteInput.addEventListener('keydown', function(e) {
//if enter is pressed, change focus to seconds input
  if(e.key === "Enter"){
   secondInput.focus();
  }
});

secondInput.addEventListener('keydown', function(e) {
//initialize minutes and seconds to zero 
  let minutes = 0;
  let seconds = 0;
// if keydown event is enter key after input second, retrieve inputs values then start the clock with a setInterval(function, 1000),
  if(e.key === "Enter"){
    // retrieve mintute and seconds entered by user 
    let minuteValue = minuteInput.value;
    let secondValue = secondInput.value;
    // show the starting value of the clock timer pad with a zero if less than 2 digits to show 00:00
    minuteInput.value = String(minutes).padStart(2,"0");
    secondInput.value = String(seconds).padStart(2,'0');
    //start clock
    const startClock = setInterval( () => {
      //function is set to run every 1s, so increase seconds by 1
      seconds++
      // if seconds reaches 60 increase minutes by 1 and reset seconds counter
      if (Number(seconds) === 60){
        minutes++;
        minuteInput.value = String(minutes).padStart(2,"0");
        seconds = 0;
      }
      // verify inputs is equal to the time elapsed and stop timer
      if(minutes === Number(minuteValue) && seconds === Number(secondValue) ){
        //stop timer
        clearInterval(startClock);
        //and change bkgd color of clock
        otherClock.classList.add('red');

      }
      // show the seconds elaped to secondsInput.value
      secondInput.value = String(seconds).padStart(2,"0");
    }, 1000);//setInterval to run the function every 1000 milliseconds
  }
}); 
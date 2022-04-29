//////// SELECT ELEMENTS
const wrapperElement = document.querySelector(".wrapper");

const minuteInput = document.querySelector(".minutes");

const secondInput = document.querySelector(".seconds");

////// DOM MANIPULATION

//////// ADD FUNCTIONALITY
minuteInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    secondInput.focus();
  }
});

// Add an event listener to the second box
secondInput.addEventListener("keydown", function (e) {
  // Initialize minutes and seconds
  let minutes = 0;
  let seconds = 0;

  // Verify user wants to start the clock
  if (e.keyCode === 13) {
    // Retrieve whatever the user entered inside the boxes
    let minuteValue = minuteInput.value;

    // Retrieve the second values
    let secondValue = secondInput.value;

    // Show the starting values of the clock
    minuteInput.value = String(minutes).padStart(2, "0");
    secondInput.value = String(seconds).padStart(2, "0");

    // Create an interval and retrieve and retrieve the interval id
    const secondId = setInterval(() => {
      // Add +1 to each previously displayed second
      seconds++;

      // If my seconds get to 60 add +1 to my minutes
      if (Number(seconds) === 60) {
        ++minutes;

        minuteInput.value = String(minutes).padStart(2, "0");

        // Reset the second
        seconds = 0;
      }

      // Verify that the predefined minute, second  combo equal to the timer
      if (minutes === Number(minuteValue) && seconds === Number(secondValue)) {
        // Stop the timer
        clearInterval(secondId);

        // Change the background
        wrapperElement.classList.add("red-class");
      }

      // Otherwise do nothing
      secondInput.value = String(seconds).padStart(2, "0");
    }, 1000);
  }
});
// ///Select Elements
// const wrapperElement = document.querySelector(".wrapper");

// const minuteInput =document.querySelector(".minutes");

// const secondInput = document.querySelector(".seconds");

// ///// DOM Manipulation

// /// when you press enter change focus to seconds
// minuteInput.addEventListener('keydown',function(e){
//     if(e.keyCode === 13){
//         console.log('enter was pressed');
//         secondInput.focus();
//     }
// });

// // add event listener to the second box
// secondInput.addEventListener('keydown', function (e) {
//     console.log('second enter was pressed');
//     //initialize minutes and seconds
//     let minutes = 0;
//     let seconds = 0;

//     //verify the user wants to start clock
//     if (e.keycode === 13 ){
//         // retrieve whatever the user entered inside the box
//         // retrieve the minutes
//         let minuteValue = minuteInput.value;
//         // retrieve the seconds
//         let secondValue = secondInput.value;

//         // Show the starting values of the clock
//         minuteInput.value = String(minutes).padStart(2,"0");
//         secondInput.value = String(seconds).padStart(2,"0");

//         //Create an interval and retrieve the interval id
//         const secondId = setInterval( () => { 
//             // add a second to each previously displayed second
//             seconds++;
//             //if my seconds gets to 60 add a +1 minutes
//             if (Number(seconds) === 60){
//                 ++minutes;
//                 minuteInput.value = String(minutes).padStart(2,"0");
//                 // reset the seconds
//                 seconds = 0;
//             }
//             // verify the the predefined minute, second combo equal to the timer
//             if( minutes === Number(minuteValue) && seconds === Number(secondValue)) {
//                 // stop the timer
//                 clearInterval(secondId);
//                 // change the bkgrd color of clock to red
//                 wrapperElement.classList.add("red-class");
//             }
//             //otherwise do nothing
//             secondInput.value = String(seconds).padStart(2,"0");
//         }, 1000);
//     }
// });
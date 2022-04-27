let key = 'Enter your API Key In Here'


// const toggleElement = () => {
//   // 1. We want to Change Color of GwenTxt
//   let skreen = document.querySelector('.hidden')

//   skreen.classList.toggle('showScreen')
// }

const createReservation = () => {
  let resConfirmed = prompt('Do you have a reservation ? ')
  if (resConfirmed === 'yes') {
    console.log('Cool Reservation Booked!')

    let hiddenDiv = document.querySelector('.peekaboo')

    hiddenDiv.innerHTML = 'Reservation Booked! '
  } else {
    alert('You Need To Make A reservation')
  }
}

const julian = () => {
  let noodle = document.querySelector('.mainTitle')
  noodle.classList.toggle('wexler2')
}

const go = () => {
  setInterval(() => {
    console.log('Uhhh')
  }, 3000)
}
// // syntatic sugar
// ansync /await
// document
// function
// try /catch

// async function meetTeam()
const meetTeam = async (e) => {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let info = await response.json();
        /* instead of the fetch.then
                fetch('...')
                    .then(response => response.json())
                */
                    
        let miniBox = document.querySelector('.shadow');
        miniBox.innerHTML ="";
        // built in array method forEach(callback) takes a function as a paramenter in the following it is an anonymous function defined in the parameter
          /* - built in methods of Arrays:
              -forEach()
              - map()
              - filter()
              - reduce()
              - sum()
              - every()
              - find()
               */
        info.forEach( (person) => {
            let card = document.createElement('div');
            card.setAttribute('class','profileCard');
            card.innerHTML = person.name 
                   // let miniBox = document.querySelector('.shadow')
                    miniBox.append(card)       //             miniBox.append(card)
           //Remove the eventListener
           // 1. find the target
           e.target.removeEventListener('click', meetTeam);

     
          })
         let cards = info.map( (person,index, array) => {
            let card = document.createElement('div')
            card.setAttribute('class',"profileCard")
            card.innerHTML = person.name
            return card
         })

         let filteredCards = cards.filter( (card)=> {
           if (card.innerHTML.includes('e')){
             return true
           } else {
             return false
           }
         })
         console.log(filteredCards);

    } catch(error){
        console.log('uh oh error');
    }
}

// const meetTeam = () => {   
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((json) => {
//           let info = json;
//         console.log(info);
//         let leanne ={
//             name: info[0].name,
//             email: info[0].email,
//             phone: info[0].phone,
//             porfolio: info[0].website
//         }
//         console.log('Employee One:', leanne);

//         info.forEach(element => {
//             console.log(element);
//             //create a div element
//             let card = document.createElement('div');
//             card.setAttribute('class','profileCard');
//             card.innerHTML = element.name 
//             let miniBox = document.querySelector('.shadow')
//             miniBox.append(card)
//         });
//         console.log(leanne.name)
//       })
//       let targot = document.querySelector('.viewer');
//       targot.classList.toggle('curtainHolder');
//       //toggle the bkgrd image..Cue curtain
// }

//Event Listeners
// 1. Select an element to add to an event listener
const btnElement = document.querySelector('.btnChefs')
// 2. Define what type of event we want to add
    //want a click event for the btnElement
    //addEventListener('event',callback function)
btnElement.addEventListener('click',meetTeam);    
//the callback function is meetTeam built above
// 3. Define which function to complete the event 

// 1. select element
const newBtn = document.querySelector('#btnOrder')
// 2. add event listener to element
newBtn.addEventListener("click", function (event) {// 3. Define which function to complete the event
    console.log(event.target); //console.log(this); this points to the global object unless the function (event) is used
// create an li element
    let liEl = document.createElement('li');
    liEl.innerHTML = 'Order List';
    console.log(liEl)

    const divEl = document.querySelector(".screen");
    //append to the screen div
    divEl.append(liEl);

  });

// Select the btn
const btnInput = document.querySelector(".btn-input");
btnInput.addEventListener("click", () => {
  // Create li element
  let liEl = document.createElement("li");
  // Take input from users
  const inputEl = document.getElementById("user-data");
  // Take input from user
  const inputData = inputEl.value;
  inputEl.value = "";
  liEl.innerHTML = inputData;
  // Add element onto the body
  const divEl = document.querySelector(".screen");
  // Append element to the screen
  divEl.append(liEl);
}); 

const homeElement = document.querySelector(".home");

const ulElement =document.querySelector(".ul-parent");

ulElement.addEventListener('click', (event) => {
  event.target.textContent ="New Text here"
  console.log(event.target)
  console.log(event.target.textContent)
  console.log('was the parent clicked');

})

// const rootElement =document.querySelector("html");
// rootElement.addEventListener('click', (e) => {
//   e.target.textContent="Home new Text";
//   console.log('home was clicked');
//   console.log('which element is carring the event listener?',this);
// });










// # Callback function

// # api request and output 
//     # fetch()
//         # .map ---  .filter 

// # object-oriented programming
//         # Encapsulation
//                     # let jordan = { 
//                     #     name: '',
//                     #     age: 0,
//                     #     occupation: ''
//                     #     introduceYourself: function(){
//                     #         console.log(`Hi, my name is #{name}`)
//                     #     }
//                     # }
//         # Abstraction
//         # Inheritance
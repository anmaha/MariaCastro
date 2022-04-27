console.log('app.js file is attatcheed')

let score = 0;

const card1st = document.querySelector('.card1');

console.log(card1st)


const questionPrompt1 = () => {
    let questionPrompt = prompt('What is the capital of New York?');
    let answerDiv = document.querySelector('.answer');
    if (questionPrompt === 'Albany'){
        answerDiv.innerHTML = 'You are correct! The capital of New York is Albany, New York.'
    } else {
        answerDiv.innerHTML = "Wrong answere! Try again!"
    }

}

card1st.addEventListener('click',questionPrompt1);
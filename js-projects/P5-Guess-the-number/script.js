const randomNumber = console.log((parseInt(Math.random()*100 + 1)));
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const p = document.querySelector('p');

let prevGuess = []
console.log(prevGuess);
let guessedNum = 1
console.log(guessedNum);
// let playGame = true;

submit.addEventListener('click', function(number){
    number = userInput.value;
    if(number<randomNumber){
        alert('please gues higher vlaue')
    }
})
   





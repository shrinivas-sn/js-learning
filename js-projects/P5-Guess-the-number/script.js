const randomNumber = console.log((parseInt(Math.random()*100 + 1)));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const p = document.querySelector('p');

let prevGuess = []
let numGuess = 1
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a vlid number')
    }
    else if(guess<1){
        alert('Please enter the number above 1')
    }
    else if (guess>100){
        alert('Number cannot be greater than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. The random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed the right Number')
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is too low')
    }
    else if(guess > randomNumber){
        displayMessage('Number is too high')
    }
    
}

function displayMessage(message){
    lowOrHigh.innerHTML = '<h2>${message}</h2>'
}

function displayGuess(message){
    userInput.value = ''
    guessSlot.textContent = `${guess}`
}

function endGame(){
    
}

function newGame(){
    
}



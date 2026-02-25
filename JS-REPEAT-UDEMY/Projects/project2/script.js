// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'NEW TEXT';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Event listener
let secretNumber = parseInt(Math.random()*20 + 1);
console.log(secretNumber);
let score = 20;
const bodyStyle = document.querySelector('body');
let highScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    if(!guess){
        document.querySelector('.message').textContent = 'No number';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
        bodyStyle.style.backgroundColor = "green";
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        
    }else if(guess !== secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = guess > secretNumber ? ' Number is too high' : 'Number is too low';
            score--;
            document.querySelector('.score').textContent = score;
            bodyStyle.style.backgroundColor = "red";
        }else{
            document.querySelector('.message').textContent = 'You lost the game'
            score = 0;
        }   
    }
    //If score goes higer than guess
    // else if(guess > secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent = 'Too high Number';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         bodyStyle.style.backgroundColor = "red";
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game'
    //         score = 0;
    //     }   

    //     //If score goes lower than guess score
    // }else if(guess < secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent = 'Too low Number';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         bodyStyle.style.backgroundColor = "orange";
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game'
    //     }  
    // }
});

const again = document.querySelector('.again');
console.log(again);
again.addEventListener('click', function(){
    secretNumber = parseInt(Math.random()*20 + 1);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = ""
    bodyStyle.style.backgroundColor = "#222"
})

const buttons = document.querySelectorAll('.button')
console.log(buttons);
const body = document.querySelector("body")
const mainDiv = document.querySelector('.main-div')

buttons.forEach(function (button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
        mainDiv.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
        mainDiv.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
        mainDiv.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
        mainDiv.style.backgroundColor = e.target.id
        }
    })
})
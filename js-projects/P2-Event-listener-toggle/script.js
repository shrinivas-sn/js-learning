const button = document.querySelectorAll('.button')
console.log(button)
button[0].style.backgroundColor = "red"
// button[2].style.backgroundColor = "red"

//Button1 Event listener
const button1 = document.querySelector('#button1');
 button1.addEventListener('click', function(){
    if(button1.style.backgroundColor == "red"){
        button1.style.backgroundColor = "green"
    }
    else{
        button1.style.backgroundColor = "red"
    }
 })
//Button2 Event listener
const button2 = document.querySelector('#button2');
button2.addEventListener('click', function(){
    switch (button2.style.backgroundColor) {
        case "white":
            button2.style.backgroundColor = "blue"
            break;
        case "blue":
            button2.style.backgroundColor = "green"
            break;
        default:
            button2.style.backgroundColor = "white"
    }
})

//Button3 Event listener
const button3 = document.querySelector('#button3');
button3.addEventListener('click', function(){
    button3.classList.toggle("active")
})

//Button4 Event listener
const button4 = document.querySelector('#button4');
    button4.addEventListener('click', () => {
        if(button4.style.backgroundColor == "white"){
            button4.style.backgroundColor = "blue";}
        else{
            button4.style.backgroundColor = "white";
        }
    })


// Event listener using a parent and targeting specific element suing target function
const box2 = document.querySelector('.box2')
box2.style.backgroundColor = "aqua";
box2.addEventListener('click', (click) => {
    if(click.target.id === 'button5'){
        button5.style.backgroundColor= "blue"
    }
    else{
        button5.style.backgroundColor = "white"
    }
    if(click.target.id === 'button6'){
        click.target.classList.toggle("active")
    }
    if(click.target.id === 'button7'){
        click.target.classList.toggle("active")
    }
    if(click.target.id === 'button8'){
        click.target.classList.toggle("active")
    }
})
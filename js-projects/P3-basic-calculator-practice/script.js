const button = document.querySelectorAll('.btn')
const display = document.getElementById('display')
const clear = document.getElementById('clear')
console.log(button)

let output = ""
button.forEach( buttonClick => {
    buttonClick.addEventListener('click', function(click){   //buttonClick tells us that for each button is clicked this click function should be done
            const value = click.target.textContent; //if user clicks on any button then that is stored in the vlaue variable
            if(click.target.id === "result-btn"){
                output = eval(output); 
            }
            else{
                output += value;
            }
            display.textContent = output;
    })
})   

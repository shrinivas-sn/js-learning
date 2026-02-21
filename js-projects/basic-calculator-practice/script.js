const button = document.querySelectorAll('.btn')
const display = document.getElementById('display')
console.log(button)

let output = ""
button.forEach( buttonClick => {
    buttonClick.addEventListener('click', function(click){
            // console.log(click.target.textContent);
            const value = click.target.textContent;
            if(click.target.id === "result-btn"){
                output = eval(output);
            }
            else{
                output += value;
            }
            display.textContent = output;
    })
})   

const inputField = document.querySelector('#input');
const result = document.querySelector('.display');
const submitBtn = document.querySelector('#submit');

inputField.addEventListener("input", function(){
    let inputValue = Number(inputField.value);
    console.log(inputValue)

    if(isNaN(inputValue)){
        alert('Enter the valid number')
    }
    else{
        result.textContent = `Entered Number is: ${inputValue}`;
    }
})

const inputField = document.querySelector('#input');
const inputFieldTwo = document.querySelector('#input2');
const result = document.querySelector('.display');
const resultTwo = document.querySelector('.display2');
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

inputFieldTwo.addEventListener('change', function(e){
    let inputValueTwo = Number(inputFieldTwo.value);
    if(inputValueTwo>5){
        alert('Please enter above 5')
    }else{
        resultTwo.textContent = `Entered number is: ${inputValueTwo}`;
    }
})

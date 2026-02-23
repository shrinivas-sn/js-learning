const inputField = document.querySelector('#input');
const result = document.querySelector('.display');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', () => {
    const inputValue = inputField.value
    result.textContent = `number is: ${inputValue}`
})

// const inputField = document.querySelector('#input'); // Removed .value from here
// const result = document.querySelector('.display');
// const submitBtn = document.querySelector('#submit');

// submitBtn.addEventListener('click', () => {
//     const inputValue = inputField.value; // Reads the value at the time of the click
//     result.textContent = `The number is : ${inputValue}`;
// });
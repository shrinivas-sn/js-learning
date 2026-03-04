# BMI Calculator App

This project is an interactive BMI (Body Mass Index) Calculator web application built using HTML, CSS, and JavaScript. It allows users to input their personal details and instantly calculate their BMI, along with additional health metrics. The app demonstrates modern JavaScript (ES6+) features, DOM manipulation, template literals, functions, and Promises.

## Features
- User-friendly form to input personal details (name, gender, age, weight, height, step count, sleep hours)
- BMI calculation with instant feedback and color-coded results
- Data persistence using localStorage
- Responsive and visually appealing UI with custom CSS
- Utilizes modern JavaScript best practices

## How It Works
1. **DOM Manipulation**: The app dynamically interacts with the DOM to read user input, display results, and update the UI. Event listeners are attached to buttons and form elements to handle user actions.
2. **Template Literals**: Template literals are used to construct dynamic messages and display results, such as showing the calculated BMI and health status directly in the UI.
3. **Functions**: The logic for handling form submission, calculating BMI, and updating the UI is organized into functions. This modular approach improves readability and maintainability.
4. **Promises**: The app structure is designed to be easily extendable with asynchronous operations (e.g., fetching health tips or BMI ranges from an API). Promises can be used for such features, and the code is written in a way that supports future async enhancements.
5. **Modern ES6+ Features**: The codebase uses `const` and `let` for variable declarations, arrow functions, destructuring, and other ES6+ syntax for cleaner and more efficient code.

## Example Code Highlights
```js
// DOM selection and event handling
const formBtn = document.querySelector('.form-btn');
formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  // ...collect input and process
});

// Using template literals for dynamic output
bmiSpan.textContent = `The BMI of user is: ${bmiResult}, Person is healthy`;

// Function for BMI calculation
function calculateBMI(weight, height) {
  return (weight / ((height * height) / 10000)).toFixed(2);
}

// Example of using localStorage (could be extended with Promises for async storage)
localStorage.setItem('userDetails', JSON.stringify(userDetails));
```

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Enter your details and use the calculator!

## Screenshots
![BMI Calculator Screenshot](screenshot.png)

## License
This project is open source and free to use for educational purposes.

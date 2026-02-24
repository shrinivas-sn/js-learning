//functions can hold one or many lines of code or variables
// function logger(){
//     console.log('My name is shrinu');
// }
//Reusing the funciton
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);


//Function Declarations types
// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }
// const age1 = calcAge1(2000);
// console.log(age1);

// const clacAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// const age2 = clacAge2(2001);
// console.log(age1 , age2)


//Arrow funciton in JS => It is a special form of function which is a shortcut of function

const calcAge1 = function(birthYear){
    return 2037 - birthYear;
}

const calcAge2 = birthYear => 2037 - birthYear;
const age2 = calcAge2(2001);
console.log(age2);
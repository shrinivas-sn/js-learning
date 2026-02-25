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

// const calcAge1 = function(birthYear){
//     return 2037 - birthYear;
// }

// const calcAge2 = birthYear => 2037 - birthYear;
// const age2 = calcAge2(2001);
// console.log(age2);


//function in a function

// function cutFruitPieces(fruit){
//     return fruit*4;
// }
// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return juice;
// }
// console.log(fruitProcessor(2,3));

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const  age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Rahul'));
console.log(yearsUntilRetirement(2027, 'Rahul'));
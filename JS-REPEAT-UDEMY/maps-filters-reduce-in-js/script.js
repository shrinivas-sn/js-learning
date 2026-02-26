//Mapping the value in arrays in js is called the Maps method
//Maps builds new array on top of the original array with the defined function that are set for the original array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurotoUsd = 1.1;
// const movementsUsd = movements.map(function(mov) {
//     return mov*eurotoUsd;    
// })

// const movementsUsd = movements.map(mov => mov*eurotoUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsUSD = [];
// for(const mov of movements) movementsUSD.push(mov*eurotoUsd);
// console.log(movementsUSD);

// const movementsUSD = movements.map((movements, i, arr) => {
//    `Movement ${i+1} deposited : ${movements}` 
// })
// console.log(movementsUSD);

const names = 'shrinu Shirnu Rahul';
const userName = names.toLowerCase().split().map(function(name) {
    return name[0];
});
console.log(userName);
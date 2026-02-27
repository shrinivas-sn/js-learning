//fetch api request 

// const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);

// //What is promise- it is an object that is used as a placeholder for the future result of an asynch operations

// const getCountryData = function(country){
// fetch('https://restcountries.com/v3.1/name/india').then(function(response){
//     console.log(response);
//     return response.json();
// }).then(function(data){
//     console.log(data);
// })
// };
// getCountryData('india')

const lotteryPromise = new Promise(function(resolve, reject){
    if(Math.random() >= 0.5){
        resolve('You won Lottery')
    }else{
        reject('You lost the Lottery');
    }
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
const mainBox = document.querySelector('.main-div');
const formDiv = document.querySelector('.form-div');
const formBox = document.querySelector('.input-box');
const formInput = document.querySelector('.input');
const formBtn = document.querySelector('.form-btn');
const names = document.querySelector('.names');

mainBox.addEventListener('click', function(e){
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    //conditions before calculating the results of BMI
    if(height<=0){
        results.innerHTML = ("Please give a valid height");
    }else if(weight<=0){
        results.innerHTML = ("Please give a valid weight");
    }
    else{
    const bmi = ((weight)*1000/((height*height))/10000) //tofixed is used to letting the vlaue to only upto 2 decimal

    // Display The result
    results.innerHTML = `<span>${bmi}</span>`
    };

    if(results.textContent < 18){
        evaluation.innerHTML= `${results.textContent} BMI, The person is healthy`
    }
    else {
        evaluation.innerHTML = `The person is Unhealthy`
    }
});


// names.addEventListener('input', function(e) {
//     let namesValue = names.value;
//     if(namesValue > 0){
//         alert('enter valid name');
//     }else{
//         console.log('No interruption')
//     }
// })


// formBtn.addEventListener('click', function(e) {
//     alert('The details have been submitted');
// })

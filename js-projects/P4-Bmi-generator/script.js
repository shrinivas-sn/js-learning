const mainBox = document.querySelector('.main-div')

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
})

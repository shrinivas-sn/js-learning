const formDiv = document.querySelector('.form-div');
const inputBox = document.querySelector('.input-box');
const formBtn = document.querySelector('.form-btn');
const formInput = document.querySelector('.form-input');
const mainBox = document.querySelector('.main-div');
const calcBtn = document.querySelector('.calc-btn');

formBtn.addEventListener('click', function(e){
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const gender = document.querySelector('#gender').value;
    const age = Number(document.querySelector('#age').value);
    const weight = Number(document.querySelector('#form-weight').value);
    const height = Number(document.querySelector('#form-height').value);
    const stepCount = Number(document.querySelector('#step-count').value);
    const sleepHours = Number(document.querySelector('#sleep-hours').value);
    const allResults = document.querySelector('.results-div')
    console.log(weight);
    const userDetails = {
        userName: name,
        userGender: gender,
        userAge: age,
        userWeight: weight,
        userHeight: height,
        userSteps: stepCount,
        userSleep: sleepHours,
    };
    console.log(userDetails);
    alert('The Persnol details have been submitted')

    //Calculating the BMI, BMR AND SQC result using user details
    const bmrBtn = document.querySelector('#bmr-btn');
    const bmiBtn = document.querySelector('#bmi-btn');
    const sqcBtn = document.querySelector('#sqc-btn');

    //BMI calculation using userDetails
    bmiBtn.addEventListener('click', function(e){
        const bmiSpan = document.querySelector('#bmi-span')
        const bmiResult = ((userDetails.userWeight)/((userDetails.userHeight*userDetails.userHeight)/10000)).toFixed(2);
        // ((weight)/((height*height)/10000)).toFixed(2)
        bmiSpan.textContent = `The BMI value of the user is: ${bmiResult}`;
    });

    //BMR calculation using userDetails
    bmrBtn.addEventListener('click', function(e){
         const bmrSpan = document.querySelector('#bmr-span');
        if(userDetails.userGender === 'male'){
            const bmrResult = 10*userDetails.userWeight + 6.25*userDetails.userHeight - 5*userDetails.userAge +5
            bmrSpan.textContent = `For male the BMR value of the user is : ${bmrResult}`;
        }else if(userDetails.userGender === 'female'){
            const bmrResult = 10*userDetails.userWeight + 6.25*userDetails.userHeight - 5*userDetails.userAge -161;
            bmrSpan.textContent = `For female the BMR value of the user is : ${bmrResult}`;
        };
    });

    //SQC calculation using userDetails
    sqcBtn.addEventListener('click', function(e){
        const sqcSpan = document.querySelector('#sqc-span')
        if(userDetails.userAge>=3 && userDetails.userAge<=5){
            sqcSpan.textContent = 'The user has to sleep alteast 10 to 13 hours'
        }else if(userDetails.userAge>5 && userDetails.userAge<=12){
            sqcSpan.textContent = 'The user has to sleep alteast 9 to 12 hours'
        }else if(userDetails.userAge>12 && userDetails.userAge<=18){
            sqcSpan.textContent = 'The user has to sleep alteast 8 to 10 hours'
        }else if(userDetails.userAge>18 && userDetails.userAge<=64){
            sqcSpan.textContent = 'The user has to sleep alteast 7 hours'
        }else if(userDetails.userAge>64 && userDetails.userAge<=100){
            sqcSpan.textContent = 'The user has to sleep alteast 7 to 8 hours'
        }        
    });

});

calcBtn.addEventListener('click', function(e){
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    //conditions before calculating the results of BMI
    if(height<=0){
        results.innerHTML = ('Please give a valid height');
        return;
    }else if(weight<=0){
        results.innerHTML = ('Please give a valid weight');
        return;
    }
    const bmi = ((weight)/((height*height)/10000)).toFixed(2);
    results.textContent = `The BMI value is: ${bmi}`
    if(bmi< 18.5){
        evaluation.innerHTML= `${bmi} The person is Underweight`
    }else if(bmi>=18.5 && bmi<=24.99){
        evaluation.innerHTML = `${bmi} The person is Healthy`;
    }else if(bmi>24.99 && bmi<=29.99){
        evaluation.innerHTML = `${bmi} The person is Overweight`;
    }else if(bmi>29.99){
        evaluation.innerHTML = `${bmi} The person is Obese`;
    }
});



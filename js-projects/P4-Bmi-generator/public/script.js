const formDiv = document.querySelector('.form-div');
const inputBox = document.querySelector('.input-box');
const formBtn = document.querySelector('.form-btn');
const formInput = document.querySelector('.form-input');
const mainBox = document.querySelector('.main-div');
const calcBtn = document.querySelector('.calc-btn');

// Get the userDetails from saved local storage
const savedUserDetails = localStorage.getItem('userDetails');
console.log(savedUserDetails);
let userDetails = JSON.parse(savedUserDetails) || {};
console.log(userDetails);

formBtn.addEventListener('click', function (e){
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const gender = document.querySelector('#gender').value;
    const age = Number(document.querySelector('#age').value);
    const weight = Number(document.querySelector('#form-weight').value);
    const height = Number(document.querySelector('#form-height').value);
    const stepCount = Number(document.querySelector('#step-count').value);
    const sleepHours = Number(document.querySelector('#sleep-hours').value);
    const allResults = document.querySelector('.results-div');
    userDetails = {
        userName: name,
        userGender: gender,
        userAge: age,
        userWeight: weight,
        userHeight: height,
        userSteps: stepCount,
        userSleep: sleepHours,
    };
    // console.log(userDetails);
    alert('The Persnol details have been submitted');
    const userDetailsStorage = JSON.stringify(userDetails);
    localStorage.setItem('userDetails', userDetailsStorage);

    // //Calculating the BMI, BMR AND SQC result using user details
    // const bmrBtn = document.querySelector('#bmr-btn');
    // const bmiBtn = document.querySelector('#bmi-btn');
    // const sqcBtn = document.querySelector('#sqc-btn');

    // //BMI calculation using userDetails
    // bmiBtn.addEventListener('click', function(e){
    //     const bmiSpan = document.querySelector('#bmi-span')
    //     const bmiResult = ((userDetails.userWeight)/((userDetails.userHeight*userDetails.userHeight)/10000)).toFixed(2);
    //     // ((weight)/((height*height)/10000)).toFixed(2)
    //     bmiSpan.textContent = `The BMI value of the user is: ${bmiResult}`;
    // });

    // //BMR calculation using userDetails
    // bmrBtn.addEventListener('click', function(e){
    //      const bmrSpan = document.querySelector('#bmr-span');
    //     if(userDetails.userGender === 'male'){
    //         const bmrResult = 10*userDetails.userWeight + 6.25*userDetails.userHeight - 5*userDetails.userAge +5
    //         bmrSpan.textContent = `For male the BMR value of the user is : ${bmrResult}`;
    //     }else if(userDetails.userGender === 'female'){
    //         const bmrResult = 10*userDetails.userWeight + 6.25*userDetails.userHeight - 5*userDetails.userAge -161;
    //         bmrSpan.textContent = `For female the BMR value of the user is : ${bmrResult}`;
    //     };
    // });

    // //SQC calculation using userDetails
    // sqcBtn.addEventListener('click', function(e){
    //     const sqcSpan = document.querySelector('#sqc-span')
    //     if(userDetails.userAge>=3 && userDetails.userAge<=5){
    //         sqcSpan.textContent = 'The user has to sleep alteast 10 to 13 hours'
    //     }else if(userDetails.userAge>5 && userDetails.userAge<=12){
    //         sqcSpan.textContent = 'The user has to sleep alteast 9 to 12 hours'
    //     }else if(userDetails.userAge>12 && userDetails.userAge<=18){
    //         sqcSpan.textContent = 'The user has to sleep alteast 8 to 10 hours'
    //     }else if(userDetails.userAge>18 && userDetails.userAge<=64){
    //         sqcSpan.textContent = 'The user has to sleep alteast 7 hours'
    //     }else if(userDetails.userAge>64 && userDetails.userAge<=100){
    //         sqcSpan.textContent = 'The user has to sleep alteast 7 to 8 hours'
    //     }        
    // });

});

//Calculating the BMI, BMR and SQC result using user details
    const bmrBtn = document.querySelector('#bmr-btn');
    const bmiBtn = document.querySelector('#bmi-btn');
    const sqcBtn = document.querySelector('#sqc-btn');
    //BMI calculation using userDetails
    bmiBtn.addEventListener('click', function(e){
        const bmiSpan = document.querySelector('#bmi-span');
        const resultDisplay = document.querySelector('.result-display');
        const bmiResult = ((userDetails.userWeight)/((userDetails.userHeight*userDetails.userHeight)/10000)).toFixed(2);
        // ((weight)/((height*height)/10000)).toFixed(2)
        // bmiSpan.textContent = `The BMI value of the user is: ${bmiResult}`;
        if(bmiResult<18.5){
            bmiSpan.textContent = `The BMI of user is: ${bmiResult},
            Person is Underweight`;
            bmiSpan.style.background = 'rgb(37, 170, 218)';
        }else if(bmiResult>=18.5 && bmiResult<24.9){
            bmiSpan.textContent = `The BMI of user is: ${bmiResult},
            Person is healthy`;
            bmiSpan.style.background = 'rgb(37, 218, 70)';
        }else if(bmiResult>=24.9 && bmiResult<29.9){
            bmiSpan.textContent = `The BMI of user is: ${bmiResult},
            Person is Overweight`;
            bmiSpan.style.background = 'rgb(226, 126, 59)';
        }else if(bmiResult>=29.9){
            bmiSpan.textContent = `The BMI of user is: ${bmiResult},
            Person is Obese`;
            bmiSpan.style.background = 'rgb(230, 67, 105)';
        };
    });

    //BMR calculation using userDetails
    bmrBtn.addEventListener('click', function(e){
         const bmrSpan = document.querySelector('#bmr-span');
        if(userDetails.userGender === 'male' || userDetails.userGender === 'Male'){
            const bmrResult = 10*userDetails.userWeight + 6.25*userDetails.userHeight - 5*userDetails.userAge +5
            bmrSpan.textContent = `For male the BMR value of the user is : ${bmrResult}`;
        }else if(userDetails.userGender === 'female' || userDetails.userGender === 'Female'){
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


//Calculator container with a logic to test dom manipulation, this is for illustration purpose only
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
        evaluation.innerHTML= `${bmi} The person is Underweight`// using template literals to display the results
    }else if(bmi>=18.5 && bmi<=24.99){
        evaluation.innerHTML = `${bmi} The person is Healthy`;
    }else if(bmi>24.99 && bmi<=29.99){
        evaluation.innerHTML = `${bmi} The person is Overweight`;
    }else if(bmi>29.99){
        evaluation.innerHTML = `${bmi} The person is Obese`;
    }
});

//Displaying a health tip using Mock API
function fetchHealthTip() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            if(userDetails.userGender === 'male' || userDetails.userGender === 'Male'){
                resolve("For males drink at least 8 glasses of water daily!");
            }else if(userDetails.userGender === 'female' || userDetails.userGender === 'Female'){
                resolve("For Females Drink at least 7 glasses of water daily!");
            }else{
                resolve("In general every person has to drink at least 7 glasses of water daily!");
            };
        }, 1000);
    });
};
// 1. Grab the HTML elements
const tipBtn = document.querySelector('#tip-btn');
const tipDisplay = document.querySelector('#tip-display');

// 2. Hire the Waiter! Notice the word "async" right before "function"
tipBtn.addEventListener('click', async function() {
    tipDisplay.textContent = "Loading your health tip..."
    const theTip = await fetchHealthTip();
    tipDisplay.textContent = theTip;
});


//Displaying the saved user details on the web page 
// const displayUsers = document.querySelector('#display-user');
// displayUsers.textContent = JSON.stringify(userDetails, null, 2);

const nameSpan = document.querySelector('#name-span');
const genderSpan = document.querySelector('#gender-span');
const ageSpan = document.querySelector('#age-span');
const weightSpan = document.querySelector('#weight-span');
const heightSpan = document.querySelector('#height-span');
const stepSpan = document.querySelector('#step-span');
const sleepSpan = document.querySelector('#sleep-span');

nameSpan.textContent = userDetails.userName;
genderSpan.textContent = userDetails.userGender;
ageSpan.textContent = userDetails.userAge;
weightSpan.textContent = userDetails.userWeight;
heightSpan.textContent = userDetails.userHeight;
stepSpan.textContent = userDetails.userSteps;
sleepSpan.textContent = userDetails.userSleep;


// Tring map method in application using userDetails
const filterDisplay = document.querySelector('#filter-box');

const filterByAge = Object.values(userDetails);
console.log(filterByAge);

newFilter = filterByAge.filter(function(age){
    if(age.userName>18){
      return age;  
    };
});
console.log(newFilter);

// const filter1 = document.querySelector('.filter');

const temperature = [85, 92, 78, 95, 88, 101];
const newTemperature = temperature.filter(function(temp){
    if(temp>90){
        return temp;
    };
});
console.log(newTemperature);

const displayTemp = document.querySelector('#filter-temp');
const newTemp = newTemperature.map(function(temp){
    const displayTemperature = `<div class = "temp-div">The temperatures above 90 degrees are: ${temp}</div>`;
    return displayTemperature;
});
displayTemp.innerHTML = newTemp.join('<br>');


//Filtering job using the filter method on arrays in js

const jobApplication = [{ company: 'TechCorp', role: 'Frontend Developer', status: 'Interview Scheduled' },
    { company: 'Innovate AI', role: 'Machine Learning Intern', status: 'Under Review' },
    { company: 'DataSystems Inc', role: 'Software Engineer', status: 'Assessment Pending' }
];

const filterJobApplication = jobApplication.filter(function(filter){
    if(filter.company === 'TechCorp'){
        return filter;
    };
});
console.log(filterJobApplication);

const filterJobs = document.querySelector('#filter-jobs');
const displayFilter = filterJobApplication.map(function(filter){
    const displayHtml = `<div> The Company which is want to join is: ${filter.company} as a ${filter.role} and my ${filter.status} at tomorrow </div>`;
    return displayHtml;
});

filterJobs.innerHTML = displayFilter.join('');

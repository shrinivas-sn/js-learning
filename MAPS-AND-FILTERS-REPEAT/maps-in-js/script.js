const displayUser= document.querySelector('#display-user');
const displayUsn= document.querySelector('#usn');
const displayName= document.querySelector('#name');

//creating a array of data
const userDetails = [
    {name: 'Shrinivas', usn: '01FE20BEC241'},
    {name: 'Rahul', usn: '01FE20BEC241'},
    {name: 'Varun', usn: '01FE20BEC243'},
    {name: 'Soham', usn: '01FE20BEC244'},
    {name: 'Aman', usn: '01FE20BEC245'},
    {name: 'Bharat', usn: '01FE20BEC246'},
    {name: 'Govind', usn: '01FE20BEC247'},
];


const allUserDetails = userDetails.map(function(user){
    const displayHtml = `
        <div class = "user-card">
        <h1>User detials:</h1>
        <h2>User name: ${user.name}</h2>
        <h3>User usn: ${user.usn}</h3>
        <p>Extra added line to test map function</p>
        </div>`;
    return displayHtml;
});

displayUser.innerHTML = allUserDetails.join('');


//map method to display patients detials
const displayPatient = document.querySelector('#display-patient');

const patientDetails = [
    {name: 'Shrinivas', disease: 'fever'},
    {name: 'Rahul', disease: 'cough'},
    {name: 'Varun', disease: 'stomach pain'},
    {name: 'Soham', disease: 'head ache'},
    {name: 'Aman', disease: 'throat infection'},
    {name: 'Bharat', disease: 'eye pain'},
    {name: 'Govind', disease: 'common cold'},
];

const newPatients = patientDetails.map(function(patient){
    const displayHtml = `
    <div class = "patient">
        <h1>The patient detals are given below</h1>
        <h2>Patient Name: ${patient.name}</h2>
        <h3>Patient Disease: ${patient.disease}</h3>
        <p>This line is to test the map filter functionality</p>
    </div>`;
    return displayHtml;
});
displayPatient.innerHTML = newPatients.join('');


// displaying Job detials of user using map method to get comfortable 

const myJobApplication = document.querySelector('#display-job')

const jobApplications = [
    { company: 'TechCorp', role: 'Frontend Developer', status: 'Interview Scheduled' },
    { company: 'Innovate AI', role: 'Machine Learning Intern', status: 'Under Review' },
    { company: 'DataSystems Inc', role: 'Software Engineer', status: 'Assessment Pending' }
];

const displayJobApplication = jobApplications.map(function(job){
    const displayJobs = `
    <div class = "job">
        <h1>Here are my latest Job Applications</h1>
        <h2>Company Name: ${job.company}</h2>
        <h3>Job Role: ${job.role}</h3>
        <h3>Application Status: ${job.status}</h3>
    </div>
    `;
    return displayJobs;
});
myJobApplication.innerHTML = displayJobApplication.join('');


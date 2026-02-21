// let task = []

// function addTask(learn){
//     task.push({
//         name: learn,
//         progress: false
//     });
// }
// addTask("learn");
// console.log(task[0])
// console.log(task[0].name);
// console.log(task[0].progress);

//Task 2
let students = []

function addStudents(studentName, studentUsn, age){
    students.push({
        name: studentName,
        usn: studentUsn,
        age: age
    });
}
addStudents("Rahul","01fe20bec241", 23);
addStudents("Rohan", "01fe20bec242", 24);
addStudents("Praveen", "01fe20bec243", 25);
addStudents("Rohit", "01fe20bec244", 26);
console.log(students);
console.log(students[2].usn);
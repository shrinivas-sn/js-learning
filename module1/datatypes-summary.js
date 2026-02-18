/* Premitive datatypes
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol -> used for unique values
7. BingInt - large integer values*/

/*Non premitive datatypes
1. Arrays
2. Objects
3. Functions*/

// Stact and Heap memory
//1. Stack -> Premitive datatype is used
//2. Heap -> Non premitive datatyps is used

// let name = "shrinusn"
// let anotherName = name
// anotherName = "rahul"
// console.log(anotherName)
// console.log(name)

let user1 = {
    Username :"shrinus",
    age : 24,
    place : "hubballi"
}
let user2 = user1
user2.age = 25
console.log(user1.age);
console.log(user2.age);
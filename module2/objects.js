//Singleton objects means standalone objects

// Object Literals
// const jsUser = {
//     userName: "shrinu",
//     age: 24,
//     city: "hubli",
//     isloggedIn: false,
//     mySymbol:("key1")
// }
//Accessing of objects
// console.log(jsUser["userName"]);
// console.log(jsUser["isloggedIn"])
// console.log(jsUser["mySymbol"])

// Object freezing
// Object.freeze(jsUser)
// jsUser.age = 34
// console.log(jsUser.age)

//functions in Objects
// const jsUser = {
//     userName: "shrinu",
//     age: 24,
//     city: "hubli",
//     isloggedIn: false,
//     mySymbol:("key1")
//  }

//  jsUser.greeting = function(){
//     console.log("hello shrinu");
//  }
// console.log(jsUser.greeting());

//Singleton Object
// const tinderUser = new Object()  
// tinderUser.id = "1234"
// tinderUser.name = "Rahul"
// tinderUser.isLoggedIn = false


//Nested Objects
// const regularUser = {
//    email: "rahul@gmail.com",
//    fullName: {
//       firstName: "rahul",
//       lastName: "chaudhary"
//    }
// }
// console.log(regularUser)
// console.log(regularUser.fullName.lastName)

// const obj1 = {1: "a", 2: "b", 3:"c"}
// const obj2 = {1: "a", 2: "b", 3:"c"}
// const obje3 = {obje1,obj2} Noe defined
// const obje3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = {
//    userDetials:
//    {
//       id: 1,
//       email: "h@gmail.com"
//    }
// }
// users.email
// console.log(users)

//Destructuring in Objects
// const course = {
//    courseName: "js in hindi",
//    courseFees: "100rs",
//    courseInstructor: "hitesh"
// }
// const{courseFees: Fees} = course
// console.log(Fees);
// const{courseInstructor: teacher} = course
// console.log(teacher);
// const{courseName} = course
// console.log(courseName)

//Json in objects
// {
//    "name": "hitesh",
//    "courseName": "js in hindi",
//    "pirce": "free"
// }
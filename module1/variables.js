/* To run this file 
 node varibales.js */

const accountId = 1234
let accountEmail = "shrinu@gmail.com"
var accountPassword = "12345"
accountCity = "Hubballi"

//accountId = 12345 //This is not allowed to use two values for same const
console.log(accountId);

accountEmail = "shrinusn@gmail.com"
accountPassword = "123"
accountCity = "Dharwad"


console.table([accountEmail, accountPassword, accountCity])

/*Do not use var for moder js coding 
instead we use let as a variables 
Bcs of issue in block and functional scope 
So the modern trend is to use let instaed of var */

let accountState;
console.log(accountState)
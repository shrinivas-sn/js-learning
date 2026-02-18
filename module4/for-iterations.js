//For loop

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is achieved");
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 2; i++){
//     for(let j = 0; j <= 2; j++)
//     console.log(i,j);
// }

// for(let i = 1; i<=2; i++){
//     for(j=1; j<=10; j++){
//         console.log(i + "*" + j + "=", i*j);
//     }
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        console.log("5 is detected");
        continue
    }
    console.log(index);
    
}
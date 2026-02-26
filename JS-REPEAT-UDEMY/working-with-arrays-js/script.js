// //Slice method in array
// let arr = ['a', 'b', 'c', 'd', 'e,'];
// console.log(arr.slice(2)); //starts with index 2 and listouts all the elements after 2
// console.log(arr.slice(2, 4)); // 4th index will not be inlcuded so only c and d will be printed
// console.log(arr.slice(-1)); // d and e elements will be taken so takes the end of the array elements
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // makes a shallow copy of a original array

// //Splice method in arrays
// //Splice methods mutates the arrays
// // console.log(arr.splice(2)); //the first 2 elements deltes the original arrays
// console.log(arr); // this will print only left out arrays which are a and b due to splicing
// console.log(arr.splice(-1)); //the last element which is b will be printed
// console.log(arr.splice(1,2));
// console.log(arr);

// //Reverse
// let arr2 = ['j', 'i', 'h', 'g', 'f,'];
// console.log(arr2.reverse());
// console.log(arr2); //Reverse methos mutates the original array

// //Cncatinating
// arr3 = ['a', 'b', 'c', 'd', 'e,'];
// let arr4 = ['j', 'i', 'h', 'g', 'f,'];
// const letters = arr3.concat(arr4);
// console.log(letters);

// //Join
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr.at(1));
// console.log(arr.at(2));

// //getting the last element of an array
// console.log(arr[arr.length -1]);
// console.log(arr.slice(-1));
// console.log(arr.at(-1)); // this is at method to get the last element of the array
// console.log(arr.at(-2)); // this is at method to get the last second element of the array

// const str = ('Jonea', 'shrinu');
// console.log(str.at(0));
// console.log(str.at(-1));

const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic,'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu [starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu:{
            open: 12,
            close: 22,
        },
        fri:{
            open: 12,
            close: 22,
        },
        sat:{
            open: 12,
            close: 22,
        }
        
      
    }

};
// let [main, secondary] = resturant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(resturant.order(2, 0));

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// const [j, k] = nested;
// console.log(j);


// destructuring is to break complex data into smaller data structure
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);


//Spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newArr1 = [1, 2, 3, 4, 5, 6, ...arr];
// console.log(newArr1);

// console.log(...arr);

// const newMenu = [...resturant.mainMenu, 'Poha']; // this will create a complete new array on top of mamin menu array with poha as new array element
// console.log(newMenu);

//copying a array
// const mainMenuCopy = [...resturant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [...resturant.mainMenu, ...resturant.starterMenu];
// console.log(menu);

// const str = 'shrinu';
// const letters = [...str];
// console.log(letters);

// const ingredients = [prompt('lets make pasta, Ingredients1 ?'), prompt('Ingredients2 ?'), prompt('Ingredients3 ?')];
// console.log(ingredients);

// const restorantCopy = { ...resturant};
// console.log(restorantCopy);
// restorantCopy.name = 'NewRestorant';
// console.log(restorantCopy.name);
// console.log(resturant.name);


//Rest pattersn and Parameters collect the rest of the elements present in an array

//Spread becasue on right side of =
// const arr = [1, 2, [3, 4]];

//Rest , bcs on left side of = 
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...others] = [...resturant.mainMenu, ...resturant.starterMenu]
// console.log(pizza, risotto, others);


//Rest operator in Objects
// const {sat, ...weekdays} = resturant.openingHours;
// console.log(weekdays);

// const add = function(...numbers) {
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++)
//         sum += numbers[i];
//         console.log(sum);
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 4, 5, 7, 1);

// const x = [23, 5, 7];
// add(...x);


// Short curcuiting && and ||
// //Logical operator use data type, return any data type and short-circuiting
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || true || 'hello' || 23);

// resturant.numGuests = 23;
// const guests1 = resturant.numGuests ? resturant.numGuests:10;
// console.log(guests1);

// const guest2 = resturant.numGuests || 10;
// console.log(guest2);

// //And operator
// console.log('---AND---');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello' && 23 && null && 'jonas');


//nullish and undefined values
resturant.numGuests = 0;
const guests1 = resturant.numGuests ? resturant.numGuests:10;
console.log(guests1)

const guestCorrect = resturant.numGuests ?? 10;
console.log(guestCorrect);



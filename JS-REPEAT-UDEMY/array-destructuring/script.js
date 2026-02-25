const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic,'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu [starterIndex], this.mainMenu[mainIndex]]
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

const restorantCopy = { ...resturant};
console.log(restorantCopy);
restorantCopy.name = 'NewRestorant';
console.log(restorantCopy.name);
console.log(resturant.name);



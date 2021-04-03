'use strict'
// 필수 API

// Array 🥳
// 1st structure

//1. Declaration

const arr1 = new Array();

const arr2 = [1,2];

//2. Index position
// how to access the array

const fruits =['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

console.clear();
//3. looping over an array
// print all fruits

for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

fruits.forEach((fruit) => console.log(fruit));

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//4. addition deletion copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the bengging
fruits.unshift('🍋', '🥭');
console.log(fruits);

//shift: remove an item from the bengging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshif are slower than pop push!!
// splice: remove an item by index position
fruits.push('🧁', '🍰');
console.log(fruits);
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,2,'🍉', '🍏');
console.log(fruits);


//combine two arrays
const fruits2= ['😀', '🤣'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.includes('🍎'));

//last index of

console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));




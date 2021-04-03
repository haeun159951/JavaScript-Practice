//1. Use Strict
//added in es 5
//use this for vanila javascript

'use strict';

// 2. variable  rw(read/write)
//let (added in es6)
let globalName = 'global name'
{
    let name = 'Hailey';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);



//var (dont ever use this!)
//var hoisiting more declaration from bottom to top

console.log(age);
age = 4;
console.log(age);
var age;

//let은 에러 !!

//3. constant read only!
//user const whenever possible

const daysInWeek = 7;
const maxNumber = 5;

// note!
// immutable data types: premitiv types frozen objects
// mutable data types: all objects by default are mutable in JS
//- favor immutable data type always for a few reasons:
// 1.security 2. thread safety 3. reduce human mistakes


//4. varaible types
// primitive, single item: number, string, boolean null undefined symbol
// object box container               
//function, first-class function

const count = 17;
console.log(`value: ${count}, type: ${typeof count}`);

//number - special numeric values: infinity, -infinity, NAN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


//bigINT 
const bigInt =1234412409120941901491043250235n;
console.log(`value: ${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


//string
const char = 'c';
const brendan = 'brendan';

const greeting = 'hello'  + brendan;

//boolean
// false: 0,null, undefined, NaN, ''
// true: any other value

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) //false;


const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2) //true;
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`)


//object real-life object, data structure
const ellie = {name: 'ellie', age:20};

 

// dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));  //h 
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8'/2;
console.log(`value: ${text}, type: ${typeof text}`);


//1. String concatenation

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`);

//2. Numeric operators


//3. Increment and decrement operators

let counter=2;
const preIncrement = ++counter;

//counter = counter + 1;
//preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// postIncrement = counter;
// counter = counter + 1;
const postIncrement = counter++;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);


//logical operators: || && ! 

const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
// if first is true = only first parameter will be checked
// need to put the heavy one at the last so that when the first value
// is true, we dont need to compile it

function check(){
    for(let  i = 0 ; i<10; i++){
        //wasting time
        console.log('#');
    }
}


//equality
const stringFive = '5';
const numberFive = 5;

//loose equality with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive) // false


//Strict equality with type conversion
console.log(stringFive === numberFive);  //false
console.log(stringFive !== numberFive) //true


//obejct equality by reference
const ellie1 = {name:'elle'};
const ellie2 = {name:'elle'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // 각각 다른 레퍼런스 저장 실패
console.log(ellie1 === ellie2); //false 레퍼런스 값이 다르기 때문에 
console.log(ellie1 === ellie3);  //할당했기 때문에 똑같은 레퍼런스를 가자고 있다. 


console.log(0 == false);  // true
console.log(0 === false);  //false: type different



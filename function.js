// function
// fundamental building block in the program
// subprogram can be used multiple times

//1. function declaration
//one function === one thing
function printHello(){
    console.log('Hello');
}

printHello();


function log(message){
    console.log(message);
}

log('Hello@');
log(1234);  //type 상관안해


//2. Parameters
// premitive parameters: passed by value
// object parameter:passed by reference

function changeName(obj){
    obj.name = 'coder';
}

const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3. default parameters(added in es6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}

showMessage('Hi');

//4. Rest parameters(ES6)  -- array

function printAll(...args){

}

args.forEach((arg) => console.log(arg));


//6. return  a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);

//7. Early return, early exit -> bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic
}


// function expression
// first class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an arg to other functions
// can be returned by another function

// 1. Function expression
// a function decalration can be called earlier than it is defined
// a function expression is created when the execution reaches it.

const print = function (){
    console.log('print');
}

print();
const printAgain = print;

printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


//2. call back function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions

const printNo = function print(){
    console.log('no!');
    print();
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function - make it simple
//always anonymous

const simplePrint = function (){
    console.log('simple print!');
}
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;


//function calculate 

function calculate(command, a,b){

    switch(command){
        case 'add':
           return  a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a%b;
        default:
            throw new Error('unknown command!');
    }
}

console.log(calculate('add', 2,3));

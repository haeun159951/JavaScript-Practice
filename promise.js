'use strict'

//Promise is a Javascript object for asynchronous operation
//be aware of state / producer / consumer 
//state: pending -> fulfilled or rejected
// Producer vs Consumer 


//1. Producer
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000); 
});


//2. Consumers: then , catch, finally
//then 은 정상적으로 잘 수행되어서 나오는 결과 값
promise
 .then((value) => {
    console.log(value);
})
.catch(err => {
    console.log(err);
})
.finally(()=>{
    console.log('finally');
});


//3. promise chaining

const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num =>{
    console.log(num)
});


//4.error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });

    const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    }); 
    const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} =>  🍳`), 1000);
    }); 


getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));


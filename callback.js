'use strict';

// Javascript is synchronus  정해진 순서에 맞게 실행됨
//Execute the cold block in order after hoisting
//hoisting: var, function declaration


//Synchronous call back
//함수의 선언이 가장 호이스팅 
function printImmediately(print){
    print();
}

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);

}

//비동기 적인 실행 방법

console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000);

console.log('3');


printImmediately(()=> console.log('hello'));


printWithDelay(()=>console.log('async callback'), 2000);  // 브라우저 요청


//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') || 
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role:'admin'});
            }else{
                onError(new Error('not access'));
            }
        }, 1000);

    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id: ');
const password = prompt("enter your pwd");
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            (userWithRole) =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            }, 
            error =>{
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error);
    }
);
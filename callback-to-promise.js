'use strict';

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
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') || 
                (id === 'coder' && password === 'academy')
            ){
                resolve(id);
            }else{
                reject(new Error('not found'));
            }
        }, 2000);
    });
}
    getRoles(user){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name: 'ellie', role:'admin'});
                }else{
                    reject(new Error('not access'));
                }
            }, 1000);
        });
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id: ');
const password = prompt("enter your pwd");
// userStorage.loginUser(id,password)
// .then(userStorage.getRoles)
// .then(user =>  alert(`Hello ${user.name}, you have a ${user.role} role`))
// .catch(console.log);


async function dreamCoding(id, password){
try{
    const loginUser = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(loginUser);
    return `Hello ${user.name}, you have a ${user.role} role`;
}
catch{
return alert('not Found');
}
}

dreamCoding(id, password).then(console.log); 
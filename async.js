//async & await
// clear style of using promise :)

// 1. async

async function fetchUser(){
   return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


//2 await ✨


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple(){
    await delay(2000);
    return '🍎';
}

async function getBanana(){
    await delay(1000);  // delay 가 끝날때까지 기다렸다가 바나나 리턴
    return '🍌';
}

// call back hell
// function pickFruits(){
//     return getApple()
//     .then(apple =>{
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     })
// }

// pickFruits().then(console.log);

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();

    return `${apple} + ${banana}`
}
pickFruits().then(console.log);

//3. useful Promise APIs

function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);  // 바나나 먼저 출력


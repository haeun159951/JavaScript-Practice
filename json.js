//JSON
//Javascript Object Notation

//1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['APPLE', 'banana']);
console.log(json);


const rabbit = {
    name: 'tori',
    color: 'white', 
    size: null, 
    birthDate: new Date(), 
    //symbol: Symbol('id'),
    jump: () => {
        console.log(`can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


//2.JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jump();  // doesnt have it !!! 
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
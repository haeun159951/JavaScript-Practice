'use strict'

//object-oriented programming
// class: template
//object: instance of a class
//Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. class declaration

class Person{
    //constructor
    constructor( name, age){
        //fields
        this.name = name;
        this.age = age;
    }


    //methods
    speak(){
        console.log(`${this.name}: hell0!`);
    }
}

const haeun = new Person('ellie', 20);
console.log(haeun.name);
console.log(haeun.age);
haeun.speak();


//2. GETTER SETTER
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0? 0 :value;
    }
}

const user1 =  new User('Steve', 'Job', -1);
console.log(user1.age);  // person's age can be minus???

// 3. Fields (public, private)
// Too Soon!!

class Experiment{
    publicField = 2;
    #privateField = 0;
}


const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. static properties and methods
// Too soon!!

class Article{

    static publisher = 'Dream coding!';
    constructor(articleNumber){
        this.article = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }

}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); 
Article.printPublisher();

// 5. inheritance
// a way for one class to extend another class

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}  //extends : 상속
class Triangle extends Shape {

    draw(){
        super.draw();  // 부모꺼 사용가능
        console.log("*")
    }
    getArea(){
        return (this.width * this.height) /2;
        // 필요한 함수만 오버라이딩 해서 사용가능
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
} 

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const rectangle = new Triangle(20, 20, 'red');
triangle.draw();


// 6. class checking: instance of

console.log(rectangle instanceof Rectangle);  //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t
console.log(triangle.toString());
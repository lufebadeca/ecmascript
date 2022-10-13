//declaring class
//class User {};
//instancing from class
//const newUser = new User();

class User {
    //methods
    greeting(){
        return 'Hello';
    }
};

const newUser = new User();
console.log(newUser.greeting());

//contructor (called automatically when instance is created)
class User {
    constructor(){
        console.log('new user created');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new User();

//this
class User {
    constructor(name){
        this.name = name;
        console.log('new user created');
    }
    greeting(){
        return `${this.speak()}, I'm ${this.name}`;
    }
    speak(){
        return 'Hello';
    }
}

const ana = new User('Ana');
console.log(ana.greeting());

// setters and getters
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `${this.speak()}, I'm ${this.name}`;
    }
    speak(){
        return 'Hello';
    }
    get userAge(){
        return this.age;
    }
    set userAge(n){
        this.age = n;
    }
}

const Luis = new User('Luis', 28);
console.log(Luis.userAge);
console.log(Luis.userAge = 20);


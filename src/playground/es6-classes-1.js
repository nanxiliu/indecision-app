class Person {
    constructor(name = 'Anonymous', age = 0) { // always implicitly called
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, ' + this.name;
        return `Hi. I am ${this.name}!`; // template string... a lot easier
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // calls parent constructor function
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() { // override original method
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` His/her major is ${this.major}.`;
        }
        return description;
    }
}


const me = new Student('Nanxi Liu', 20, 'Computer Science');
console.log(me.getDescription())

const other = new Student();
console.log(other.getDescription())
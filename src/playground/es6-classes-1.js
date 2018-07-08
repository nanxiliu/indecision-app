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

const me = new Person('Nanxi Liu', 20);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
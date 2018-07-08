// arguments object - no longer bound with arrow functions
// console.log(arguments);   all arguments passed to function


const add = (a, b) => {
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Nanxi',
    cities: ['Los Angeles', 'Boston', 'Seattle'],
    // printPlacesLived: function() {
    //     console.log(this.name);
    //     console.log(this.cities);

    //     this.cities.forEach((city) => { 
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // }
    printPlacesLived() {
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + 'has lived in ' + city;
        // });
        // return cityMessages;
        // Above is the same as below... below = shorthand
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
  
  // Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - method that returns a new array where the number has been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
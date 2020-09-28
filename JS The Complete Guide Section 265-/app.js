class Age {
  printAge() {
    console.log(this.age);
  }
}

class Person extends Age {
  name = "Max"; //converted into property when you create the class

  constructor() {
    super();
    this.age = 27;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

class test extends Age {
  constructor() {
    super();
    console.log(this);
  }
}

// function Person() {
//   this.age = 27;
//   this.greet = function () {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   };
//   // If return is called with an object, then the object is returned instead of this.
//   // If return is called with a primitive, it’s ignored.
//   return "test";
// }

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// // // Replace default __proto__ object with a new one, in the above example the
// // // prototype is actually set to Age constructor method
// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   },
// // };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// Person.prototype.getName = function () {
//   console.log("this is a prototype function");
// };

// let person = new Person();
// console.log(person);
// person.greet();
// person.printAge();
// person.getName();
// console.log(person.__proto__);

const p = new Person();
console.log(p);

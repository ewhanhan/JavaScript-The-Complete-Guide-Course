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
    //methods on the parent's prototype are not copied onto __proto__
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`,
      this
    );
  }

  // greet = () => {
  //   console.log(this);
  // };
}

class test extends Age {
  constructor() {
    super();
    console.log(this);
  }
}

// function Person() {
//   this.age = 27;
//   // this.greet = function () {
//   //   console.log(
//   //     `Hello, my name is ${this.name} and I am ${this.age} years old`
//   //   );
//   // };
//   // // If return is called with an object, then the object is returned instead of this.
//   // // If return is called with a primitive, it’s ignored.
//   // return "test";
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
// };

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

let person = new Person();
// console.log(person);
person.greet();
// person.printAge();
// person.getName();
// console.log(person.__proto__);

const p = new Person();
const p2 = new Person();
console.log(p);
console.log(p.__proto__ === p2.__proto__); //they use the exact same object (in memory)

// //Method shorthand
// class Person {
//   greet() {
//     console.log("hello");
//   }
// }

// //Property function
// class Person {
//   greet = function () {
//     console.log("hello");
//   };
//   constructor() {
//     this.greet2 = function () {
//       console.log("...");
//     };
//   }
// }

// //Property Arrow function
// class Person {
//   greet = () => {
//     console.log("hello");
//   };

//   constructor() {
//     this.greet2 = () => {
//       console.log("...");
//     };
//   }
// }

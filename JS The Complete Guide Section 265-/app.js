// class Person {
//   name = "Max"; //converted into property when you create the class

//   constructor() {
//     this.age = 27;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   }
// }

function Person() {
  this.age = 27;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  };
}

const person = new Person();
person.greet();

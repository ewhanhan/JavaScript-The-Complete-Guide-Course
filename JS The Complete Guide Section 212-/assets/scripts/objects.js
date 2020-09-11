// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

//object literal notation
//all keys in an object are strings or symbols
const person = {
  "String property": "first property",
  name: "Ewhan Han",
  age: 27,
  hobbies: ["Tennis", "Coding", "Amazon Shopping"],
  greet: function () {
    console.log("Hello!");
  },
  1: "test",
};
//call method
person.greet();

//get property w/ bracket notation, pass in parameter with "" since keys are strings
console.log(person["String property"]);
console.log(person[1]); //any other value than a string is 'coerced' to a string

//Monkey patching
console.log(person.thisVariableDidntexist); //returns undefined, but this becomes a property of the object now
person.thisVariableDidntexist = true;
console.log(person.thisVariableDidntexist);
console.log("We can see that a variable is added during runtime -->", person);
//delete a property
delete person.thisVariableDidntexist;
console.log("Delete this new property using 'delete'", person);

//Computed property names
const userName = "test";
const dynamicAccessObj = {
  [userName]: "test2",
};
console.log(
  "Computed property name is",
  userName + " with value",
  dynamicAccessObj[userName]
); //property name : value --> test: test2
let i = 0;
let a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log("Computed property names and values are:", a.foo1, a.foo2, a.foo3); // 1, 2, 3

//Spread operator for objects
const newPerson = {
  ...person,
  age: 28,
  new: "test",
  newHobbies: [...person.hobbies, "Memes"],
}; //copy person into new object, overwrite the existing age property, create a new property
console.log(newPerson);

//Object destructuring
const { age } = newPerson; //we can extract a specific property from an object
console.log(age);

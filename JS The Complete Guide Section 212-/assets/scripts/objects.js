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
};
//call method
person.greet();

//get a property with bracket notation, pass in parameter with "" since keys are
//strings
console.log(person["String property"]);

//Monkey patching
console.log(person.thisVariableDidntexist); //returns undefined, but this becomes a property of the object now
person.thisVariableDidntexist = true;
console.log(person.thisVariableDidntexist);
console.log("We can see that a variable is added during runtime -->", person);
//delete a property
delete person.thisVariableDidntexist;
console.log("Delete this new property using 'delete'", person);

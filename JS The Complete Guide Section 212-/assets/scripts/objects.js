//object literal notation
const person = {
  name: "Ewhan Han",
  age: 27,
  hobbies: ["Tennis", "Coding", "Amazon Shopping"],
  greet: function () {
    alert("Hello there!");
  },
};
// person.greet();//call method

//Monkey patching
console.log(person.thisVariableDidntexist); //returns undefined, but this becomes a property of the object now
person.thisVariableDidntexist = true;
console.log(person.thisVariableDidntexist);
console.log("We can see that a variable is added during runtime -->", person);
//delete a property
delete person.thisVariableDidntexist;
console.log("Delete this new property using 'delete'", person);

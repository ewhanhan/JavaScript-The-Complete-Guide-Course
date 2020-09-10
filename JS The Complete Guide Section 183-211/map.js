//The Map object holds key-value pairs and remembers the original insertion
//order of the keys. Any value (both objects and primitive values) may be used
//as either a key or a value. A Map object iterates its elements in insertion
//order — a for...of loop returns an array of [key, value] for each iteration.

//Syntax: new Map([iterable])

//create a map
let myMap = new Map();

//keys of a Map can be any value (function, objects, and any primitives)
let key = "a string";
let valuesAreObjects = {};

//set values in the map
myMap.set(key, valuesAreObjects);
console.log(myMap.get(key));

//Iterating through Maps
let myIteratableMap = new Map();
myIteratableMap.set(0, "zero");
myIteratableMap.set(1, "one");
//1. use array deconstructor to iterate through a map
for (let [key, val] of myIteratableMap) {
  console.log(`the key is: ${key}, and the value is: ${val}`);
}
//2. use keys
for (let keys of myIteratableMap.keys()) {
  console.log("The keys in this array are: " + keys);
}
//3. use values
for (let value of myMap.values()) {
  console.log(value);
}
//4. use entries() method, which returns an iterable
for (let [key, value] of myIteratableMap.entries()) {
  console.log(key + " = " + value);
}
//5. use forEach() method
myIteratableMap.forEach(function (value, key) {
  console.log(
    "Iterating through map with forEach(): where key = " + key + " = " + value
  );
});

//clone an map just like an array
let original = new Map([[1, "one"]]);
let clone = new Map(original);
console.log(clone.get(1)); // one
console.log(original === clone); // false. Useful for shallow comparison

//merge two maps
let firstMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
let secondMap = new Map([
  [4, "four"],
  [5, "five"],
  [6, "six"],
]);
let mergedMap = new Map([...firstMap, ...secondMap]);
console.log("Merged map: ", mergedMap);

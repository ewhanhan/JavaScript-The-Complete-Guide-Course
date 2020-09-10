const ids = new Set([1, 2, 3]); //unlike array, where we can create a new Array() and [] **use []**
ids.add(4);
console.log(ids.has(1));
console.log(ids);

//The entries() method returns a new Iterator object that contains[value, value]
//for each element in the Set object, in insertion order. For Set objects there
//is no key like in Map objects. However, to keep the API similar to the Map
//object, each entry has the same value for its key and value here, so that an
//array [value, value] is returned.
for (const entry of ids.entries()) {
  console.log(entry);
  console.log(entry[0]);
}

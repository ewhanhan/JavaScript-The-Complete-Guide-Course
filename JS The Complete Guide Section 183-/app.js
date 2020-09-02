let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
]; //An array can store elements of any type.
console.log(arr); //can call function with arr[3]() or get object properties with arr[1].name

const moreArrays = new Array("Hi!", "Welcome!");
console.log(moreArrays);

const moreNewArrays = new Array(5); //creates an empty array with a fixed length
console.log(moreNewArrays);

/* 
The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, 
whereas Array(7) creates an empty array with a length property of 7 
(Note: this implies an array of 7 empty slots, not slots with actual undefined values). 
*/

const moremoreNewArrays = Array.of(1, 2, 3);
console.log(moremoreNewArrays);

const fromArray = Array.from("foo"); //makes an array from --
console.log(fromArray);

const fromArrayMore = Array.from([1, 2, 3], (eachItemofArray) => {
  return eachItemofArray + eachItemofArray;
});
console.log(fromArrayMore);

function f(...test) {
  return Array.from(test);
}

console.log(f(1, 2, 344, 5));

Array.from([1, 2, 3, 4, 5], (item, Index) => {
  console.log(item, Index); //return the item and the index
});

const listHTMLElement = document.querySelectorAll("li"); //returns nodelist
const newListHTMLArray = Array.from(listHTMLElement); //convert nodelist to array
console.log(newListHTMLArray);

let newPushArray = ["Sports", "Coding"];
newPushArray.push("Testing");
console.log("After push 'Testing'", newPushArray);
newPushArray.unshift("first item");
console.log(
  "After unshift, it will add to the front of the array",
  newPushArray
);

const poppedVal = newPushArray.pop(); //remove and return last element of the array
console.log(newPushArray);
newPushArray.shift(); //removes and returns first element of the array

// Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum", "test");
// myFish is ["angel", "clown", "drum", "test" "mandarin", "sturgeon"]
// removed is [], no elements removed
console.log(myFish);

myFish.splice(2, 1); //delete item at index 2
console.log(myFish);

myFish.splice(2, 2); //remove 2 elements after index
console.log(myFish);

myFish.splice(0, 2, "new item", "new item 2"); //replace index 1 and 2 with new item and new item 2 respectively
console.log(myFish);

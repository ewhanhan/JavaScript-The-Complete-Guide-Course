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

const testResult = [1, 2, 3, 4, 5, 6, 7];
const storedResults = testResult.slice(); //slice() without arguments will copy the entire array

testResult.push("new"); //This will add 'new' to the original array, not the new one
console.log(testResult, storedResults);

const sliceCopy = storedResults.slice(0, 1); //copy from start index to end index but not including end index
console.log(sliceCopy);

const sliceCopy2 = storedResults.slice(2); //copy from index argument to the end
console.log(sliceCopy2);

const newConactArray = sliceCopy2.concat([1, 2, 3, 4]); //concat will create a new array and push the values of the argument array into a new one (combined with the array it's called on)
console.log(newConactArray);

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("index of 7 inside testResullt array -->", testResult.indexOf(7));
console.log(
  "index of new item inside myFish array -->",
  myFish.indexOf("new item 2")
);

//The findIndex() method returns the index of the first element in the array
//that satisfies the provided testing function. Otherwise, it returns -1,
//indicating that no element passed the test.

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

//The find() method returns the value of the first element in the provided array
//that satisfies the provided testing function.
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
function isCherries(fruit) {
  return fruit.name === "cherries";
}
console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array2 = [1, 2, 3];
console.log(array2.includes(2)); // expected output: true

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); // expected output: true
console.log(pets.includes("at")); // expected output: false
//This is essentially the same as indexOf

pets.forEach((element, index, arr) => {
  //foreach has element, index, and array parameters
  console.log(`the pets in this array is: ${element} with index: ${index}`);
});

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

//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
/* Array.from() lets you create Arrays from:
  array-like objects (objects with a length property and indexed elements); or
  iterable objects (objects such as Map and Set). */
const fromArray = Array.from("foo"); //makes an array from string
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

//Foreach
pets.forEach((element, index, arr) => {
  //foreach has element, index, and array parameters
  console.log(`the pets in this array is: ${element} with index: ${index}`);
});

//Map function
let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
console.log(numbers); // numbers is still [1, 4, 9]
console.log(roots); // roots is now [1, 2, 3]

const prices = [2.99, 1.99, 3.99];
const tax = 0.19;

const taxAdjustedPrices = prices.map((element, index, arr) => {
  const priceObj = {
    index: index,
    tax_price: element * (1 + tax),
  };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);

//sort
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices);

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
// sort by value, a-b >= 1, then b is in a lower index
items.sort(function (a, b) {
  return a.value - b.value;
});
// sort by name
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(items);

//The filter() method creates a new array with all elements that pass the test
//implemented by the provided function.
//Filter requires some comparison logic as an argument and will filter the
//inputs based on true/false return value
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

function isBigEnough(value) {
  return value >= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]
console.log(filtered);

const filteredArray = prices.filter((element, index) => {
  return element > 2.0;
}); //filter if prices are higher than 2
console.log(
  "filtered array where new array only has values > 2",
  filteredArray
);

let sum = 0;
prices.forEach((price) => {
  sum += price;
});

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
sum = prices.reduce((prevValue, curValue, curIndex, array) => {
  return prevValue + curValue;
}, 0); //the return value will become the next prevValue (the accumulator). The prevValue will take the first value of the passed array if no initial value is taken

console.log(sum);

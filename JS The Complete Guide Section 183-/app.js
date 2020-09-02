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

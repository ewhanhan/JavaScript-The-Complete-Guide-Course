console.log(typeof document.getElementById("main-title")); //returns the html element (which is a JS object)

console.log(document.querySelector("#main-title")); //returns the first element with the selector
console.log(document.querySelectorAll("#main-title")); //returns a nodelist of all elements with the selector

const elementNode = document.querySelector(".listOfItems");
console.log(elementNode.querySelectorAll("li"));

const listitem = elementNode.querySelectorAll("li"); //listitem will hold reference to NodeList of list elements

//https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc
//innerText will not include CSS, textContent and innerHtml will (as well as text inside)
//textContent is preferred?

listitem.forEach((cv) => {
  console.log(`this, ${cv.innerText}`);
});

const input = document.querySelector("input");
input.value = "CHANGE DEFAULT-TEXT";
// input.setAttribute('value', "CHANGE DEFAULT-TEXT")

//child --> direct child node or element 
//descendant --> direct and indirect child node or element. I.e child element of a child element
//parent --> direct parent node or element
// ancestor --> direct or indirect node/element

const ul = document.querySelector('ul');
const liItem = ul.children //return children elements 

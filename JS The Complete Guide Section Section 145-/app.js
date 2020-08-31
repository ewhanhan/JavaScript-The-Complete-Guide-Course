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
const liItem = ul.children //return children elements as Htmlcollection object (an array-like object)


const h1 = document.getElementById('main-title');
h1.style.color = 'red';
h1.textContent = "Some New Title"

const li = document.querySelector('li:last-of-type'); //Select specific li item with a CSS psudeo-class


console.log(li.parentElement) //parent element of li --> ul element
console.log(li.parentNode) //parent element of li --> ul element
console.log(ul.previousElementSibling) //previous element at same hierarchy as ul --> h1 element
console.log(ul.nextElementSibling)

console.log(ul.querySelectorAll('.listItems'))


const section = document.querySelector('section');
// section.style.backgroundColor = "green";
section.className = "red-bg visible invisible"

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // if(section.className === 'red-bg visible'){
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible"
  // }
  section.className = (section.className === 'red-bg visible') ? "red-bg invisible": "red-bg visible";

  // section.classList.toggle('invisible')
  //alternatively we can section.classList.toggle('invisible')
  //must have invisible class in section first

  section.insertAdjacentHTML("beforeend", "<p>test</p>")
})

let button2 = document.createElement('BUTTON');
button2.textContent = "Test"

document.body.appendChild(button2)
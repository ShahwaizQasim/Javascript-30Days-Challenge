
/* Activity 1: Selecting and manipulating elements*/

let myText = document.getElementById("text");
myText.innerText = 'Change Text';
// console.log(myText);

const color = document.querySelector(".dark");
color.className = 'light'
// console.log(color);



/* Activity 2: Creating and Appending elements*/

let newDiv = document.createElement("div")
// console.log(newDiv);

color.appendChild(newDiv)

const ul = document.createElement("ul");
const li = document.createElement("li");
ul.appendChild(li);
// console.log(ul);



/* Activity 2: Removing Elements*/

const removeElement = document.getElementById("remove");
removeElement.remove();


const removeLastElement = document.querySelector("div");
removeLastElement.lastElementChild.remove();

console.log(color);









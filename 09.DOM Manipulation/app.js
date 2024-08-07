
/* Activity 1: Selecting and manipulating elements*/

let myText = document.getElementById("text");
myText.innerText = 'Change Text';
// console.log(myText);

const bodyColor = document.querySelector(".dark");
bodyColor.className = 'light'
// console.log(color);



/* Activity 2: Creating and Appending elements*/

let newDiv = document.createElement("div")
// console.log(newDiv);

bodyColor.appendChild(newDiv)

const ul = document.createElement("ul");
const li = document.createElement("li");
ul.appendChild(li);
// console.log(ul);



/* Activity 3: Removing Elements*/

const removeElement = document.getElementById("remove");
removeElement.remove();


const removeLastElement = document.querySelector("div");
// removeLastElement.remove();

// console.log(color);



/* Activity 4: Modifying Attributes and Classes*/

const Para = document.getElementById("para");
Para.setAttribute("class","myParagraph")
console.log(Para);

const box = document.querySelector(".box");

box.classList.add("hide");
box.classList.remove("hide");
 

/* Activity 5: Event Handling */

const button = document.getElementById("btn2");
button.addEventListener("click", ()=> {
    Para.innerText = 'Hello World'
})

bodyColor.addEventListener("mouseover", (event) => {
    console.log(event);
    if (event.target === box) {
        box.style.border = '4px solid red';
    }else{
        box.style.border = 'none'
    }
})










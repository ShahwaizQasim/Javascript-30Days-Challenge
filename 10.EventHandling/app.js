/* Activity 1: Basic Event Handling */

// task1
const para = document.querySelector("#myPara");
const button = document.querySelector("#button");
let click = true;

button.addEventListener("click", () => {
  // click
  if (click === true) {
    para.innerText = "Text Change ho gaya";
    button.innerText = "Change Text";
    click = !click;
  } else {
    para.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, enim?";
    button.innerText = "Click";
    click = !click;
  }
});

// task2

const myImg = document.querySelector("#myImg");
const btn1 = document.querySelector("#btn1");
let toggle = true;

btn1.addEventListener("click", () => {
  if (toggle) {
    myImg.classList.add("show");
    btn1.innerText = "Image Hide";
  } else {
    myImg.classList.remove("show");
    btn1.innerText = "Image Show";
  }
  toggle = !toggle;
});

/* Activity 2: Mouse Events */

const main = document.querySelector("body");
const box = document.querySelector(".box");

main.addEventListener("mouseover", (event) => {
  // mouseover
  console.log(event.target);
  if (event.target === box) {
    box.style.backgroundColor = "red";
  }
});

main.addEventListener("mouseout", (event) => {
  // mouseout
  console.log(event.target);
  if (event.target === box) {
    box.style.backgroundColor = "white";
  }
});

/* Activity 3: Keyboard Events */

const myInput = document.querySelector("#myInput");

myInput.addEventListener("keydown", function (event) {
  // keydown
  console.log(`Key Pressed ${event.key}`);
});

myInput.addEventListener("keyup", (event) => {
  // keyup
  console.log(`Key released ${event.key}`);
});

/* Activity 4: Form Events */

const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = event.target.children[0].value;
  const email = event.target.children[1].value;
  const password = event.target.children[2].value;

  console.log("userName", userName);
  console.log("email", email);
  console.log("password", password);

})

/* Activity 5: Event Delegation */

const list = document.getElementById("myList");

list.addEventListener("click", (event) => {
    console.log(event.target.tagName);
   if (event.target.tagName === 'li' ) {
       console.log(`Clicked Item ${event.target.innerText}`);
       
   }
})


const addItem = document.querySelector("#addItem");

addItem.addEventListener("click", () => {
    const newItem = document.createElement('li');
    newItem.innerText = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
})
// Task 1

const btn = document.querySelector(".btn");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  alert("Привіт тобі, клацальщик!");
}

// Task 2

const link = document.querySelector(".link-to-btn");

link.addEventListener("click", createHandler);

function createHandler({ target: { parentElement } }) {
  const btn = document.createElement("button");
  btn.append("Не тицяй сюди");
  btn.classList.add("btn");
  parentElement.append(btn);
}

// Task 3

const lampBtn = document.querySelector(".lamp-btn");

lampBtn.addEventListener("click", colorChangeHandler);

function colorChangeHandler() {
  const lamp = document.querySelector(".lamp");
  lamp.style.backgroundColor = "yellow";
  lamp.style.border = "white";
}

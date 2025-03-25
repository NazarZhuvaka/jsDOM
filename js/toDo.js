// const toDoForm = document.querySelector("#currency-form");

// toDoForm.addEventListener("submit", postHandler);

// function postHandler(event) {
//   event.preventDefault();
//   const formInput = document.querySelector("#form-input").value
//   const toDoTasks = document.querySelector('.to-do-tasks')

//   toDoTasks.append(createTask(formInput))

// }

// function createTask(taskValue) {

//   const p = createElement('p', {classNames: ['1']}, taskValue)

//   const input = createElement('input', {classNames: ['2']}, taskValue)
//   input.setAttribute('type', 'checkbox')

//   const checkboxWrapper = createElement('div', {classNames: ['checkbox-wrapper']},input, p)

//   const btn = createElement('button', {classNames: ['btn']}, 'del')

//   return createElement('article', {classNames: ['task']}, checkboxWrapper, btn)
// }

// function createElement(type, {classNames}, ...childNodes) {
//   const elem = document.createElement(type);
//   elem.classList.add(...classNames);
//   elem.append(...childNodes);

//   return elem;
// }


// const btn = document.querySelector('.btn')

// btn.addEventListener('click', delHandler)

// function delHandler(){
//   const article = document.querySelector('.task')
//   article.style.display = 'none'
// }
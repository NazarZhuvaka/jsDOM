const toDoForm = document.querySelector("#currency-form");

toDoForm.addEventListener("submit", postHandler);

function postHandler(event) {
  event.preventDefault();
  const formInput = document.querySelector("#form-input").value
  const toDoTasks = document.querySelector('.to-do-tasks')

  toDoTasks.append(createTask(formInput))

}

function createTask(taskValue) {

  const p = createElement('p', {classNames: ['paragraph']}, taskValue)
  console.log(p);
  const input = createElement('input', {classNames: ['input']}, taskValue)
  input.setAttribute('type', 'checkbox')
  input.addEventListener('click', delineHandler)

  const checkboxWrapper = createElement('div', {classNames: ['checkbox-wrapper']},input, p)

  const btn = createElement('button', {classNames: ['btn']}, 'del')

  btn.addEventListener('click', delHandler)

  return createElement('article', {classNames: ['task']}, checkboxWrapper, btn)
}

function createElement(type, {classNames}, ...childNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);

  return elem;
}

function delHandler({target}){
  target.parentElement.style.display = 'none'
}

function delineHandler({target}) {
    const p = target.nextElementSibling
    p.classList.remove('checked')

    if(target.checked) p.classList.add('checked') 
}
// Task 1
const section = document.createElement('section')

section.setAttribute('id', 'root')
section.append('Hello world !')
section.style.color = 'blue'

document.body.append(section)

// Task 2

const root = document.querySelector('#root');
root.style.color = 'white';
root.style.backgroundColor = 'purple';

// Task 3

const userName = prompt('Enter your name: ');
const h1 = document.createElement('h1')

h1.append(`Вітаю ${userName}`);

document.body.append(h1)
// console.log(this); // Window object . об'єкте уявлення браузера

// alert('test') // window.alert('test')

// console.dir(document);

/*

    1. Всі елементи на сторінці - об'єкти
    2. Всі елементи можна підписати на події

*/

// function getAlert(event) {
//   // приходить сам об'єкт події
//   // alert('привіт');
//   const btn = event.target;

// //   btn.style.backgroundColor = "red";

//   if (btn.style.backgroundColor === "red") {
//     btn.style.backgroundColor = 'unset'
//   } else {
//     btn.style.backgroundColor = "red";
//   }

//   console.log(event);
// }

// const btnElement = document.getElementById("btn");
// // console.log(btnElement);

// btnElement.addEventListener("click", getAlert);
// 1 варіант: зареєстрували обробник події натискання миші на кнопку
// 2 варіант: навісили обробник натискання миші на кнопку


// const noBtn = document.getElementById('no-btn')

// function hideElem(event) { // приходить об'єкт події
//     // const btn = event.target;
//     // btn.style.display = 'none'

//     event.target.removeEventListener('mouseenter', hideElem);
//     console.log('test'); // спрацює 1 раз
// }

// noBtn.addEventListener('mouseenter', hideElem); // хоч кнопки і немає , але обробник подій досі є

// // noBtn.addEventListener('mouseenter', (event) => {
// //     console.log(event);
// //     // removeEventListener('mouseenter', hideElem); // не зможемо виконати
// // }); 


// const form = document.getElementById('name-form');

// form.addEventListener('submit', welcomeFunc)

// function welcomeFunc(event) {
//   event.preventDefault()

//   const form = event.target
//   const value = form[0].value

//   alert(value)
// }

// form.addEventListener('submit', consoleForm )

// function consoleForm(event) {
//   event.preventDefault();
//   // console.log(event);

//   const form = event.target
//   const value = form[0].value
//   console.dir(form[0]);
//   console.log(value);
// }
// alert('asd')

// const collection = document.getElementsByClassName('paragraph') // верне масивоподібний елемент

// console.log(collection);

// // for(let i = 0; collection.length; i++) {
// //   collection[i].style.color = 'green'
// // }

// // for .. of - спеціальний цикл, який перебирає об'єк по ключам

// for(let p of collection){
//   p.style.color = 'green'
// }

// const buttons = document.getElementsByTagName('button'); // масивоподібний об'єкт
// const arr = [...buttons] // створиться масив // prototype array

// console.log(buttons);
// console.log(arr);

// arr.forEach((item) => {
//   item.style.color = 'red'
// });
// // Array.from(buttons)

// function hello(event) {
//   console.log(event);
//   console.log('hello')

//   event.target.removeEventListener('click', hello)
// }

// for (let btn of buttons) {
//   btn.addEventListener('click', hello)
// }


// const btn = document.querySelector('button');
// // console.log(btn);

// const btn2 = document.querySelector('.super-btn');
// // console.log(btn2);

// const btn3 = document.querySelector('#btn')
// // console.log(btn3);

// const btns = document.querySelectorAll("button")
// console.log(btns);

// const paragraphCollection = document.querySelectorAll('.paragraph:nth-child(even)')

// paragraphCollection[0].innerHTML = 'test' // краще НЕ використовувати

// for(let p of paragraphCollection) {
//   p.style.color = 'red'
//   p.style.backgroundColor = 'yellow'
// }

// console.log(paragraphCollection);



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


const form = document.getElementById('name-form');

form.addEventListener('submit', consoleForm )

function consoleForm(event) {
  event.preventDefault();
  // console.log(event);

  const form = event.target
  const value = form[0].value
  console.dir(form[0]);
  console.log(value);
}
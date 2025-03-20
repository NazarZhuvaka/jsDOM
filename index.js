/*
    Конвертер валют


    Декомпозиція:
        1. Створити html-сторінку з формою, яка містить два поля вводу:
        одне поле для введення суми в одній валюті
        інше поле - для вибору валют, в яку будем конвертувати 

        2. Додати кнопку "конвертувати"

        3. Написати js обробник події відправки форми:
            - отримати значення введеної суми та обраної валюти
            - обчислити конвертовану суму
            - вивести результат конвертації на сторінку

        4. Підписати форму на подію "submit", в якості лісенера викликати функціб з п.3

*/

// const CURRENCY = {
//     USD_TO_UA: 37.65,
//     EUR_TO_UA: 40.61,
// }

// const converterForm = document.querySelector("#currency-converter-form")

// converterForm.addEventListener('submit', convertHandler)

// function convertHandler(event) {
//     event.preventDefault();

//     const amount = Number(document.querySelector("#amount").value);
//     const currency = document.querySelector('#currency').value

//     let convertedAmout;

//     const {USD_TO_UA: usdCourse, EUR_TO_UA: eurCourse} = CURRENCY

//     switch(currency) {
//         case 'USD': {
//             convertedAmout = amount * usdCourse;
//             break
//         }
//         case 'EUR': {
//             convertedAmout = amount * eurCourse
//             break
//         }
//         default: throw new Error('Something problem')
//     }

//     // if (currency === 'USD'){
//     //     convertedAmout = amount * usdCourse
//     // } else if (currency === 'EUR'){
//     //     convertedAmout = amount * eurCourse
//     // } else {
//     //     throw new Error('Something problem')
//     // }
//     const resultDiv = document.querySelector('#result')
//     resultDiv.innerHTML = `${amount} ${currency} = ${convertedAmout.toFixed(2)} UA`
// }



/*
    Маємо div
    Маємо 2 кнопки: зробити червоним і зробити зеленим
    за натисненням кнопки на фоновий колір div має змінитися за div
*/

// const div = document.querySelector('#box');
// console.log(div.classList); // поверне псевдо масив з класами елементами

// div.classList.remove('bg-color-red')

// console.log(div.classList);

// const [redBtn, greenBtn] = document.querySelectorAll('.btn');

// redBtn.addEventListener('click', redBtnHandler);

// function redBtnHandler(event) {
//     // div.style.backgroundColor = 'red'
//     div.classList.toggle('bg-color-red')
// }

// greenBtn.addEventListener('click', greenBtnHandler);

// function greenBtnHandler(event) {
//     div.classList.toggle('bg-color-green')
// }



// Зміна теми сайту

// const body = document.querySelector('body')
// const body = document.body; // працює тільки з body

// const btn = document.querySelector('.switch-btn')

// btn.addEventListener('click', switchColor)

// function switchColor(event) { // обробник події
//     console.log(event);
//     body.classList.toggle('bg-color-black')
// }

// const event = new Event('click');
// console.log(event.composedPath());

// const btn = document.querySelector('button')

// btn.addEventListener('click', btnClickHandler)

// function btnClickHandler(event) { // об'єкт івенту
//     // console.log(event);
//     // console.log(event.composedPath());
//     // alert('Hello');

//     // console.dir(event.target); // той на якому спрацювала подія
//     // target - елемент на якому сталася подія (ціль)
//     // target - елемент до якого подія буде занурюватися
//     // console.dir(event.currentTarget) // той якому належить eventListener
//     // currentTarget - елемент якому належав обробник подій

//     console.log('hi ftom BUTTOM click handler');
// }

// document.body.addEventListener('click', bodyClickHandler)

// function bodyClickHandler() {
//     console.log('hi ftom bodi click handler');
// }

// const clickEvent = new MouseEvent('click')

// btn.dispatchEvent(clickEvent)

/*
    3 Фази події

        1. Фаза занурення
            Подія стається на рівні ОС, ОС передає подію браузеру(Window), той передає подію document -> body -> ... елемент, на якому сталася подія
        
        2. Фаза цілі
            Подія досягла елемента, елемент - це таргет
            
        3. Фаза всплиття.
            Подія починає вспливати у зворотньому напрямку, тобто від елемента (таргета) до ОС
*/


// const button = document.querySelector('button');
// const div = document.querySelector('#root');

// function eventHandlerButton(event) {
//     // target - на кому спрацювала подія
//     console.log('Hi from BUTTOM handler');
//     console.dir(event.currentTarget); // той кому належав обробник події
// }

// function eventHandlerBody(event) {
//     // target - на кому спрацювала подія
//     console.log('Hi from BODY handler');
//     console.dir(event.currentTarget); // той кому належав обробник події
//     event.stopPropagation()
    
//     console.log(this);
//     // Всередині Function Declaration and Function Expression, this -> body
//     // Arrow Function, this -> window
// }

// // stopPropagation()

// button.addEventListener('click', eventHandlerButton, {capture: true});
// // div.addEventListener('click', eventHandler, {capture: true});
// document.body.addEventListener('click', eventHandlerBody, {capture: true});
// // window.addEventListener('click', eventHandler, {capture: true});


// const button = document.querySelector('button');
// console.dir(button)
// 
// button.addEventListener('click', clickHandler);
// 
// function clickHandler({target}) {
    // console.log(target);
    // target.disabled = true
// }

// const buttons = document.querySelectorAll('button') // псевдомасив Nodelist
// const div = document.querySelector('#root')

// console.dir(buttons) // dataset

// // for(let i = 0; i < buttons.length; i++) {
// //     buttons[i].addEventListener('click', clickHandler)
// // }

// // parentNode

// for(let btn of buttons) {
//     btn.addEventListener('click', clickHandler)
// }

// function clickHandler({target: {dataset: {color}, parentNode}}){
//     // const {dataset: {color}} = target
//     // const {parentNode} = target

//     parentNode.style.backgroundColor = color
// }


// const [btn1, btn2] = document.querySelectorAll('button');

// btn1.addEventListener('click', clickHandler);
// btn2.addEventListener('click', clickHandler);

// function clickHandler({target}) {
//     // console.dir(target.parentNode); // body
//     const img = target.parentNode.children[0];
//     // img.setAttribute(name, value)
//     const {src} = target.dataset 
//     img.setAttribute('src', src)
// }

// const div = document.createElement('div') // створюємо елемент у пам'яті
// div.append('Hello world!') // до цього елементу приєднуємо текстовий узол

// document.body.append(div) // приєднуємо створений елемет до body

// // вузлом може бути html-елмент або текст
// function createDiv() {
//     const div = document.createElement('div') // створюємо елемент у пам'яті <div></div>
//     div.classList.add('box') // до елементу приєднуємо стильовий клас <div class="box"></div>
//     div.append('Hello world!') // до цього елементу приєднуємо текстовий узол <div class="box">Hello world</div>
//     document.body.append(div) // приєднуємо створений елемет до body (завжди дбавляє в кінець) -->
//     /*
//         <body>
//             <div class="box">Hello world</div>
//         </body>
//     */
// }

// const btn = document.querySelector('button')
// btn.addEventListener('click', createDiv)
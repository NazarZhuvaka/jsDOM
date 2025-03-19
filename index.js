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

const btn = document.querySelector('button')

btn.addEventListener('click', btnClickHandler)

function btnClickHandler(event) { // об'єкт івенту
    // console.log(event);
    // console.log(event.composedPath());
    // alert('Hello');

    // console.dir(event.target); // той на якому спрацювала подія
    // target - елемент на якому сталася подія (ціль)
    // target - елемент до якого подія буде занурюватися
    // console.dir(event.currentTarget) // той якому належить eventListener
    // currentTarget - елемент якому належав обробник подій

    console.log('hi ftom BUTTOM click handler');
}

document.body.addEventListener('click', bodyClickHandler)

function bodyClickHandler() {
    console.log('hi ftom bodi click handler');
}

const clickEvent = new MouseEvent('click')

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


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

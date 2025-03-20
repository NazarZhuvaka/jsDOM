const field = document.querySelector('#game-field');
const box = document.querySelector('#box');

field.addEventListener('click', clickHandler); //{capture: true}

function clickHandler(event) {
    // якщо ми натискаємо НЕ на ігрове поле - переміщеня не відбувається
    // event.stopPropagation()

    // target - на якому елементі фактично відбувалася подія (на який саме клікнули)
    // currentTarget - якому елменту належав належав оброник подіх
    if(event.currentTarget === event.target) {
        const {target: {children: {box}}, clientX, clientY} = event
        // якшо ми натискаємо на ігрове поле - переміщеню бути

        box.style.top = `${clientY}px`
        box.style.left = `${clientX}px`
    }
}
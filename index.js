// // const root = document.querySelector("#root");

// // function createUserCard(user) {
// //   // 1. Створити обгортку для картинки
// //   const imgWrapper = createImageWrapper(user);

// //   // 2. Створення h2
// //   const h2 = createElement("h2", { classNames: ["username"] }, user.name);

// //   // 3. Створення p
// //   const p = createElement(
// //     "p",
// //     { classNames: ["description"] },
// //     user.description
// //   );

// //   // 4. Створюємо і повертаємо article
// //   return createElement(
// //     "article",
// //     { classNames: ["card-wrapper"] },
// //     imgWrapper,
// //     h2,
// //     p
// //   );
// // }

// // const cardArray = data.map((user) => createUserCard(user));

// // root.append(...cardArray);


// // /**
// //  *
// //  * @param {String} type - тег елементи який нам треба створити
// //  * @param {String[]} classNames - список класів, які треба додати до елемента
// //  * @param  {...Node} childNodes - список дочірніхх вузлів
// //  * @returns {HTMLElement}
// //  */
// // function createElement(type, { classNames }, ...childNodes) {
// //   const elem = document.createElement(type);
// //   elem.classList.add(...classNames);
// //   elem.append(...childNodes);

// //   return elem;
// // }

// // function imageLoadHandler({ target }) {
// //   // console.log('image succes loaded');
// //   const parentWrapper = document.querySelector(`#wrapper${target.dataset.id}`);
// //   // console.log(target);
// //   parentWrapper.children[0].remove();
// //   parentWrapper.append(target);

// //   // краще реалізація:
// // }

// // function imageErrorHandler({ target }) {
// //   target.remove();
// //   // console.log('image loading has erorr');
// // }

// // function createUserImage(user) {
// //   const img = document.createElement("img");
// //   img.setAttribute("src", user.profilePicture);
// //   img.setAttribute("alt", user.name);
// //   img.dataset.id = user.id;
// //   img.classList.add("card-image");

// //   img.addEventListener("load", imageLoadHandler);
// //   img.addEventListener("error", imageErrorHandler);

// //   return img; 
// // }

// // function createUserInitial(user) {
// //   return createElement("p", { classNames: ["user-initial"] }, user.name[0]);
// // }

// // function createImageWrapper(user) {
// //   // 1. Створення заглушки
// //   const imgWrapper = createElement("div", { classNames: ["image-wrapper"] });
// //   imgWrapper.setAttribute("id", `wrapper${user.id}`);

// //   // 2. Визначаємо bg-color заглушки з урахуванням іменні користувача
// //   imgWrapper.style.backgroundColor = stringToColour(user.name);

// //   // 3. Створення картинки
// //   createUserImage(user);
// //   // console.log(createUserImage(user));
// //   // 4. Створення першої букви ім'я юзера
// //   imgWrapper.append(createUserInitial(user));

// //   return imgWrapper;
// // }

// // function stringToColour(str) {
// //   let hash = 0;
// //   str.split("").forEach((char) => {
// //     hash = char.charCodeAt(0) + ((hash << 5) - hash);
// //   });
// //   let colour = "#";
// //   for (let i = 0; i < 3; i++) {
// //     const value = (hash >> (i * 8)) & 0xff;
// //     colour += value.toString(16).padStart(2, "0");
// //   }
// //   return colour;
// // }

// const root = document.querySelector('#root')

// function createUserCard(user) {
//     // 1. Створити обгортку для картинки
//     const imgWrapper = createImageWrapper(user);

//     // 2. Створення h2
//     const h2 = createElement('h2', {classNames: ['username']}, user.name)

//     // 3. Створення p
//     const p = createElement('p', {classNames: ['description']}, user.description)

//     // 4. Створюємо і повертаємо article
//     return createElement('article', {classNames: ['card-wrapper']}, imgWrapper, h2, p) 
// }

// const cardArray = data.map(user => createUserCard(user))

// root.append(...cardArray)

// /**
//  * 
//  * @param {String} type - тег елементи який нам треба створити 
//  * @param {String[]} classNames - список класів, які треба додати до елемента
//  * @param  {...Node} childNodes - список дочірніхх вузлів
//  * @returns {HTMLElement}  
//  */
// function createElement(type, {classNames}, ...childNodes) {
//     const elem = document.createElement(type);
//     elem.classList.add(...classNames);
//     elem.append(...childNodes);

//     return elem;
// }

// function imageLoadHandler({target}) {
//     const parentWrapper = target.parentElement; // Отримуємо батька напряму
//     if (!parentWrapper) return; // Якщо картинка не завантажилась - далі не йдемо

//     const initial = parentWrapper.querySelector('.user-initial');
//     if (initial) initial.remove(); // Видаляємо першу букву тільк якщо вона реально є

//     target.style.display = 'block'; // коли картинка провантажилась - показуємо її
// }

// function imageErrorHandler({target}) {
//     target.remove()
//     console.log('image loading has erorr');

//     createUserInitial(target)
// }


// function createUserImage(user) {
//     const img = document.createElement('img');
//     img.setAttribute('src', user.profilePicture);
//     img.setAttribute('alt', user.name);
//     img.classList.add('card-image');

//     img.style.display = 'none'; // картинка починає завантажуватись. поки не завантажиться повністю - скриваємо картинку

//     img.addEventListener('load', imageLoadHandler)
//     img.addEventListener('error', imageErrorHandler)

//     return img
// }

// function createUserInitial(user) {
//     return createElement('p', {classNames: ['user-initial']}, user.name[0])
// }

// function createImageWrapper(user) {
//     // 1. Створення заглушки
//     const imgWrapper = createElement('div', {classNames: ["image-wrapper"]});

//     // 2. Визначаємо bg-color заглушки з урахуванням іменні користувача
//     imgWrapper.style.backgroundColor = stringToColour(user.name)

//     // 3. Створення картинки
//     const img = createUserImage(user);

//     // 4. Створення першої букви ім'я юзера
//     const initial = createUserInitial(user);

//     imgWrapper.append(initial, img);
    
//     return imgWrapper
// }

// function stringToColour(str) {
//     let hash = 0;
//     str.split('').forEach(char => {
//       hash = char.charCodeAt(0) + ((hash << 5) - hash)
//     })
//     let colour = '#'
//     for (let i = 0; i < 3; i++) {
//       const value = (hash >> (i * 8)) & 0xff
//       colour += value.toString(16).padStart(2, '0')
//     }
//     return colour
// }

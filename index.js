const root = document.querySelector('#root')

function createUserCard(user) {
    // 1. Створення article
    const article = document.createElement('article');
    article.classList.add('card-wrapper');

    // 2. Створення картинки
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    // 3. Створення h2
    const h2 = document.createElement('h2');
    h2.append(user.name);
    h2.classList.add('username');

    // 4. Створення p
    const p = document.createElement('p');
    p.append(user.description);
    p.classList.add('description');

    // 5. Приєднати до артікла(п.1) елементи сстворенні в пункті 2-4
    article.append(img, h2, p);

    // 6. Повертаємо створення article
    return article
}

const cardArray = data.map(user => createUserCard(user))

root.append(...cardArray)


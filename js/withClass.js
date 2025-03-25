class Card {
  constructor(type, { classNames} , ...childNodes) {
    if (!type) {
      throw new Error("Write a type of element");
    }
    this.type = type;
    this.classNames = classNames;
    this.childNodes = childNodes;
  }

  static createElement(type, { classNames}, ...childNodes) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...childNodes);
    return elem;
  }
}

class UserCard extends Card {
  constructor() {
    super("article", { classNames: ["card-wrapper"] });
  }

  createUserImage(user) {
    const img = document.createElement("img");
    img.setAttribute("src", user.profilePicture);
    img.setAttribute("alt", user.name);
    img.classList.add("card-image");
    img.style.display = "none";

    img.addEventListener("load", this.imageLoadHandler);
    img.addEventListener("error", this.imageErrorHandler);

    return img;
  }

  imageLoadHandler({ target }) {
    const parentWrapper = target.parentElement;
    if (!parentWrapper) return;
    const initial = parentWrapper.querySelector(".user-initial");
    if (initial) initial.remove();
    target.style.display = "block";
  }

  imageErrorHandler({ target }) {
    target.remove();
    console.log("Image loading has error");
  }

  createUserInitial(user) {
    return Card.createElement("p", { classNames: ["user-initial"] }, user.name[0]);
  }

  createImageWrapper(user) {
    const imgWrapper = Card.createElement("div", { classNames: ["image-wrapper"] });
    imgWrapper.style.backgroundColor = this.stringToColour(user.name);
    const img = this.createUserImage(user);
    const initial = this.createUserInitial(user);
    imgWrapper.append(initial, img);
    return imgWrapper;
  }

  createUserCard(user) {
    const imgWrapper = this.createImageWrapper(user);
    const h2 = Card.createElement("h2", { classNames: ["username"] }, user.name);
    const p = Card.createElement("p", { classNames: ["description"] }, user.description);
    return Card.createElement("article", { classNames: ["card-wrapper"] }, imgWrapper, h2, p);
  }

  stringToColour(str) {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += value.toString(16).padStart(2, "0");
    }
    return colour;
  }
}

const userCard = new UserCard();
const cardArray = data.map((user) => userCard.createUserCard(user));

const root = document.querySelector("#root");
root.append(...cardArray);

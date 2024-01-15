"use strict";
``;
// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// 5. Выведите содержимое тега title в консоль.
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// 8. Удалите тег h6 на странице.

//1
const getElementLink = document.querySelector("#super_link");
console.log(getElementLink);

// //2
const linksElement = document.querySelectorAll(".card-link");
linksElement.forEach((item) => {
  item.textContent = "Ссылка";
  console.log(item);
});

// 3
const cardLinkEl = document.querySelector(".card-body");
const linkEl = cardLinkEl.querySelectorAll(".card-link");
console.log(linkEl);

//4
const getElementByAtr = document.querySelector('[data-number="50"]');
console.log(getElementByAtr);

//5
const title = document.querySelector("title").textContent;
console.log(title);

//6
const childNode = document.querySelector(".card-title");
console.log(childNode.parentNode);

//7
const newTag = document.createElement("p");
newTag.textContent = "Привет";
const card = document.querySelector(".card");
card.prepend(newTag);

//8
const subtitle = document.querySelector("h6");
subtitle.remove();

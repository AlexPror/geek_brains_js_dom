"use strict";
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// 1.
const item = document.querySelectorAll(".dropdown-item");
item.forEach((element) => {
  element.classList.add("super-dropdown");
});
// console.log(item);

// 2.
const btnElem = document.querySelector(".btn");
btnElem.classList.contains("btn-secondary")
  ? btnElem.classList.remove("btn-secondary")
  : btnElem.classList.add("btn-secondary");
// console.log(btnElem);

// 3.
const menuElemClass = document.querySelector(".menu");
menuElemClass.classList.remove("dropdown-menu");
// console.log(menuElemClass);

// 4.
const link = document.querySelector("div", ".dropdown");
const newElem = `<a href="#">link</a>`;
link.insertAdjacentHTML("afterend", newElem);
// console.log(link);

// 5.
const dropdownBtn = document.querySelector("#dropdownMenuButton");
dropdownBtn.id = "superDropdown";

// 6.
const el = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
el.dataset.dd = "3";

// 7.
const elementBtn = document.querySelector(".dropdown-toggle");
elementBtn.removeAttribute("type");

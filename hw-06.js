// ------------1------------------

// const ulCategoriesRef = document.querySelectorAll('#categories .item');
// const ulCategoriesLenght = ulCategoriesRef.length;
// console.log(`Number of categories: ${ulCategoriesLenght}`);

// ulCategoriesRef.forEach(elem => {
//   // console.log(elem.firstElementChild);
//   console.log(`Category: ${elem.firstElementChild.textContent}`);

//   const categoryElem = elem.lastElementChild;
//   //   console.log(categoryElem);

//   const categoryElemChild = categoryElem.children;
//   const categoryElemChildLength = categoryElemChild.length;
//   console.log(`Elements: ${categoryElemChildLength}`);

//   // const categoryElem = elem.lastElementChild.textContent;
//   // console.log(categoryElem);
// });


// -------------  2  -----------------------------

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// // const ingredientsItem = document.createElement('li');
// // ingredientsItem.textContent = ${element};
// // ingredientsItem.classList.add('item');

// const ingredientsList = document.querySelector("#ingredients");

// const ingredientsItem = element => {
//   const ingredientsItem = document.createElement('li');
// ingredientsItem.textContent = element;
// ingredientsItem.classList.add('item');
// console.log(ingredientsItem);
// return ingredientsItem;
// }
// const ingredientsItemsEl = ingredients.map(ingredientsItem);
// console.log(ingredientsItemsEl);

// ingredientsList.append(...ingredientsItemsEl);




// // second variant

// // const ingredientsList = document.querySelector("#ingredients");

// // const ingredientsItemsEl = [];

// // ingredients.forEach((element) => {
// //   const ingredientsItem = document.createElement("li");
// //   ingredientsItem.classList.add("item");

// //   ingredientsItem.textContent = element;
// //   ingredientsItemsEl.push(ingredientsItem);
// // });

// // ingredientsList.append(...ingredientsItemsEl);

// // console.log(ingredientsList);

// --------------------------   3    --------------------


// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galleryEl = document.querySelector('.gallery');

// const galleryItemsEl = images
//   .map(
//     ({ url, alt }) =>
//       `<li class = gallery__item><img class = gallery__image src = "${url}" alt = "${alt}"></li>`,
//   )
//   .join('');

// galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

// console.log(galleryEl);


// ---------------------------   4   ---------------------


// let counterValue = 0;

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const value = document.querySelector("#value");

// decrementBtn.addEventListener("click", () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// });

// incrementBtn.addEventListener("click", () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// });

//  вариант с классом ......

// class Counter {
//   #counterValue = 0;

//   #elements = {
//     counter: null,
//     buttonDecrement: null,
//     buttonIncrement: null,
//   };

//   constructor(counterSelector, decrementSelector, incrementSelector) {
//     this.#elements.counter = document.querySelector(counterSelector);
//     this.#elements.buttonDecrement = document.querySelector(decrementSelector);
//     this.#elements.buttonIncrement = document.querySelector(incrementSelector);

//     this.#renderCounterValue();
//     this.#bindEvents();
//   }

//   #renderCounterValue() {
//     this.#elements.counter.textContent = this.#counterValue;
//   }

//   #decrement() {
//     this.#counterValue -= 1;
//     this.#renderCounterValue();
//   }

//   #increment() {
//     this.#counterValue += 1;
//     this.#renderCounterValue();
//   }

//   #bindEvents() {
//     this.#elements.buttonDecrement.addEventListener(
//       "click",
//       this.#decrement.bind(this)
//     );
//     this.#elements.buttonIncrement.addEventListener(
//       "click",
//       this.#increment.bind(this)
//     );
//   }
// }

// const counter1 = new Counter(
//   "#value1",
//   '[data-action="decrement1"]',
//   '[data-action="increment1"]'
// );

// -------------------------------  5  -----------------


// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };
// // ошибка---- нет проверки на пробел ----
// // refs.input.addEventListener('input', event => {
// // event.currentTarget.value !== ""
// //   ? (refs.output.textContent = event.currentTarget.value)
// //   : (refs.output.textContent = "Anonymous");
// // });

// refs.input.addEventListener('input', event => {
//   const inputValue = event.currentTarget.value.trim();
//   refs.output.textContent = inputValue !== '' ? inputValue : 'Anonymous';
// });

//  если нужно убрать все пробельі то можно использовать метод replace()===>

// const inputValue = event.currentTarget.value.replace(/\s/g, "");

// если нужно оставить только цифрьі......
// const inputValue = event.currentTarget.value.replace(/\D/g, '');

// \s в данном случае является символьным классом и обозначает пробельный символ, включая пробел, табуляцию и перенос строки. Флаг g указывает, что нам нужно заменить все вхождения символьного класса на пустую строку, а не только первое.

// Регулярные выражения в JavaScript могут использовать флаги, которые изменяют поведение выражения. Вот краткое описание наиболее распространенных флагов:

//     g (глобальный поиск) - ищет все совпадения, а не только первое.
//     i (регистронезависимый поиск) - игнорирует регистр символов при поиске.
//     m (многострочный поиск) - ищет совпадения в многострочном тексте.
//     u (юникодный режим) - включает полную поддержку юникода в выражении.
//     y (контролируемый поиск) - ищет совпадения только в начале указанной позиции.


// -----------------  6  ---------------------


// здесь щшибка... нет проверки на удаление пробелов....

//   const inputText = document.querySelector('#validation-input');
//   const inputLength = Number(inputText.dataset.length);

//   const borderColor = event => {
//     event.currentTarget.value.length === inputLength
//       ? (inputText.classList.add('valid'),
//         inputText.classList.remove('invalid'))
//       : (inputText.classList.add('invalid'),
//         inputText.classList.remove('valid'));
//   };

//   inputText.addEventListener('blur', borderColor);

//  правильно ---------

// const inputText = document.querySelector('#validation-input');
// const inputLength = Number(inputText.dataset.length);

// const borderColor = event => {
//   const trimmedInput = event.currentTarget.value.trim();

//   trimmedInput.length === inputLength
//     ? (inputText.classList.add('valid'), inputText.classList.remove('invalid'))
//     : (inputText.classList.add('invalid'), inputText.classList.remove('valid'));
// };

// inputText.addEventListener('blur', borderColor);

// ---------------------  7  ----------------------

// const refs = {
//   fontSizeControlInput: document.querySelector('#font-size-control'),
//   changedText: document.querySelector('#text'),
// };

// refs.fontSizeControlInput.addEventListener(
//   'input',
//   event => (refs.changedText.style.fontSize = `${event.currentTarget.value}px`),
// );


// ----------------------   8  ---------------


// // виводим в консоль рядок (`${name}: ${value};`)

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value === '' || password.value === '') {
//     alert('Please fill all fields');
//   }

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log(`${name}: ${value};`);
//   });

//   event.currentTarget.reset();

//   // console.dir(HTMLFormElement);
//   //   console.log(formData);
//   //   console.dir(event.currentTarget.elements);
// }

 // виводим в консоль обьект..........


//  const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value === '' || password.value === '') {
//     alert('Please fill all fields');
//   }

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log(`${name}: ${value};`);
//   });

//   event.currentTarget.reset();
//   --------------------------------

//   function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;
  
//   if (email.value === "" || password.value === "") {
//     alert("Please fill all fields");
//   }

//   const formData = new FormData(event.currentTarget);

//   const formValues = {};

//   for (let [name, value] of formData) {
//     formValues[name] = value;
//   }

//   console.log(formValues);

//   event.currentTarget.reset();
// }

// // const formValues = Array.from(formData).reduce((acc, [name, value]) => {
// //   acc[name] = value;
// //   return acc;
// // }, {});

// -----------  ПРАВИЛЬНО   --------------------
// const emailInput = document.querySelector('input[name="email"]');
// const passwordInput = document.querySelector('input[name="password"]');
// const form = document.querySelector('.login-form');

// emailInput.addEventListener('input', () => {
//   emailInput.value = emailInput.value.trim();
// });
// passwordInput.addEventListener('input', () => {
//   passwordInput.value = passwordInput.value.trim();
// });
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   // убираем пробелы с начала и конца но здесь не работает
//   // const trimmedEmail = email.value.trim();
//   // const trimmedPassword = password.value.trim();

//   // проверяем на пустые значения
//   if (email.value === '' || password.value === '') {
//     alert('Please fill all fields');
//     return; // прерываем выполнение функции, чтобы не отправлять данные
//   }
//   const formData = new FormData(event.currentTarget);

//   const formValues = Array.from(formData).reduce((acc, [name, value]) => {
//     acc[name] = value;
//     return acc;
//   }, {});
//   console.log(formValues);

//   event.currentTarget.reset();
// }









// ------------------------   9   -----------------



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const colorValue = document.querySelector('.color');
// const changeColorButton = document.querySelector('.change-color');

// changeColorButton.addEventListener('click', onClickChangeColorButton);

// function onClickChangeColorButton() {
//   colorValue.textContent = getRandomHexColor();
//   document.body.style.backgroundColor = colorValue.textContent;
// }



// ------------------   10   ------------------


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const inputEl = document.querySelector('input');
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const divBoxes = document.querySelector('#boxes');

// inputEl.addEventListener('input', inputValue);

// createBtn.addEventListener('click', createBoxes);

// destroyBtn.addEventListener("click", destroyBoxes);

// function inputValue (value) {
//   return (value = inputEl.value);
// }

// let boxSizes = 30;
// function createBoxes(amount) {
//   amount = inputValue();
  
//   if (isNaN(amount) || amount < 1 || amount > 100) {
//     alert("Please enter a valid number between 1 and 100.");
//     return;
//   }
//   const boxesItems = [];
  
//   for (let i = 0; i < amount; i += 1) {
//     const boxesItem = document.createElement("div");
    
//     boxesItem.style.width = `${boxSizes}px`;
//     boxesItem.style.height = `${boxSizes}px`;
//     boxSizes += 10;
//     boxesItem.style.backgroundColor = getRandomHexColor();
//     boxesItem.style.margin = '10px';
//     boxesItems.push(boxesItem);
//   }
//   divBoxes.append(...boxesItems);
//   console.log(divBoxes.children);
// }

// function destroyBoxes() {
//   while (divBoxes.firstChild) {
//     // divBoxes.removeChild(divBoxes.firstChild);
//     divBoxes.removeChild(divBoxes.children[0]);
//     console.log(divBoxes.firstChild);
//   }
// }

// // function destroyBoxes() {
// //   divBoxes.innerHTML = "";
// // }

// --------  second variant  ---------------

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const inputEl = document.querySelector('input');
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const divBoxes = document.querySelector('#boxes');

// inputEl.addEventListener('input', inputValue);

// createBtn.addEventListener('click', createBoxes);

// destroyBtn.addEventListener('click', destroyBoxes);

// function inputValue(value) {
//   return (value = inputEl.value);
// }

// let boxSize = 30;
// let boxesHTML = '';
// function createBoxes(amount) {
//   amount = inputValue();
//   if (isNaN(amount) || amount < 1 || amount > 100) {
//     alert('Please enter a valid number between 1 and 100.');
//     return;
//   }
//   for (let i = 0; i < amount; i += 1) {
//     boxSize += 10;
//     const boxColor = getRandomHexColor();
//     const boxHTML = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor}; margin: 10px;"></div>`;
//     boxesHTML += boxHTML;
//   }

//   divBoxes.innerHTML = boxesHTML;
//   console.log(divBoxes.children);
// }

// function destroyBoxes() {
//   divBoxes.innerHTML = '';
//   boxesHTML = '';
//   boxSize = 30;
// }


// ----------------------------------------------



const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }
function createPaletteItems() {
  const items = Array.from({ length: 60 }, () => {
    const color = getRandomColor();
    return `
      <button type="button" class="item" data-color="${color}" style="background-color: ${color}"></button>
    `;
  });
  colorPalette.innerHTML = items.join('');
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
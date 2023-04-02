// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
//   };

//   book.rating = 9;
//   book.public = false;
//   book.genres.push("drama");

//   console.log(book.rating); // 9
//   console.log(book.public); // false
//   console.log(book.genres); // ["historical prose", "adventure", "drama"]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   // console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// }
// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   // Ключ
//   values.push(apartment[key]);
//   // Значение свойства
// }
// console.log(keys);
// console.log(values);
// ---------------------------------------
// const prop = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   score: 500,
//   iq: 99,

// }

//   function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;

//   }
// console.log(countProps(prop));
// -------------------------------
// let propCount = 0;
//  let propObjectKeys = Object.keys(object);
// propCount = propObjectKeys.length;

// return propCount;

// -------------------------------------

// -------------------------------------------
// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };

// console.log(Object.keys(object1));

// -----------------
// expected output: Array ["a", "b", "c"]
// ----------------------------------------

// function countProps(object) {
// Change code below this line
// ------- variant 1----------
// let propCount = 0;

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }

// return propCount;
// -------- variant 2-----------------
//  let propCount = 0;
//  let propObjectKeys = Object.keys(object);
// propCount = propObjectKeys.length;

// return propCount;
// --------------variant 3------------------
//  let propCount = 0;
//    let propObjectKeys = Object.keys(object);
//   for (const key of propObjectKeys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps());

// const prop = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   // score: 500,
//   iq: 99,
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   let propObjectKeys = Object.keys(object);
//   for (const key of propObjectKeys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
//   }
// console.log(countProps(prop));

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//  let propObjectKeys = Object.keys(object);
// propCount = propObjectKeys.length;

// return propCount;
//   }
// console.log(countProps(prop));

// const salaries = { mango: 100, poly: 150, alfred: 80 };
// const salaries = { kiwi: 200, poly: 50, ajax: 150 };

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let employees = Object.keys(salaries);
//   for (const key of employees) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary(salaries));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// ----------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

// }

// console.log(hexColors, rgbColors);

// -------------------------------

// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера
// Якщо користувач вводить "Admin",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"
//Пароль перевіряти так:
// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

// const login = prompt('Enter login');

// if (!login) {
//     console.log('Cansel');
// }
// else if (login === 'Admin') {
//       const password = prompt('Enter password');
//       if password =
// }

// -----------------------------
// const minutes = 35; // У змінній minutes лежить число // Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

//  const minutes = 35;

//  if (minutes > 0 && minutes < 15)

// const minutes = 25; if (minutes > 45) { console.log(' 4 quoter'); } else if (minutes > 30) { console.log(' 3 quoter'); } else if (minutes > 15) { console.log(' 2 quoter'); } else console.log(' 1 quoter');

// --------------------

// // Напишіть через світч пошук автора мови програмування // Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор // PHP Расмус Лердорф // C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота // Swift Кріс Латтнер // JS Брендан Ейх // Java Джеймс Гослінг // Python Гвідо ван Россум

// const lang = prompt('Enter language: ')?.toLowerCase();

// switch(lang) {
//   case 'php' :
//     console.log('php Расмус Лердорф');
//     break;
//     case 'C#' :
//     console.log('C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота');
//     break;
//     case 'Swift' :
//     console.log('Swift Кріс Латтнер');
//     break;
//     case 'JS' :
//     console.log('JS Брендан Ейх');
//     break;
// }
// -------------------

//Напишіть цикл, який виводить у консоль //1. числа від max до min за спаданням //2. Виведіть у консоль усіх парні числа від min до max //3. За допомогою циклу for додайте всі парні числа від min до max

// const max = 90;
//  const min = 33;

// //  for(let i = max; i >= min; i -= 1) {
// //   console.log(i);
// //  }

// let total = 0;

//  for(let i = max; i >= min; i -= 1) {
//   if(i % 2 === 0) {
//   console.log(i);
//   total += i;
//   }
//  }

// console.log(total);

// -------------------------------
// Напишіть цикл, який пропонує ввести // число більше 100 через prompt. // Якщо користувач ввів інше число - попросити // ввести ще раз і так далі. // Цикл повинен запитувати число, поки користувач не // введе число більше 100, або натисне кнопку // Скасування в prompt

// let userInput = prompt("Num:");

// while (userInput < 100) {
// if (userInput === null) {
// console.log("Отмена");
// break;
// }
// userInput = prompt("Try again");
// }

// ----------------------------

// Введіть рядок в prompt // Виведіть кількість голосних букв в цьому рядку

// ------------------------

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

//  let total = 0;
//  do {
//  const userInput = prompt("Введіть число");
//  if (userInput === null) {
//  break;
//  }
//  const number = Number(userInput);
//  if (isNaN(number)) {
//  continue;
//  }
//  total += number;
//  } while (true);
//  console.log(total);

// ----------------------------

// Напишіть функцію min(a,b), // яка повертає найменше з чисел a та b. // Приклад викликів: // // min(2, 5) == 2 // min(3, -1) == -1 // min(1, 1) == 1

// function min(a, b) {
//   // if (a > b) {
//   //   return b;
//   // }
//   // else {
//   //   return a;
//   // }
//   return a > b ? b : a;
// }

// console.log(min(5, 10));

// ---------------------------
// За кожен місяць податкова нараховує на ЗП розробника 5% від суми. // Напишіть консольну функцію, на яку користувач вводить суму зп // і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок. // А податкова обчислює кінцеву суму зп без податків, // Суму податків всього і чистий дохід розробника за кожен місяць. // Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 1000;
// const mounthes = 3;
// const tax = 5;
// let pureSalary = 0;
// let sumTax = 0;

// for(let i = 0; i < mounthes; i += 1) {
//  pureSalary += salary *(100 - tax)/100;
//  sumTax += salary * tax / 100;
// }

// console.log('Salary Netto: ', pureSalary);
// console.log('sum of tax: ', sumTax);
// --------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price;
//     }
//   }
//     return null;
//   }

// console.log(getProductPrice('Grip'));
// ---------------------------------

// for (let key of products) {

// }
// if (typeof products['key'] !== "undefined") {
// //ключ есть
//   return this.price;
// }else{
// //ключа нет
//   return null;
// }
// ---------------------------------------
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ------------------------------------------

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
// const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// ---------------------------------------------

// Change code below this line
// function calculateMeanTemperature({ today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } }) {

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} });
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// ----------------------------------

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// ----------------------------------------------

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// -----------------------------

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// --------------------------------------

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [];
// const bestScore = allScores;
// const worstScore = allScores;

// --------------------------------------------

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);

// --------------------------------------------

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки.
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings};

// ---------------------------------------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

// return { ...{ category, priority, completed }, ...data };

// }
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));

// ---------------------------------

// --------modul 3---Задача 32/41

// Change code below this line

// -------- 1 variant-----------
// function addOverNum(minArg, ...args) {
//   let total = 0;
// for (const arg of args) {

// if (arg > minArg) {
//   total += arg;
// }
// }
// return total;
// Change code above this line
// }
// -------- 2 variant-------

// const addOverNum = (one, ...args) => args.reduce((sum, el) => el > one ? sum + el : sum, 0);

//----------variant 3-------Вариант от Grundy с преобразованием true в 1, а false в 0:-------------

// const addOverNum = (one, ...args) => args.reduce((sum, el) => sum + (el > one) * el, 0);

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// ---modul 3-------33/41--------------------------------

// function findMatches([], ...nums) {
//   let matches = [];
//   const arr = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arr.includes(arguments[i])) {
//       matches.push(arguments[i]);
//     }
//   }
//   return matches;
// }
// You could also use the filter() method in javascript to filter the array of numbers passed in to the function.

// function findMatches() {
//   const arr = arguments[0];
//   const nums = Array.from(arguments).slice(1);
//   return nums.filter(num => arr.includes(num));
// }

// function findMatches(arr, ...nums) {
//   return nums.filter(num => arr.includes(num));
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// -----module 3------34/41-----------

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// You could also add these methods to the object by using the object.assign method

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };

// Object.assign(bookShelf, {
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
// });
// Please keep in mind that the above methods are only returning strings, you should implement the actual logic to remove or update the books in the books array.

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// console.log(bookShelf);

// --------module 3-----35/41----------------

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index !== -1) {
//       this.books.splice(index, 1, newName);
//     }
//   },
// };

// In this version of the function, the indexOf method is used to find the index of the oldName in the books array. If it is found, splice method is used to replace the oldName with newName in the books array.

// It's also good to add a return statement after the splice function that indicates whether the book was found and updated or not.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index !== -1) {
//       this.books.splice(index, 1, newName);
//       return `book ${oldName} updated to ${newName}`;
//     }
//     return `book ${oldName} not found`;
//   },
// };
// It's also good to add a check on the input params to make sure that the old name and new name are not empty strings or undefined.

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);

// -----module 3----36/41-----------------------------

// const atTheOldToad = {
//   // Change code below this line

// // potions: [],

//   // Change code above this line
// };

// atTheOldToad.potions = [];

// // atTheOldToad["potions"] = [];

// console.log(atTheOldToad);

// -------------module 3---- 37/41-------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//   // Change code below this line
// // Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени.

//   // return atTheOldToad.potions;

//   //  Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал

//   return this.potions;
// },
//   // Change code above this line
// };
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());

// --------------module 3---------38/41---------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// addPotion(potionName) {
// this.potions.push(potionName);
// },

//   // Change code above this line
// };
// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.potions);

// -----------module 3-------39/41---------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

// let index = this.potions.indexOf(potionName);
// if (index !== -1) {
// this.potions.splice(index, 1);
// }

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);

// ----------module 3------40/41-------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

// let index = this.potions.indexOf(oldName);
// if (index !== -1) {
// this.potions[index] = newName;
// }
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);

// ----------module 3------- 41/41----------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
//  ----- new cod  --------------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return alert(`Error! Potion ${newPotion.name} is already in your inventory!`);
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.potions);
// atTheOldToad.getPotions();
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.potions);

// -----module 4-----1/48--
// --------------function greet(name) {
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet
// // и выводим результат в консоль
// console.log(greet("Mango"));
// // Добро пожаловать Mango.

// // Выводим функцию greet
// // в консоль не вызывая её
// console.log(greet);
// /*
// ƒ greet() {
//      return `Добро пожаловать ${name}.`;
// }
// */
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result =  makePizza();
// const pointer =  makePizza;
// console.log(result, pointer);

// --------module 4-----2/48--------------

// //   // Колбэк-функция
// // function greet(name) {
// //   console.log(`Добро пожаловать ${name}.`);
// // }

// // // Функция высшего порядка
// // function registerGuest(name, callback) {
// //   console.log(`Регистрируем гостя ${name}.`);
// //   callback(name);
// // }

// // registerGuest("Mango", greet);

// // function deliverPizza(pizzaName) {
// //   return `Delivering ${pizzaName} pizza.`;
// // }
// // //-----------------
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName);
// }

// --------------------?????????   решить  --------------------

// let userInput = prompt('Num:');
// while (userInput < Number(100)) {
//   if (userInput === null) {
//     console.log('Отмена');
//     break;
//   }
// console.log('ввели не то число');
//   userInput = prompt('Try again');
// }

// ---------------------------------

// ---------------------------------

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName);
// }

// console.log(makeMessage('Margarita', makePizza));
// console.log(makeMessage('Royal Grand', makePizza));

// ----------------------------------

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// --------------------------

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
//   }
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
//   }
//   registerGuest("Манго", greet);

// ---------------module 4---3/48----------

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
// console.log(`Eating pizza ${pizzaName}`);
// });

// тот же результат------------------

// function makePizza(pizzaName, callback) {
//    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//    callback(pizzaName);
//  }

//  makePizza("Royal Grand", function deliverPizza(pizzaName) {
//    console.log(`Delivering pizza ${pizzaName}.`);
//  });
//  // // Change code below this line
//  function eatPizza(pizzaName) {
//    console.log(`Eating pizza ${pizzaName}`);
//  }
//  makePizza("Ultracheese", eatPizza);

// -exemple ---module 4------4/48---------

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// --------module 4------4/48------------

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// Change code above this line

// ---------var--1-------

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if(this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);

//   }
// };

// // --------------var-----2--------

// // const pizzaPalace = {
// //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
// //   order(pizzaName, onSuccess, onError) {
// //     return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// //   },
// // };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.table(pizzaPalace.order("Big Mike", makePizza, onOrderError));

// ------module 4------5/48-----

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// -----задача==================>

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
// // --------

// // orderedItems.forEach(function (items) {
// //   // console.log(items);
// //   totalPrice += items;
// // })

// // -------
//   orderedItems.forEach(function (item,index) {
//     console.log(item);
//     console.log(`Index ${index}, Value ${item}`);
//     totalPrice += item;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// // let orderedItems = [3,5,8, 9, 12]
// // console.log(calculateTotalPrice(orderedItems));

// -------module 4------6/48-----

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }

// function filterArray1(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function(number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// function filterArray2(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// const num = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const val = 3;
// const val1 = 2;
// const val2 = 6;
// console.log(filterArray(num, val));
// console.log(filterArray1(num, val1));
// console.log(filterArray2(num, val2));

// ------обращение к свойству: ключу и значению-------

// const playlist = {
//   name: "мой супер плейлист",
//   rating: 5,
//   tracks: ["track - 1", "track - 2", "track - 3"],
// }

// console.log(playlist.name);
// const propertyName = "rating";
// console.log(propertyName);
// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist[propertyName]);
// console.log(playlist.propertyName);

// -------------------------------------------------

// // findLargest([1, 2, 3, 4, 5])

// const arr1 = [1, 2, 3, 4, 5];

// // let largest = arr1[0];
// // for (let i = 1; i < arr1.length; i += 1) {
// //   if  (largest < arr1[i]) {
// //     largest = arr1[i];
// //   }
// // }

// let largest = Math.max(...arr1);

// console.log(largest);

// --------------------------

// const words = ["apple", "banana", "cherry", "date", "elderberry"];
// // const filterWords = [];

// // for (const word of words) {
// //   if (word.length > 3) {
// //     filterWords.push(word);
// //   }
// // }
// // console.log(filterWords);
// // -----------

// // const filterWords = words.filter(word => word.length > 3);

// // -------

// const words = ["apple", "banana", "cherry", "date", "elderberry"];
// const filterWords = words.reduce((filtered, word) => {
//   if (word.length > 3) {
//     filtered.push(word);
//   }
//   return filtered;
// }, []);
// console.log(filterWords);
// -----------------------------------------------------------------------

// function checkPass (password) {
//   const ADMIN_PASS = "12345";
//   return password == ADMIN_PASS ? "Welcome!" : "Access denied, wrong password!";
// }

// console.log(checkPass(12345));

// ------------------------

// for (let line = "#"; line.length < 8; line += "#")
// console.log(line);

// for (let i = 1; i < 101; i += 1) {
//   if (i % 3 === 0) {
//     console.log("Fizz");

//   }
//   else if (i % 5 === 0){
//     console.log("Buzz");
//   }
//   else console.log(i);
// }

// for (let i = 1; i <= 100; i += 1) {
//   let output = "";
//   if (i % 3 === 0) {
//   output += "Fizz";
//   }
//   else if (i % 5 === 0) {
//   output += "Buzz";
//   }
//   console.log(output || i);
//   }
// --------

// ---мой вариант----
// const width = prompt('add width : ');
// const height = prompt('add height : ');
// let stringGrid = '# # # #';

// for (let i = 0; i < height; i += 1) {
//   if (i % 2 === 0) console.log(" " + stringGrid);
//   else console.log(stringGrid);
// }

// const width = Number(prompt('add width : '));
// const height = Number(prompt('add height : '));
// let stringGrid = "";
// for ( let i = 0; i < width; i += 1) {
//   stringGrid += "# ";
// }

// for (let i = 0; i < height; i += 1) {
//   if (i % 2 === 0) console.log(" " + stringGrid);
//   else console.log(stringGrid);
// }
// -----книга ----------

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

// ------моя модификация-------

// let width = Number(prompt("Enter the width of the grid: "));
// let height = Number(prompt("Enter the height of the grid: "));
// let lineString = "#".repeat(width).split("").join(" ");

// for ( let i = 0; i < height; i += 1) {

//   if (i % 2 === 0) {
//     console.log(" " + lineString);
//   }
//   else console.log(lineString);
// }
// --------------

// for (let i = 0; i < height; i++) {
//   console.log((i % 2 === 0 ? "" : " ") + lineString);
// }

// ---------------

// let width = Number(prompt("Enter the width of the grid: "));
// let height = Number(prompt("Enter the height of the grid: "));
// let lineString = "#".repeat(width).replace(/#/g, " #");

// for (let i = 0; i < height; i++) {
//     console.log((i % 2 === 0 ? "" : " ") + lineString);
// }

// const w = Number(prompt('введи ширину символов : '));
// const h = Number(prompt('введи кол=во строк : '));
// const simvol = prompt('Введи символ : ');
// const stringW = simvol.repeat(w).split("").join(" ");

// for ( let i = 0; i < h; i += 1) {
//   console.log( i % 2 === 0 ? stringW : ' ' + stringW);
// }
// -----------------------------------------------------

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres =["Jazz", "Blues"];
// genres.push("Rock-n-Roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift([0]));
// genres.unshift("Country", "Reggae");
// console.log(genres);

// ------------------------------

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';

// const valuesArr = values.split(" ");
// console.log(valuesArr);
//  const squareRectangle = Number(valuesArr[0]) * Number(valuesArr[1]);
//  console.log(squareRectangle);

//  ----------------------

// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`elem.${i + 1}: ${fruits[i]}`);
// };

// -------------------------------------------

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i +=1) {
//   console.log(`${namesArr[i]} : ${phonesArr[i]}`);
// };

// -------------------------------------------

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// let string = 'Welcome to the future';

// // const stringArr = string.split(" ");
// // console.log(stringArr);
// // stringArr.shift([0]);
// // console.log(stringArr);
// // stringArr.pop([stringArr.length - 1]);
// // console.log(stringArr);
// // const newString = stringArr.join(" ");
// // console.log(newString);

// console.log(string.split(" ").slice(1, -1).join(" "));
// console.log([...string.split(" ").slice(1, -1)].join(" "));

// ------------------------------

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// const reversString = string.split("").reverse().join("");
// console.log(reversString);

// ---------------------------

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// // console.log(langs.sort());

// // const nums = [2, 1, 6, 5, 4, 3];

// // console.log(nums.sort());

// // or ---

// let result = [];

// for (let i = 0; i < langs.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (langs[i] < langs[j]) {
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }

// console.log(langs);

// ---------------------------------------

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// // for ( let i = 1; i < numbers.length; i += 1) {
// //    if (min > numbers[i]) min = numbers[i];
// // }

// // min = Math.min( ...numbers);
// min = Math.min.apply(null, numbers);

// console.log(min); // 1

// ---------------------------------------

// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const bmi = calcBMI('88,3', '1.75');
// // let weight;
// function calcBMI(weight, height) {
//   const weightNew = Number(weight.replace(',', '.'));
//   const heightNew = Number(height.replace(',', '.'));
//   // return (weightNew / (heightNew * heightNew)).toFixed(1);
//   // or ---
//   const result = weightNew / (heightNew * heightNew);
//   return result.toFixed(1);
// }

// console.log(bmi); // 28.8

// ------------------------

// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function minNum(a, b) {
//   return a < b ? a : b;
// }
// console.log(minNum(6, 10));

// ------------------------

// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
/// значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const dimArr = dimensions.split(" ");
//   console.log(dimArr);
//   return dimArr[0] * dimArr[1];
// };
//  const testDim = "3 4";
// console.log(getRectArea(testDim));

// --------------------------------------

// /// 8 - Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// const formatTime = function(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const digitHour = String(hours).padStart(2, 0);
//   const minute = String(minutes % 60);
//   const digiMinute = String(minute).padStart(2, 0);
//   console.log(`${digitHour}:${digiMinute}`);
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// -------------------------------

// 9 - Напишіть функції для роботи з колекцією навчальних курсів courses:
// /// addCourse(name) - додає курс до кінця колекції
// /// removeCourse(name) - видаляє курс із колекції
// /// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)){
//     console.log('Ви вже маєте такий курс');
//   } else {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   if (courses.includes(name)) {
//     courses.splice(courses.indexOf(name), 1);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
//  function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     courses[courses.indexOf(oldName)] = newName;
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
//  }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('Express', 'NestJS');

// ------------------------------------------------------

// includes(array, value) {
//   return !!~array.indexOf(value);
// }

// Функция includes(array, value) проверяет, содержится ли значение value в массиве array.

// Метод indexOf() возвращает индекс первого вхождения элемента в массив или -1, если элемент не найден.
// Двойное отрицание (!!) используется для приведения значения к логическому типу. Если значение равно -1, то после двойного отрицания будет возвращено false, иначе - true.
// Оператор побитового НЕ (~) инвертирует биты операнда. Если индекс не равен -1, он будет инвертирован и результат будет положительным числом, которое приводится к true.
// В итоге, функция возвращает true, если значение найдено в массиве, иначе false.

// ---------------------------------------

// let node = {
//   type: "Identifier",
//   nameF: "foo"
// },
// type = "Literal",
// nameF = 5;

// // присвоєння інших значень через деструктурування
// ({ type, nameF } = node);

// console.log(type);      // "Identifier"
// console.log(nameF);

// ---------------------------------

// const animal = {
//   legs: 4,
//   tail: true,

// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.table(animal); // {name: 'Манго'}
// console.table(dog.name); // 'Манго'
// console.table(dog.legs);
// console.table(dog);

// --------------------------------

// // <input name="color" value="tomato" >
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
// [inputName]: inputValue,   // {color: 'tomato'}
// };

// console.log(colorPickerData);

// ------------------------------------
/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);
// console.log(fn);

// --------------------------

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола";
// console.log(user.name); // 'Генри Сибола'
// console.log(user);

// ---------------------------

/*
 * Работа с коллекцией (массивом объектов)
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

/*
 * Ищем друга по имени
 */

// let  findFriendByName =  function (allFriends, friendName) {
//  for (const friend of allFriends) {
//   if (friends.name === friendName){
//    return 'НАШЛИ !!!';
//   }
//     return 'НЕ НАШЛИ !!!';
//  }
// };

// console.log (findFriendByName(friends, 'SERGHEI'));

/*
 * Получаем имена всех друзей
 */

// let getAllFriends = function (allFriends) {
//   const names = [];
//   for ( let friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllFriends(friends));

/*
 * Получаем имена только друзей которые онлайн
 */

// let getFriendsOnLine = function(allFriends) {
//   let onLineFriends = [];
//   for (let friend of allFriends) {
//     if (friend.online) {
//         onLineFriends.push(friend);
//     }
//   }
//   return onLineFriends;
// };

// console.table(getFriendsOnLine(friends));

/*
 * Получаем имена только друзей которые ОФФлайн
 */

// let getOffLineFriends = function (allFriends) {
//   const offLineFriends = [];
//   for (const friend of allFriends) {
//     if (!friends.online) {
//       offLineFriends.push(friend);
//     }
//   }
//   return offLineFriends;
// };

// console.table(getOffLineFriends(friends));

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add: function (product) {this.items.push(product);},
//   remove(productName) {
//     for ( let i = 0; i < this.items.length; i += 1) {
//       console.log(this.items[i]);
//       if ( productName === this.items.name) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.items);
// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// -----------------------------------------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// apartment.owner = {};
// apartment.owner.name = "Henry";
// apartment.owner.phone = "982-126-1588";
// apartment.owner.email = "henry.carter@aptmail.com";

// console.table(apartment);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   }
// };

// -------------------------------------------------------

// const arr = [true, false, true, false];

//   console.log(arr.filter(Boolean).length);

// ----------------------------

// function DNAtoRNA(dna) {
//   return dna.split("T");
// }
// console.log(DNAtoRNA("GATATAT"));

// --------------------------------------------

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

// console.log(digitize(1726354));

// -------------------------------------------

// const newArr = [];
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     newArr[i] =(array[i] * value);
//     // newArr.push(array[i] * value);
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [[1, 2, 3, 4, 5]
// console.log(newArr);// [2, 4, 6, 8, 10]

// ------------------------------------------

// const number = [1, 2, 3, 4, 5];

// // function changeEven(numbers, value) {
// //   // Change code below this line
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //   }
// //   // Change code above this line
// // };

// // changeEven(number, 1);
// //  console.log(number);

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     const newArr = [];
//     if (numbers[i] % 2 === 0) {
//       newArr[i] = numbers[i] + value;
//     }
//     newArr[i] = numbers[i];
//   }
//   return newArr;
//   // Change code above this line
// };

// const newArr3 = changeEven(number, 3);
//  console.log(newArr3);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(numbers[i] + value);
//     } else newArr.push(numbers[i]);
//   }
//   return newArr;
//   // Change code above this line
// }

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// // [144, 13, 81, 192, 136, 154]
// console.log(changeEven([17, 24, 68, 31, 42], 100)) ;
// // [17, 124, 168, 31, 142]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// //  [1, 12, 3, 14, 5]

// ------------------------------------------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// -------------------------------------------------

// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) => {
//   const isActiveUsers = users.filter(active => active.isActive === true);
//   const getNameToArray = isActiveUsers.map( user => user.name);
//   return getNameToArray;
// };

// const getActiveUsers = (users) =>  {
//   return users.filter(user => user.isActive === true);
//   }
//   const getInactiveUsers = (users) => {
//     // return users.filter(x =>  x.isActive !== true)
//     return users.filter(x =>  x.isActive === false)
//  };

// console.log(getInactiveUsers(users));
// Moore Hensley, Ross Vazquez и Blackburn Dotson

// ---------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ------------------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

// ----------------------------------------------------------

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// // const eachElementInFirstIsEven = firstArray.every(value => true === (value % 2 === 0));

// // ---> от сюда следует ------> следующий пример ----->

// // const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);

// // Или более кратко:
// const isEven = value => value % 2 === 0;
// const isOdd = value => value %2 === 1;
// const eachElementInFirstIsEven = firstArray.every(isEven);
// // -------------------------
// // const eachElementInFirstIsOdd = firstArray.every(isOdd);
// // или
// const eachElementInFirstIsOdd = firstArray.every(value => !isEven(value));

// const eachElementInSecondIsEven = secondArray.every(isEven);
// const eachElementInSecondIsOdd = secondArray.every(isOdd);

// const eachElementInThirdIsEven = thirdArray.every(isEven);
// const eachElementInThirdIsOdd = thirdArray.every(isOdd);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// --------------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive);
// };

// console.log(isEveryUserActive(users));

// -------------------------------------------

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const isEven = (value ) => value % 2 === 0;

// const anyElementInFirstIsEven = firstArray.some(isEven);
// const anyElementInFirstIsOdd = firstArray.some(value => !isEven(value));

// const anyElementInSecondIsEven = secondArray.some(isEven);
// const anyElementInSecondIsOdd = secondArray.some(value => !isEven(value));

// const anyElementInThirdIsEven = thirdArray.some(isEven);
// const anyElementInThirdIsOdd = thirdArray.some(value => !isEven(value));

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// --------------------------------------------------

// const isAnyUserActive = users => users.some(user => user.isActive);

// console.log(isAnyUserActive(users));

// --------------------------------------------

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previosTime, time) => {
//   return previosTime + time;
// }, 0);

// console.log(totalPlayTime);
// // 2692

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// -----------------------------------------------------

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, {playtime, gamesPlayed}) => {return total + playtime/gamesPlayed}, 0);

// console.log(totalAveragePlaytimePerGame);
//  1023

// --------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const calculateTotalBalance = users => {
//   return users.reduce((acc, balance) => {return acc + balance.balance}, 0);
// };

// const calculateTotalUserBalance = users => {
//   return users.reduce((acc, {balance}) => acc + balance, 0);
// };

// const calculateTotalBalance = users => users.reduce((acc, {balance}) => acc + balance, 0);

// console.log(calculateTotalBalance(users));

// ------------------------------------------------

// const getTotalFriendCount = users => {
//    return users.reduce((total,{friends}) => total + friends.length, 0)
// };
// console.log(getTotalFriendCount(users));

// ---------------------------------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ------------------------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b );

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ----------------------------------------------------

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInReversedOrder);

// --------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((book1,book2) => book1.author.localeCompare(book2.author) );

// const sortedByReversedAuthorName = [...books].sort((book1,book2) => book2.author.localeCompare(book1.author) );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);;

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// --------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // const sortByAscendingBalance = users => {
// //   return  [...users].sort((a, b) => a.balance - b.balance)
// // };

// // console.table((users));
// // console.table(sortByAscendingBalance(users));

// // ----------------------------------

// // const sortByDescendingFriendCount = users => {
// //    return [...users].sort((a, b) => b.friends.length - a.friends.length);
// // };

// // console.table(sortByDescendingFriendCount(users));

// // --------------------------------------------------

// // const sortByName = users => {
// //    return [...users].sort((a, b) => a.name.localeCompare(b.name));
// // };
// // console.log(sortByName(users))

// // ---------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// // отфильтруем по рейтингу, чтоб бьіло меньше значений дальше.....
// .filter(book => book.rating > MIN_BOOK_RATING)
// //  создадим массив авторов
// .map(book => book.author)
// //  отсортируем в алфавитном порядке
// .sort((a, b) => a.localeCompare(b));

// console.log(names);

// // const names = books
// // .filter(({ rating }) => rating > MIN_BOOK_RATING)
// // .map(({ author }) => author)
// // .sort((a, b) => a.localeCompare(b));

// --------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getNamesSortedByFriendCount = users => { return [...users]
//   .sort((a, b) => a.friends.length - b.friends.length )
//   .map(friend => friend.name)};

//   const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort(({friends: {length: a}}, {friends: {length: b}}) => a - b)
//     .map(({name}) => name);

// -----------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

//   const sortUsersByFriendCount = (a, b) => a.friends.length - b.friends.length;
//   const getNamesSortedByFriendCount = users =>
//     [...users]
//       .sort(sortUsersByFriendCount)
//       .map(user => user.name);

// console.log(getNamesSortedByFriendCount(users));
// `['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']`

// const getSortedFriends = users => { return users.flatMap(friend => friend.friends) .filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b))};

// const getSortedFriends = users =>
// users
// .flatMap(({ friends }) => friends)
// .filter((friend, index, array) => array.indexOf(friend) === index)
// .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

// ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]

// ---------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getTotalBalanceByGender = (users, gender) =>
// [...users]
// .filter(user => user.gender === gender)
// .reduce((acc, user) => acc + user.balance, 0);

//   console.log(getTotalBalanceByGender(users, "male"));
//   // 12053
//   console.log(getTotalBalanceByGender(users, "female"));
//   //   8863

// ---------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price;
//     }
//     return null;
//   }

//   // Change code above this line
// }
// console.table(getProductPrice("Droid"));

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
// getOrdersLog() {
//   return this
//   .orders
//   .map(order => `email: ${order.email} dish: ${order.dish}`)
//   .join(" - ");
// },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];

//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// возвращает строку с перечислением данных всех заказов из свойства orders

// console.log(historyService.getEmails());
// возвращает массив всех уникальных почтовых адресов из свойства orders

// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]

// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// [{ email: "artemis@coldmail.net", dish: "Pizza" }]

// -------------------------------------------

// class StringBuilder {
//   constructor(initialValue = '') {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//     return this;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//     return this;
//   }
//   padBoth(str) {
//     this.value = str + this.value + " " +str;
//     return this;
//   }
// }

// const builder = new StringBuilder('initial');
// console.log(builder.getValue()); // 'initial'
// console.log(builder.padEnd(' end').getValue()); // 'initial end'
// console.log(builder.padStart('start ').getValue()); // 'start initial end'
// console.log(builder.padBoth('both ').getValue()); // 'both start initial end both'

// -------------------------------------------

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// -------------------------------------------

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice(price) {
//   return (price > Car.#MAX_PRICE) ? 'Error! Price exceeds the maximum' : 'Success! Price is within acceptable limits';
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// -----------------------------------------------

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted (email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// ------------------------------------------------
// ------------------------------------------------
// --------------------------------------
// --------------------THIS------------------

// const person = {
//   name: "John",
//   lastName : "Doe",
//   id       : 5566,
//   getThis : function() {
//     return this;
//   },
//   getFullName: function() {
//     return this.name + ' ' + this.lastName;
//   },
// };

// console.log('this in object method', person.getThis());
// console.log('this in object method', person.getFullName());

// function test() {
//   console.log('this in a function', this);
// }

// test();

// --this в стрелочной функции...........

// const person = {
//   name: 'Pedro',
//   surname: 'Sanchez',
//   sayName: () => this.name + ' ' + this.surname
// }

// console.log(person.sayName());
// "use strict";

// function show() {
//     console.log(this);
// }

// show();

// document.getElementById('testBtn').addEventListener('click', function() {
//   console.log('this in a event', this);
// // })

// // ///////////////------super exemple------////////////////////

// // function hello (){
// //   console.log('Hello', this);
// // };

// // const person = {
// //   name: 'Serghei',
// //   age: 45,
// //   sayHello: hello,
// //   sayHelloWindow: hello.bind(document),
// //   logInfo: function (job, phone) {
// //     console.group(`${this.name} info:`);
// //     console.log(`Name is: ${this.name}`);
// //     console.log(`Age is: ${this.age}`);
// //     console.log(`Job is ${job}`);
// //     console.log(`Phone is ${phone}`)
// //     console.groupEnd();
// //   }
// // };

// // const ina =  {
// //   name: 'Ina',
// //   age: 35,
// // }

// // // person.sayHello();
// // // person.sayHelloWindow();

// // // ---metod   BIND ---- создает новую функцию и мьі можем вьізвать ее когда захотим ...........
// // person.logInfo();
// // person.logInfo.bind(ina)();
// // // const fnInaInfo = person.logInfo.bind(ina);
// // // fnInaInfo('accounting', '0380111222333');

// // // const fnInaInfo = person.logInfo.bind(ina, 'accounting', '0380111222333');

// // // -----вьізов функции с методом BIND.........
// // // fnInaInfo();

// // person.logInfo.bind(ina, 'accounting', '0380111222333')();

// // // metod ---- CALL и APPLY вьізьівает сразу.......

// // person.logInfo.call(ina, 'accounting', '0380111222333');
// // person.logInfo.apply(ina, ['accounting', '0380111222333']);

// //  ////////===== другая задачка =================

// // вариант 1 задачки

// const array = [1,2,3,4,5];

// // function multiBy(arr, n) {
// //   return arr.map(i => (i * n))
// // }

// // console.log(multiBy(array, 15));

// // вариант 2 задачки

// Array.prototype.multiBy = function (n) {
//   console.log('multiBy this is :', this);
//   // здесь THIS внутри стрелочной функции B другой функции....
//   return this.map(i => (i * n));
// }
// array.multiBy(2);
// console.log(array.multiBy(20));

// ----------------------------------------

// const numbers = [1, 2, 3];

// console.log('НАШ ПЕРВОНОЧАЛЬНЬІЙ МАССИВ:', numbers);
// console.log('СДЕЛАЕМ ОПЕРАЦИЮ С map:');

// let suma = numbers.map(function(value, index, array){
//   array[index] = value * value;
// });
// console.log('НАШ ПЕРВОНОЧАЛЬНЬІЙ МАССИВ:', numbers);
// console.log('НАШ НОВЬІЙ МАССИВ:', suma);

// // Массив "numbers" изменился, потому что метод "map" изменяет каждый элемент исходного массива и возвращает новый массив с этими измененными элементами. В данном случае каждый элемент исходного массива "numbers" был умножен на себя, что привело к изменению массива "numbers".

// console.log('ТО ЧТО МЬІ ПОЛУЧИЛИ С ПОМОЩЬЮ MAP:' , numbers.map(function(value, index, array){
//   return array[index] = value * value;
// }), 'НО РЕЗУЛЬТАТ ПОСЛЕ БУДЕТ=====>');
// console.log('НАШ ПЕРВОНОЧАЛЬНЬІЙ МАССИВ:', numbers);
// console.log('ТО ЧТО МЬІ ПОЛУЧИЛИ С ПОМОЩЬЮ forEach:' , numbers.forEach(function(value, index, array){
//   array[index] = value * value;
// }));

// console.log('НАШ ПЕРВОНОЧАЛЬНЬІЙ МАССИВ:', numbers);
// console.log('НОВЬІЙ МАССИВ:', suma);

// // ЧТОБ ФУНКЦИЯ map работала правильно нужно чтоб CALLBACK ВЕРНУЛ НАМ ЧТОТО:
// //  СРАВНИТЕ ЄТИ ФУНКЦИИ НИЖЕ:

// // let suma = numbers.map(function(value, index, array){
// //   array[index] = value * value;
// // });

// console.log('НАШ ПЕРВОНОЧАЛЬНЬІЙ МАССИВ:', numbers);

// console.log('СДЕЛАЕМ ДРУГУЮ ОПЕРАЦИЮ С map:');

// suma = numbers.map(function(value, index, array){
//   return value * value;
// });
// console.log('НАШ ПЕРВОНОЧАЛЬНЬІЙ МАССИВ:', numbers);
// console.log('НАШ НОВЬІЙ МАССИВ:', suma);

// const numbers = [1, 2, 3];

// console.log('НОВЬІЙ МАСИВ МАП БЕЗ ФУНКЦИИ: ', numbers.map());
// const result = numbers.map();
// console.log('НОВЬІЙ МАСИВ МАП БЕЗ ФУНКЦИИ: ', result );

// -------------------------------------
// const input1 = [0, 4, 6, 8, 8, 8, 5, 5, 7]; // 2
// const input2 = [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]; // 3

// function setReducer(input) {
//   while (input.length > 1) {
//     const newInput = [];
//     let numberOfRepetitions = 1;
//     let currentElement = input[0];

//     for (let i = 1; i < input.length; i += 1) {
//       if (input[i] === currentElement) {
//         numberOfRepetitions += 1;
//       } else {
//         newInput.push(numberOfRepetitions);
//         numberOfRepetitions = 1;
//         currentElement = input[i];
//       }
//     }
//     newInput.push(numberOfRepetitions);
//     input = newInput;
//     console.log(newInput);
//   }
//   return input[0];
// }

// function setReducer(input) {
//   const newInput = [];
//   let numberOfRepetitions = 1;

//   for (let i= 0; i < input.length; i += 1) {
//     if (input[i] === input[i + 1]) {
//       numberOfRepetitions += 1;
//     } else {
//       newInput.push(numberOfRepetitions);
//       numberOfRepetitions = 1;
//     }
//   }
// //  return newInput;

//  return newInput.length === 1 ? newInput[0] : setReducer(newInput);
// }

// console.log(setReducer(setReducer(setReducer(setReducer(setReducer(input1))))));

// function setReducer(input) {
//   let newInput = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === input[i + 1]) {
//       let j = i + 1;
//       while (j < input.length && input[j] === input[i]) j++;
//       newInput.push(j - i);
//       i = j - 1;
//     } else {
//       newInput.push(1);
//     }
//   }
//   return newInput.length === 1 ? newInput[0] : setReducer(result);
// }

// console.log(setReducer(input1));//(6) [1, 1, 1, 3, 2, 1]
// console.log(setReducer(input2));// (9) [1, 1, 3, 1, 1, 1, 1, 1, 1]

// console.log(setReducer(setReducer(input1)));  // [3, 1, 1, 1]
// console.log(setReducer(setReducer(input2)));   // [2, 1, 6]

// console.log(setReducer(setReducer(setReducer(input1)))); // [1, 3]
// console.log(setReducer(setReducer(setReducer(input2)))); //[1, 1, 1]

// console.log(setReducer(setReducer(setReducer(setReducer(setReducer(input1)))))); // [2]
// console.log(setReducer(setReducer(setReducer(setReducer(setReducer(input2)))))); // [1]

// --------------------------
// const input1 = [0, 4, 6, 8, 8, 8, 5, 5, 7]; // 2
// const input2 = [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2];//3

//  function setReducer(input) {
//     const newInput = [];
//     let numberOfRepetitions = 1;

//     for (let i= 0; i < input.length; i += 1) {
//       if (input[i] === input[i + 1]) {
//         numberOfRepetitions += 1;
//       } else {
//         newInput.push(numberOfRepetitions);
//         numberOfRepetitions = 1;
//       }
//     }
//   //  return newInput;

//    return newInput.length === 1 ? newInput[0] : setReducer(newInput);
//   }

// // function setReducer(input) {
// //   let newInput = [];
// //   let currentNum = input[0];
// //   let count = 1;
// //   for (let i = 1; i < input.length; i++) {
// //     if (input[i] === currentNum) {
// //       count++;
// //     } else {
// //       newInput.push(count);
// //       currentNum = input[i];
// //       count = 1;
// //     }
// //   }
// //   newInput.push(count);
// //   return newInput.length === 1 ? newInput[0] : setReducer(newInput);
// // }
// console.log(setReducer(input1));//(6) [1, 1, 1, 3, 2, 1]
// console.log(setReducer(input2));// (9) [1, 1, 3, 1, 1, 1, 1, 1, 1]

// ---------------------------------------

/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);

// --------------------------------------------

/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function (config = {}) {
//   const { brand, model, price } = config;
// 2. Функция вызывается в контексте созданного объекта,
//    то есть в this записывается ссылка на него
// this.brand = brand;
// this.model = model;
// this.price = price;

// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

// 4. Ссылка на обьект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };
// console.log(Car);
// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);
// console.log(myCar);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });

// mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

// User.message =
//   'Я статическое свойство, меня нет на экземплярах или в прототипе.';

// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
// };

// User.logInfo(mango);

// Object.keys()
// Object.value()

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

// ----------------------------

/** *? Напиши функцію конструктор User для *? створення користувача з такими властивостями: *? a. userName - ім'я, рядок *? b. age - вік, число *? c. numbersOfPost - кількість постів, число *? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями *? Додай метод getInfo(), який повертає рядок: *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.` */

//TODO:============================================= /** *? Напиши функцію конструктор Storage який створює об'єкти *? Для управління складом товарів. *? При виклику отримуватиме один агрумент - початковий масив товарів, *? і записувати їх у властивість items. *? Додай методи класу: *? getItems() - повертайте масив товарів *? addItems(item) - отримує новий товар та додає його до поточних *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних */

// ----------------------------------------------------------
// const markup = `<div class="container">
//         <h2 class="title">Скільки коштує мясо на шашлики?</h2>
//         <form action="#" class="form">
//             <label for="price">Ціна грн</label>
//             <input type="text" id="price" name="price" value="50">
//             <label for="quantity">Кількість<span class="amount">1</span>кг </label>
//             <input type="range" id="quantity" name="quantity" value="1" min="1", max="20">
//         </form>
//         <p class="text-right total" id="total"></p>
//     </div>`;
// document.body.insertAdjacentHTML('afterbegin', markup);
// const form = document.querySelector('form');
// const total = document.querySelector('#total');
// const amount = form.querySelector('.amount');
// const quantityInput = document.querySelector('#quantity');

// const recalculateTotal = event => {
//   const { quantity, price } = form.children;
//   if (event.target === quantityInput) {
//     amount.textContent = quantity.value;
//   }
//   total.textContent = price.value * quantity.value;
// };
// form.addEventListener('change', recalculateTotal);

// -----------------------------------------------------------

//// 2. Створити гелерею з картинок використовуючи масив

// При кліку на картинку показувати модалку з написом що зберігіється в полі title.
// Використовувати делегування при обробці кліків

// const images = [
// 	{
// 		"title": "Коник стрибунець",
// 		"src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg"
// 	},
// 	{
// 		"title": "Фрукт",
// 		"src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
// 	},
// 	{
// 		"title": "Люди",
// 		"src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
// 	},
// 	{
// 		"title": "Годиник",
// 		"src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg"
// 	},
// 	{
// 		"title": "Метро",
// 		"src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
// 	},
// 	{
// 		"title": "Хмари",
// 		"src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
// 	},
// ];

// const galleryContainer = document.querySelector('.gallery-container');
// const modal = document.querySelector('.modal');
// const modalTitle = document.querySelector('.modal-title');
// const closeBtn = document.querySelector('.close');
// const imageElements = [];

// // Fill gallery with images from the array
// images.forEach((imageElement) => {
//   const container = document.createElement("div");
//   container.classList.add("gallery-item");
//   const image = document.createElement("img");
//   image.src = imageElement.src;
//   image.dataset.title = imageElement.title;
//   container.appendChild(image);
//   imageElements.push(container);
// });

// galleryContainer.append(...imageElements);

// galleryContainer.addEventListener('click', (event) => {
//     if (event.target.nodeName !== 'IMG') {
// 		return;
//     }
//         modal.style.display = "block";
//         modalTitle.textContent = event.target.dataset.title;
// })

// // Close the modal when clicking outside of it
// window.addEventListener('click', (event) => {
//   if (event.target == modal || event.target == closeBtn) {
//     modal.style.display = 'none';
//   }
// });

// -----------------------------------------------

// // time constants:
// const msInsecond = 1000;
// const secondsInMin = 60;
// const minsInHour = 60;
// const hoursInDay = 24;

// const timer = (targetDate) => {
//   setInterval(() => {
//     // the difference between the optional date and the current time
//     const delta = new Date(targetDate) - new Date();
//     const seconds = String(Math.floor((delta / msInsecond) % secondsInMin)).padStart(2, '0');
//     const minutes = String(Math.floor(
//       (delta / (msInsecond * secondsInMin)) % minsInHour,
//     )).padStart(2, '0');
//     const hours = String(
//       Math.floor(
//         (delta / (msInsecond * secondsInMin * minsInHour)) % hoursInDay,
//       ),
//     ).padStart(2, '0');
//     const days = Math.floor(
//       delta / (msInsecond * secondsInMin * minsInHour * hoursInDay),
//     );

//     const timeFormat = `${days}:${hours}:${minutes}:${seconds}`;

//     renderTimer(timeFormat);
//     // тоже что иNumber(+new Date(targetDate)) или (+new Date(targetDate)) тоже что и (new Date(targetDate).getTime())
//   }, 1000);

//   const renderTimer = (string) => {
//     document.querySelector('span').innerText = string;
//   }
// };

// timer(new Date('2023/03/02'));

// -------------------------------

// let counter = 0;
// console.log(counter--);
// console.log(--counter);
// console.log(counter++);
// console.log(++counter);

// window.addEventListener('resize', _trottle(resizeHandler, 300));

// function resizeHandler () {
//   // console.log('Resize');
//   console.log(++counter);
// }

// ----------------------------------

// // Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {

//   if(prop !== 'tracks' && value !== '') {
//     records[id][prop] = value;
//     return records;
//   };
//   if(prop === 'tracks' && !records[id].hasOwnProperty('tracks')) {
//     records[id][prop] = [value];
//     return records;
//   };
//   if(prop === 'tracks' && value !== '') {
//     records[id][prop].push(value);
//     return records;
//   };

//   if(value === '') {
//     delete records[id][prop];
//     return records;
//   }

// }

// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

// console.log(recordCollection)

// --------------------------------------------
// const list = ['banana'];
// function addToList(item, array) {
//   return array.push(item);
// }
// addToList('apple', list);

// const result = addToList("apple",list);
// console.log(result);
// console.log(list);

// --------------------------------------

// // Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
//  for(let i = 0; i < myArr.length; i += 1) {
//    total += myArr[i];
//  }
// console.log(total);

// =========================================

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ]),
// );

// ==============================================

//  function multiply(arr, n) {
//    let product = 1;
//    for (let i = 0; i < n; i++) {
//      product *= arr[i];
//    }
//    return product;
//  }

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < Math.min(n, arr.length); i++) {
//     product *= arr[i];
//   }
//   return product;
// // }
// const arr1 = [3, 4, 5];
// // console.log(multiply(arr1, 5));

// function multiplied(arr) {
//   const n = arr.length;
//   // если n меньше или равно 0, то возвращаем 1 (базовый случай)
//   if (n <= 0) {
//     console.log(`multiplied([], n =  ${n}) = 1`);
//     return 1;
//   } else {
//     // получаем произведение элементов массива arr до n-1-го элемента
//     // (это делается рекурсивным вызовом функции multiplied)
//     const product = multiplied(arr.slice(0, n - 1));
//     console.log(product);
//     // умножаем произведение на n-й элемент массива arr
//     const result = product * arr[n - 1];
//     console.log(`multiplied(${arr.slice(0, n)}, n = ${n}) = ${result}`);
//     return result;
//   }
// }

// const arr2 = [1, 2, 3, 4, 5];

// console.log(multiplied(arr2)); // выведет результат и все шаги рекурсии

// arr.slice(0, n - 1) - это метод массива slice(), который возвращает новый массив, содержащий элементы arr от индекса 0 (включительно) до индекса n - 1 (исключая).

// В нашем случае n равно длине массива arr, поэтому arr.slice(0, n - 1) вернет новый массив, содержащий все элементы arr, кроме последнего элемента. Затем мы умножаем этот новый массив на последний элемент и получаем произведение всех элементов.

// Например, если arr равен [2, 4, 6, 8], то arr.slice(0, n - 1) вернет [2, 4, 6], а произведение всех элементов массива arr будет равно 2 * 4 * 6 * 8 = 384.

// function multiplied(arr, n) {
//   const limit = Math.min(n, arr.length);
//   if (limit === 0) {
//     console.log(`multiplied([], limit = ${limit}, n=${n}) = 1`);
//     return 1;
//   }
//   const product = multiplied(arr.slice(0, limit - 1), limit - 1);
//   const result = product * arr[limit - 1];
//   console.log(
//     `multiplied(${JSON.stringify(
//       arr.slice(0, limit),function sum(arr, n) {
// Only change code below this line
// if (n <= 0) {
//   return 1;
// } else {
//   return sum(arr, n -1) + arr[n - 1]
// }
// Only change code above this line
// }

// const arr1 = [ 1, 2, 3, 4, 5];

// console.log(sum(arr1, 5));
// }
// const arr2 = [1, 2, 3, 4, 5];
// console.log(multiplied(arr2, 6)); // expected output: 120
// ===========================================
// function multiplied(arr, n) {
//   const limit = Math.min(n, arr.length);
//   console.log(
//     `multiplied(${JSON.stringify(
//       arr.slice(0, limit),
//     )}), limit = ${limit})`,
//   );

//   // если limit меньше или равно 0, то возвращаем 1 (базовый случай)
//   if (limit <= 0) {
//     console.log('дошли до нуля');
//     console.log(`multiplied([], limit = ${limit})`);
//     return 1;
//   } else {
//     // получаем произведение элементов массива arr до limit-1-го элемента
//     // (это делается рекурсивным вызовом функции multiplied)
//     const product = multiplied(arr.slice(0, limit - 1), n);
//     // умножаем произведение на limit-й элемент массива arr
//     const result = product * arr[limit - 1];
//     console.log(
//       `multiplied(${JSON.stringify(
//         arr.slice(0, limit),
//       )}, limit = ${limit}) = ${result}`,
//     );
//     return result;
//   }
// }

// const arr1 = [1, 2, 3, 4, 5];
// console.log(multiplied(arr1, 6));

// =====================================


// function factorial(n) {
//   console.log('n = ', n);
//   if
//     (n === 0) {
//     console.log(`n === 0, "return 1",  0*${n} , `);
//     // базовый случай
//     return 1;
//   } else
//   {
//     // рекурсивный случай
//     const result = factorial(n - 1) * n;
//     console.log(`${n}   ${n - 1}*${n} `, 'result = ', result);
//     return result;
//   }
// }
// const f = 5;
// console.log(`factorial ${f} = `, factorial(f));

// =================================

// function sum(arr, n) {
//   console.log('n = ', n, 'put on stack');
//   // Only change code below this line
//   if (n <= 0) {
//     return 1;
//   } else {
//     const result = sum(arr, n - 1) + arr[n - 1];
//     console.log(`(result on n = ${n}) = ${result}, and out from stack`);
//     return result;
//   }

//   // Only change code above this line
// }

// const arr1 = [1, 2, 3, 4, 5];

// console.log('result = ', sum(arr1, 5));

// =================================================

// function sum(arr, n) {
//   console.log('n = ', n, 'put on stack');
//   // Only change code below this line
//   if (n <= 0 || n > arr.length) {
//     return 0;
//   } else {
//     const result = sum(arr, n - 1) + arr[n - 1];
//     console.log(
//       `(result on n = ${n}) = ${result} and index = ${n - 1}, and out from stack`,
//     );
//     return result;
//   }

//   // Only change code above this line
// }

// const arr1 = [1, 20, 3, 4, 5];

// console.log('result = ', sum(arr1, 4));

// ======================================

// const myArray = [1, 2, 3, 4, 5];
// myArray[myArray.length] = 'Serghei';
// console.log(myArray);
// myArray.push("Siracenco");
// console.log(myArray);
// const removedElement = myArray.pop();
// const removedElement2 = myArray.pop();
// console.log('removedElement = ', removedElement);
// console.log('removedElement2 = ', removedElement2);
// console.log(myArray);


// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach(el => console.log(el * 2));
// console.log(myArray);

// const newArray = myArray.map(el => el * 2);
// console.log(myArray);
// console.log(newArray);

// ================================
//    DESTRUCTURING

// const userProfile = {
//   name: 'Bogdan',
//   commentQty: 23,
//   hasSignedAgreement: false,
// }

// const { name, commentQty } = userProfile;
// const { hasSignedAgreement } = userProfile;

// console.log(name, commentQty, hasSignedAgreement);
// // -----------------------------------------------
// const fruits = ['apple', 'banana'];

// const [fruitOne, fruitTwo] = fruits;

// console.log(fruitOne, fruitTwo);

// ------------------------------------
// const userProfile = {
//   name: 'Bogdan',
//   commentQty: 23,
//   hasSignedAgreement: false,
// };

// const userInfo = ({ name, commentQty }) => {
//   if (!commentQty) {
//     return`User ${name} has no comments`
//   }
//   return `User ${name} has ${commentQty} comments.`
// }

// userInfo(userProfile);
// console.log(userInfo(userProfile));


// =================================

// const age = 25; 
// const value1 = -11

// age && value1
//   ? console.log('isTrue')
//   : console.log('isFalse')

// console.log(value1 >= 0 ? value1 : -value1)

// const result = value1 >= 0 ? value1 : - value1
// console.log(result);

// ======================================

// const userProfile = {
//   name: 'Bogdan',
//   commentQty: 23,
//   hasSignedAgreement: false,
// };
// for (key in userProfile) {
//   console.log(key, userProfile[key]);
// }
// Object.keys(userProfile).forEach(key => console.log(key, userProfile[key]));
// Object.values(userProfile).forEach(value => console.log(value));
// Object.entries(userProfile).forEach(entry => console.log(entry));

// ===========================================

// const userProfile = {
//   name: 'Bogdan',
//   commentQty: 23,
//   hasSignedAgreement: false,
// };

// const myArray = [true, 10, 'abc', null];

// const myString = 'Hey';

// for (const letter of myString) {
//   console.log(letter);
// }

// for (const element of myArray) {
//   console.log(element);
// }

// for (const key in userProfile) {
//   console.log(key);
//   console.log(userProfile[key]);
// }
// ===============================


// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upVote() {
//         this.votesQty += 1
//     }
//     downVote() {
//         this.votesQty -= 1
//     }
// }
 
// const firstComment = new Comment('First comment');

// console.log(firstComment);
// console.log(firstComment instanceof Comment);
// console.log(firstComment instanceof Object);

// firstComment.upVote();
// console.log(firstComment);
// console.log(firstComment.votesQty);

// firstComment.downVote();
// console.log(firstComment);
// console.log(firstComment.votesQty);


// console.log(firstComment.hasOwnProperty('text'));
// console.log(firstComment.hasOwnProperty('upVote'));

// ===========================================

// class Comment {
//   constructor(text) {
//     this.text = text;
//     this.votesQty = 0;
//   }
//   upVote() {
//     this.votesQty += 1;
//   }
//   downVote() {
//     this.votesQty -= 1;
//   }
//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }
// console.log(Comment);
// console.dir(Comment.prototype);

// const myComment = new Comment('awesome comment');
// console.log(myComment);
// console.dir(myComment.prototype);

// =========================================

// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el,acc) => acc += el, 0)
//     }
// }

// const myArray = new NumbersArray(2, 5, 7);

// console.log('myArray', myArray);
// console.log(myArray.sum());
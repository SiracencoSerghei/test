// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// const form = document.querySelector('.form');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const delay = parseInt(form.elements.delay.value);
//   const step = parseInt(form.elements.step.value);
//   const amount = parseInt(form.elements.amount.value);

//   for (let i = 0; i < amount; i++) {
//     const position = i + 1;
//     const currentDelay = delay + i * step;
//     createPromise(position, currentDelay)
//       .then(({ position, delay }) => {
//         notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`,
//         );
//       })
//       .catch(({ position, delay }) => {
//         notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`,
//         );
//       });
//   }
// });
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   });
// }

// const form = document.querySelector('.form');
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const { delay, step, amount } = event.currentTarget;
//   const delayValue = Number(delay.value);
//   let totalDelay = 0;

//   for (let i = 1; i <= amount.value; i += 1) {
//     totalDelay = delayValue + Number(step.value) * (i - 1);

//     createPromise(i, totalDelay)
//       .then(resolve => Notify.success(resolve))
//       .catch(reject => Notify.failure(reject));
//   }
// }


// -----------------------------------------------

// // time constants:
// const msInsecond = 1000;
// const secondsInMin = 60;
// const minsInHour = 60;
// const hoursInDay = 24;

// const timer = targetDate => {
//   setInterval(() => {
//     // the difference between the optional date and the current time
//     const delta = new Date(targetDate) - new Date();
//     const seconds = String(
//       Math.floor((delta / msInsecond) % secondsInMin)
//     ).padStart(2, '0');
//     const minutes = String(
//       Math.floor((delta / (msInsecond * secondsInMin)) % minsInHour)
//     ).padStart(2, '0');
//     const hours = String(
//       Math.floor(
//         (delta / (msInsecond * secondsInMin * minsInHour)) % hoursInDay
//       )
//     ).padStart(2, '0');
//     const days = Math.floor(
//       delta / (msInsecond * secondsInMin * minsInHour * hoursInDay)
//     );

//     const timeFormat = `${days}:${hours}:${minutes}:${seconds}`;

//     const datePicker = document.querySelector('#datetime-picker');

//     renderTimer(timeFormat);
//     // тоже что иNumber(+new Date(targetDate)) или (+new Date(targetDate)) тоже что и (new Date(targetDate).getTime())
//   }, 1000);

//   const renderTimer = string => {
//     document.querySelector('span').innerText = string;
//     document.querySelector('[data-seconds]').textContent = seconds;

//   };
// };

// timer(new Date('2023/03/03'));


// --------------------------------------------------


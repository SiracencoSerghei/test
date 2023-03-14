//  ---  colorPallette   --------




// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// // function createPaletteItems() {
// //   const items = [];
// //   for (let i = 0; i < 60; i++) {
// //     const color = getRandomColor();
// //     const item = document.createElement("button");
// //     item.type = "button";
// //     item.dataset.color = color;
// //     item.style.backgroundColor = color;
// //     item.classList.add("item");
// //     items.push(item);
// //   }
// //   colorPalette.append(...items);
// // }
// function createPaletteItems() {
//   const items = Array.from({ length: 60 }, () => {
//     const color = getRandomColor();
//     return `
//       <button type="button" class="item" data-color="${color}" style="background-color: ${color}"></button>
//     `;
//   });
//   colorPalette.innerHTML = items.join('');
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }



// ---------------- task 1   --------------

import { galleryItems } from "./gallery-items.js";

class MakeGallery {
  constructor(galleryItems) {
    this.gallery = document.querySelector(".gallery");
    this.galleryItems = galleryItems;
  }

  onGalleryMarkup = ({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  };

  onMakeGalleryMarkup() {
    const makeGallery = this.galleryItems.map(this.onGalleryMarkup).join("");
    this.gallery.insertAdjacentHTML("beforeend", makeGallery);
    this.gallery.addEventListener("click", this.onImgClickLisetner);
  }

  onImgClickLisetner = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
      return;
    }
    const { source } = event.target.dataset;
    instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);
    instance.show();
    window.addEventListener("keydown", this.onCloseImgModal);
  };

  onCloseImgModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", this.onCloseImgModal);
    }
  };
}

const completlyGalleryMarkup = new MakeGallery(galleryItems);
completlyGalleryMarkup.onMakeGalleryMarkup();

// Обратите внимание, что в методах onImgClickLisetner() и onCloseImgModal() я использовал стрелочные функции, чтобы сохранить контекст this. Это позволяет использовать this внутри методов, не теряя ссылку на объект MakeGallery.

//  ------ task 1 ---- variant 1 ------------

// import { galleryItems } from './gallery-items.js';
// // // Change code below this line

// const gallery = document.querySelector('.gallery');
// gallery.addEventListener('click', onGalleryOpenModal);

// let instance;
// class MakeGallery {
//   constructor(galleryItems) {
//     this.galleryItems = galleryItems;
//   }
//   onGalleryMarkup = ({ preview, original, description }) => {
//     return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </div>`;
//   };
//   onMakeGallerMarkup() {
//     const makeGallery = galleryItems.map(this.onGalleryMarkup).join('');
//     gallery.innerHTML += makeGallery;
//     this.onImgClickLisetner();
//   }
//   onImgClickLisetner() {
//     const linkToOriginImg = document.querySelectorAll('.gallery__link');
//     linkToOriginImg.forEach(element =>
//       element.addEventListener('click', event => event.preventDefault()),
//     );
//   }
// }
// const completlyGalleryMarkup = new MakeGallery(galleryItems);

// completlyGalleryMarkup.onMakeGallerMarkup();

// function onGalleryOpenModal(event) {
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }

//   instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `);
//   instance.show();

//   window.addEventListener('keydown', onCloseImgModal);
// }

// function onCloseImgModal(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//     window.removeEventListener('keydown', onCloseImgModal);
//   }
// }
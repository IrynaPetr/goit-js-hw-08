// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryContainerEl = document.querySelector('div.gallery');

function galleryCardsMarkup(items) {
  return items.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}">
            </a>
   </div>`;
  }).join('');

};
const cardsMarkupEl = galleryCardsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', cardsMarkupEl);


const gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionsDelay: 250,
  scrollZoom: false,
});
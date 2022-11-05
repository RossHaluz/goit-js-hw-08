// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryPhotos = document.querySelector('.gallery');

let items = galleryItems.map(({ preview, original, description }) => 
`<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a></li>`
).join('')


galleryPhotos.innerHTML = items

const lightbox = new SimpleLightbox('.gallery a', {  
  captions: true,
  captionPosition: 'bottom',
  captionsData: "alt",
  captionDelay: 250,
});

new SimpleLightbox('.gallery a', { 
    captionsData: alt,
    captionDelay: 200,
});

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const readyString = galleryItems.reduce((pictureAcc, {preview, original, description}) => {
    return pictureAcc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`}, "")

galleryEl.insertAdjacentHTML('afterbegin', readyString);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    // captionPosition: "bottom",
});
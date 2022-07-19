

// Add imports above this line
import { galleryItems } from './gallery-items'
let moment = require('moment');
console.log(moment().format('dddd'));
// import {SimpleLightbox} from 'simplelightbox';
import SimpleLightbox from "simplelightbox";
// const SimpleLightbox = require('simplelightbox');
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line



// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });


console.log(galleryItems.preview);
console.log("text")

const gallery = document.querySelector(".gallery");


  let image = galleryItems.map((item)=>`
  <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
    
      src= "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)

 for(const img of image){
  gallery.insertAdjacentHTML("afterbegin",img);
 }
//  var lightbox = $('.gallery a').simpleLightbox({captionsData:"alt",captionDelay:250});
// SimpleLightbox('.galery a',{})
 var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay:250});

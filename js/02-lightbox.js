import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
function createGallery() {
  const items = galleryItems.map((item) => createGalleryItem(item));
  gallery.append(...items);
}

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement("li");
  gallery.classList.add("gallery__item");
  const link = document.createElement("a");
  gallery.classList.add("gallery_link");
  link.href = original;
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.alt = description;

  link.appendChild(img);
  galleryItem.appendChild(link);

  return galleryItem;
}

createGallery();

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: "250ms",
});

console.log(galleryItems);

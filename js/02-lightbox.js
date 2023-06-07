import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
function createGallery() {
  const items = galleryItems.map((item) => createGalleryItem(item));
  gallery.append(...items);
}

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.alt = description;

  galleryItem.appendChild(link);
  link.appendChild(img);

  return galleryItem;
}

createGallery();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: "250ms",
});

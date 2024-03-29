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

  link.addEventListener("click", function (event) {
    event.preventDefault();
  });

  return galleryItem;
}

createGallery();

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

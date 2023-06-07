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
  link.addEventListener("click", openImg);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;
  img.addEventListener("click", preventDefault);

  galleryItem.appendChild(link);
  link.appendChild(img);

  return galleryItem;
}

createGallery();

function preventDefault(event) {
  event.preventDefault();
}

function openImg(event) {
  event.preventDefault();
  const url = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${url}">`, {
    onShow: handleShow,
    onClose: handleClose,
  });
  instance.show();

  function handleShow() {
    document.addEventListener("keydown", handleKeyDown);
  }

  function handleClose() {
    document.removeEventListener("keydown", handleKeyDown);
  }

  function handleKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

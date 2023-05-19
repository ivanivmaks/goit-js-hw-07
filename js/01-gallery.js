import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// Створення і рендер розмітки на підставі масиву даних galleryItems
function createGallery() {
  const items = galleryItems.map((item) => createGalleryItem(item));
  gallery.append(...items);
}
// Створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
  // створення li
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  // стврорення а
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;
  link.addEventListener("click", openImg);
  // створення img
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;
  img.addEventListener("click", preventDefault);

  // ствоення вкладеності
  link.appendChild(img);
  galleryItem.appendChild(link);

  return galleryItem;
}
// Заборона перенаправлення за замовчуванням
function preventDefault(event) {
  event.preventDefault();
}
// Реалізація делегування на ul.gallery і отримання url великого зображення
function openImg(event) {
  event.preventDefault();
  const largeUrl = event.target.dataset.source;
  openLightbox(largeUrl);
}
// Відкриття модального вікна з великим зображенням
function openLightbox(url) {
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

  // закриття клавішою "Escape"
  function handleKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
createGallery();
console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";

const containerGalery = document.querySelector(".gallery");

renderGalery(galleryItems);

function renderGalery(images) {
  const newGalery = images
    .map(
      (el) =>
        `<a class="gallery__link" href="${el.original}">
        <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"/>
    </a>`
    )
    .join("");
  containerGalery.insertAdjacentHTML("beforeend", newGalery);
}

containerGalery.addEventListener("click", openOriginalImag);

function openOriginalImag(ev) {
  ev.preventDefault();

  const instance = basicLightbox.create(`
      <img src=${ev.target.dataset.source} width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", cancelKeyboard)

  function cancelKeyboard(e) {
      if (e.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", cancelKeyboard);
      }
    }
}




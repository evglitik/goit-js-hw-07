import { galleryItems } from "./gallery-items.js";
// Change code below this line

/*
[Створення і рендер розмітки на підставі масиву даних galleryItems 
і наданого шаблону елемента галереї.Використовуй готовий код з першого завдання.]

Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

Ініціалізація бібліотеки після створення і додання елементів галереї у
div.gallery.Для цього ознайомся з документацією SimpleLightbox - насамперед секції
«Usage» і «Markup».

Подивися в документації секцію «Options» і додай відображення підписів 
до зображень з атрибута alt.Нехай підпис буде знизу і з'являється через 
250 мілісекунд після відкриття зображення.
*/

const containerGalery = document.querySelector(".gallery");

renderGalery(galleryItems);

function renderGalery(images) {
  const newGalery = images
    .map(
      (el) =>
        `<li><a class="gallery__item" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" alt="${el.description}"/>
        </a></li>`
    )
    .join("");
  containerGalery.insertAdjacentHTML("beforeend", newGalery);
}

var lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionDelay: 250,
});

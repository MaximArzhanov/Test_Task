const buttonOpen = document.querySelector('.button');
const buttonClose = document.querySelector('.popup__icon-close');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

// Добавление обработчика события при открытии popup
function setEventListeners() {
  overlay.addEventListener('click', closePopup);
}

// Удаление обработчика события при закрытии popup
function removeEventListeners() {
  overlay.removeEventListener('click', closePopup);
}

// Открытие popup
function openPopup() {
  overlay.classList.add('overlay_opened');
  setEventListeners();
}

// Закртытие popup
function closePopup(evt) {
  if (evt.target === overlay || evt.target === buttonClose) {
    overlay.classList.remove('overlay_opened');
    removeEventListeners();
  }
}

buttonOpen.addEventListener('click', openPopup);


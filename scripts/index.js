const buttonOpen = document.querySelector('.button');
const buttonClose = document.querySelector('.popup__icon-close');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

const phoneField = document.querySelector('#phone');

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

function changePhone() {
  var newPhoneValue = '';
  // Введённый символ
  const enteredCharacter = parseInt(phoneField.value[phoneField.selectionStart - 1]);
  // Проверка на число. Если ввдено число, то нижнее подчёркивание заменяется на число
  if (Number.isInteger(enteredCharacter)) { newPhoneValue = phone.value.replace('_', ''); }
  // Если введено не число, то символ удаляется
  else { newPhoneValue = phoneField.value.slice(0, phoneField.selectionStart - 1) + phoneField.value.slice(phoneField.selectionStart); }
  // Запись значение в инпут
  phoneField.value = newPhoneValue;
  // Выставление курсора на следующую позицию
  phoneField.selectionStart = phoneField.selectionEnd = phoneField.value.indexOf('_');
}

// Устанавливает курсор перед нижним подчёркиванием
function setCursor() {
  const cursorPlace = phoneField.value.indexOf('_');
  setTimeout(() => {
    phoneField.selectionStart = phoneField.selectionEnd = cursorPlace;
  }, 0);
}

phoneField.addEventListener('focus', setCursor);
phoneField.addEventListener('input', changePhone);

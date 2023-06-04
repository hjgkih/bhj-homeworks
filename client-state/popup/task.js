const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

if (document.cookie.includes('isClose') == false) {
  popup.classList.add('modal_active');
}

popupClose.onclick = () => {
  popup.classList.remove('modal_active');
  document.cookie = 'isClose=yes';
}


const textArea = document.getElementById('editor');

document.querySelector('.card').insertAdjacentHTML('beforeend', '<button class="btn__clear" type="button">Очистить содержимое</button>');
const buttonClear = document.querySelector('.btn__clear');

textArea.onkeyup = () => {
  localStorage.setItem('text', textArea.value);
}

textArea.value = localStorage.getItem('text');


buttonClear.onclick = () => {
    delete localStorage.text;
    textArea.value = '';
}
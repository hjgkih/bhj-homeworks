const signinBtn = document.querySelector('#signin__btn');
const formElement = document.querySelector('form');

if (localStorage.getItem('user_id')) {
  welcomeActive()
  signoutBtn();
  signout();
}

signinBtn.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(new FormData(formElement));
    
  xhr.onload = function() {
    if (xhr.status == 400) {
      alert('Поля логин/пароль не должны быть пустыми')
    } else if (xhr.response.includes('"success":false')){
      alert('Неверный логин/пароль');
      location.reload();
      } else if (xhr.responseText.includes('"success":true')){
          localStorage.setItem('user_id', JSON.parse(xhr.response).user_id);
        
          welcomeActive();
          signoutBtn();
          signout();
        }  
  }
return false;
}

function signoutBtn() {
  document.querySelector('.card').insertAdjacentHTML('beforeend', '<div class="row"><button class="btn" id="signout__btn">Выйти</button></div>');
}

function signout() {
  document.querySelector('#signout__btn').onclick = () => {
    localStorage.removeItem('user_id');
    location.reload();
  }
}

function welcomeActive() {
  document.querySelector('#signin').classList.remove('signin_active');
  document.querySelector('#welcome').classList.add('welcome_active');
  document.querySelector('#welcome').querySelector('#user_id').textContent = localStorage.getItem('user_id');
}

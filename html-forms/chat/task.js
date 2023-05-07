const chatStart = document.querySelector('.chat-widget__side');
const messages = document.getElementById('chat-widget__messages');
const inputMessage = document.getElementById('chat-widget__input');
const robotMessagesArr = ['Як ше маш ?!', 'Моя звай Борат!', 'Нраица!', 'Заходи, пожалуйста!', 'Ай, люблю!', 'Мои хобби — диско танцуй! пинг-понг играй! Солнечные ванны принимай.', 'А я плов кушаю, никого не слушаю!'];
const messagesWindow = document.querySelector('.chat-widget__messages-container');

chatStart.addEventListener('click', () => {
  document.querySelector('.chat-widget').classList.add('chat-widget_active');
  setTimeout(robotMessage, 30000);
})

function scrollPage() {          
    messagesWindow.scrollTo(100, messagesWindow.scrollHeight);
}

function robotMessage() {
    let robotMessageRandom = Math.floor(Math.random() * robotMessagesArr.length);
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${time()}</div>
        <div class="message__text">
          ${robotMessagesArr[robotMessageRandom]}
        </div>
    </div>
    `;
}

function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours >= 0 && hours <= 9) {
        hours = '0' + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes;
    }
    return hours + ':' + minutes;
}

inputMessage.addEventListener('keyup', (el) => {
    if (el.key === 'Enter' && inputMessage.value) {
      messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${time()}</div>
        <div class="message__text">
          ${inputMessage.value}
        </div>
      </div>
      `;
      
      inputMessage.value = '';
  
      robotMessage();
   
      scrollPage()
    } 
  })
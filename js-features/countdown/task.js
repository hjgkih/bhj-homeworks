const timerValueHour = document.getElementById("timer__hour");    
const timerValueMinute = document.getElementById("timer__minute"); 
const timerValueSecond = document.getElementById("timer__second"); 
const timerValueHourStart = (Number(timerValueHour.textContent));
const timerValueMinuteStart = (Number(timerValueMinute.textContent));
const timerValueSecondStart = (Number(timerValueSecond.textContent));

setInterval(() => {  
  if (timerValueHour.textContent == 0 && timerValueMinute.textContent == 0 && timerValueSecond.textContent == 0) {
    alert("Вы победили в конкурсе!");
      timerValueHour.textContent = timerValueHourStart;
      timerValueMinute.textContent = timerValueMinuteStart;
      timerValueSecond.textContent = timerValueSecondStart;
      window.location.href = 'https://netology.ru'
  } else if (timerValueSecond.textContent <= 0) {    
      timerValueMinute.textContent--;
      timerValueSecond.textContent = 59;
  } else if (timerValueMinute.textContent < 0) {
      timerValueHour.textContent--;
      timerValueMinute.textContent = 59;
    } else {
      timerValueSecond.textContent--;
    }
  
  if (timerValueMinute.textContent.length < 2) {
    timerValueMinute.textContent = ('0' +  timerValueMinute.textContent).slice(-2);
  } else if (timerValueHour.textContent.length < 2) {
      timerValueHour.textContent = ('0' +  timerValueHour.textContent).slice(-2);
    } else if (timerValueSecond.textContent.length < 2) {
        timerValueSecond.textContent = ('0' +  timerValueSecond.textContent).slice(-2);
      }   
}, 1000)


// // ---------------Первое задание 

// const timerValue = document.getElementById("timer");
// const timerValueStart = (Number(timerValue.textContent));

// setInterval(() => {
//     if (timerValue.textContent <= 0) {
//         alert("Вы победили в конкурсе!");
//         timerValue.textContent = timerValueStart;
//     } else {
//     timerValue.textContent--;
//     }
// }, 100)
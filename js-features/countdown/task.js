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
}, 0)

// // --------------------Реализация с помощью Date
// let timerValueHour = document.getElementById("timer__hour");    
// let timerValueMinute = document.getElementById("timer__minute"); 
// let timerValueSecond = document.getElementById("timer__second"); 
// const startTime = (new Date()).getTime() + 6000;

// function getTime(endTime) {
//   let t = endTime - new Date(); 
//   let seconds = Math.floor( (t/1000) % 60 );  
//   let minutes = Math.floor( (t/1000/60) % 60 );  
//   let hours = Math.floor( (t/(1000*60*60)) % 24 );  
//   return {
//      'hours': hours,  
//      'minutes': minutes,  
//      'seconds': seconds  
//   }
// } 

// setInterval (() => {
//   if ( (timerValueSecond.textContent == '00' && timerValueMinute.textContent == '00' && timerValueHour.textContent == '00')) {
//     alert("Вы победили в конкурсе!");
//     window.location.href = 'https://netology.ru'
//     clearInterval(intervalId);
//   }
//   timerValueSecond.textContent = ('0' + getTime(startTime).seconds).slice(-2);
//   timerValueMinute.textContent = ('0' + getTime(startTime).minutes).slice(-2);
//   timerValueHour.textContent = ('0' + getTime(startTime).hours).slice(-2);
// }, 1000) 


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
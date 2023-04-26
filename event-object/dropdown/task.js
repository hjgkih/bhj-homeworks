const dropDownLists =Array.from(document.querySelectorAll('.dropdown__list'));
const buttons = Array.from(document.querySelectorAll('.dropdown__value'));
const dropDownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

function closeMenu() {
  dropDownLists.forEach((i) => {
    if (i.className == "dropdown__list dropdown__list_active") {
      i.className = "dropdown__list"
      return false;
    }
  }) 
}

dropDownLinks.forEach((i) => {
  i.onclick = function() {
    i.closest('.dropdown').querySelector('.dropdown__value').textContent = i.textContent;
    closeMenu();
    return false; 
  }
});

buttons.forEach((i) => {
  i.addEventListener('click', function() {
    if (i.closest('.dropdown').querySelector('.dropdown__list').className == "dropdown__list dropdown__list_active") {
      i.closest('.dropdown').querySelector('.dropdown__list').className = "dropdown__list";
      return false;
    }
    closeMenu();
    i.closest('.dropdown').querySelector('.dropdown__list').className += ' dropdown__list_active';
    return false;
  });
})






// -----Для одной кнопки

// const dropDownList = document.querySelector('.dropdown__list');
// const button = document.querySelector('.dropdown__value');
// const dropDownLink = Array.from(document.querySelectorAll('.dropdown__link'));

// function openMenu() {
//   if (dropDownList.className == "dropdown__list dropdown__list_active") {
//     dropDownList.className = "dropdown__list"
//     return false;
//   }
//   dropDownList.className += ' dropdown__list_active';
//   return false;
// }

// dropDownLink.forEach((i) => {
//   i.onclick = function() {
//     button.textContent = i.textContent;
//     dropDownList.className = "dropdown__list";
//     return false; 
//   }
// });

// button.addEventListener("click", openMenu);




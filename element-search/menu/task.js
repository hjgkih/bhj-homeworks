const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach((i) => {
  i.onclick = () => {
    if (i.closest('.menu__item').querySelector('.menu_active')) {
      return false;
    } else {
      i.closest('.menu__item').querySelector('.menu_sub').className += ' menu_active'; 
      return false;
    }
  }
})


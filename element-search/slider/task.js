const sliderLeft = document.querySelector(".slider__arrow_prev");
const sliderRight = document.querySelector(".slider__arrow_next");
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));

let sliderNumber = 0;

sliderRight.onclick = () => {
  sliderPlayerRight();
}

sliderLeft.onclick = () => {
  sliderPlayerLeft();
}

let sliderPlayerRight = () => {
  if(sliderItem.length - 1 == sliderNumber) {
    sliderNumber = 0
    sliderItem[sliderNumber].className += ' slider__item_active';
    sliderItem[sliderItem.length - 1].className = 'slider__item';
    return;
  }
  sliderNumber++;
  sliderItem[sliderNumber].className += ' slider__item_active';
  sliderItem[sliderNumber - 1].className = 'slider__item'; 
}

let sliderPlayerLeft = () => {
  if(sliderNumber == 0) {
    sliderNumber = sliderItem.length - 1;
    sliderItem[sliderNumber].className += ' slider__item_active';
    sliderItem[0].className = 'slider__item';
    return;
  }
  sliderNumber--;
  sliderItem[sliderNumber].className += ' slider__item_active';
  sliderItem[sliderNumber + 1].className = 'slider__item'; 
}
   



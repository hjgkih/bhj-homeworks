const textSettings = document.getElementById('book');
const textSizebuttons = Array.from(document.querySelectorAll('.font-size'));
const textColorButtons = Array.from(document.querySelectorAll('.color'));

textSizebuttons.forEach((i) => {
  i.onclick = () => {
    document.querySelector('.book__control_font-size').querySelector('.font-size_active').classList.remove('font-size_active');

    i.classList.toggle('font-size_active');

    if (i.classList.contains('font-size_small')) {
      textSettings.className = 'book';
      textSettings.classList.add('book_fs-small');
    } else if (i.classList.contains('font-size_big')) {
      textSettings.className = 'book';
      textSettings.classList.add('book_fs-big');
    } else {
      textSettings.className = 'book';
    }

    return false;  
  }
})

textColorButtons.forEach((i) => {
  i.onclick = () => {
    document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active');
    
    i.classList.toggle('color_active');

    if (i.closest('.book__control_color')) {
      if (i.classList.contains('text_color_gray')) {
        textSettings.className = 'book';
        textSettings.classList.add('book_color-gray');
        } else if (i.classList.contains('text_color_whitesmoke')) {
          textSettings.className = 'book';
          textSettings.classList.add('book_color-whitesmoke');
        } else {
          textSettings.className = 'book';
        } 
    }
    
    return false;
  }   
})


textColorButtons.forEach((i) => {
  i.onclick = () => {
    document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active');
    
    i.classList.toggle('color_active');

    if (i.classList.contains('bg_color_gray')) {
      textSettings.className = 'book';
      textSettings.classList.add('book_bg-gray');
      } else if (i.classList.contains('bg_color_black')) {
        textSettings.className = 'book';
        textSettings.classList.add('book_bg-black');
        } else {
          textSettings.className = 'book';
          } 
    
    return false;
  }   
})
const textSettings = document.getElementById('book');
const textSizebuttons = Array.from(document.querySelectorAll('.font-size'));
const textColorButtons = Array.from(document.querySelectorAll('.color'));

textSizebuttons.forEach((i) => {
  i.onclick = () => {
    document.querySelector('.book__control_font-size').querySelector('.font-size_active').classList.remove('font-size_active');

    i.classList.toggle('font-size_active');

    if (i.classList.contains('font-size_small')) {
      textSettings.classList.remove('book_fs-big')
      textSettings.classList.add('book_fs-small');
    } else if (i.classList.contains('font-size_big')) {
        textSettings.classList.remove('book_fs-small')
        textSettings.classList.add('book_fs-big');
    } else {
        textSettings.classList.remove('book_fs-small', 'book_fs-big');
    }

    return false;  
  }
})

textColorButtons.forEach((i) => {
  i.onclick = () => {
    if (i.closest('.book__control_color')) {
        document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active');
    
        i.classList.toggle('color_active');
      if (i.classList.contains('text_color_gray')) {
        textSettings.classList.remove('text_color_whitesmoke','book_color-black');
        textSettings.classList.add('book_color-gray');
        } else if (i.classList.contains('text_color_whitesmoke')) {
            textSettings.classList.remove('book_color-gray','book_color-black');
            textSettings.classList.add('book_color-whitesmoke');
        } else {
            textSettings.classList.remove('book_color-gray','book_color-whitesmoke');
            textSettings.classList.add('book_color-black');
        } 
    } else {
        document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active');
    
        i.classList.toggle('color_active');

        if (i.classList.contains('bg_color_gray')) {
          textSettings.classList.remove('bg_color_black', 'book_bg-white');
          textSettings.classList.add('book_bg-gray');
        } else if (i.classList.contains('bg_color_black')) {
            textSettings.classList.remove('bg_color_gray', 'book_bg-white');
            textSettings.classList.add('book_bg-black');
        } else {
            textSettings.classList.remove('bg_color_gray', 'book_bg-black');
            textSettings.classList.add('book_bg-white');
          } 
      }
    return false;
  }   
})

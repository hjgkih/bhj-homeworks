const interestCheck =Array.from(document.querySelectorAll('.interest__check'));

function elementCheck(arg) {
  if (arg.closest('.interests_active')== null) {
    return;
  }

  let previousElement = arg.closest('.interests_active').previousElementSibling.querySelector('.interest__check');
  let mainElement =  arg.closest('.interests').closest('.interest').querySelector('.interest__check');
    
  if (arg.checked == true) {
    if((arg.closest('.interests').querySelectorAll('.interest__check').length) > (arg.closest('.interests').querySelectorAll('.interest__check:checked').length)) {
      mainElement.indeterminate = true;
    }

    if((arg.closest('.interests').querySelectorAll('.interest__check').length) == (arg.closest('.interests').querySelectorAll('.interest__check:checked').length)) {
      mainElement.indeterminate = false;
      mainElement.checked = true;
    }
  } else if (arg.checked == false) {
      if((arg.closest('.interests').querySelectorAll('.interest__check:checked').length) == 0) {
        mainElement.indeterminate = false;
        mainElement.checked = false;
        return;
      }

      if((arg.closest('.interests').querySelectorAll('.interest__check').length) > (arg.closest('.interests').querySelectorAll('.interest__check:checked').length)) {
        mainElement.checked = false;
        mainElement.indeterminate = true;
      }
    }

  elementCheck(previousElement);
}

interestCheck.forEach((i) => {
  i.addEventListener('change', () => {
    if (i.checked == true) {
      i.closest('.interest').querySelectorAll('.interest').forEach((el) => {
        el.querySelector('.interest__check').checked = true;
      })
    } else if ((i.checked == false)) {
        i.closest('.interest').querySelectorAll('.interest').forEach((el) => {
          el.querySelector('.interest__check').checked = false;
        }) 
      } 
    
    elementCheck(i);
  })  
})



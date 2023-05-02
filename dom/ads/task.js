const rotatorParent = document.querySelector('.rotator');
rotatorParent.firstElementChild.style.color = rotatorParent.firstElementChild.getAttribute('data-color');

function startRotator() {
  let rotatorCounter = document.querySelector('.rotator__case_active');

  if (rotatorParent.lastElementChild.className == 'rotator__case rotator__case_active') {
    rotatorParent.lastElementChild.className = 'rotator__case';
    rotatorParent.firstElementChild.className = 'rotator__case rotator__case_active';
  }

  if (rotatorCounter.className == 'rotator__case rotator__case_active') {
    rotatorCounter.className = 'rotator__case';
    rotatorCounter.nextElementSibling.className += ' rotator__case_active';
    rotatorCounter.nextElementSibling.style.color = rotatorCounter.nextElementSibling.getAttribute('data-color');
  }

  setTimeout(startRotator, rotatorCounter.getAttribute('data-speed'));
}

setTimeout(startRotator, 1000);



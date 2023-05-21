const link = Array.from(document.querySelectorAll('.has-tooltip'));

function addTooltip() {
    link.forEach((i) => {
      i.insertAdjacentHTML('afterEnd', '<div class="tooltip"></div>')    
    })
}

addTooltip();

const tooltip = Array.from(document.querySelectorAll('.tooltip'));

link.forEach((i) => {
  i.onclick = () => {
    if(i.nextElementSibling.classList.contains('tooltip_active')) {
      i.nextElementSibling.className = 'tooltip';
      return false;
    }
    
    tooltip.forEach((j) => {
      if(j.classList.contains('tooltip_active')) {
        j.className = 'tooltip';
      }
    })

    const { left } = i.getBoundingClientRect();
    i.nextElementSibling.setAttribute('style', `left: ${left}px; position: absolute`);

    i.nextElementSibling.innerText = i.getAttribute('title');
    i.nextElementSibling.className += ' tooltip_active';
    return false;
  }
})

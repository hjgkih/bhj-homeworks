const reveal = Array.from(document.querySelectorAll('.reveal'));

reveal.forEach((i) => {
  window.addEventListener('scroll', () => {
  const { innerHeight } = window;
  const { top } = i.getBoundingClientRect();
  if (top < innerHeight && top > 0) {
    i.classList.add("reveal_active");
  } else {
      i.classList.remove("reveal_active");
    }
  })
})

// reveal.forEach((i) => {
//   window.addEventListener('scroll', () => {
//     const { top, bottom } = i.getBoundingClientRect();
    
//     if (i.className == 'reveal reveal_active') {
//         i.className = 'reveal';
//     }
//     if (bottom < 0) {
//       return false;
//     }

//     if (top > window.innerHeight) {
//       return false;
//     }
//     i.className += ' reveal_active';        
//   })
// })


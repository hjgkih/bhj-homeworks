const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const deadStart = (Number(dead.textContent));
const lostStart = (Number(lost.textContent));

const getHole = index => document.getElementById(`hole${index}`)


for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (getHole(i).className.includes('hole_has-mole')) {
      dead.textContent++;
    } else {
        lost.textContent++;
      }
    
    if (Number(dead.textContent) === 10) {
      alert('Вы победили!');
      dead.textContent = deadStart;
      lost.textContent = lostStart;
    } else if (Number(lost.textContent) === 5) {
        alert('Вы проиграли!');
        dead.textContent = deadStart;
        lost.textContent = lostStart;
      }
  }
}
    

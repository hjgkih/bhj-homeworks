const element = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed")
// const elementWidthStart = Number(element.width);
const timeActual = Date.now();

element.onclick = function () {
  counter.textContent++;
  const timeNow = Date.now();
  speed.textContent = (counter.textContent / (timeNow - timeActual) * 1000).toFixed(2);
  

  element.width = counter.textContent % 2 ? 300 : 200;


}

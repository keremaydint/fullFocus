let counterEl = document.getElementById("counter-el");
let count = 1;

function counterPlus() {
  counterEl.textContent = count++;
}

function setZero() {
  count = 1;
  counterEl.textContent = 0;
}

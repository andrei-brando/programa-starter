const container = document.getElementById('container');

function clicou() {
   let numberTop = Math.random() * 500;
   let numberLeft = Math.random() * 500;

   container.style.top = `${numberTop.toFixed(0)}px`;
   container.style.left = `${numberLeft.toFixed(0)}px`;
}
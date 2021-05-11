const text = document.getElementById('h1');
let initialText = text.innerText;
const header = document.getElementsByTagName('header')[0];

function changeText() {
   if (text.innerText === initialText) {
      text.innerText = 'Outro Menu';
   } else {
      text.innerText = initialText;
   }
}

function changeDisplay() {
   header.classList.add('none');
}
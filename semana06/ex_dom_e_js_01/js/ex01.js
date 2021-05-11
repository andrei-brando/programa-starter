function addContent() {
   const div = document.getElementById('content');
   const text = document.createElement('h1');
   text.innerText = 'Texto Qualquer';
   div.appendChild(text);
}
addContent();
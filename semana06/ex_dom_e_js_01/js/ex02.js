function addContentList() {
   const div = document.getElementById('content');
   const words = ['Jacaré', 'Leão', 'Crocodilo', 'Macaco', 'Gorila'];
   const list = document.createElement('ul');
   div.appendChild(list);
   for (let word of words) {
      const item = document.createElement('li');
      item.innerHTML = word;
      list.appendChild(item);
   }
}
addContentList();
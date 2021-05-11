function addContentList() {
   const div = document.getElementById('content');
   const words = {
      palavra1: 'Pneu',
      palavra2: 'Pistão',
      palavra3: 'Bico',
      palavra4: 'Vela',
      palavra5: 'Carburador',
   };
   const list = document.createElement('ul');
   div.appendChild(list);

   for (let word in words) {
      const item = document.createElement('li');
      item.innerHTML = words[word];
      list.appendChild(item);
   }
}
addContentList();
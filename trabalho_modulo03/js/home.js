function saveScrap(event) {
   event.preventDefault();

   let scraps = Array.from(JSON.parse(localStorage.getItem('scraps')));

   if (scraps == null) {
      scraps = [];
   }

   const inputId = document.getElementById('ipt-id');
   const inputDesc = document.getElementById('ipt-desc');
   const inputDetail = document.getElementById('ipt-detail');
   const alertError = document.getElementById('scrap-error');
   const alertSucess = document.getElementById('scrap-sucess');

   if (inputDesc.value == '' || inputDetail.value == '') {
      alertError.classList.remove('none');
      setTimeout(() => {
         alertError.classList.add('none');
      }, 2000);
      return;
   }

   var id = parseInt(inputId.value != '' ? inputId.value : findId(scraps));

   const scrap = {
      id: id,
      description: inputDesc.value,
      detail: inputDetail.value,
   }

   if (inputId.value != '') {
      var indexEdit = scraps.findIndex(p => p.id == id);
      scraps.splice(indexEdit, 1, scrap);
   } else {
      scraps.push(scrap);
   }

   localStorage.setItem('scraps', JSON.stringify(scraps));

   if (inputId.value != '') {
      initTable();
   } else {
      setTableItem(scrap);
   }

   inputId.value = '';
   inputDesc.value = '';
   inputDetail.value = '';

   alertSucess.classList.remove('none');
   setTimeout(() => {
      alertSucess.classList.add('none');
   }, 2000);
}

function findId(scraps) {
   let id = 1;
   const scp = JSON.parse(localStorage.getItem('scraps'));

   if (scp != null && scp.length >= 1) {
      for (const scrap of scp) {
         id = scrap.id;
      }
      id++;
   }

   return id;
}

function setTableItem(scrap) {
   const tbody = document.getElementsByTagName('tbody')[0];

   const tr = document.createElement('tr');
   tr.innerHTML = `
   <tr class="table-light">
      <th scope="row">${scrap.id}</th>
      <td>${scrap.description}</td>
      <td>${scrap.detail}</td>
      <td>
      <button type="button" class="btn btn-danger" onclick="deleteScrap(event)">Apagar</button>
      <button type="button" class="btn btn-success" onclick="editScrap(event)">Editar</button>
      </td>
   </tr>
   `;

   tbody.appendChild(tr);
}

function initTable() {
   const tbody = document.getElementsByTagName('tbody')[0];
   const items = JSON.parse(localStorage.getItem('scraps'));

   tbody.innerHTML = '';

   if (items != null) {
      for (var item of items) {
         const tr = document.createElement('tr');
         tr.innerHTML = `
         <tr class="table-light">
            <th scope="row">${item.id}</th>
            <td>${item.description}</td>
            <td>${item.detail}</td>
            <td>
            <button type="button" class="btn btn-danger" onclick="deleteScrap(event)">Apagar</button>
            <button type="button" class="btn btn-success" onclick="editScrap(event)">Editar</button>
            </td>
         </tr>
         `;

         tbody.appendChild(tr);
      }
   }
}

function deleteScrap(event) {
   event.preventDefault();
   const idScrap = parseInt(event.target.parentNode.parentNode.children[0].innerText);
   let items = JSON.parse(localStorage.getItem('scraps'));

   var index = items.indexOf(items.find(i => i.id === idScrap));

   items.splice(index, 1);

   localStorage.setItem('scraps', JSON.stringify(items));

   initTable();
}

function editScrap(event) {
   event.preventDefault();
   const idScrap = parseInt(event.target.parentNode.parentNode.children[0].innerText);

   const inputId = document.getElementById('ipt-id');
   const inputDesc = document.getElementById('ipt-desc');
   const inputDetail = document.getElementById('ipt-detail');

   let items = JSON.parse(localStorage.getItem('scraps'));

   let index = items.indexOf(items.find(i => i.id === idScrap));

   let scrap = items.find(p => p.id == idScrap);

   inputId.value = scrap.id;
   inputDesc.value = scrap.description;
   inputDetail.value = scrap.detail;
}

initTable();
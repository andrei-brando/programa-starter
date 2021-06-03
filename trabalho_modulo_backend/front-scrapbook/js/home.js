axios.defaults.baseURL = 'http://localhost:8000';

async function saveScrap(event) {
  event.preventDefault();

  const inputId = document.getElementById('ipt-id');
  const inputDesc = document.getElementById('ipt-desc');
  const inputDetail = document.getElementById('ipt-detail');

  const data = {
    description: inputDesc.value,
    details: inputDetail.value,
  }

  let response;

  if (!inputId.value) {
    response = await axios.post('/notes', data);
  } else {
    response = await axios.put(`/notes/${inputId.value}`, data);
  }

  if (response.status == 200) {
    initTable();
  }

  inputId.value = '';
  inputDesc.value = '';
  inputDetail.value = '';
}

async function deleteScrap(event) {
  event.preventDefault();
 
  const idScrap = event.target.parentNode.parentNode.children[0].innerText;

  const response = await axios.delete(`/notes/${idScrap}`);

  initTable();
}

function setEditScrap(event) {
  event.preventDefault();

  const inputId = document.getElementById('ipt-id');
  const inputDesc = document.getElementById('ipt-desc');
  const inputDetail = document.getElementById('ipt-detail');

  inputId.value = event.target.parentNode.parentNode.children[0].innerText;
  inputDesc.value = event.target.parentNode.parentNode.children[1].innerText;
  inputDetail.value = event.target.parentNode.parentNode.children[2].innerText;
}

async function initTable() {
  const tbody = document.getElementsByTagName('tbody')[0];

  const response = await axios.get('/notes');
  const dados = response.data.data;

  tbody.innerHTML = '';

  if (dados) {
    dados.forEach((item) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
         <tr class="table-light">
            <th scope="row">${item.id}</th>
            <td>${item.description}</td>
            <td>${item.details}</td>
            <td>
            <button type="button" class="btn btn-danger" onclick="deleteScrap(event)">Apagar</button>
            <button type="button" class="btn btn-success" onclick="setEditScrap(event)">Editar</button>
            </td>
         </tr>
         `;

      tbody.appendChild(tr);
    });
  }
}

initTable();
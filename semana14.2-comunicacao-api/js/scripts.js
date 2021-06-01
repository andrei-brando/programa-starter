const lista = document.getElementById('growdevers');

axios.defaults.baseURL = 'https://growdevers-api-andrei.herokuapp.com/';

axios.get('/growdevers')
   .then(response => {
      response.data.forEach(item => {
         lista.innerHTML += `${item.nome} <br/>`;
      });
   })
   .catch(error => console.log(error));

async function salvar(event) {
   event.preventDefault();

   const nome = document.getElementById('nome').value;
   const idade = document.getElementById('idade').value;
   const turma = document.getElementById('turma').value;
   const cidade = document.getElementById('cidade').value;

   const { data } = await axios.post('/growdevers', {
      nome,
      idade,
      turma,
      cidade,
   });

   // console.log(usuario);

   lista.innerHTML += `${data.nome} <br/>`;

   nome = '';
   idade = '';
   turma = '';
   cidade = '';
}
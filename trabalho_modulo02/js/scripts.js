const about = document.getElementsByClassName('sobre')[0];
const knowledge = document.getElementsByClassName('conhec')[0];
const goals = document.getElementsByClassName('objetivo')[0];

const cv = {
   nome: 'Andrei',
   sobrenome: 'Brando',
   endereco: 'RUA PRESIDENTE F. D. R., 328, SAPIRANGA - RS',
   email: 'ALBERTBRANDO@HOTMAIL.COM',
   telefone: '(51)99688-7798',
   descricao: 'Sou uma pessoa que gosta de desafios e estou sempre buscando novos conhecimentos.',
   redes: [
      {
         img: './img/lk.png',
         link: 'https://www.linkedin.com/in/andrei-brando-8a6722149/',
      },
      {
         img: './img/gh.png',
         link: 'https://github.com/andrei-growdev',
      },
      {
         img: './img/tt.png',
         link: 'https://twitter.com/AndreiBrando',
      },
      {
         img: './img/fb.png',
         link: 'https://www.facebook.com/andrei.brando/',
      }
   ],
   conhecimentos: [
      'HTML', 
      'CSS', 
      'JavasScript', 
      'Banco de Dados', 
      'Flutter', 
      'Dart',
      'Mobx'
   ],
   objetivos: {
      pessoais: 'Gostaria de ter um aplicativo feito por mim mesmo, publicado nas lojas',
      profisionais: 'Gostaria de trablhar em uma grande empresa desenvolvendo os mais diversos tipos de aplicações, tanto Mobile quanto Web',
   }
}

const contentAbout = `
<div class="row">
   <div class="col-12">
      <h1>${cv.nome.toUpperCase()}</h1>
      <h1 class="color-org">${cv.sobrenome.toUpperCase()}</h1>
   </div>
   <div class="col-12">
      <h3>${cv.endereco}</h3>
      <h3 class="color-org">${cv.email} - ${cv.telefone}</h3>
   </div>
</div>

<div class="col-12">
   <p>${cv.descricao}</p>
</div>

<div class="col-12 social-netw"></div>
`;

function choseAboutYou() {
   about.innerHTML = contentAbout;
   let socialNetwork = document.getElementsByClassName('social-netw')[0];

   for (let i = 0; i < cv.redes.length; i++) {
      let element = `
      <a href="${cv.redes[i].link}" target="blank">
         <img src="${cv.redes[i].img}" alt="">
      </a>
      `;
      socialNetwork.innerHTML += element;
   }

   about.classList.remove('hidden');
   knowledge.classList.add('hidden');
   goals.classList.add('hidden');
}

const contentKnowledge = `
<ul class="list-group list-group-flush">
</ul>
`;

function choseKnowledge() {
   knowledge.innerHTML = contentKnowledge;
   let list = document.getElementsByTagName('ul')[0];

   for (let i = 0; i < cv.conhecimentos.length; i++) {
      const element = `
      <li class="list-group-item">
         ${cv.conhecimentos[i]}
      </li>
      `;

      list.innerHTML += element;
   }

   knowledge.classList.remove('hidden');
   about.classList.add('hidden');
   goals.classList.add('hidden');
}

function choseGoals() {

   let t1 = document.createElement('h2');
   t1.innerText = 'Objetivos Pessoais';
   
   let t2 = document.createElement('h3');
   t2.innerText = 'Objetivos Profissionais';

   let p1 = document.createElement('p');
   p1.innerText = cv.objetivos.pessoais;

   let p2 = document.createElement('p');
   p2.innerText = cv.objetivos.profisionais;


   goals.appendChild(t1);
   goals.appendChild(p1);
   goals.appendChild(t2);
   goals.appendChild(p2);

   goals.classList.remove('hidden');
   about.classList.add('hidden');
   knowledge.classList.add('hidden');
}

choseAboutYou();
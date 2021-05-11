//#1 ------------------

const objeto = {
   descricao: 'Mouse',
   valor: 90,
}
// console.log(objeto.descricao);
// console.log(objeto.valor);

//#2 ---------------

const notebook = {
   processador: 'i7',
   memoria: '16GB',
   preco: 5000,
   hd: '1TB',
   ssd: '256GB'
}
// for (atributo in notebook) {
//    console.log(`${atributo}: ${notebook[atributo]}`);
// }

//#3 ------------------

const primeiroAluno = {
   nome: 'João',
   nota1: 5,
   nota2: 7,
}

const segundoAluno = {
   nome: 'Maria',
   nota1: 10,
   nota2: 6,
}

let mediaAluno1 = (primeiroAluno.nota1 + primeiroAluno.nota2) / 2;
let mediaAluno2 = (segundoAluno.nota1 + segundoAluno.nota2) / 2;
let mediaTurma = (mediaAluno1 + mediaAluno2) / 2;

for (info in primeiroAluno) {
   // console.log(primeiroAluno[info]);
}
// console.log(`Media aluno 1: ${mediaAluno1}`);

for (info in segundoAluno) {
   // console.log(segundoAluno[info]);
}
// console.log(`Media aluno 2: ${mediaAluno2}`);
// console.log(`Média turma: ${mediaTurma}`);

//#4 --------------------

const aluno1 = {
   name: 'Pedro',
   age: 24,
   skills: ['Flutter', 'JavaScript', 'CSS'],
}
const aluno2 = {
   name: 'Ana',
   age: 20,
   skills: ['Node', 'SQL', 'HTML'],
}
const aluno3 = {
   name: 'Pedro',
   age: 18,
   skills: ['C#', 'JavaScript', 'HTML'],
}
const aluno4 = {
   name: 'Jorge',
   age: 28,
   skills: ['PL/SQL', 'JavaScript', 'React'],
}
const aluno5 = {
   name: 'Pedro',
   age: 24,
   skills: ['React Native', 'Ionic', 'Angular'],
}

let alunosFiltrados = [];

function verificaAlunos(obj1, obj2, obj3, obj4, obj5, skill) {
   if (obj1.skills.includes(skill)) {
      alunosFiltrados.push(obj1);
   }
   if (obj2.skills.includes(skill)) {
      alunosFiltrados.push(obj2);
   }
   if (obj3.skills.includes(skill)) {
      alunosFiltrados.push(obj3);
   }
   if (obj4.skills.includes(skill)) {
      alunosFiltrados.push(obj4);
   }
   if (obj5.skills.includes(skill)) {
      alunosFiltrados.push(obj5);
   }

   for (aluno in alunosFiltrados) {
      console.log(`${alunosFiltrados[aluno].name}, ${alunosFiltrados[aluno].age}, [${alunosFiltrados[aluno].skills.join(', ')}]`);
   }
}

verificaAlunos(aluno1, aluno2, aluno3, aluno4, aluno5, 'JavaScript');
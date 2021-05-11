/**
 * Time
 *   nome
 *   ano
 *   
 *   elenco
 *     - nome
 *     - idade
 *     - posição
 * 
 *   comissao técnica
 *     - nome
 *     - idade
 *     - prodissão
 * 
 *   estádio
 *     - nome
 *     - capacidade
 * 
 *   titulos
 *     - nome
 *     - ano
 */

// interface Pessoa {
//    nome: string;
//    idade: number;
// }

// class Jogador implements Pessoa {
//    nome: string;
//    idade: number;
//    posicao: string;

//    constructor(nome: string, idade: number, posicao: string) {
//       this.nome = nome;
//       this.idade = idade;
//       this.posicao = posicao;
//    }
// }

// class Comissao implements Pessoa {
//    nome: string;
//    idade: number;
//    cargo: string;

//    constructor(nome: string, idade: number, cargo: string) {
//       this.nome = nome;
//       this.idade = idade;
//       this.cargo = cargo;
//    }
// }

// class Estadio {
//    public nome: string;
//    public capacidade: number;

//    constructor(nome: string, capacidade: number) {
//       this.nome = nome;
//       this.capacidade = capacidade;
//    }
// }

// class Titulo {
//    public nome: string;
//    public ano: number;

//    constructor(nome: string, ano: number) {
//       this.nome = nome;
//       this.ano = ano;
//    }
// }

// interface ParametrosTime {
//    nome: string;
//    ano: number;
//    elenco: Array<Jogador>;
//    comissao: Array<Comissao>;
//    estadio: Estadio;
//    titulos: Array<Titulo>;
// }

// class Time {
//    public nome: string;
//    public ano: number;
//    public elenco: Array<Jogador>;
//    public comissao: Array<Comissao>;
//    public estadio: Estadio;
//    public titulos: Array<Titulo>;

//    constructor(parametros: ParametrosTime) {
//       this.nome = parametros.nome;
//       this.ano = parametros.ano;
//       this.estadio = parametros.estadio;
//       this.elenco = parametros.elenco;
//       this.comissao = parametros.comissao;
//       this.titulos = parametros.titulos;
//    }
// }

// const time = new Time({
//    nome: 'Tabajara FC',
//    ano: 2000,
//    elenco: [],
//    comissao: [],
//    estadio: new Estadio('Sei lá', 10000),
//    titulos: [],
// });


/**
 *  Escola
 *    - turmas
 *       - método: aluno que mais faltou
 *       - método aluno com melhores notas
 *       - nome ou código
 *       - professores
 *          - nome
 *          - materias
 *               - nome 
 *       - alunos
 *          - nome
 *          - numero de faltas
 *          - boletim
 *               - materia
 *               - nota
 */

interface Materia {
   nome: string;
}

class Professor {
   public nome: string;
   public materias: Array<Materia>;

   constructor(nome: string, materias: Array<Materia>) {
      this.nome = nome;
      this.materias = materias;
   }
}

class Boletim {
   public materias: Array<Materia>;
   public notas: Array<number>;

   constructor(materias: Array<Materia>, notas: Array<number>) {
      this.materias = materias;
      this.notas = notas;
   }

   mediaNotas = (): number => this.notas.reduce((a, b) => a + b) / this.notas.length;
}

class Aluno {
   public nome: string;
   public numeroFaltas: number;
   public boletim: Boletim;

   constructor(nomeAluno: string, numeroFaltas: number, boletim: Boletim) {
      this.nome = nomeAluno;
      this.numeroFaltas = numeroFaltas;
      this.boletim = boletim;
   }
}

class Turma {
   public codigoTurma: string;
   public professores: Array<Professor> = [];
   public alunos: Array<Aluno> = [];

   constructor(codigo: string) {
      this.codigoTurma = codigo;
   }

   adicionarProfessor = (professor: Professor) => this.professores.push(professor);

   adicionarAluno = (aluno: Aluno) => this.alunos.push(aluno);

   verificarAlunoMaisFaltas() {
      let numeroFaltas: number = 0;
      let alunoMaisFaltas: Aluno | null = null;

      for (const aluno of this.alunos) {
         if (aluno.numeroFaltas > numeroFaltas) {
            numeroFaltas = aluno.numeroFaltas;
            alunoMaisFaltas = aluno;
         }
      }

      return alunoMaisFaltas;
   }

   verificarAlunoMaiorNota() {
      let maiorNota: number = 0;
      let alunoMaiorNota: Aluno | null = null;

      for (const aluno of this.alunos) {
         if (aluno.boletim.mediaNotas() > maiorNota) {
            maiorNota = aluno.boletim.mediaNotas();
            alunoMaiorNota = aluno;
         }
      }

      return alunoMaiorNota;
   }
}

class Escola {
   public turmas: Array<Turma> = [];

   adicionarTurma(turma: Turma) {
      this.turmas.push(turma);
   }
}

const prof1 = new Professor('Jorge', [
   { nome: 'Matemática' },
   { nome: 'Química' },
]);
const prof2 = new Professor('Clarisse', [
   { nome: 'Português' },
   { nome: 'Literatura' },
]);

const boletim1 = new Boletim([
   { nome: 'Matemática' },
   { nome: 'Química' },
   { nome: 'Português' },
   { nome: 'Literatura' },
], [10, 9, 4, 10]);
const aluno1 = new Aluno('Pedro', 3, boletim1);

const boletim2 = new Boletim([
   { nome: 'Matemática' },
   { nome: 'Química' },
   { nome: 'Português' },
   { nome: 'Literatura' },
], [3, 4, 9, 10]);
const aluno2 = new Aluno('Joaquim', 5, boletim2);

const turma = new Turma('A1');

turma.adicionarProfessor(prof1);
turma.adicionarProfessor(prof2);
turma.adicionarAluno(aluno1);
turma.adicionarAluno(aluno2);

const alunoComMaisFaltas = turma.verificarAlunoMaisFaltas();
console.log(`O aluno com mais faltas é ${alunoComMaisFaltas?.nome}, ele possui ${alunoComMaisFaltas?.numeroFaltas} faltas`);

const alunoComMelhoresNotas = turma.verificarAlunoMaiorNota();
console.log(`O aluno com as melhores notas é ${alunoComMelhoresNotas?.nome}, ele possui uma média de ${alunoComMaisFaltas?.boletim.mediaNotas()}`);
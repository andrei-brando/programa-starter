"use strict";
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
class Professor {
    constructor(nome, materias) {
        this.nome = nome;
        this.materias = materias;
    }
}
class Boletim {
    constructor(materias, notas) {
        this.mediaNotas = () => this.notas.reduce((a, b) => a + b) / this.notas.length;
        this.materias = materias;
        this.notas = notas;
    }
}
class Aluno {
    constructor(nomeAluno, numeroFaltas, boletim) {
        this.nome = nomeAluno;
        this.numeroFaltas = numeroFaltas;
        this.boletim = boletim;
    }
}
class Turma {
    constructor(codigo) {
        this.professores = [];
        this.alunos = [];
        this.adicionarProfessor = (professor) => this.professores.push(professor);
        this.adicionarAluno = (aluno) => this.alunos.push(aluno);
        this.codigoTurma = codigo;
    }
    verificarAlunoMaisFaltas() {
        let numeroFaltas = 0;
        let alunoMaisFaltas = null;
        for (const aluno of this.alunos) {
            if (aluno.numeroFaltas > numeroFaltas) {
                numeroFaltas = aluno.numeroFaltas;
                alunoMaisFaltas = aluno;
            }
        }
        return alunoMaisFaltas;
    }
    verificarAlunoMaiorNota() {
        let maiorNota = 0;
        let alunoMaiorNota = null;
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
    constructor() {
        this.turmas = [];
    }
    adicionarTurma(turma) {
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

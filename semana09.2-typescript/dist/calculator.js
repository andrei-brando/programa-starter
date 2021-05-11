"use strict";
var Operacoes;
(function (Operacoes) {
    Operacoes["Somar"] = "somar";
    Operacoes["Subtrair"] = "subtrair";
    Operacoes["Multiplicar"] = "multiplicar";
    Operacoes["Dividir"] = "dividir";
})(Operacoes || (Operacoes = {}));
class Calculadora {
    constructor() {
        this._historico = new Array();
    }
    get historico() {
        return this._historico;
    }
    adicionarHistorico(entradas, operacao, resultado) {
        this._historico.push(`
         Resultado da operação ${operacao} entre 
         ${entradas.valor1} e ${entradas.valor2} é ${resultado.resultado}
   `);
    }
    somar(entradas) {
        const resultado = {
            resultado: entradas.valor1 + entradas.valor2,
        };
        this.adicionarHistorico(entradas, Operacoes.Somar, resultado);
        return resultado;
    }
    ;
    subtrair(entradas) {
        const resultado = {
            resultado: entradas.valor1 - entradas.valor2,
        };
        this.adicionarHistorico(entradas, Operacoes.Subtrair, resultado);
        return resultado;
    }
    ;
    multiplicar(entradas) {
        const resultado = {
            resultado: entradas.valor1 * entradas.valor2,
        };
        this.adicionarHistorico(entradas, Operacoes.Multiplicar, resultado);
        return resultado;
    }
    ;
    dividir(entradas) {
        const resultado = {
            resultado: entradas.valor1 / entradas.valor2,
        };
        this.adicionarHistorico(entradas, Operacoes.Dividir, resultado);
        return resultado;
    }
    ;
}
const calc = new Calculadora();
calc.somar({
    valor1: 10,
    valor2: 20,
});
calc.subtrair({
    valor1: 10,
    valor2: 20,
});
console.log(calc.historico);
// function executarCalculadora(entrada: Entradas, operacao: Operacoes,) {
//    let resultadoOperacao;
//    switch (operacao) {
//       case Operacoes.Somar:
//          resultadoOperacao = calculadora.somar(entrada);
//          break;
//       case Operacoes.Subtrair:
//          resultadoOperacao = calculadora.subtrair(entrada);
//          break;
//       case Operacoes.Multiplicar:
//          resultadoOperacao = calculadora.multiplicar(entrada);
//          break;
//       case Operacoes.Dividir:
//          resultadoOperacao = calculadora.dividir(entrada);
//          break;
//    }
//    return resultadoOperacao;
// }
// const calculadora = new Calculadora();
// const resultado = executarCalculadora({
//    valor1: 10,
//    valor2: 20,
// }, Operacoes.Somar);
// console.log(resultado.resultado);

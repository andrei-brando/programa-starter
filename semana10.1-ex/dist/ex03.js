"use strict";
class Cliente {
    constructor(cliente) {
        const { nome, email, numeroCartao } = cliente;
        this.nome = nome;
        this.email = email;
        this.numeroCartao = numeroCartao;
    }
}
class Vendedor {
    constructor(vendedor) {
        const { nome, cnpj, contaCorrente } = vendedor;
        this.nome = nome;
        this.cnpj = cnpj;
        this.contaCorrente = contaCorrente;
    }
}
class Pagamento {
    constructor(pagamento) {
        this._valor = 0;
        this._dataPagamento = '';
        this.cliente = pagamento.cliente;
        this.vendedor = pagamento.vendedor;
    }
    fazerPagamento(valorAPagar) {
    }
    atualizarValor() {
    }
    recuperarValor() {
    }
}
const cliente1 = new Cliente({
    nome: 'Andrei',
    email: 'andrei@gmail.teste.com',
    numeroCartao: '123456789',
});
const vendedor1 = new Vendedor({
    nome: 'Pichau',
    cnpj: '10.346.287/0001-20',
    contaCorrente: '12345-X',
});
const pagto = new Pagamento({
    cliente: cliente1,
    vendedor: vendedor1,
});

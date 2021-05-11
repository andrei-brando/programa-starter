interface Cliente {
   nome: string;
   email: string;
   numeroCartao: string;
}

class Cliente {
   nome: string;
   email: string;
   numeroCartao: string;

   constructor(cliente: Cliente) {
      const { nome, email, numeroCartao } = cliente;
      this.nome = nome;
      this.email = email;
      this.numeroCartao = numeroCartao;
   }
}

interface Vendedor {
   nome: string;
   cnpj: string;
   contaCorrente: string;
}

class Vendedor {
   nome: string;
   cnpj: string;
   contaCorrente: string;

   constructor(vendedor: Vendedor) {
      const { nome, cnpj, contaCorrente } = vendedor;
      this.nome = nome;
      this.cnpj = cnpj;
      this.contaCorrente = contaCorrente;
   }
}

interface IPagamento {
   cliente: Cliente;
   vendedor: Vendedor;
   // valor: number;
   // dataPagamento: string;
}

class Pagamento {
   cliente: Cliente;
   vendedor: Vendedor;
   private valor: number = 0;
   private dataPagamento: Date;

   constructor(pagamento: IPagamento, valor: number, dataPagamento: Date) {
      this.cliente = pagamento.cliente;
      this.vendedor = pagamento.vendedor;
      this.valor = valor;
      this.dataPagamento = dataPagamento;
   }

   fazerPagamento(valor: number): void {
      console.log('Pagamento efetivado');

   }

   atualizarValor(valor: number): void {
      this.valor = valor;
   }

   recuperarValor(): number {
      return this.valor;
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
}, 500, new Date());

pagto.atualizarValor(1100);
pagto.fazerPagamento(400);
pagto.recuperarValor();
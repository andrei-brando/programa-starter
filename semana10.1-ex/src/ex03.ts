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
      const {nome, email, numeroCartao} = cliente;
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
      const {nome, cnpj, contaCorrente} = vendedor;
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
   private _valor: number = 0;
   private _dataPagamento: string = '';

   constructor(pagamento: IPagamento) {
      this.cliente = pagamento.cliente;
      this.vendedor = pagamento.vendedor;
   }

   fazerPagamento(valorAPagar: number):void {
      
   }

   atualizarValor():void {

   }

   recuperarValor():void {

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
/*

Questão 5) Leia o problema abaixo:
 “Na Voitto Restaurant os clientes tem a possibilidade de deixar a
conta para pagar depois ou pagar na hora. Para que esse sistema
funcione, eles anotam os seguintes dados dos clientes: nome, email,
cpf e valor da conta.
 Crie um cliente genérico com essas informações e dois outros
cliente. O primeiro será o que pagará à vista, então acrescente
no cliente genérico o valor do troco. Já o segundo é preciso que
anotem o valor da compra como saldo negativo e uma função que vai
abatendo o valor de acordo com os pagamentos do cliente.”

Crie os seguintes clientes:
a)Carlos, gastou 30 reais e pagou à vista com uma nota de 50 reais;
b)Ana,  gastou  40  reais,  pagou  10  reais  e  pediu  para
anotar  o restante.

*/

class Cliente {
    constructor(nome, email, cpf, valorConta) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.valorConta = valorConta;
    }
}

class ClienteAVista extends Cliente {
    constructor(nome, email, cpf, valorConta, valorPago) {
    super(nome, email, cpf, valorConta);
    this.valorPago = valorPago;
    this.troco = valorPago - valorConta;
    }
}

class ClienteAPrazo extends Cliente {
    constructor(nome, email, cpf, valorConta, valorPago) {
        super(nome, email, cpf, valorConta);
        this.valorPago = valorPago;
    }

    adicionarPagamento(valor) {
        this.valorPago += valor;
    }

    calcularValorFaltante() {
        const valorFaltante = this.valorConta - this.valorPago;
        return `=== Cliente ${this.nome} ===\nAinda faltam R$${valorFaltante} para concluir o pagamento`;
    }
}

const carlos = new ClienteAVista("Carlos", "carlos@email.com", "12345678901", 30, 50);
console.log(carlos);

const ana = new ClienteAPrazo("Ana", "ana@email.com", "10987654321", 40, 10);
console.log(ana);
console.log(ana.calcularValorFaltante());
const prototipoCliente = {
    darTchau() {
        console.log(`Tchau, ${this.nome}`);
    }
}


function Cliente(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.exibirNomeCompleto = function() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}


// propriedade herdada pelo prototype
Cliente.prototype.darTchau = prototipoCliente.darTchau;

const cliente1 = new Cliente("Letícia", "Gomes");
const cliente2 = new Cliente("João", "Silva");

// console.log(cliente1);
// console.log(cliente2);

// cliente1.exibirNomeCompleto();
// cliente2.exibirNomeCompleto();

// cliente1.darTchau();
// cliente2.darTchau();

console.log(Object.getPrototypeOf(cliente1));
console.log(cliente1.hasOwnProperty("nome"));
const cliente = {
    nome: "Letícia",
    sobrenome: "Gomes da Silva",

    exibirNomeCompleto(saudacao) {
        console.log(`${saudacao}, ${this.nome} ${this.sobrenome}`);
    }
};

const cliente2 = {
    nome: "Paula",
    sobrenome: "Pinheiro",
};

const exibirNomeCompleto = cliente.exibirNomeCompleto.bind(cliente2);

exibirNomeCompleto("Olá");
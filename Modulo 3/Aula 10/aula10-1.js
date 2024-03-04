const cliente = {
    nome: "Letícia",
    sobrenome: "Gomes da Silva",

    exibirNomeCompleto(saudacao) {
        console.log(`${saudacao}, ${this.nome} ${this.sobrenome}`);
    }
};

cliente.exibirNomeCompleto("Olá");

/* quando tem um parâmetro de um obj, pode desestruturar 
function exibirNomeCompleto({ nome, sobrenome }) {
    console.log(`${nome} ${sobrenome}`);
}
*/
const cliente = {
    nome: "Letícia",
    sobrenome: "Gomes",
    dataDeNascimento: "23/04/2000",
    cpf: "123.456.789-0",
    telefone: "(32) 99999-9999",
    email: "leticia@email.com",
    endereco: "Rua S, 23, Centro - Juiz de Fora, Minas Gerais", 
};

// Desestruturar o objeto
const { nome: nomeDoCliente, sobrenome, ...outrosDados } = cliente;

console.log(nomeDoCliente);
console.log(sobrenome);
console.log(outrosDados);
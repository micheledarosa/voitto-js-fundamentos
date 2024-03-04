const dadosBasicos = {
    nome: "Letícia",
    sobrenome: "Gomes",
    dataDeNascimento: "23/04/2000",
    cpf: "123.456.789-0",
};

const dadosDeContato = {
    nome: "Letícia Gomes",
    telefone: "(32) 99999-9999",
    email: "leticia@email.com",
    endereco: "Rua S, 23, Centro - Juiz de Fora, Minas Gerais", 
};


// Spread Operator
const cliente = {
    ...dadosBasicos,
    ...dadosDeContato,
    nome: dadosBasicos.nome.toUpperCase(),
};

console.log(cliente);
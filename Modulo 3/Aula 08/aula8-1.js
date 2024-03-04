const cliente = {
    nome: "João",
    idade: 32,
    emails: ["joao@email.com", "joao2@email.com"],
    endereco: {
        logradouro: "Rua X",
        bairro: "Centro",
        cidade: "Juiz de Fora",
        estado: "MG",
        numero: 13,
        cep: "36000-000",
    },
};

// console.log(Object.keys(cliente.endereco));
// console.log(Object.values(cliente.endereco));
// console.log(Object.values(cliente));
console.log(Object.entries(cliente.endereco));
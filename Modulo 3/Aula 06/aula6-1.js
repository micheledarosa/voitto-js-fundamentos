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

console.log(cliente.emails[0]);

cliente.emails.forEach(email => console.log(email));

console.log(cliente.endereco.logradouro);

// se não existir endereço ou ele for nulo, dará um erro ao tentar acessar
console.log(cliente.endereco.cep);
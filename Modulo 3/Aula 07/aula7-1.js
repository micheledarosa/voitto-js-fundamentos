const clientes = [
    {
        nome: "Ana",
        idade: 23,
        email: "ana@email.com",
        endereco: "Rua X, número 13",
    },
    {
        nome: "Bernardo",
        idade: 32,
        email: "bernardo@email.com",
        endereco: "Rua Y, número 901",
    },
    {
        nome: "Carlos",
        idade: 45,
        email: "carlos@email.com",
        endereco: "Rua Z, número 14",
    },
    {
        nome: "Daniela",
        idade: 20,
        email: "daniela@email.com",
        endereco: "Rua W, número 109",
    },
]

const clientesAlvo = clientes.filter(cliente => cliente.idade < 30);
const emailsDosClientesAlvo = clientesAlvo.map(clientesAlvo => clientesAlvo.email);

console.log(emailsDosClientesAlvo);
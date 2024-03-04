const cliente = {
    nome: "João",
    idade: 32,
    email: "joao@email.com",
    endereco: "Rua X, número 13"
};

cliente.celular = 329999999;
cliente.email = "joao.novoemail@email.com";

delete cliente.endereco;

console.log(cliente.celular);
console.log(cliente.email);
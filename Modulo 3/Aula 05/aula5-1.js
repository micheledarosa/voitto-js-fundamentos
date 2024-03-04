const cliente = {
    nome: "João",
    idade: 32,
    email: "joao@email.com",
    endereco: "Rua X, número 13"
};

for (let key in cliente) {
    // exibePropriedade(cliente, key);
    console.log(key);
}


function exibePropriedade(cliente, propriedade) {
    console.log(`O(a) ${propriedade} do(a) cliente é ${cliente[propriedade]}`);
}
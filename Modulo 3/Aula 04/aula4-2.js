const cliente = {
    nome: "João",
    idade: 32,
    email: "joao@email.com",
    endereco: "Rua X, número 13",
};


function exibePropriedade(cliente, propriedade) {
    console.log(`O(a) ${propriedade} do(a) cliente é ${cliente[propriedade]}`);
}


exibePropriedade(cliente, "idade");
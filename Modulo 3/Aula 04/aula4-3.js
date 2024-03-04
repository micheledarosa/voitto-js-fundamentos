const cliente = {
    nome: "João",
    idade: 32,
    email: "joao@email.com",
    endereco: "Rua X, número 13",
};

const chaves = Object.keys(cliente);

chaves.forEach(chave => exibePropriedade(cliente, chave));


function exibePropriedade(cliente, propriedade) {
    console.log(`O(a) ${propriedade} do(a) cliente é ${cliente[propriedade]}`);
}
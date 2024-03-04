/*

Questão  2)  Abaixo  temos  dois  objetos  diferentes: 
fichaGuerreiro e equipamentoGuerreiro.

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipamentoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

a) Utilize o spread operator um crie apenas o objeto guerreiro; 
b) Se for criado um objeto mago, além do objeto guerreiro, 
como mostrado abaixo, o acontecerá quando o programa ser rodado?

const mago = {
    nome: "Merlin",
    classe: "mago",
    arma: "Varinha de fênix",
    capa: "capa vampíritica +3"
}

const personagens = { ...guerreiro, ...mago}

console.table(personagens)

*/

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipamentoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

// a)
const guerreiro = { ...fichaGuerreiro, ...equipamentoGuerreiro};
console.log(guerreiro);

const mago = {
    nome: "Merlin",
    classe: "mago",
    arma: "Varinha de fênix",
    capa: "capa vampíritica +3"
}

const personagens = { ...guerreiro, ...mago}

console.table(personagens)

/*
b) Quando o programa for rodado, apenas a tabela do objeto mago irá
aparecer, pois o spread dele foi feito por último e ele possui as 
mesmas propriedades do objeto guerreiro. Sendo assim, as propriedades
do mago prevalecem.
*/
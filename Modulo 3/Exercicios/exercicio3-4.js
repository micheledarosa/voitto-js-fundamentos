/*

Questão 4) Usando o mesmo objeto do exercício anterior,
crie uma função que juntará os nomes.

*/

const paciente = {
    primeiroNome: "Thiago",
    ultimoNome: "Oliveira",
    idade: 30,
    peso: 80.1,
    altura: 1.80,

    calcularImc() {
        return (this.peso / (this.altura ** 2)).toFixed(1);
    },

    nomeCompleto() {
        return `${this.primeiroNome} ${this.ultimoNome}`;
    }
};

console.log(`Paciente: ${paciente.nomeCompleto()}`);
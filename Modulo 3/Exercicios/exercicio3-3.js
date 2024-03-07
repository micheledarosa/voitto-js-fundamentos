/*

Questão 3) Tendo o objeto abaixo, crie uma função dentro do objeto
onde irá calcular o IMC do paciente.

const paciente = {
    primeiroNome: "Thiago",
    ultimoNome: "Oliveira",
    idade: 30,
    peso: 80.1,
    altura: 1.80,
};

*/

const paciente = {
    primeiroNome: "Thiago",
    ultimoNome: "Oliveira",
    idade: 30,
    peso: 80.1,
    altura: 1.80,

    calcularImc() {
        return (this.peso / (this.altura ** 2)).toFixed(1);
    }
};

const nomeCompletoDoPaciente = `${paciente.primeiroNome} ${paciente.ultimoNome}`;
console.log(`O IMC do paciente ${nomeCompletoDoPaciente} é ${paciente.calcularImc()}`);
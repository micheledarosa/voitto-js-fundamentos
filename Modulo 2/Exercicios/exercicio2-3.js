/*

Questão 3) Utilize filter para separar o array abaixo em
números pares e ímpares.

numeros = [1, 54, 147, 13, 254, 60, 77, 86, 19, 10]

*/

const numeros = [1, 54, 147, 13, 254, 60, 77, 86, 19, 10];

const pares = numeros.filter(el => el % 2 === 0);
const impares = numeros.filter(el => el % 2 !== 0);

console.log(`Números pares: ${pares.join(', ')}\nNúmeros ímpares: ${impares.join(', ')}`);
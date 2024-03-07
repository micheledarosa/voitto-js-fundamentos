/*

Questão  5)  Crie  uma  função  onde  é  passado  por  parâmetro
  a temperatura em Celsius e ela te retorne o valor em Fahrenheit.
  
  Dica: F = (C × 9/5) + 32

*/

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

console.log(convertToFahrenheit(30));
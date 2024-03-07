/*

Questão 2) Dado a array abaixo com várias temperaturas em
Fahrenheit. Utilize map() para calcular todas as temperaturas
em Celsius.

fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ]

*/

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const convertToCelsius = fahrenheit.map(el => ((el - 32) * 5 / 9).toFixed(1));

console.log(`Temperaturas convertidas de Fahrenheit para Celsius: ${convertToCelsius.join(', ')}`);
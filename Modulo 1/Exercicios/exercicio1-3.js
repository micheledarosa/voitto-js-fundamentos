/*

Questão 3) Crie um programa que irá mostrar na tela uma mensagem
 dependendo dos valores escolhidos para x e y: 
 
 ● Se x for maior ou igual a y, a mensagem será 
 “x (exibir o valor de x) é maior que y (exibir o valor de y)!”;
 
 ● Se x for menor que y, a mensagem será 
 “y (exibir o valor de y) é maior que x (exibir o valor de x)!”.
 
*/

let x = 10, y = 8;

x >= y ? console.log(`x ${x} é maior que y ${y}`) :
console.log(`y ${y} é maior que x ${x}`);
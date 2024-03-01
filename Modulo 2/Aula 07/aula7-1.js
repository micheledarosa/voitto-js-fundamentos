const notas = [3, 6, 7, 9, 8, 10];

// percorrendo o array
notas.forEach((nota) => console.log(nota));

// alterando os elementos do array
notas.forEach((nota, ind) => notas[ind] = nota + 1);

console.log(notas);
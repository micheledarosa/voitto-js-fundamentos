const notas = [8, 7.2, 3, 9, 10, 2, 6];
const somaDasNotas = notas.reduce((soma, nota) => soma + nota)  // se não passar o valor inicial, considera o primeiro el do array
console.log((somaDasNotas /notas.length).toFixed(1));

// const quantidadeDeNotas = notas.length;

// let somaDasNotas = 0;

// for (let i = 0; i < quantidadeDeNotas; i++) {
//     somaDasNotas += notas[i]
// }

// const mediaDasNotas = somaDasNotas / quantidadeDeNotas;

// console.log(`A média das notas é ${mediaDasNotas.toFixed(1)}`);    
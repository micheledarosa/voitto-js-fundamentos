const notas = [3, 6, 7, 9, 8, 10];

const notasComPontoExtra = notas.map(nota => nota + 1);

console.log(notasComPontoExtra);

// notas.map(adicionarPontoExtra) = arrow function acima
function adicionarPontoExtre(nota) {
    return nota + 1;
}
/*

Questão 1) Leia o problema abaixo: 
“A Voitto Class pegou as notas de três alunos diferentes.
 O aluno A tirou 10, 6.5, 8 e 7.5, enquanto o aluno B tirou 9, 6 e 6,
 e por fim o aluno C tirou 8.5 e 9.5.
 Qual seria a média geral de todas as notas?”
 Utilize estrutura de repetição para realizar essa média.
 
 Dica: crie um arraynotasGeral, onde cada elemento é um array com as notas
 de cada aluno. Depois utilize for para percorrer toda essa matriz e somar
 as notas.

*/

const notasAlunoA = [10, 6.5, 7.5];
const notasAlunoB = [9, 6, 6];
const notasAlunoC = [8.5, 9.5];

const notasGerais = [notasAlunoA, notasAlunoB, notasAlunoC];

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        console.log(media += notasGerais[i][j] / notasGerais[i].length)
    }
}

media /= notasGerais.length;
console.log(`Média geral das notas dos alunos: ${media.toFixed(1)}`)
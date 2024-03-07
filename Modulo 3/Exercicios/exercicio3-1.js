/*

Questão 1) Quais os erros presentes no código abaixo?

-> "revistas" deveria ser um objeto
-> falta de vírgula depois do objeto revistas
-> rpg3 deveria estar entre aspas
-> o elemento 2 não existe em ação

let produtos = {
    videos: {
        comedia: ["comedia1", "comedia2"],
        romance: ["romance1", "romance2"]
    },
    revistas: [
        moda = ["moda1", "moda2"],
        saude = ["saude1", "saude2"],
    ]
    jogos: {
        rpg: ["rpg1", "rpg2", rpg3],
        acao: ["acao1", "God of War"]
    }
}

console.log(produtos.jogos.acao[2])

*/

// Código corrigido
let produtos = {
    videos: {
        comedia: ["comedia1", "comedia2"],
        romance: ["romance1", "romance2"]
    },
    revistas: {
        moda: ["moda1", "moda2"],
        saude: ["saude1", "saude2"]
    },
    jogos: {
        rpg: ["rpg1", "rpg2", "rpg3"],
        acao: ["acao1", "God of War"]
    }
};

console.log(produtos.jogos.acao[1]);
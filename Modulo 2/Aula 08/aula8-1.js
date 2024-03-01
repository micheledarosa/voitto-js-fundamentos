const array = [12, "123", new Date(), ["123", "3556"], 2324, 239, "Michele", "Morango"];

const arrayNumerico = array.filter(el => typeof el === "number");

console.log(arrayNumerico);

// array.filter(selecionaNumeros) = arrow function acima
function selecionaNumeros(elemento) {
    // return true - adiciona o elemento no array novo
    // return false - não adiciona o elemento no array novo
    return typeof elemento === "number"
}
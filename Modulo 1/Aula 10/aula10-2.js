const idade = 16;
const pais = "EUA"

const resultado = (
    (idade >= 18) || (idade >= 16 && pais === "EUA")) ? 
    "Aprovado" : "Reprovado"

console.log(resultado);
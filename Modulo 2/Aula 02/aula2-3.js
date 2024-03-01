// 10 primeiros múltiplos de 234 
// Primeiro algarismo é 1
// Segundo algarismo é 2

let numero = 234, contador = 0, stringDoNumero, primeiroAlgarismo, segundoAlgarismo;

while (contador < 10) {
    stringDoNumero = String(numero);
    primeiroAlgarismo = stringDoNumero[0];
    segundoAlgarismo = stringDoNumero[1];

    if (primeiroAlgarismo === "1" && segundoAlgarismo === "2") {
        contador++;
        console.log(numero);
    }

    numero += 234
}
const nome = "João";

if (nome) {
    console.log(`Bem-vindo ${nome}`);
} else {
    console.log("Bem-vindo!");
}

// TRUTHY E FALSY

// FALSY: false, 0, strings vazias, null, undefined, NaN
// TRUTHY: todo o resto

console.log(!!0);
console.log(!!"0");
console.log(!!123);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);
console.log(!!{});
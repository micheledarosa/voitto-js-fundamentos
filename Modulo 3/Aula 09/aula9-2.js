const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

// recebe o endereço de memória que o obj1 foi armazenado
const obj2 = obj1;
const obj3 = {
    a: 1,
    b: 2,
    c: 3,
};

obj2.d = 4;

console.log(obj1);

obj1.e = 5;

console.log(obj2);
// endereço de memórias igual
console.log(obj1 === obj2);
// endereço de memórias diferente
console.log(obj1 === obj3);

// copia o objeto com um endereço de memória diferente
const obj4 = {...obj1};
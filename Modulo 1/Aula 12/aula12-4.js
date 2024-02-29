let nome = "Jean";


function darUmAlo(nome) {
    console.log(`E aí, ${nome || "galera"}!`);
}


function darUmTchau(periodo, nome = "galera") {
    console.log(`Boa ${periodo}, ${nome}!`);
}


darUmAlo("Michele");
darUmTchau("Michele");

darUmAlo(nome);
console.log(nome);

darUmAlo();
darUmTchau();

darUmTchau("noite");
export class Usuario {
    #nome;
    #email;
    #nascimento;
    #codigoCadastro;
    #ativo;

    constructor(nome, email, nascimento, codigoCadastro, ativo = true) {
        this.#nome = nome,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#codigoCadastro = codigoCadastro,
        this.#ativo = ativo
    }

    seApresentar() {
        console.log(`Olá, me chamo ${this.#nome}. Muito prazer!`);
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }
}
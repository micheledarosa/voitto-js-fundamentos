import { Usuario } from "./Usuario.js";

export class Docente extends Usuario {
    #cursos;

    constructor(nome, email, nascimento, codigoCadastro, ativo = true, cursos) {
        super(nome, email, nascimento, codigoCadastro, ativo);
        this.#cursos = cursos;
    }

    seApresentar() {
        const cursos = this.#cursos.join(", ");
        console.log(`Olá, me chamo ${this.nome}, sou docente do(s) curso(s) ${cursos}. Muito prazer!`);
    }

    avaliarAtividade(aluno, atividade, nota) {
        console.log(`Aluno ${aluno}\nAtividade: ${atividade}\nNota: ${nota}`);
    }
}
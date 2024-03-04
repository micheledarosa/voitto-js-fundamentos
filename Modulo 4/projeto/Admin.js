import { Usuario } from './Usuario.js';

export class Admin extends Usuario {
    constructor(nome, email, nascimento, codigoCadastro, ativo = true) {
        super(nome, email, nascimento, codigoCadastro, ativo);
    }

    criarCurso(curso, cargaHoraria) {
        console.log(`O curso ${curso} foi criado com a carga horária de ${cargaHoraria} horas.`);
    }
}
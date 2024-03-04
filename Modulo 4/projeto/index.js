import { Usuario } from "./Usuario.js";
import { Admin } from "./Admin.js";
import { Docente } from "./Docente.js";

const maria = new Usuario('Maria', 'maria@email.com', '13/09/1999', '12345');
const carlos = new Admin('Carlos', 'carlos@email.com', '23/02/1982', '23494');
const mateus = new Docente('Mateus', 'mateus@email.com', '09/07/1990', '23842', true, ['HTML & CSS', 'Python']);

maria.seApresentar();
carlos.seApresentar();
mateus.seApresentar();

mateus.nome = "Mateus Costa";
mateus.seApresentar();


console.log(maria);
console.log(carlos);
console.log(mateus);

carlos.criarCurso('HTML & CSS', 20);
mateus.avaliarAtividade('João', 'Trabalho do Módulo 4', 8);
/*
    Sistema de Autenticação
    ser autenticável significa ter o método autenticar

    ducky type = andar com o pato, grasnar como um pato, nadar como um pato... é um pato!
*/

export class SistemaAutenticacao {

    static login(autenticavel, senha) {

        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);

        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}
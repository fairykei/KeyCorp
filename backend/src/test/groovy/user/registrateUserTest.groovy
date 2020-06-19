package user

import spock.lang.Specification
import com.keycorp.domain.Usuario;

class registrateUserTest extends Specification{
  def 'deverá cadastrar um usuário'(){
    given:
    Usuario usuario = new Usuario()

    when:
    usuario.nome = "Thiago Kuhl";
    usuario.email = "pk47";
    usuario.senha = "123456";
    usuario.dataNascimento = "03/09/2000"
    usuario.cpf = "12332198785"


    then:
    usuario.validarCadastroUsuario(usuario)
  }
}

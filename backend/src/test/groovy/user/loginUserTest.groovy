package user

import com.keycorp.domain.Usuario
import spock.lang.Specification

class loginUserTest extends Specification {
  def 'login deve estar correto'() {

    given:
    Usuario usuario = new Usuario();

    when:
    usuario.email = "tkuhl"
    usuario.senha = "123456"

    then:
    assert usuario.validarLogin(usuario)
    usuario.validarLogin(usuario)

  }
}

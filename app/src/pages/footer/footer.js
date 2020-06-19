
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div styleName="footer">
                <div styleName="rodape main">
                    <div styleName="info main">
                        <span styleName="span">
                            <p>A <b>KEY CORP</b> é um e-commerce especializado em atender os estudantes,
                            fornecendo as melhores novidades do mercado tecnológico.</p>
                        </span>
                    </div>

                    <div styleName="links">
                        <div styleName="uteis main">
                            <ul>
                                <p><b>Links úteis</b></p>
                                <li><a href="">FAQ</a>  </li>
                                <li><a href="">Pessoa Jurídica</a></li>
                                <li><a href="">Política e privacidade</a></li>
                            </ul>
                        </div>

                        <div styleName="navegacao main">
                            <ul>
                                <p><b>Navegação</b></p>
                                <li><a href="./">Home</a></li>
                                <li><a href="./categorias">Categorias</a></li>
                                <li><a href="./historico">Histórico</a></li>
                                <li><a href="./ofertas">Ofertas e descontos</a></li>
                                <li><a href="./contato">Contato</a></li>
                            </ul>
                        </div>
                        <div styleName="redes main">
                            <ul>
                                <p><b>Redes Sociais</b></p>
                                <li><a href="">Instagram</a>  </li>
                                <li><a href="">Linkedin</a></li>
                                <li><a href="">Twitter</a></li>
                                <li><a href="">suporte@keycorp.com</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CSSModule(Footer, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

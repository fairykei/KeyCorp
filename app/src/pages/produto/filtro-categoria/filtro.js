import React from 'react';
import CSSModule from 'react-css-modules';
import style from './filtro.module.css';
import 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Filtro extends React.Component {
    render() {
        return (
            <>
                <div styleName="container">
                    <div className="col-4">
                        <nav styleName="nav-sidebar">
                            <h3>Filtrar por:</h3>
                            <ul styleName="nav tabs">
                                <li>
                                    <u>Tipo de Licença</u>
                                    <ul>
                                        <li><input type="checkbox"></input> Estudante
                                        </li>
                                        <li><input type="checkbox"></input> Enterprise
                                        </li>
                                        <li><input type="checkbox"></input> Standard
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <u>Categoria</u>
                                    <ul>
                                        <li><input type="checkbox"></input> IDEs</li>
                                        <li><input type="checkbox"></input> Modelagem de Dados
                                        </li>
                                        <li><input type="checkbox"></input> Servidores
                                        </li>
                                        <li><input type="checkbox"></input> Edição de Imagens
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <u>Faixa de Preço</u>
                                    <ul>
                                        <li><input type="checkbox"></input> R$0,00 - R$50,00
                                        </li>
                                        <li><input type="checkbox"></input> R$50,01 - R$300,00
                                        </li>
                                        <li><input type="checkbox"></input> R$300,01 - R$650,00
                                        </li>
                                        <li><input type="checkbox"></input> R$650,01 - R$1.000,00
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default CSSModule(Filtro, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
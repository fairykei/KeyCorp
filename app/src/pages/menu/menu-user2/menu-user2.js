import React from 'react';
import CSSModule from 'react-css-modules';
import style from './menu-user2.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GuestUsuario extends React.Component{
 render() {
     return(
        <div className="col col-lg-1" styleName="usuario">
        <div styleName="user-options">
            <FontAwesomeIcon styleName="user" icon="user-circle" />
            <ul>
                <li>
                    <p>Conecte-se</p>
                    <ul>
                        <li><a href="./login">Login</a></li>
                        <li><a href="./cadastro">Cadastre-se</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div> 
     );
 }
}

export default CSSModule(GuestUsuario, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })


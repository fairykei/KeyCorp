import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './site-info.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SiteInfo extends React.Component {
    render() {
        return (
            <>
                <section styleName="site-info">
                    <div styleName="container">
                        <div styleName="info-slide">
                            <div styleName="img-container">
                                <FontAwesomeIcon styleName="icon" icon="credit-card" />
                            </div>

                            <h3>Formas de pagamento</h3>
                            <p>Diversas formas de pagamento incluindo a licença estudantil</p>
                        </div>

                        <div styleName="info-slide">
                            <div styleName="img-container">
                                <FontAwesomeIcon styleName="icon" icon="check-double" />
                            </div>

                            <h3>Entrega na hora</h3>
                            <p>Entrega do produto imediata ao pagamento </p>
                        </div>

                        <div styleName="info-slide">
                            <div styleName="img-container">
                                <FontAwesomeIcon styleName="icon" icon="shield-alt" />
                            </div>

                            <h3>Segurança, do início ao fim</h3>
                            <p>Garatimos o sigilo dos seus dados, não se preocupe</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CSSModule(SiteInfo, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './guest-cart.module.css';
import Menu from '../../menu/menu.js'
import Footer from '../../footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GuestCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cupom: '',
            qtd: ''
        }
    }


    render() {
        return (

            <>

                <Menu />

                <div styleName="carrinho">
                    <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meu carrinho</li>
                        </ol>
                    </div>

                    <div styleName="page">

                        <div styleName="info">
                            <FontAwesomeIcon styleName="icon1 " icon="frown" /> <br />

                            <h3>Se carrinho está vazio
                            <FontAwesomeIcon styleName="icon2 " icon="shopping-cart" />
                            </h3>

                            <br />

                            <Link to="./">
                                <button styleName="btn">
                                    Voltar as compras
                                </button>
                            </Link>

                        </div>

                    </div>


                </div>

                <Footer />
            </>
        );
    }
}

export default CSSModule(GuestCart, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
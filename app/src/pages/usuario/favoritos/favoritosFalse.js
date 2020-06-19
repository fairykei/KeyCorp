import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './favoritos.module.css';
import Menu from  '../../menu/menu'
import Footer from '../../footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FavoritosFalse extends React.Component{
    render(){
        return <>
            <Menu />

            <div styleName="search">
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Favoritos</li>
                    </ol>
            </div>

            <div styleName="page">

                <div styleName="info">
                    <FontAwesomeIcon styleName="icon1 " icon="frown" /> <br />

                    <h3>Você ainda não tem produtos salvos 
                   <p>Mas não se preocupe é só fazer login para salvar.</p>
                    </h3>

                    <br />

                    <Link to="./login">
                        <button styleName="btn">
                            Login
                        </button>
                    </Link>

                </div>

            </div>
        </div>

        <Footer />
        
        </>
    }
} 


export default CSSModule(FavoritosFalse, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

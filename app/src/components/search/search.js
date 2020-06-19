import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './search.module.css';
import Menu from  '../../pages/menu/menu'
import Footer from '../../pages/footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NotFoundSearch extends React.Component{
    render(){
        return <>
            <Menu />

            <div styleName="search">
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Pesquisa</li>
                    </ol>
            </div>

            <div styleName="page">

                <div styleName="info">
                    <FontAwesomeIcon styleName="icon1 " icon="frown" /> <br />

                    <h3>Não encontramos o seu produto 
                   <p>Mas não se preocupe, temos diversas opções para você.</p>
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
    }
} 


export default CSSModule(NotFoundSearch, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

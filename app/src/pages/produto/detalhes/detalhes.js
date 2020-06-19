import React from 'react';
import CSSModule from 'react-css-modules';
import style from './detalhes.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Produto from '../../produto/produto/produto.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'universal-cookie';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53

//Imagens 

import escritorio from '../../../image/escritorio.png'
import postman from '../../../image/postman.png'
import oracle from '../../../image/oracle.jpg'
import photoshopEnterprise from '../../../image/photoshop.png'
import photoshopEducation from '../../../image/photoshop.png'
import vscode from '../../../image/vscode.png'
import vscode2 from '../../../image/vscode2.png'
import visio from '../../../image/visio.jpg'
import sql from '../../../image/sql.jpg';
import vstudio from '../../../image/vstudio.jpg';
import bizagi from '../../../image/bizagi.jpg';

var img;

class Detalhes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: '',
            idProduto: '',
        }
    }

    salvarFavorito = (event) => {

        const cookies = new Cookies();

        const favorito = {
            idProduto: sessionStorage.getItem("idProduto"),
            nomeProduto: "",
            descProduto: "",
            valorBase: ""
        };

        console.log(favorito.idProduto);

        var idUser = cookies.get('idUsuario');


        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.149.227/save/favorite/' + idUser, favorito)
            .then(res => {
                console.log(res + 1);
                console.log(res.data);

                if (res.status === 200) {
                    alert('Favorito salvo com sucesso :)');
                    window.location.href = './favoritos';
                }

            })

            .catch(error => {

                if (error.response.status === 409) {
                    alert('Favorito já cadastrado!');
                }
                if (error.response.status === 500 || error.response.status === 400) {
                    alert('Dados inválidos!');
                }

                return error;
            }

            )
    }

    render() {
<<<<<<< HEAD
        return (
            <>
                <Menu />
                <div className="container" styleName="detalhes">
                    <div className="produto">
                        <div className="row">
                            <div styleName="imgProduct"></div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h1 styleName="title">Produto xyz</h1>
                                <div styleName="rating"></div>
                                <h1 styleName="valor-original">De: R$100.00</h1>
                                <h1 styleName="promo">Por: R$99.00</h1>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <Button styleName="btn text" href="#"><FontAwesomeIcon icon="fa-shopping-cart" /> Wishlist</Button>
                                </div>
                                <div className="col-6">
                                    <Button styleName="btn text" href="#"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar ao Carrinho</Button>
                                </div>
                            </div>
                        </div>
=======

        var produto = sessionStorage.getItem("titulo");

        switch (produto) {
            case "Oracle Database 18c - Enterprise Edition":
                img = oracle;
                break;
            case "Visual Studio Code":
                img = vscode2;
                break;
            case "Photoshop - Enterprise Edition":
                img = photoshopEnterprise;
                break;
            case "Photoshop - Education Edition":
                img = photoshopEducation;
                break;
            case "Office 365 - Home Edition":
                img = escritorio;
                break;
            case "Microsoft Visio Professional 2019":
                img = visio;
                break;
            case "SQL Server Database 2017- Enterprise Edition":
                img = sql;
                break;
            case "Visual Studio - Professional Edition":
                img = vstudio;
                break;
            case "Bizagi Studio - Professional Edition":
                img = bizagi;
                break;
        }


        return (
            <>
                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Detalhes</li>
                        <li className="breadcrumb-item" aria-current="page">{sessionStorage.getItem("titulo")}</li>
                    </ol>
                </div>

                <div className="container" styleName="detalhes">
                    <div className="produto">
                        <div className="row">
                            <div styleName="">
                                <img styleName="imgProduct" src={img} alt="some text" width="420" height="350" />
                            </div>
                        </div>

                        <div styleName="info">
                            <h1 styleName="title">{sessionStorage.getItem("titulo")}</h1>
                            <div styleName="rating"></div>
                            <h1 styleName="valor-original">Preço: R${sessionStorage.getItem("valor")}</h1>
                        </div>

                        <div styleName="buttom">
                            <Button onClick={this.salvarFavorito} styleName="btn1 text"><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar aos Favoritos</Button> &nbsp;

                            <Link to="./pedido">
                                <Button styleName="btn2 text"><FontAwesomeIcon icon="fa-shopping-cart" /> Comprar</Button>
                            </Link>
                        </div>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                    </div>
                    <div className="row">
                        <div styleName="descricao">
                            <h3 styleName="desc-title">Detalhes do Produto</h3>
<<<<<<< HEAD
                            <p styleName="desc-text">dlsmfiulsdh fuihsfiush difdnfhusf oisfu yisdufydsfiusdfu</p>
                        </div>
                    </div>
                </div>
                <Similares />
=======
                            <p styleName="desc-text">{sessionStorage.getItem("descricao")}</p>
                        </div>
                    </div>
                </div>
                {/* <Similares /> */}
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                <Footer />
            </>
        )
    }
}

<<<<<<< HEAD
class Similares extends React.Component {
    render() {
        return (
            <>
                <div styleName="produtos">
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                </div>
            </>
        )
    }
}
=======
// class Similares extends React.Component {
//     render() {
//         return (
//             <>
//                 <div styleName="produtos">
//                     <div className="row">
//                         <Produto />
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53

export default CSSModule(Detalhes, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
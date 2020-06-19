import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CSSModule from 'react-css-modules';
import style from './home.module.css';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import SiteInfo from '../site-info/site-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { func } from 'prop-types';
=======
// import { func } from 'prop-types';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
import 'react-bootstrap';
import axios from 'axios';

const cookies = new Cookies();
var id;
<<<<<<< HEAD
=======

>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: cookies.get('idUsuario'),
        }
        console.log(cookies.get('idUsuario'));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
<<<<<<< HEAD
        axios.get('http://35.237.84.170/search/products')
=======
        axios.get('http://35.237.149.227/search/products')
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
            .then(res =>  {

                console.log(res.status);
                console.log(res.data[id])
    
                var resposta = res.data;

<<<<<<< HEAD
                sessionStorage.setItem('titulo', resposta[id].nomeProduto);
                sessionStorage.setItem('valor', resposta[id].valorBase);
                sessionStorage.setItem('descricao', resposta[id].descProduto);
=======
                sessionStorage.setItem("idProduto", resposta[id].idProduto)
                sessionStorage.setItem('titulo', resposta[id].nomeProduto);
                sessionStorage.setItem('valor', resposta[id].valorBase);
                sessionStorage.setItem('descricao', resposta[id].descProduto);
                sessionStorage.setItem('id', id);
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53

                console.log(resposta[id].nomeProduto);

                return window.location.href="./detalhes";

<<<<<<< HEAD
                }
                 
=======
                }   
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
            )
            .catch(error => {
                return error;
            }
            )     
    }


    render() {
        console.log(this.state);

        return (
            <>
                <Menu />

                <div styleName="Home">

                    <div styleName="bg"></div>

                    <section styleName="container">

                        <div className="row">
<<<<<<< HEAD
                            <div className="col-3" onClick={() => id = 1}>
=======
                            <div className="col-3" onClick={() => id = 4}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                               
                                <div onClick={this.handleSubmit}  styleName="bloco">
                                    <Link>
                                        <span >
                                            <h3>Office 365</h3>
                                        </span>

                                        <div styleName="img img-prod1">

                                        </div>

                                        <div styleName="desc">
                                            <h3>Aplicativos para escritório</h3>
                                        </div>
                                    </Link>
                                </div>
                            
                            </div>
<<<<<<< HEAD
                            <div className="col-3" onClick={() => id = 0}>
                                    <div styleName="bloco" onClick={this.handleSubmit} id="2">
=======
                            <div className="col-3" onClick={() => id = 1}>
                                    <div styleName="bloco" onClick={this.handleSubmit} id="1">
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                        <Link styleName="bl">
                                            <h3>VS Code</h3>
                                            <div styleName="img img-prod2"></div>
                                            <div styleName="desc">
                                                <h3>Editor de código fonte</h3>
                                            </div>
                                        </Link>
                                    </div>
                         
                            </div>
<<<<<<< HEAD
                            <div className="col-3" onClick={() => id = 0}>
=======
                            <div className="col-3" onClick={() => id = 2}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                <div styleName="bloco" onClick={this.handleSubmit} id="3">
                                <Link>
                                        <h3>PhotoShop</h3>
                                        <div styleName="img img-prod3"></div>
                                        <div styleName="desc">
                                            <h3>Editor de imagens bidimensionais</h3>
                                        </div>
                                </Link>
                                </div>
                            </div>
                            <div className="col-3" onClick={() => id = 0}>
                                <div styleName="bloco" onClick={this.handleSubmit} id="3" id="4">
                                    <Link>
                                        <h3>Oracle Database</h3>
                                        <div styleName="img img-prod4"></div>
                                        <div styleName="desc">
                                            <h3>Oracle database 18c</h3>
                                        </div>
                                     </Link>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section styleName="box">
                        <div className="row">
                            <span styleName="linha"></span>
                            <div className="col-4 " styleName="col1">
                                <p><b>Todos os software que você precisa em um só lugar</b></p>
                                <p>Enviado pelo próprio fornecedor</p>
                            </div>
                            <div className="col-4" styleName="col2">
                                <FontAwesomeIcon styleName="icon" icon="inbox" />
                                <p>Reserva antecipada do produto</p>
                            </div>
                            <div className="col-4" styleName="col3">
                                <FontAwesomeIcon styleName="icon" icon="check-circle" />
                                <p>Licença de software autenticada </p>
                            </div>
                        </div>
                    </section>

                    <section styleName="categorias">

                        <div styleName="hearder">
                            <h1><b>Categorias Populares</b></h1>
                        </div>

                        <div className="row" styleName="container">
                            <div styleName="galeria">
                                <div styleName="galeria1">

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 4}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto1"> </div>
                                            <div styleName="categ">
                                                <h3>Escritório</h3>
                                            </div>
                                        </Link>
                                    </div>


<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 2}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto2"></div>
                                            <div styleName="categ">
                                                <h3>Designer</h3>
                                            </div>
                                        </Link>
                                    </div>

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 5}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                         <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto3"></div>
                                            <div styleName="categ">
                                                <h3>Modelagens</h3>
                                            </div>
                                        </Link>
                                    </div>

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 6}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto4"></div>
                                            <div styleName="categ">
                                                <h3>Fluxogramas</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div styleName="galeria2">

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 7}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                         <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto1"> </div>
                                            <div styleName="categ">
                                                <h3>Editores</h3>
                                            </div>
                                        </Link>
                                    </div>

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 8}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto2"></div>
                                            <div styleName="categ">
                                                <h3>IDEs</h3>
                                            </div>
                                        </Link>
                                    </div>

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 9}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                        <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto3"></div>
                                            <div styleName="categ">
                                                <h3>Banco de dados</h3>
                                            </div>
                                        </Link>
                                    </div>

<<<<<<< HEAD
                                    <div styleName="g" onClick={() => id = 1}>
=======
                                    <div styleName="g" onClick={() => id = 10}>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                          <Link onClick={this.handleSubmit}>
                                            <div styleName="image foto4"></div>
                                            <div styleName="categ">
                                                <h3>Outros</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <SiteInfo />

                    <Footer />

                </div>

            </>
        );
    }
}

export default CSSModule(Home, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
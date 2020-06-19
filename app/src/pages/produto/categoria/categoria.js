import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './categoria.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';
import Filtro from '../filtro-categoria/filtro.js';
import Produto from '../produto/produto.js';
import axios from 'axios';
<<<<<<< HEAD

=======
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53

import escritorio from '../../../image/escritorio.jpeg'
import oracle from '../../../image/oracle.jpg'
import photoshopEnterprise from '../../../image/photoshop.png'
import photoshopEducation from '../../../image/photoshop.png'
import vscode2 from '../../../image/vscode2.png'
import vs from '../../../image/vstudio.jpg'
import bizagi from '../../../image/bizagi.jpg'
import sql from '../../../image/sql.jpg'
import visio from '../../../image/visio.jpg'



// class ProdutoCat extends React.Component {
//     render() {
//         const card = this.props.card;
//         return (
//             <>
//                 <div>
//                     <Card style={{ width: '15rem' }} styleName="produto">
//                         <Card.Img variant="top" id="img" styleName="img" src={card.img} />
//                         <Card.Body>
//                             <Card.Title id="titulo" name="titulo" styleName="text title">{card.titulo}</Card.Title>
//                             <div className="row">
//                                 <div className="col-6 pt-2">
//                                     <Card.Text styleName="text">R${card.valor}</Card.Text>
//                                 </div>
//                                 <div className="col-6">
//                                     <Link to="./pedido">
//                                         <Button styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </>
//         )
//     }
// }

// class CallCards extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { titulo: '', valor: '', img: '' };
//     }


//     handleSubmit = (event) => {
//         show = () => {

//         axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//         axios.get('http://35.237.149.227/search/products')
//             .then(res => {

//                 var view, titulo, img, valor;
//                 var resposta = res.data;
//                 for (var i in resposta) {
//                     resposta[i] = res.data[i];
//                     console.log(resposta[i]);
//                     card.titulo = resposta[i].nomeProduto;
//                     card.valor = resposta[i].valorBase;

//                     switch (titulo) {
//                         case "Oracle Database 18c - Enterprise Edition":
//                             img = oracle;
//                             break;
//                         case "Visual Studio Code":
//                             img = vscode2;
//                             break;
//                         case "Photoshop - Enterprise Edition":
//                             img = photoshopEnterprise;
//                             break;
//                         case "Photoshop - Education Edition":
//                             img = photoshopEducation;
//                             break;
//                         case "Office 365 - Home Edition":
//                             img = escritorio;
//                             break;
//                         case 'SQL Server Database 2017- Enterprise Edition':
//                             img = escritorio;
//                             break;
//                         case 'Adobe Creative Cloud - 1 Year':
//                             img = escritorio;
//                             break;
//                         case 'Intellij Idea - Ultimate':
//                             img = escritorio;
//                             break;
//                         case 'Visual Studio - Professional Edition':
//                             img = escritorio;
//                             break;
//                         case 'Bizagi Studio - Professional Edition':
//                             img = escritorio;
//                             break;
//                         case 'Microsoft Visio Professional 2019':
//                             img = escritorio;
//                             break;
//                         default:
//                             break;
//                     }
//                     card.img = img;

//                     if (i === 3 || i === 6) {
//                         view += '</div><div className="row">'
//                     }

//                     while (i < 9) {
//                         view += '<Card styleName="card">\n'
//                             + '<Card.Img variant="top" id="img" styleName="img" src={' + img + '} />\n'
//                             + '<Card.Body>'
//                             + '<Card.Title id="titulo" name="titulo" styleName="text title">' + titulo + '</Card.Title>\n'
//                             + '<div className = "row">\n'
//                             + '<div className="col-6 pt-2">\n'
//                             + '<Card.Text styleName="text">R$' + valor + '</Card.Text>\n'
//                             + '</div>\n'
//                             + '<div className="col-6">\n'
//                             + '< Link to = "./pedido" >\n'
//                             + '<Button styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Adicionar</Button>\n'
//                             + '</Link >\n'
//                             + '</div>\n'
//                             + '</div>\n'
//                             + '</Card.Body>\n'
//                             + '</Card>\n'
//                     }
//                 }
//                 document.getElementById('show').innerHTML = view;
//             })
//             .catch(error => {
//                 return error;
//             })
//     }
// }

//     render() {
//         return (
//             <>

//             </>
//         )
//     }
// }

var id;
class Categoria extends React.Component {
<<<<<<< HEAD

    clearStorage = (event) =>{
        window.sessionStorage.clear();
        window.localStorage.clear();
    }
    
=======
    handleSubmit = (event) => {
        event.preventDefault();

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.149.227/search/products')
            .then(res =>  {

                console.log(res.status);
                console.log(res.data[id])
    
                var resposta = res.data;

                sessionStorage.setItem("idProduto", resposta[id].idProduto)
                sessionStorage.setItem('titulo', resposta[id].nomeProduto);
                sessionStorage.setItem('valor', resposta[id].valorBase);
                sessionStorage.setItem('descricao', resposta[id].descProduto);
                sessionStorage.setItem('id', id);

                console.log(resposta[id].nomeProduto);

                return window.location.href="./detalhes";

                }   
            )
            .catch(error => {
                return error;
            }
            )     
    }
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
    render() {

        return (
            <>
                <Menu />
<<<<<<< HEAD

                <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Produtos</li>
                        </ol>
                    </div>

                <div className="container">
=======
                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Produtos</li>
                    </ol>
                </div>

                <div className="container" styleName="page">
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                    <div className="row">
                        <div className="col-12">
                            <Filtro />
                        </div>
                        <div className="col-12" styleName="grid-fix">
<<<<<<< HEAD
                            <ProdutoGrid />
=======
                            <div styleName="produtos">
                                <h3 styleName="heading">Produtos</h3>
                                <div className="row">
                                    <Card onClick={() => id = 0} style={{ width: '15rem' }} styleName="card" >
                                        <Card.Img variant="top" id="img" styleName="img" src={oracle} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Oracle Database 18c - Enterprise Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$47.000</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" />Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card onClick={() => id = 1} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={vscode2} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Visual Studio Code</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$0.00</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card onClick={() => id = 2} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={photoshopEnterprise} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Photoshop - Enterprise Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$1.260</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row">
                                    <Card onClick={() => id = 3} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={photoshopEducation} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Photoshop - Education Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$0.00</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card onClick={() => id = 4} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={escritorio} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Office 365 - Home Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$299</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card onClick={() => id = 5} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={visio} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Microsoft Visio Professional 2019</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$650</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row">
                                    <Card onClick={() => id = 6} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={bizagi} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Bizagi Studio - Professional Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$0.00</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" />Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card onClick={() => id = 7} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={vs} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">Visual Studio - Professional Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$1.200</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card onClick={() => id = 9} style={{ width: '15rem' }} styleName="card">
                                        <Card.Img variant="top" id="img" styleName="img" src={sql} />
                                        <Card.Body>
                                            <Card.Title id="titulo" name="titulo" styleName="text title">SQL Server Database 2017- Enterprise Edition</Card.Title>
                                            <div className="row">
                                                <div className="col-6 pt-2">
                                                    <Card.Text styleName="text">R$14.256</Card.Text>
                                                </div>
                                                <div className="col-6">
                                                    <Link to="./pedido">
                                                        <Button onClick={this.handleSubmit} styleName="btn text" href=""><FontAwesomeIcon icon="fa-shopping-cart" /> Ver Mais</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}


export default CSSModule(Categoria, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
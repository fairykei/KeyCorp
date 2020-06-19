import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './pagamento2.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import Resumo from '../../finalizar-pedido/resumo/resumo-pedido'
<<<<<<< HEAD
import ResumoPedido2 from '../../finalizar-pedido/resumo/resumo-pedido'
import ResumoPedido from '../../finalizar-pedido/resumo/resumo-pedido'
=======

import swal from 'sweetalert';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';



class Pagamento2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            instituicao: '',
            nome: '',
            email: '',
            curso: ''
        }
    }

<<<<<<< HEAD
    clearStorage = (event) =>{
        window.sessionStorage.clear();
        window.localStorage.clear();
    }
    
=======
    processOrder = (event) => {

        if (document.getElementById("instituicao").value === ""
            || document.getElementById("nome").value === ""
            || document.getElementById("email").value === ""
            || document.getElementById("curso").value === "") {
            alert("Verifique os campos, todos devem ser preenchidos corretamente");
        } else {
            const pedido = {
                valorTotal: sessionStorage.getItem('valor'),
                tipoPagamento: 3,
                idProduto: sessionStorage.getItem('id'),
            };

            const cookies = new Cookies();


            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.post('http://35.237.149.227/insert/order/' + cookies.get('idUsuario'), pedido)
                .then(res => {
                    swal(`Pedido  ${sessionStorage.getItem('titulo')} concluído!`, "Verifique sua caixa de email!", "success");
                })
                .catch(error => {
                    swal(`Erro no processamento do pedido  ${sessionStorage.getItem('titulo')}!`, "Por favor, tente novamente mais tarde!", "error");
                })
        }

        setInterval(() => {
            window.location.href = "./";
        }, 5000);
    }

    clearStorage = (event) => {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
    render() {
        return (<>

            <Resumo />

            <div styleName="finalizar-pedido">

                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Finalizar pedido</li>
                    </ol>
                </div>

                <div styleName="icone-voltar">
                    <a href="./categoria">
                        <FontAwesomeIcon styleName="icon " icon="chevron-left" /> &emsp;
                    </a>

                </div>

                <div styleName="container">
                    <form styleName="form">

                        <h3><b>Solicitar licença estudantil</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Instituição</label> <br />
                                <input id="instituicao" type="text" required></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input id="nome" type="text" required></input>
                            </span>
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Email</label> <br />
                                <input id="email" type="email" required></input>
                            </span>

                        </div>

                        <div styleName="wrapper4 wr">

                            <span>
                                <label>Curso</label> <br />
                                <input id="curso" type="text" required></input>
                            </span>

                        </div>

                        <div styleName="botton" onClick={(event) => this.processOrder(event)}>
                            <Link>Finalizar &emsp;
                            <FontAwesomeIcon styleName="icon" icon="chevron-right" />
                            </Link>
                        </div>


                    </form>
                </div>
            </div>

            <Footer />
        </>)
    }
}

export default CSSModule(Pagamento2, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
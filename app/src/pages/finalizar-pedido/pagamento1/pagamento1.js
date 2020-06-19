import React from 'react';
import CSSModule from 'react-css-modules';
import style from './pagamento1.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import Resumo from '../resumo/resumo-pedido';
<<<<<<< HEAD


=======
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import mastercard from '../../../image/mastercard-logo.png'
import visa from '../../../image/visa-logo.png'

var img;
class Pagamento1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cartao: '',
            vencimento: '',
            codigo: ''
        }
    }

<<<<<<< HEAD
    clearStorage = (event) =>{
        window.sessionStorage.clear();
        window.localStorage.clear();
    }
    
=======
    validadeExpirationDate = (event) =>{
        
        let date = new Date();
        let year = date.getFullYear().toString().substr(-2);

        let expirationDate = document.getElementById("vencimento").value

        let expirationMonth = expirationDate[0] + expirationDate[1]
        let expirationYear = expirationDate[2] + expirationDate[3]
        
        if(expirationMonth > 12 || expirationYear < year){
            alert("Data do cartão inválida!")
        }        
    }

    validadeCardBin = (event) => {
        var cardNumbers = document.getElementById("cartao").value
    
            const url = 'https://lookup.binlist.net/' + cardNumbers[0]+cardNumbers[1]+cardNumbers[2]+cardNumbers[3]+cardNumbers[4]
            +cardNumbers[5]+cardNumbers[6]+cardNumbers[7];

        axios.defaults.headers.get['Accept-Version'] = '3';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*";


        axios.get(url)
        .then( res => {
          console.log(res.data);

          console.log(res.data.scheme);
         
            //Recebe a bandeira do cartão de crédito
            switch(res.data.scheme){
                case "visa": 
                img = visa;

                break;

                case "mastercard":
                img = mastercard;
                break;

                default: alert("Cartão inválido!")
            } 
            
            
        })
        .catch(err => {
            console.log(err);
            
        })
    }


    processOrder = (event) => {

        if (document.getElementById("nome").value === ""
            || document.getElementById("cartao").value === ""
            || document.getElementById("vencimento").value === ""
            || document.getElementById("codigo").value === "") {
            alert("Verifique os campos, todos devem ser preenchidos corretamente");
        } else {

            const pedido = {
                valorTotal: sessionStorage.getItem('valor'),
                tipoPagamento: 1,
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

        // setInterval(() => {
        //     window.location.href = "./";
        // }, 5000);
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

                        <h3><b>Pagamento com cartão de crédito</b></h3>

                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Nome completo</label> <br />
                                <input id="nome" type="text" placeholder="Fulano da Silva" required></input>
                            </span>
                        </div>

                        <div  onChange={(event) => this.validadeCardBin(event)} styleName="wrapper2 wr" >
                            <span onClick={this.handleSubmit}>
                                <label>Número do cartão</label> <br />
                                <input   maxLength="16" minLength="16" id="cartao" placeholder="1234 **** **** 5678" type="text" onBlur={(event) => this.validadeCardBin(event)} required></input>
                                <img styleName="bandeira" src={img}  width="100%" alt=""/>
                            </span>
                         
                        </div>

                        <div styleName="wrapper3 wr">

                            <span>
                                <label>Validade </label> <br />
                                <input maxLength="4" id="vencimento" type="text" placeholder="mm/yy" onBlur={(event) => this.validadeExpirationDate(event)} required></input>
                            </span>

                            <span>
                                <label styleName="lb">Código</label> <br />
                                <input maxLength="3" minLength="3" id="codigo" styleName="cdg" placeholder="***" type="password" required></input>
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

export default CSSModule(Pagamento1, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
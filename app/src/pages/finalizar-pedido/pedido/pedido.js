import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
/*eslist-disable 
import ReactDOM from 'react-dom'; */
=======
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
import CSSModule from 'react-css-modules';
import style from './pedido.module.css';
import Menu from '../../menu/menu'
import Footer from '../../footer/footer.js';
import Resumo from '../resumo/resumo-pedido';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import Cookies from 'universal-cookie';

<<<<<<< HEAD
var option;
class Pedido extends React.Component {

    clearStorage = (event) =>{
=======

var option;
class Pedido extends React.Component {

    clearStorage = (event) => {
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

<<<<<<< HEAD
    choose = (event) =>{
=======

    choose = (event) => {
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
        option = event.target.value;

        console.log(option);
    }

<<<<<<< HEAD
    option = (event) =>{
    
            switch(option){
                case "0":
                    window.location.href="./pagamento1";
                break;
    
                case "1":
                    window.location.href="";
                break;
    
                case "2":
                   window.location.href="./pagamento2";
                break;
            }
    }
    
=======
    option = (event) => {

        switch (option) {
            case "0":
                window.location.href = "./pagamento1";
                break;

            case "1":
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

                setInterval(() => {
                    window.location.href = "./";
                }, 5000);
                break;

            case "2":
                window.location.href = "./pagamento2";
                break;

            default:
        }


        var cpf = document.getElementById("cpf").value;
        var numeros, digitos, soma, i, resultado, digitos_iguais;

        digitos_iguais = 1;
        if (cpf.length < 11)
            // return alert("CPF inválido");
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== digitos.charAt(0))
                // return alert("CPF inválido");
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== digitos.charAt(1))
                // return alert("CPF inválido")
            return true;
        }
        else
            // return alert("CPF inválido");
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
                        <div styleName="wrapper1 wr">
                            <span>
                                <label>Nome</label> <br />
                                <input type="text" placeholder="Fulano da Silva" required></input>
                            </span>
                        </div>

                        <div styleName="wrapper2 wr">
                            <span>
                                <label>CPF</label> <br />
                                <input id="cpf" type="text" placeholder="___.___.___-__" required></input>
                            </span>
                        </div>

                        <div styleName="wrapper3" onChange={this.choose.bind(this)}>
                            <span>
                                <label><b>Como você prefere pagar?</b></label> <br />

                                <select styleName="select">
                                    <option>Escolha a forma de pagamento</option> <br />
                                    <option className="band-rock" value="0" id="option">Cartão de crédito </option> <br />
                                    <option className="band-rock" value="1" id="option">Boleto bancário</option> <br />
                                    <option className="band-rock" value="2" id="option">Pedir licença do estudante </option>
                                </select>

                            </span>
                        </div>

                        <div styleName="botton" onClick={(event) => this.option(event)}>
                            <Link >Proxima etapa &emsp;
                            <FontAwesomeIcon styleName="icon pxm" icon="chevron-right" />
                            </Link>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />
        </>)
    }
}

export default CSSModule(Pedido, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
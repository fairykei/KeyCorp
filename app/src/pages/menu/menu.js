
<<<<<<< HEAD
import React from 'react'; 
import ReactDOM from 'react-dom'; 
=======
import React from 'react';
import ReactDOM from 'react-dom';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './menu.module.css';
import Usuario from '../menu/usuario/usuario'
import Logo from '../../external-components/logo/logo'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Produto from '../produto/produto/produto'
import NotFoundProduct from '../../components/search/search'

class Menu extends React.Component {

<<<<<<< HEAD
    
    constructor(props) {
        
        super(props);
        this.state = {
           search : ''
        }
    }

=======

    constructor(props) {

        super(props);
        this.state = {
            search: ''
        }
    }

    clearStorage = (event) => {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }

>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
    handleChange = (event) => {
        console.log("id", event.target.name)

        const state = Object.assign({}, this.state);

        let field = event.target.name;

        state[field] = event.target.value

        this.setState(state)
    }

    // search(){
    //     var lista = [];

    // }

<<<<<<< HEAD
    
    handleSubmit = (event) => {
        event.preventDefault();

        const produto = document.getElementById("search").value; 
        
        console.log("haahahahah" + produto);

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.84.170/search/product/' + produto)
            .then(res =>  {
                // const cookies = new Cookies();
                console.log(res.status);
                console.log(res.data[0])
                if(res.status === 204){
                    console.log("Renderiza página de NOT FOUND");
                    return window.location.href="./search";
                }
                else if(res.status === 200){
                    console.log("Renderiza página de produtos");

                    var resposta = res.data;
                    
=======

    handleSubmit = (event) => {
        event.preventDefault();

        const produto = document.getElementById("search").value;

        console.log("haahahahah" + produto);

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.get('http://35.237.149.227/search/product/' + produto)
            .then(res => {
                // const cookies = new Cookies();
                console.log(res.status);
                console.log(res.data[0])
                if (res.status === 204) {
                    console.log("Renderiza página de NOT FOUND");
                    return window.location.href = "./search";
                }
                else if (res.status === 200) {
                    console.log("Renderiza página de produtos");

                    var resposta = res.data;

>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                    //Lógica para percorrer produtos

                    // for(let i = 0; i < res.data.length; i++){
                    //     resposta[i] = res.data[i]
<<<<<<< HEAD
                        
                    //     console.log(resposta[i]);
                        
                    // }

                
=======

                    //     console.log(resposta[i]);

                    // }

                    sessionStorage.setItem('id', resposta[0].idProduto);
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                    sessionStorage.setItem('titulo', resposta[0].nomeProduto);
                    sessionStorage.setItem('valor', resposta[0].valorBase);
                    sessionStorage.setItem('descricao', resposta[0].descProduto);
                    console.log(Produto.state);
<<<<<<< HEAD
                    return window.location.href="./categoria";
=======

                    return window.location.href = "./categoria";
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53

                }
                else {
                    console.log("Renderiza 404");
<<<<<<< HEAD
                    
                }
                
                // console.log("aqui");
                
                // //trás a resposta baseado na posição do indice   const resposta = res.data[];
                // console.log(resposta[0].idProduto);
                
                // for(let i = 0; i < resposta.length; i++){
                       
                // }                
                // Pega o que tiver no indice X --- console.log(resposta[0].idProduto);

            
=======

                }

                // console.log("aqui");

                // //trás a resposta baseado na posição do indice   const resposta = res.data[];
                // console.log(resposta[0].idProduto);

                // for(let i = 0; i < resposta.length; i++){

                // }                
                // Pega o que tiver no indice X --- console.log(resposta[0].idProduto);


>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
            })
            .catch(error => {
                return error;
            }
            )
<<<<<<< HEAD
            
           
=======


>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
    }

    render() {
        return (
            <div styleName="hearder">
                <div styleName="container">
                    <div className="row">



                        <div styleName="titulo" onClick={(event) => this.clearStorage(event)}>
                            <Link to="./">
                                <p>KEY CORP</p>
                            </Link>
                        </div>

                        <div className="col-md-7" styleName="navegacao">
                            <div className="row" styleName="barra">
<<<<<<< HEAD
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={(event) => this.handleChange(event)} id="search" name="search" placeholder="Pesquise aqui..." type="t"/>
                                {/* <button type="submit" styleName="searchButton"> */}
                                  {/* <i></i> */}
                                 {/* </button> */}
                            </form>
=======
                                <form onSubmit={this.handleSubmit}>
                                    <input onChange={(event) => this.handleChange(event)} id="search" name="search" placeholder="Pesquise aqui..." type="t" />
                                    {/* <button type="submit" styleName="searchButton"> */}
                                    {/* <i></i> */}
                                    {/* </button> */}
                                </form>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                            </div>

                            <div className="row" styleName="produto">

                                <div styleName="prod-options">
                                    <ul>
                                        <li>
                                            {/* <FontAwesomeIcon styleName="icon1" icon="chevron-down" /> */}
                                            <a href="categoria">Produtos</a>
                                            {/* <ul styleName="ul">
                                                <li><a href="">Exclusivos</a></li>
                                                <li><a href="">Escola</a></li>
                                                <li><a href="">Criatividade</a></li>
                                            </ul> */}
                                        </li>

                                        <li>
                                            {/* <FontAwesomeIcon styleName="icon1" icon="chevron-down" /> */}
                                            <a href="ofertas">Ofertas</a>
                                            {/* <ul>
                                                <li><a href="">Office</a></li>
                                                <li><a href="">IDEs</a></li>
                                                <li><a href="">Design</a></li>
                                            </ul> */}
                                        </li>

                                        <li><Link to="./sobre" >Saiba mais</Link></li>

                                        <li><a href="./contato">Contato</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Usuario />

                        <div className="col col-lg-2" styleName="atalhos">
                            <div styleName="icons">
                                {/* <span>
                                    <div>
                                        <Link to="./historico">
                                            <FontAwesomeIcon styleName="icon" icon="bell" />
                                        </Link>
                                    </div>
                                </span> */}

                                {/* <span>
                                    <Link to="./carrinho">
                                        <FontAwesomeIcon styleName="icon" icon="shopping-cart" />
                                    </Link>
                                </span> */}

                                <span styleName="text" >
                                    <Link to="/favoritos">
                                        <FontAwesomeIcon styleName="icon" icon="heart" /> &emsp;
<<<<<<< HEAD
                                       <label>Favoritos</label> 
=======
                                       <label>Favoritos</label>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }

}

export default CSSModule(Menu, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
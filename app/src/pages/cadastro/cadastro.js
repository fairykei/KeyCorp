import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
//import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './cadastro.module.css';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import SiteInfo from '../site-info/site-info.js';
import axios from 'axios';
<<<<<<< HEAD
import { Redirect } from 'react-router';
=======
// import { Redirect } from 'react-router';
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
import Cookies from 'universal-cookie';


class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            dtNasc: '',
            cpf: '',
            email: '',
            password: ''
        }
    }


    handleChange = (event) => {
        console.log("id", event.target.name)

        const state = Object.assign({}, this.state);

        let field = event.target.name;

        state[field] = event.target.value

        this.setState(state)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const signup = {
            nome: this.state.nome,
            dataNascimento: this.state.dtNasc,
            cpf: this.state.cpf,
            email: this.state.email,
            senha: this.state.password
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.149.227/signup/', signup)
            .then(res => {
                console.log(res)
                console.log(res.data)
<<<<<<< HEAD
                axios.post('http://35.237.84.170/login/', { "email": signup.email, "senha": signup.senha }).then(res => {
                    const cookies = new Cookies();    
                    console.log(res)
                    console.log(res.data);
                    cookies.set('idUsuario', res.data.idUsuario, { path: '/' });
                    cookies.set('nome', res.data.nome , {path: '/'});
                    return window.location.href="http://localhost:3000/";
=======
                axios.post('http://35.237.149.227/login/', { "email": signup.email, "senha": signup.senha }).then(res => {
                    const cookies = new Cookies();    
                    console.log(res)
                    console.log(res.data);
                    cookies.set('idUsuario', res.data.idUsuario/*, { path: '/' }*/);
                    cookies.set('nome', res.data.nome/*, { path: '/' }*/);
                    return window.location.href="/";
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                })
            })
            .catch(error => {
                if (error.response.status === 409) {
                    alert('CPF e/ou e-mail já cadastrado!');
                }
                if (error.response.status === 500 || error.response.status === 400) {
                    alert('Dados inválidos!');
                }
                return error;
            }

        )
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Menu />
                <div styleName="signup">
                    <h1>Cadastre-se agora para aproveitar nossos preços!</h1>
                    <br /><br />
                    <h2>Já possui conta? <a href="/login"><u>Login</u></a></h2>

                    <div styleName="signup-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label> Nome Completo</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="nome" styleName='input' type="text" name="nome" required></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <label> CPF</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="cpf" styleName='input' type="text" name="cpf" required></input>
                                </div>
                                <div className="col-6">
                                    <label> Data de Nascimento</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="dtNasc" styleName='input' type="date" name="dtNasc" required></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label> E-mail</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="email" styleName='input' type="text" name="email" required></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label> Senha</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="password" styleName='input' type="password" name="password" required></input>
                                </div>
                            </div>

                            <br />
                            <button type="submit" styleName='btnSignup'>Criar Conta</button>
                        </form>
                </div>
            </div>
            <SiteInfo />
            <Footer />
            </>
        )
    }
}

export default CSSModule(Cadastro, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

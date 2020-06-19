import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './login.module.css';
import axios from 'axios';
import Cookies from 'universal-cookie';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

        const login = {
            email: this.state.email,
            senha: this.state.password
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.149.227/login/', login)
            .then(res => {
                const cookies = new Cookies();

                console.log("aqui");

                console.log(res.data.idUsuario);
                //console.log(res.data);
                cookies.set('idUsuario', res.data.idUsuario, { path: '/' });
                cookies.set('nome', res.data.nome, { path: '/' });
                console.log("Cookie");

                console.log(cookies.get('idUsuario'));

<<<<<<< HEAD
                return window.location.href="http://localhost:3000/";
                
=======
                return window.location.href = "/";

>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
            })
            .catch(error => {
                return error;
            }
            )
    }

    render() {
        console.log(this.state)
        return (
            <div styleName="bg">

                <div styleName="Login">

                    <p styleName="Login-intro">
                        <Link to="/login"></Link>
                    </p>

                    <form onSubmit={this.handleSubmit}>

                        <h1>Entre em sua conta</h1>
                        <br />

                        <label> Endereço de e-mail</label>
                        <input onChange={(event) => this.handleChange(event)} id="email" styleName='input' type="text" name="email" required></input>

                        <label> Senha</label>
                        <input onChange={(event) => this.handleChange(event)} id="password" styleName='input' type="password" name="password" required></input>

                        <span><a href="./reset-password">Esqueceu sua senha?</a></span>
                        <span><a href="./cadastro">Cadastre-se</a></span>

                        <br />

                        <button type="submit" styleName='btnEntrar'>Entrar</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default CSSModule(Login, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
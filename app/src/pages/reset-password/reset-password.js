import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import CSSModule from 'react-css-modules';
import style from './reset-password.module.css';
import axios from 'axios';
import swal from 'sweetalert';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';


class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailConfirmation : ''
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

        const reset = {
            email: this.state.email
        }

        if(this.state.email == this.state.emailConfirmation){
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.post('http://35.237.149.227/reset-password/', reset)
            .then(res => {
                const cookies = new Cookies();

                console.log("aqui");

                console.log(res.data.idUsuario);
                //console.log(res.data);
                cookies.set('idUsuario', res.data.idUsuario, { path: '/' });
                cookies.set('nome', res.data.nome, { path: '/' });
                console.log("Cookie");

                console.log(cookies.get('idUsuario'));
                swal("Enviamos um email para recuperar sua senha!", "Por gentileza, verifique sua caixa de email!",  "success")
                
            })
            .catch(err => {
                swal("Email informa não cadastrado"," Por gentileza, digite um email válido ou" 
                + " crie uma conta!", "error")
            }
            )
        }
        else{
            swal("Os emails devem coincidem"," Por gentileza, digite novamente o email!", "error")
        }

        
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

                        <h1>Alterar  senha</h1>
                        <br />

                        <label>Endereço de e-mail</label>
                        <input onChange={(event) => this.handleChange(event)} id="email" styleName='input' type="email" name="email" required></input>

                        <label>Repita seu e-mail</label>
                        <input onChange={(event) => this.handleChange(event)} id="emailConfirmation" styleName='input' type="email" name="emailConfirmation" required></input>

                        <span><a href="./login">Login</a></span>
                        {/* <span><a href="./cadastro">Cadastre-se</a></span> */}

                        <br />

                        <button type="submit" styleName='btnEntrar'>Entrar</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default CSSModule(ResetPassword, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
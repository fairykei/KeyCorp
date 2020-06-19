import React from 'react';
import CSSModule from 'react-css-modules';
import style from './password.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';
import Cookies from 'universal-cookie';

import { Redirect } from 'react-router';


class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            new: '',
            new_repeat: ''
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
        const cookies = new Cookies();
        const updatepw = {
            idUsuario: cookies.get('idUsuario'),
            basePassword: this.state.current,
            newPassword: this.state.new,
        };

        if (updatepw.new === updatepw.new_repeat) {
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.put('http://35.237.149.227/update/user/password/', updatepw)
                .then(res => {
                    console.log(res)
                    console.log(res.data)
                    return alert('Senha atualizada com sucesso!')
                })
                .catch(error => {
                    if (error.response.status === 500 ) {
                        alert('Dados inválidos!')
                    }
                    else if (error.response.status === 404) {
                        alert('Usuário não encontrado!')
                    }
                    return error;
                })
        } else {
            return alert('Repita a senha corretamente!')
        }
    }

    render() {
        return (
            <>
                <Menu />
                
                <div styleName="password">

                <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Alterar senha</li>
                        </ol>
                </div>
                <div styleName="menu-user">
                    <MenuUser />
                </div>

            

                    <div styleName="update-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label> Senha Atual</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="current" styleName='input' type="password" name="current" required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label> Nova Senha</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="new" styleName='input' type="password" name="new" required></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label> Repita a Nova Senha</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="new-_repeat" styleName='input' type="password" name="new_repeat" required></input>
                                </div>
                            </div>

                            <br />
                            <button type="submit" styleName='btnUpdate'>Atualizar</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </>);
    }
}


export default CSSModule(Password, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

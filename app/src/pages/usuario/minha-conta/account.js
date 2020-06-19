import React from 'react';
import CSSModule from 'react-css-modules';
import style from './account.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import Cookies from 'universal-cookie';
import axios from 'axios';


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idUsuario: '',
            nome: '',
            dtNasc: '',
            cpf: '',
            email: ''
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
        const update = {
            idUsuario: cookies.get("idUsuario"),
            nome: this.state.nome,
            dataNascimento: this.state.dtNasc,
            cpf: this.state.cpf,
            email: this.state.email
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.put('http://35.237.149.227/update/user/', update)
            .then(res => {
                console.log(res)
                console.log(res.data)
                return alert('Dados atualizados com sucesso!')
            })
            .catch(error => {
                if (error.response.status === 409) {
                    alert('E-mail já cadastrado!');
                }
                if (error.response.status === 500 || error.response.status === 400) {
                    alert('Dados inválidos!');
                }
                return error;
            }

            )
    }
    render() {
        return (
            <>
                <Menu />
                <div styleName="account">

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Account</li>
                    </ol>
                </div>
                
                    <div styleName="menu-user">
                    <MenuUser />
                    </div>
                  
                    <div styleName="update-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label> Nome Completo</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="nome" styleName='input' type="text" name="nome"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <label> CPF</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="cpf" styleName='input' type="text" name="cpf"></input>
                                </div>
                                <div className="col-6">
                                    <label> Data de Nascimento</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="dtNasc" styleName='input' type="date" name="dtNasc"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label> E-mail</label><br />
                                    <input onChange={(event) => this.handleChange(event)} id="email" styleName='input' type="text" name="email"></input>
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


export default CSSModule(Account, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

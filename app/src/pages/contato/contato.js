
import React from 'react';
/*eslist-disable 
import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import Menu from '../menu/menu.js';
import Footer from '../footer/footer.js';
import style from './contato.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleMap from '../../external-components/maps/maps.js'
import axios from 'axios';
import swal from 'sweetalert';



import 'react-bootstrap';

class Contato extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            assunto: '',
            email: '',
            mensagem: ''
        }
    }

    handleChange = (event) => {

        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value

        this.setState(state)
    }

    sendEmail = (event) => {
        event.preventDefault();

        const msg = {
            nome: this.state.nome,
            assunto: this.state.assunto,
            email: this.state.email,
            mensagem: this.state.mensagem
        };

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.post('http://35.237.149.227/faleconosco/send-email/', msg)
                .then(res => {
                    swal("Email enviado com sucesso!",  `Em breve enviaremos uma resposta no email ${msg.email}`, "success");
                })
                .catch(error => {
                    swal("Tivemos um problema para enviar o email"," Por gentileza, tente novamente mais tarde", "error")
                })
    }

    render() {
        return (<>
            <div styleName="contato">

                <Menu />

                <div aria-label="breadcrumb" styleName="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">Contato</li>
                    </ol>
                </div>

                <div styleName="container">
                    <form styleName="form" onSubmit={this.sendEmail}>
                        <p>Entre em contato conosco</p>

                        <div styleName="wrapper1 wr">

                            <span>
                                <label>Nome</label> <br />
                                <input onChange={(event) => this.handleChange(event)} id="nome" type="text" placeholder="" required></input>
                            </span>

                            <span>
                                <label>Assunto</label> <br />
                                <input onChange={(event) => this.handleChange(event)} id="assunto" type="text"required></input>
                            </span>

                        </div>

                        <div styleName="wrapper2 wr">

                            <span>
                                <label>Email</label> <br />
                                <input onChange={(event) => this.handleChange(event)} id="email" type="text"required></input>
                            </span>

                        </div>

                        <div styleName="wrapper3 wr">
                            <span>
                                <label>Mensagem</label> <br />
                                <textarea onChange={(event) => this.handleChange(event)} id="mensagem" styleName="textArea" type="text" placeholder="Insira sua mensagem aqui"required></textarea>
                            </span>
                        </div>


                        <div styleName="botton">
                            <button type="submit">Enviar</button>
                        </div>

                    </form>

                </div>

                <section styleName="section">
                    <div styleName="wrapper4">
                        <span>
                            <FontAwesomeIcon styleName="icon" icon="phone-alt" /> &emsp;
                                <label>+55 11 8473-9944</label>
                        </span>

                        {/* <span>
                            <FontAwesomeIcon styleName="icon" icon="envelope-open-text" /> &emsp;
                                <label>suporte@keycorp.com</label>
                        </span> */}

                    </div>
                </section>

                <section styleName="maps">
                    <div styleName="wrapper5">
                        <span>
                            <label>Venha até a gente</label>
                        </span>


                        <div styleName="map">
                            <SimpleMap/>
                        </div>

                    </div>
                </section>
            </div>

            
             <Footer /> 

             </>
        ); 
    }
}

export default CSSModule(Contato, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
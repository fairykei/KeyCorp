import React from 'react';
import CSSModule from 'react-css-modules';
import style from './user-cart.module.css';
import Menu from '../../menu/menu.js'
import Footer from '../../footer/footer'




// var produto = 0; //Aqui vai o id do produto da tela de produto


class UserCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cupom: '',
            qtd: ''
        }
    }
    render() {

        //Aqui vai ser feita a lógica de renderização conforme o produto escolhido, tentar com switch case

        return (

            <>

                <Menu />

                <div styleName="carrinho">
                    <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="./">Home</a></li>
                            <li className="breadcrumb-item" aria-current="page">Meu carrinho</li>
                        </ol>
                    </div>

                    <div styleName="container">
                        <div className="row">
                            <div className="col-6" styleName="col1">

                                <div styleName="titulo1">
                                    <p>Carrinho</p>
                                </div>

                                <div styleName="car">

                                <div styleName="prod" id="produto">

                                <div styleName="img"></div>

                                <div styleName="info-car">
                                <a href="">
                                    <h3>IntelliJ IDEA </h3>
                                </a>

                                <p>Ambiente de desenvolvimento integrado escrito em Java para o desenvolvimento de software de computador</p>
                                </div>

                                {/* <input id="qtd" styleName="inpt" placeholder="1" type="number" min="1" max=""></input> */}

                                </div>

                               
                                    <div styleName="prod">

                                        <div styleName="img"></div>

                                        <div styleName="info-car">
                                            <a href="">
                                                <h3>Ebook Marketing Digital</h3>
                                            </a>
                                            <p>Ações de comunicação que as empresas podem utilizar por meio da internet</p>
                                        </div>

                                        {/* <input id="qtd" styleName="inpt" placeholder="1" type="number" min="1" max=""></input> */}

                                    </div>
                                </div>

                            </div>
                            <div className="col-3" styleName="col2">
                                <div styleName="titulo2">
                                    <p>Resumo do pedido</p>
                                </div>

                                <div styleName="button">
                                    <div className="input-group mb-3">
                                        <input id="cupom" type="text" className="form-control" placeholder="Aplicar cupom" aria-label="Aplicar cupom" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="submit">Aplicar</button>
                                        </div>
                                    </div>
                                </div>

                                <div styleName="total">
                                  <p><b>Total: </b> R$199,99</p>
                                </div>

                                <div styleName="total">
                                    <p><b>Total: </b> R$199,99</p>
                                </div>

                                <div styleName="btnFinalizar">
                                    <a href="./pedido">
                                        <button type="submit">Finalizar</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default CSSModule(UserCart, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
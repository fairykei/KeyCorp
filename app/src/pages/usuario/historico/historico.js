import React from 'react';
import CSSModule from 'react-css-modules';
import style from './historico.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';


class Historico extends React.Component {
    render() {
        return (
            <>
                <Menu />
<<<<<<< HEAD
                <MenuUser />
                <table styleName="historico">
                    <tr>
                        <td>
                            <h4># do Pedido</h4>
                        </td>
                        <td>
                            <h4>Produtos</h4>
                        </td>
                        <td>
                            <h4>Valor Total</h4>
                        </td>
                    </tr>
                    <Resumo />
                </table>
=======
                <div styleName="page">
                    <div aria-label="breadcrumb" styleName="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                            <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./account">Minha conta </a></li>
                            <li className="breadcrumb-item" aria-current="page">Histórico de Compras</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-6" styleName="menu">
                            <MenuUser />
                        </div>
                        <div className="col-12" styleName="table">
                            <table styleName="historico">
                                <thead>
                                    <td>
                                        <h4># do Pedido</h4>
                                    </td>
                                    <td>
                                        <h4>Produto</h4>
                                    </td>
                                    <td>
                                        <h4>Valor Total</h4>
                                    </td>
                                </thead>
                                <tr>
                                    <td>
                                        <p>0005</p>
                                    </td>
                                    <td>
                                        <p>Office 365 - Home Edition </p>
                                    </td>
                                    <td>
                                        <p>R$299.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>0035</p>
                                    </td>
                                    <td>
                                        <p>Microsoft Visio Professional</p>
                                    </td>
                                    <td>
                                        <p>R$650.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>0103</p>
                                    </td>
                                    <td>
                                        <p>Photoshop - Education Edition</p>
                                    </td>
                                    <td>
                                        <p>R$0.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>0162</p>
                                    </td>
                                    <td>
                                        <p>Oracle Database 18c</p>
                                    </td>
                                    <td>
                                        <p>R$47.000,00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>0201</p>
                                    </td>
                                    <td>
                                        <p>Visual Studio Code</p>
                                    </td>
                                    <td>
                                        <p>R$0.00</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                <Footer />
            </>
        )
    }
}

// foreach still to be tested, it needs to be inside a div in the exact screen place.

<<<<<<< HEAD
class Resumo extends React.Component {
    
    createRow = () => {
        let table = []
        let children = []
        // Outer loop to create parent (this case, children)
        for (let i = 0; i < 3; i++) {
            children.push(<td>{`Column ${i + 1}`}</td>)
            children.push(<td>{`${this.produtos}`}</td>)
            children.push(<td>{`${this.vlr}`}</td>)
            children.push(<td>{`${this.nro}`}</td>)
            //Create the parent and add the children
            table.push({ children })
        }
        return table
    }

    render() {
        return (
            <tr>{this.createRow()}</tr>
        )
    }
}
=======
// class Resumo extends React.Component {

//     createRow = () => {
//         let table = []
//         let children = []
//         // Outer loop to create parent (this case, children)
//         for (let i = 0; i < 3; i++) {
//             children.push(<td>{`Column ${i + 1}`}</td>)
//             children.push(<td>{`${this.produtos}`}</td>)
//             children.push(<td>{`${this.vlr}`}</td>)
//             children.push(<td>{`${this.nro}`}</td>)
//             //Create the parent and add the children
//             table.push({ children })
//         }
//         return table
//     }

//     render() {
//         return (
//             <tr>{this.createRow()}</tr>
//         )
//     }
// }
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53

export default CSSModule(Historico, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

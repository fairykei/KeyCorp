import React from 'react';
import CSSModule from 'react-css-modules';
import style from './produto-grid.module.css';
import 'react-bootstrap';
import Produto from '../../produto/produto/produto.js';
import axios from 'axios';


class ProdutoGrid extends React.Component {
    render() {
        return (
            <>
                <div styleName="produtos">

                    {/* <Grid /> */}
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                    <div className="row">
                        <Produto />
                        <Produto />
                        <Produto />
                    </div>
                </div>
            </>
        )
    }
}


// class Grid extends React.Component {
//     createGrid = () => {
//         let table = []
//         let children = []
//         // Outer loop to create parent (this case, children)
//         for (let i=0;i<search.length;i++) {
//             for (let i = 0; i < 3; i++) {
//                 children.push(<td>{`Column ${i + 1}`}</td>)
//                 children.push(<td>{`${this.produtos}`}</td>)
//                 children.push(<td>{`${this.vlr}`}</td>)
//                 children.push(<td>{`${this.nro}`}</td>)
//                 //Create the parent and add the children
//                 table.push(<Produto />)
//             }
//         }
//         return table
//     }

//     render() {
//         return (
//             {this.createGrid()}
//         )
//     }
// }

export default CSSModule(ProdutoGrid, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
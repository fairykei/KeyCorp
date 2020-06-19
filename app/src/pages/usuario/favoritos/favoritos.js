import React from 'react';
import CSSModule from 'react-css-modules';
import style from './favoritos.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import MenuUser from '../menu-user/menu-user.js';
import ProdutoGrid from '../../produto/produto-grid/produto-grid.js';
import Footer from '../../footer/footer.js';
import axios from 'axios';


class Favoritos extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <MenuUser />
                        </div>
                        <div className="col-12">
                            <ProdutoGrid />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default CSSModule(Favoritos, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })

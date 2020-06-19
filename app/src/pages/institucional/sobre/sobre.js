import React from 'react';
import CSSModule from 'react-css-modules';
import style from '../../institucional/institucional.module.css';
import 'react-bootstrap';
import Menu from '../../menu/menu.js';
import Footer from '../../footer/footer.js';

class Sobre extends React.Component {
    render() {
        return (<>

            <Menu />

            <div aria-label="breadcrumb" styleName="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" onClick={(event) => this.clearStorage(event)}><a href="./">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page">Sobre nós</li>
                </ol>
            </div>

            <section styleName="page-section">
                <div className="container">

                    <h3 styleName="titulo">E-COMMERCE TECNOLÓGICO</h3>

                    <div styleName="img"></div>

                    <div styleName="about-heading-content">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto">

                                <p styleName="mb-0">A KeyCorp tem como objetivo revolucionar o sistema de e-commerce,
                                                             com uma plataforma unificada para o auxílio no desenvolvimento
                                                             acadêmico do estudante, proporcionando uma navegação diferenciada
                                                                 e transformando a adquirência dos produtos. <br />

                                    <em>
                                        <br /> <b>Custo zero</b>: Se tem direito, tem o produto!
                                                   <br /> <b>Apoio</b>: O estudante consegue acesso as ferramentas adequadas, obtendo qualidade e sucesso em seus trabalhos acadêmicos.
                                                   <br /> <b>Direitos</b>: O estudante adquire conhecimento nos produtos que ele tem por direito. <br /><br />
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <Footer />

        </>
        );
    }
}

export default CSSModule(Sobre, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModule from 'react-css-modules';
import style from './resumo.module.css';
import 'react-bootstrap';

<<<<<<< HEAD
export var desconto = 0.10; //Exemplo
=======
import imagem from '../../produto/detalhes/detalhes'
import postman from '../../../image/postman.png'
import escritorio from '../../../image/escritorio.png'
import oracle from '../../../image/oracle.jpg'
import photoshopEnterprise from '../../../image/photoshop.png'
import photoshopEducation from '../../../image/photoshop.png'
import vscode from '../../../image/vscode.png'
import visio from '../../../image/visio.jpg'
import sql from '../../../image/sql.jpg';
import vstudio from '../../../image/vstudio.jpg';
import bizagi from '../../../image/bizagi.jpg';

var img;
export var desconto = 0.00; //Exemplo
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
var valor = sessionStorage.getItem('valor');
var valorFinal =  valor -= valor * desconto;
class Resumo extends React.Component {
    
    render() {
        var produto = sessionStorage.getItem("titulo");

        switch(produto){
            case "Oracle Database 18c - Enterprise Edition":
                img = oracle;
                break;
            case "Visual Studio Code":
                img = vscode;
                break;
            case "Photoshop - Enterprise Edition":
                img = photoshopEnterprise;
                break;
            case "Photoshop - Education Edition":
                img = photoshopEducation;
                break;
            case "Office 365 - Home Edition":
                img = escritorio;
                break;
            case "Microsoft Visio Professional 2019":
                    img = visio;
                    break;
            case "SQL Server Database 2017- Enterprise Edition":
                    img = sql;
                    break;
            case "Visual Studio - Professional Edition":
                    img = vstudio;
                    break;
            case "Bizagi Studio - Professional Edition":
                    img = bizagi;
                    break;
        }

        return (
            <div styleName="resumo-pedido">
                <div styleName="produto">
                    <div styleName="imagem">
                       <div styleName="foto">
                       <img src={img} alt="some text"  width="100" height="100"/>
                       </div>
                 
                        
                    </div>

                    <div styleName="info">
                        <span styleName="titulo">
                            <h3>{sessionStorage.getItem('titulo')}</h3>
<<<<<<< HEAD
                            <h3>{sessionStorage.getItem('descricao')}</h3>
=======
                            <h3 styleName="info-desc">{sessionStorage.getItem('descricao')}</h3>
>>>>>>> dc200670c6c0c3b52528392eed390f8aed635d53
                        </span>
                        <span styleName="subTitulo">
                            {/* <h3>Quantidade 1 </h3> */}
                        </span>
                    </div>

                </div>

                <div styleName="prod-info">
                    <div styleName="wrapper1 wr">
                        <span>
                            <h3>Total:</h3>
                            <h3>Descontos:</h3>
                        </span>

                        <span styleName="span">
                            <h3>R${sessionStorage.getItem('valor')}</h3>
                            <h3>{desconto}%</h3>
                        </span>
                    </div>
                    <div styleName="wrapper2 wr" >
                        <span>
                            <h3>Você pagará:</h3>
                        </span>

                        <span>
                            <h3 styleName="h3">R${valorFinal}</h3>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}


export default CSSModule(Resumo, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
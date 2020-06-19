import React, { Component } from 'react';
import CSSModule from 'react-css-modules';
import style from './logo.module.css';

class Logo extends React.Component {
    render() {
        return (
        
        <div styleName="logo">
            
        </div>
        );
    }
}


export default CSSModule(Logo, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import CSSModule from 'react-css-modules';
import style from './maps.module.css';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -23.55,
      lng: -46.66
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '55vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC89mTDJRw1nhbDG41LKlgSNEsk4xtg2lU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-23.558162}
            lng={-46.661555}
            text="bandtec"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default CSSModule(SimpleMap, style, { allowMultiple: true, handleNotFoundStyleName: "ignore" })
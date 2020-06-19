
import React, { Component } from 'react';
import UserCart from '../carrinho/user-cart/user-cart'
import GuestCart from '../carrinho/guest-cart/guest-cart'

import Cookies from 'universal-cookie';

class Carrinho extends Component {
  render(){
    const cookies = new Cookies();

    if(cookies.get('idUsuario') !== undefined){
      return <UserCart/> ;
    }

    return <GuestCart />;
  }
}

  export default Carrinho;
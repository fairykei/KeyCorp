import React, { Component } from 'react';
import UserUsuario from '../menu-user1/menu-user1'
import GuestUsuario from '../menu-user2/menu-user2'
import Cookies from 'universal-cookie';

class Usuario extends Component {
  
  render(){
    const cookies = new Cookies();

    // const isLoggedIn = false;

    console.log("Aqui qui uuiau  " + cookies.get('idUsuario'));

    if(cookies.get('idUsuario') !== undefined){
        return <UserUsuario/>
    } 
      return <GuestUsuario />;
  }
}

export default Usuario;
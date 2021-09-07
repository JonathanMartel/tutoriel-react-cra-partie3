import logo from '../../logo.svg';
import './App.css';
import React from "react";
import Entete from '../Entete/Entete';
import Compteur from '../Compteur/Compteur';

export default class App extends React.Component {
  
  render(){
    return (
      <div>
        <Entete titre="Site react" />
        <Compteur valeurInitiale="0" />      
      </div>
    );
  }
}


import logo from '../../logo.svg';
import './App.css';
import React from "react";
import Entete from '../Entete/Entete';
import Compteur from '../Compteur/Compteur';

export default class App extends React.Component {
  constructor(){
    super();
    this.ajouterAuCompte = this.ajouterAuCompte.bind(this);
    this.state = {valeur: 0};

  }
  ajouterAuCompte(){
    console.log("compteur appelé")
    this.setState((state) => ({valeur : state.valeur +1}));
  }
  render(){
    return (
      <div>
        <Entete titre="Site react" />
        <Compteur surChangementCompte={this.ajouterAuCompte} valeur={this.state.valeur} />      
      </div>
    );
  }
}


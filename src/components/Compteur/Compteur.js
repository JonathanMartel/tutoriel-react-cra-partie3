import React from 'react';

import './Compteur.css';

export default class Compteur extends React.Component {
    constructor(props){
        super(props);
        const nValeur = this.props.valeurInitiale || 0;
        this.state = {valeur : parseInt(nValeur)};

        this.ajouterAuCompte = this.ajouterAuCompte.bind(this);
    }

    ajouterAuCompte(){
        console.log("ajouté");
        console.log(this);
        this.setState((state) => ({valeur : state.valeur +1}));
            
        /*this.setState(function(state, props){
            return {valeur : state.valeur +1};
        });*/
        /*this.setState(function(state, props){
            const objet = {valeur:0};
            objet.valeur = state.valeur + 1;
            return objet;
        });*/
    }

    render(){
        return (
            <div>
                <p>Compte jusqu'à maintenant : <span>{this.state.valeur}</span></p>
                <button onClick={this.ajouterAuCompte}>Cliquez pour ajouter</button>
            </div>
        );
    }
}

import logo from '../../logo.svg';
import './App.css';
import React from "react";
import Entete from '../Entete/Entete';
import Compteur from '../Compteur/Compteur';
import Information from '../Information/Information';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
    //<Compteur surChangementCompte={this.ajouterAuCompte} valeur={this.state.valeur} />      
    //<Entete titre="Site react" />
    return (
      <Router>
        <Entete titre="Site react entete 1" />
        <Switch>
          <Route exact path="/" render={()=>{
            return (<div>
              <p>Accueil</p>
              </div>);}
            }/>
          
          <Route exact path="/compteur">
            <Compteur surChangementCompte={this.ajouterAuCompte} valeur={this.state.valeur} />
          </Route>
          
          <Route exact path="/information" component={Information} />
          <Route exact path="/information/:id" render={(propRoute)=><Information {...propRoute} id={propRoute.match.params.id} infoRoute={propRoute}/>} />
          
          <Route exact path="*" render={()=><p>Page non trouvée</p>} />
          </Switch>
        
      </Router>
    );
  }
}


import './Entete.css';
import React from "react";
import BoutonNav from '../BoutonNav/BoutonNav';
import { Link, NavLink } from 'react-router-dom';

export default class Entete extends React.Component {
  constructor(props){
      super(props);
  }
  render(){ 
    return (    //JSX
      <header className="entete">
          <NavLink to="/"><h1>{this.props.titre || "Titre du site"}</h1></NavLink>
          <nav className="menu">
              <BoutonNav lien="/" label="BtnNav Accueil" />
              <Link to="/">Accueil</Link>
              <BoutonNav lien="/compteur" label="BtnNav compteur" />
              <Link to="/compteur">Compteur</Link>
              <NavLink to="/compteur">Compteur (navLink)</NavLink>
              <BoutonNav lien="/information" label="BtnNav Info" />
              <Link to="/information">Information</Link>
              <NavLink to="/information">Information(navLink)</NavLink>
          </nav>
      </header>  
    );
  }
}
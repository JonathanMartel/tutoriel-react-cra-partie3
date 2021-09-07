import './Entete.css';
import React from "react";
import BoutonNav from '../BoutonNav/BoutonNav';

export default class Entete extends React.Component {
  
  render(){ 
    return (    //JSX
      <header className="entete">
          <h1>Titre de mon site</h1>
          <nav className="menu">
              <BoutonNav lien="#1" label="Item 1" />
              <BoutonNav lien="#2" label="Item 2" />
              <BoutonNav lien="#3" label="Item 3" />
          </nav>
      </header>  
    );
  }
}
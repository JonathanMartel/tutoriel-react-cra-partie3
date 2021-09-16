import React from 'react';
import { Link } from 'react-router-dom';
import Entete from '../Entete/Entete';

export default class Information extends React.Component {
    render(){
        console.log(this.props.infoRoute);
        console.log (this.props);
        const id = this?.props?.infoRoute?.match?.params?.id;
        console.log(id);
        return (
            <div>
                <p>Information </p>
                <ul>
                    <li><Link to="/information/1">Produit 1</Link></li>
                    <li><Link to="/information/2">Produit 2</Link></li>
                    <li><Link to="/information/3">Produit 3</Link></li>
                </ul>
                {id ? <section>Information spécifique sur le produit {id}.</section> : ""}
            </div>
        );
    }
}

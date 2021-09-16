import React from 'react';
import { Link } from 'react-router-dom';

import './BoutonNav.css';

export default class BoutonNav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Link to={this.props.lien}>{this.props.label}</Link>
        );
    }
}

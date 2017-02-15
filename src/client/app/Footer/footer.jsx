import React from "react";
import {render} from "react-dom";
import './Footer.scss';


class footer extends React.Component {
  render () {
    return (
      <div className="footer">
          <div className="menu">
        <p>51, Rue de Vincennes</p>
        <p>93100 Montreuil</p>
      </div>
      
        <ul>
          <li>Accueil</li>
          <li>Carte</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default footer;

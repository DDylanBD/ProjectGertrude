import React from "react";
import {render} from "react-dom";


class Maps extends React.Component {
  render () {
    var url="https://www.google.com/maps/embed/v1/place?key=AIzaSyCT44nHBuMxNfcp5erYhGe6mbrXTOfEZZQ&q=Simplon.rXTOfEZZQ&q=Simplon";
    return (
        <div className="Maps">
        <iframe width="600" height="450" frameborder="0" style={{border:0}} src={url} allowfullscreen></iframe>
        </div>

    );
  }
}

export default Maps;

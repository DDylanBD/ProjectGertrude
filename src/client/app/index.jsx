import React from "react";
import { render } from "react-dom";
import Footer from "./Footer/footer.jsx";
import Maps from "./Footer/maps.jsx";
import Header from "./header/Header.jsx";
import GridMenu from "./gridMenu/GridMenu.jsx";
import "./index.scss";

class App extends React.Component {
  render() {
    return (

      <div>
        <Header />
        <GridMenu />
        <Maps />
        <Footer />
      </div>

    );
  }
}

render(<App />, document.getElementById("app"));

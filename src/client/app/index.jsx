import React from 'react';
import {render} from 'react-dom';
import Footer from './Footer/footer.jsx';
import Maps from './Footer/maps.jsx';



class App extends React.Component {
  render () {
    return (
        <div>
           <Footer />
           <Maps />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

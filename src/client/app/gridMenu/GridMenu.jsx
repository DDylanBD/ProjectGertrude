import React, { Component } from 'react';
import CardModel from '../cardModel/CardModel.jsx';
import './GridMenu.scss'


class Course{
  constructor(name,price,quantity,sub){
    this.name = name;
    this.price =price;
    this.quantity = this.quantity || 0;
    this.sub = sub || 0;
  };

}


class GridMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [] ,
      cart : []
    }
  }

  componentDidMount() {
    fetch('https://simplonco.github.io/js-css-3days-group-project/data/data.json')
      .then(res => res.json())
      .then(resData => {
        this.setState({data : resData.carte});
      })
      .catch(error =>{
        console.log('Error fectching and parsing data', error)
      })
  };

  renderCards() {
  return this.state.data.map((el) => {
    return (
      <CardModel
        key={el.id}
        name={el.name}
        image={el.image}
        description={el.description}
        price={el.price}
      />
    );
  });
}

  render() {
    let items = this.renderCards();
    return (
      <div className='row grid'>
        {items}
        <ul className='cart'></ul>
      </div>
    );
  }
}

export default GridMenu;

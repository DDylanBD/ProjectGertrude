import React from "react";



class CardModel extends React.Component {



  render() {
    const { name, image, description, price } = this.props;
    return(
      <div className="row">
        <div className="col s12 m6">
          <div className="card ">
            <div className="card-image">
              <img src={image} alt={name} />
              <a className="btn-floating btn-large halfway-fab waves-effect waves-light red hoverable"onClick={this.addToCart}>
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title "><b></b>{name}</span>
              <p>
                {description}
              </p><br/>
            <h6><b>{price}</b></h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardModel;

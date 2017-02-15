import React from 'react';
import './Header.scss';
// import TweenMax from 'gsap';
import Dropdown from './dropdown/Dropdown.jsx';

const img1 = {
    backgroundImage: 'url(https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg)'
}
const img2 = {
    backgroundImage: 'url(https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg)'
}

class Header extends React.Component {
    // constructor(props) {
    //   super(props);
    // this.state = {
    //   transform: 700 + 'px'
    // }
    //   this.handleClick = this.handleClick.bind(this);
    // }
    // handleClick() {
    //   TweenMax.to(".menu", 1, {left: 80 + '%'});
    // }
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            isToggleOn1: true
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);

    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    handleClick1() {
        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }));
    }

    render() {
        return (
            <div className='containerHeader'>
                <div className='carrousel'>
                  <ul className='carrouselUl'>
                    <li><img src='https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg'/></li>
                    <li><img src='../../assets/hamburger-494706_1920.jpg'/></li>
                  </ul>
                </div>

                {this.state.isToggleOn
                    ? ''
                    : <Dropdown/>}
                <div className='nomDuSite'>
                    <div className='contNom'>GERTRUDE'S</div>
                </div>

                <div className='panierAchat'>
                    <p className='contact'>Contact</p>
                    <a href="#" className='lienImage'><img className='achat' src='./assets/buy.svg' onClick={this.handleClick}/></a>
                </div>
            </div>
        );
    }
}

export default Header;

// {this.state.isToggleOn1
//     ? <img className='imgBackground' src='../../assets/hamburger-494706_1920.jpg'/>
//     : <img className='imgBackground1' src='https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg'/>} */}

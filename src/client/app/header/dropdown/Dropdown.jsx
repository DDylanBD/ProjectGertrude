import React from 'react';
import './Dropdown.scss';

class Dropdown extends React.Component {
    render() {
        return (
            <div className='contenairDropdown'>
                <div className='secondContenair'>
                    <div className='dropdownAchat'>
                        <p className='modalAchat'>Nom du plat</p>
                    </div>
                    <div className='dropdownAchat'>
                        <p className='modalAchat'>Prix unitaire</p>
                    </div>
                    <div className='dropdownAchat'>
                        <p className='modalAchat'>Quantité</p>
                    </div>
                    <div className='dropdownAchat'>
                        <p className='modalAchat'>Sous-Total</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dropdown;

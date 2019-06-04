import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = ( props ) => (
    <div className="logo">
        <img src={burgerLogo} alt="Burger Builder" className="logo__img" />
    </div>
);

export default Logo;
import React from 'react';
import logoImage from './assets/dzik-logo.png'; 



function Logo () {
    return (
        <div className="logo">
            <img src={logoImage}  alt="Logo" />
        </div>
    )
}

export default Logo;


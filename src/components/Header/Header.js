import React from 'react';
import './Header.css';
import logo from '../../images/y18.gif';

const header = () => {
    return (
        <div className="row Header">
            <div className="col">
                <img src={logo} className="logo" />
                <span className="site-name">Hacker News </span>
                <span className="menu">new | comments | show | ask | jobs | submit</span>
                <span className="login">login</span>
            </div>
        </div>
    );
}

export default header;

import React from 'react';
import './Header.css';
import logo from '../../images/y18.gif';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className="row Header">
            <div className="col">
                <img src={logo} className="logo" />
                <span className="site-name">
                    <Link to="/news">Hacker News</Link>
                 </span>
                <span className="menu">
                    <Link to="/newest">new</Link> |
                    <Link to="/comments">comments</Link>
                    | show | ask | jobs | submit</span>
                <span className="login">login</span>
            </div>
        </div>
    );
}

export default header;

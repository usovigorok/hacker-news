import React from 'react';
import './Header.css';
import logo from '../../images/y18.gif';
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <div className="row Header">
            <div className="col">
                <img src={logo} className="logo" alt="HN" />
                <span className="site-name">
                    <NavLink to="/news">Hacker News</NavLink>
                 </span>
                <div className="menu">
                    <span><NavLink activeClassName='active' to="/newest">new</NavLink> |</span>
                    <span><NavLink activeClassName='active' to="/newcomments">comments</NavLink> |</span>
                    <span><NavLink activeClassName='active' to="/show">show</NavLink> |</span>
                    <span><NavLink activeClassName='active' to="/ask">ask</NavLink> |</span>
                    <span><NavLink activeClassName='active' to="/jobs">jobs</NavLink> |</span>
                    <span>submit</span>
                </div>
                <span className="login">login</span>
            </div>
        </div>
    );
}

export default header;

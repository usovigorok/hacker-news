import React from 'react';
import './Header.css';
import logo from '../../images/y18.gif';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className="row Header">
            <div className="col">
                <img src={logo} className="logo" alt="HN" />
                <span className="site-name">
                    <Link to="/news">Hacker News</Link>
                 </span>
                <div className="menu">
                    <span><Link to="/newest">new</Link> |</span>
                    <span><Link to="/newcomments">comments</Link> |</span>
                    <span><Link to="/show">show</Link> |</span>
                    <span><Link to="/ask">ask</Link> |</span>
                    <span><Link to="/jobs">jobs</Link> |</span>
                    <span>submit</span>
                </div>
                <span className="login">login</span>
            </div>
        </div>
    );
}

export default header;

import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <div className="row Footer">
            <div className="col">
                <div className="more">More</div>
                <div className="footer-line"></div>
                <div className="footer-menu">
                    Guidelines | FAQ | Support | API | Security | Lists | Bookmarklet | Legal | Apply to YC | Contact
                </div>
                <div className="search">
                    Search: <input type="text" size="17" />
                </div>
            </div>
        </div>
    );
}

export default footer;

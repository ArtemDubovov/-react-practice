import React from "react";
import { Link } from "react-router-dom";

import './style.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header_title">React-practice</h1>
            <ul className="header_menu">
                <li className="header_menu_item">
                    <Link to="/">#Home</Link>
                </li>
                <li className="header_menu_item">
                    <Link to="/useState">#UseState</Link>
                </li>
                <li className="header_menu_item">
                    <Link to="/useEffect">#UseEffect</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
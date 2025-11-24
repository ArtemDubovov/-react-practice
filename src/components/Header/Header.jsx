import React from "react";
import { Link } from "react-router-dom";
import PAGES from "../../routing";

import './style.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header_title">React-practice</h1>
            <ul className="header_menu">
                {
                    PAGES.map(page => (
                        <li key={page.url} className="header_menu_item">
                            <Link to={page.url}>{page.pageName}</Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}

export default Header;
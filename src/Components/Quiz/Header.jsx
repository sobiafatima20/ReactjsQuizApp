import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './reactlogo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-title">
                <img src={logo} alt="WebDev Quiz Logo" className="logo" />
                <span><p>Question Street</p></span>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;





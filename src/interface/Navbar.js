import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';

const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo accent-4">
            <div className="container">
                <Link to="/" className="brand-logo">Shoeses</Link>
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/report">Report</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
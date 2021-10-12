import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../Styles/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/search' exact>Search</NavLink>
        </nav>
    );
};

export default NavBar;
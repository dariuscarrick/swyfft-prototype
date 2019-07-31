import React from 'react';
import './navbar.scss';
import ProductSelect from './product-select';

// NavBar Component
const NavBar = () => (
    <nav className='navigation'>
        <ProductSelect />
        <menu className='navigation-menu'>
            <button className='login-button'>
                Log In
            </button>
            <menu className='hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </menu>
        </menu>
    </nav>
);

export default NavBar;
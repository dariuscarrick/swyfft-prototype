import React from 'react';
import './navbar.scss';
import {Container} from 'react-bootstrap';
import ProductSelect from './product-select';

// NavBar Component
const NavBar = props => (
    <Container className={`navbar-container ${props.navbarClass}`} fluid={true}>
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
    </Container>
);

export default NavBar;
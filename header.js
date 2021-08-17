import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Cat person or Dog??</h1>
                <div className='nav'>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/cats'>PokeDex</NavLink>
                    <NavLink to='/dogs'>PokeDex</NavLink>
                </div>
            </header>
        );
    }
}

export default Header
import React from 'react';
import logo from './images/qalogo.svg';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-sm">
                <a href="https://www.qa.com" class="navbar-brand" target="_blank" rel="noreferrer">
                    <img src={logo} alt="QA Ltd" width="100"></img>
                </a>
                <a href="/" class="navbar-brand">Todo App</a>

            </nav>
        </header>
    );
};

export default Header;

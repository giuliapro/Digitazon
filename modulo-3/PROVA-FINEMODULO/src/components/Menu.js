import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
    

    return (
        <>
            <nav className="menu">
                <a href="/">
                    <Link to="/"></Link>
                    <img
                        className="menu__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon Logo"
                    />
                </a>
                <div className="menu__search">
                    <input
                        type="text"
                        placeholder="Cerca prodotti..."
                    />
                    <button><Link to="/search"></Link>Cerca</button>
                </div>
                <div className="menu__nav">
                    <div className='profile'>
                        <a href="/profile" className="menu__link">
                            <div className="menu__profile">
                                <p>Hello, Sign in</p>
                            </div>
                        </a>
                    </div>

                </div>
            </nav>
        </>
    );
}
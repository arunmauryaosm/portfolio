import React from 'react'
import './Navbar.css'


const Navbar = () => {

    return (
        <div>
            <header className='header'>
                <a className='logo' href='/'>Portfolio.</a>
                <nav className='navbar'>
                    <a href="#about">About</a>
                    <a href='#experience'>Work</a>
                    <a href='#work'>Projects</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </header>

        </div>
    )
}

export default Navbar

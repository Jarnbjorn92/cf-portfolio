import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setLargeScreen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setLargeScreen(window.innerWidth >= 800);
        };

        handleResize(); //initial size check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    },[]);

    return (
        <div className='nav'>
            {isLargeScreen ? (
                <div className='nav-large'>
                    <ul className="nav-menu">
                        <li>
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                </div>

            ) : (

            <div className='dropdown'>
                <button className='dropdown-toggle' onClick={toggleMenu}>
                Menu
                </button>

                {isOpen && (
                    <ul className='dropdown-menu'>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                )}
                </div>
            )}
        </div>
    );
};

export default NavBar
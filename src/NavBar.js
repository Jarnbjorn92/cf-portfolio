import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav'>
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
        </div>
    );
};

export default NavBar
import React from 'react';
import SocialLinks from './components/SocialLinks';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
        <SocialLinks/>
        </div>
    );
}

export default NavBar
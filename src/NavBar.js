import React from 'react';
import SocialLinks from './components/SocialLinks';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <div>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar
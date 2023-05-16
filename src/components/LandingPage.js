import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const LandingPage = ({personalDetails}) => {


    return (
        <div>
            <h1>{personalDetails.name}</h1>
            <h3>{personalDetails.statement}</h3>
            <Link to='/home'>
            <button>Enter</button>
            </Link>
        </div>
    )
}

export default LandingPage
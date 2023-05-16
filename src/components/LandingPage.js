import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const LandingPage = ({personalDetails}) => {


    return (
        <div className='landing-container'>
            <h1>{personalDetails.name}</h1>
            <h3>{personalDetails.statement}</h3>
            <Link to='/home'>
                <button>Enter</button>
            </Link>
            <SocialLinks/>
        </div>
    )
}

export default LandingPage
import React from 'react';
import NavBar from '../NavBar';
import SocialLinks from './SocialLinks';
import AboutPage from './AboutPage';

const HomePage = ({personalDetails}) => {


    return (

        <>
            <div style={{ overflowY: 'scroll', height: '100vh' }}>
                <NavBar/>
                <SocialLinks/>
                <AboutPage/>
            </div>
        </>

    )
};

export default HomePage
import React from 'react';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingPage = ({personalDetails}) => {

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const fadeInVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 0.5,
            },
        },
    };

    return (

        <>
        <motion.div
            className="contactInfo"
            ref={ref}
            initial={{ x: "50vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>

        <div className='landing-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>{personalDetails.name}</h1>
                <h3>{personalDetails.statement}</h3>
                <Link to='/about'>
                    <button>Enter</button>
                </Link>
            </div>
        </div>
        </motion.div>
        
        <motion.div 
            ref={ref} 
            initial='hidden' 
            animate={inView ? 'visible' : 'hidden'} 
            variants={fadeInVariants}>

        <SocialLinks/>
        
        </motion.div>
        </>
    );
};

export default LandingPage
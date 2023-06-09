import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import './SocialLinks.css';

const SocialLinks = () => {

    const socialMedia = {
        linkedIn: "https://www.linkedin.com/in/connor-j-fleming/",
        gitHub: "https://github.com/Jarnbjorn92",
    };

    return (
        <div className='social-cont'>
            <ul className="social-links-list">
                <li>
                    <a className='social-links' target="_blank" rel="noreferrer" href={socialMedia.gitHub}> 
                        <FiGithub/>
                    </a>
                </li>
                <li>
                    <a className='social-links' target="_blank" rel="noreferrer" href={socialMedia.linkedIn}>
                        <FiLinkedin/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks
import React from 'react';
// import { FiLinkedin, FiGithub } from 'react-icons/fi';
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import linkedin from "react-useanimations/lib/linkedin";
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
                        <UseAnimations
                        animation={github}
                        strokeColor={"#5a3faa"}
                        loop={true}
                        size={54}
                        />
                    </a>
                </li>
                <li>
                    <a className='social-links' target="_blank" rel="noreferrer" href={socialMedia.linkedIn}>
                    <UseAnimations
                        animation={linkedin}
                        strokeColor={"#5a3faa"}
                        loop={true}
                        size={54}
                    />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks
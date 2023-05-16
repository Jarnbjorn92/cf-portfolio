import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const SocialLinks = () => {

    const socialMedia = {
        linkedIn: "https://www.linkedin.com/in/connor-j-fleming/",
        gitHub: "https://github.com/Jarnbjorn92",
    };

    return (
        <div className='social-cont'>
            <a className='social-links' href={socialMedia.linkedIn}><FiLinkedin/></a>
            <a className='social-links' href={socialMedia.gitHub}><FiGithub/></a>
        </div>
    )
}

export default SocialLinks
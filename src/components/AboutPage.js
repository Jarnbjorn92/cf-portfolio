import React from 'react';
import './AboutPage.css';
import NavBar from '../NavBar';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import SocialLinks from './SocialLinks';

const AboutPage = () => {

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });


    return (
        <>
        <div className='about-container'>
        <NavBar/>
        <motion.div
            className="aboutInfo"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            >

            <section className='about-me'>
                <div className='description'>
                <h4>About Me</h4>
                <p>I'm Connor, a passionate full stack developer with a deep love for crafting exceptional user experiences on the frontend and optimising backends. As a career changer, I bring a unique blend of soft skills from my previous jobs and an ambitious mindset to the tech scene.</p>

                <p>Driven by a hunger for knowledge and a knack for quickly picking up new technologies, I thrive on learning and expanding my skill set. From frontend frameworks like React, to backend technologies such as Node.js and Spring, I'm dedicated to mastering the stack and all aspects of the developement process.</p>

                <p>Through this portfolio site, I aim to showcase my expertise, projects, and growth as a developer. It's a testament to my journey and the commitment I have to my craft. I believe that being a successful full stack developer is not just about technical prowess; it's about effective communication, collaboration, and delivering innovative solutions.</p>

                <p>I invite you to explore my portfolio, where you'll find a collection of my work, including web applications, responsive designs, and interactive experiences. Whether you're a potential client, collaborator, or fellow developer, I'm eager to connect, share insights, and embark on exciting projects together.</p>
                </div>
                <div className='profile-pic-cont'>
                    <img src='https://i.imgur.com/b7PHhMp.jpg' alt='profile-pic'/>
                </div>
            </section>
            

            
            <section className='tech-section'>
                <div className="infoContainer ">
                <h4>Tech Stack</h4>
                    <div className="description">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Docker</li>
                        <li>Node.js</li>
                        <li>Flask</li>
                        <li>Jinja</li>
                        <li>Django</li>
                        <li>Spring</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Cypress</li>
                        <li>GIT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </div>
                </div>

                <div className="infoContainer ">
                <h4>Skills</h4>
                    <div className="skill-description">
                        <li>Test Driven Development</li>
                        <li>Ability to learn new languages & software quickly Project management with Agile methodologies</li>
                        <li>Excellent communicator</li>
                        <li>GitHub</li>
                        <li>RESTful API Design</li>
                    </div>
                </div>
            </section>
            </motion.div>
        </div>
    </>
    );
};

export default AboutPage
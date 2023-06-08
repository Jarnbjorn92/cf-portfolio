import React from 'react';
import portfolioData from './portfolioData.json';
import Project from './Project';
import NavBar from '../../NavBar';
import '../AboutPage.css';


const PortfolioPage = () => {

    const ProjectList = () =>

    portfolioData.map((project, index) => (
        <Project
            key={index}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            color={project.color}
            github={project.github}
            deployed={project.deployed}
            description={project.description}
        />
    ));
    
    return (
        <div>
        <NavBar/>
            <div className='container'>
                <div className='column'>
                    <ProjectList/>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
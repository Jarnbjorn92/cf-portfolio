import React from 'react';
import portfolioData from './portfolioData.json';
import Project from './Project';
import NavBar from '../../NavBar';


const PortfolioPage = () => {

    const portfolioNodes = portfolioData.map((project, index) => {

        return <Project 
            key={index}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            color={project.bgcolor}
            github={project.github}
            deployed={project.deployed}
            description={project.description} />
        });

    return (
        <div>
            <NavBar/>
            {portfolioNodes}
        </div>
    );
};

export default PortfolioPage
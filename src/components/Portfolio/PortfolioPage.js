import React from 'react';
import portfolioData from './portfolioData.json';
import Project from './Project';
import NavBar from '../../NavBar';


const PortfolioPage = () => {

    const ProjectList = () =>

    portfolioData.map((project, index) => (
        <Project
            key={index}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            color={project.bgcolor}
            github={project.github}
            deployed={project.deployed}
            description={project.description}
        />
    ));

    // const imageNodes = portfolioData.map((image, index) => {
    //     console.log(image.image)
    //     return <img src={image.image} key={index} alt=""/>
    // })

    
    return (
        <div>
        <NavBar/>
        
            <div className='row'>
                <ProjectList/>
                
            </div>
        </div>
    );
};

export default PortfolioPage;
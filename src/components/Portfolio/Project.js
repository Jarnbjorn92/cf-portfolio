import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import closeModal from '../../projectImages/close.svg';
import "./ProjectPage.css";

const Project = ({technologies, title, color, image, id, github, deployed, description}) => {

    // View to trigger FramerMotion and variables
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const variants = {
        hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    // Modal State and functions
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    Modal.setAppElement("#root");

    // useEffect for setting page to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Display image as background
    const projectCardStyle = {
        background: `url(${image})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
    };

    return (

        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >

        <div style={{...projectCardStyle}} className="projectCard" onClick={handleOpenModal}>
        <div className="textWrap">
            <h2 className="projectTitle">{title}</h2>
            <p className="tech">
                <em>{technologies}</em>
            </p>
                <span className="viewWork">Click to View More &#8594;</span>
            </div>
            {/* <div className="imageContainer">
                <img src={image} alt="Home-page" />
            </div> */}
        </div>
        <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
                style={{
                    content: {
                        backgroundColor: "#708adc",
                        borderRadius: "15px",
                        color: "white",
                        padding: "60px",
                        display: "flex",
                        flexDirection: "column",
                        width: "400px",
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: "999",
                        letterSpacing: '1px'
                    },
                }}>

            <img src={closeModal} className="closeModal" onClick={handleCloseModal} alt="Close"></img>
            <div className="imageContainer">
                <img src={image} alt="Home-page" />
            </div>
                <h3 className="modalTitle">{title}</h3>
                <p className="projectDescription">{description}</p>
                <button className="btn" onClick={() => (window.open(github))}>
                    GitHub Repo
                </button>
            {/* DEPLOYED BUTTON */}
            {/* <button className="btn" onClick={() => (window.location.href = deployed)}>
                Live Link
            </button> */}
            </Modal>
        </motion.div>
    );
};

export default Project;
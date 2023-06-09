import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from '../../projectImages/close.svg';
import "./ProjectPage.css";

const Project = ({technologies, title, color, image, id, github, deployed, description}) => {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const variants = {
        hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    // Import the image using require
    // const projectImage = require(`./projectImages/${image}`).default;
    
    Modal.setAppElement("#root");

    return (

        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >

        <div style={{background: color}} className="projectCard" onClick={handleOpenModal}>
        <div className="textWrap">
            <h2 className="projectTitle">{title}</h2>
            <p className="tech">
                <em>{technologies}</em>
            </p>
                <span className="viewWork">Click to View More &#8594;</span>
            </div>
            <div className="imageContainer">
                <img src={image} alt="Home-page" />
            </div>
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
                <h3 className="modalTitle">{title}</h3>
                <p className="projectDescription">{description}</p>
                <div className="imageContainer">
                <img src={image} alt="Home-page" />
            </div>
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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from './projectImages/close.svg'
import "./ProjectPage.css";

const Project = ({technologies, title, image, color, id, github, deployed, description}) => {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const variants = {
        hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    
    Modal.setAppElement("#root");
    
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    return (

        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >

        <div className="projectCard" onClick={handleOpenModal}>
        <div className="textWrap">
            <p className="tech">
                <em>{technologies}</em>
            </p>
            <h3 className="projectTitle">{title}</h3>
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
                        backgroundColor: "#101010",
                        color: "#9f9f9f",
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
                    },
                }}>

            <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
                <h3 className="modalTitle">{title}</h3>
                <p className="projectDescription">{description}</p>
                <button className="btn" onClick={() => (window.open(github))}>
                    GitHub Repo
                </button>
            {/* <button className="btn" onClick={() => (window.location.href = deployed)}>
                Live Link
            </button> */}
            </Modal>
        </motion.div>
    );
};

export default Project
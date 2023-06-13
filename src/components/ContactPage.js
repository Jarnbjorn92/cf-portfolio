import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavBar from '../NavBar';
import SocialLinks from './SocialLinks';
import './ContactPage.css';

const ContactPage = ({ personalDetails }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    // Subit Success State
    const [success, setSuccess] = useState(false);
    // Form Submit Data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        access_key: '534eb692-031e-4304-9b5e-f7c757958921',
    });
    //Form handle data
    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };


    //Form submit data and email target (handled by web3forms API)
    const handleSubmit = (event) => {
        event.preventDefault();

    const data = JSON.stringify(formData);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: data,
    })
        .then((res) => res.json())
        .then((data) => {
            setSuccess(true);
            setFormData({
            ...formData,
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    })
        .catch((err) => console.log(err));
    };

    // Download CV Function
    const handleDownload = () => {
        const filename = 'Connor_fleming_software_developer.pdf';
        const fileURL = 'https://cf-personal-site-bucket.s3.eu-west-2.amazonaws.com/Connor_fleming_software_developer.pdf';

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = filename;
        link.target = '_blank'; //Open in new window

        // Append the anchor to the body and trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up the temporary anchor
        document.body.removeChild(link);
    };
    
    //Fade in framer variant
    const fadeInVariants = {
        hidden: {
        opacity: 0,
        },
        visible: {
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 0.5,
        },
        },
    };

    return (
        <div className="ContactPage">
            <NavBar />

        <section className="contactSection">
        <motion.form
            action=""
            ref={ref}
            className="contactForm"
            initial={{ x: '-10vw', opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: '-10vw', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onSubmit={handleSubmit}
        >
            <h4 className="contentTitle">Message Me</h4>
            <div className="formGroup" style={{ display: 'inline-block', margin: '5px' }}>
                <input
                type="text"
                className="formControl"
                onChange={handleChange}
                value={formData.name}
                id="contactName"
                name="name"
                placeholder="Name"
                required
                />
            </div>
            <div className="formGroup" style={{ display: 'inline-block' }}>
                <input
                type="email"
                className="formControl"
                onChange={handleChange}
                value={formData.email}
                id="contactEmail"
                name="email"
                placeholder="Email"
                required
                />
            </div>
            <div className="col-12 formGroup">
                <input
                type="text"
                className="formControl"
                onChange={handleChange}
                value={formData.subject}
                id="contactSubject"
                name="subject"
                placeholder="Subject"
                required
                />
            </div>
            <div className="col-12 formGroup">
                <textarea
                className="formControl"
                onChange={handleChange}
                value={formData.message}
                name="message"
                id="contactMessage"
                rows="12"
                placeholder="Message"
                required
                ></textarea>
            </div>

            <div className="col-12 formGroup formSubmit">
                <button className="btn">{success ? 'Message Sent' : 'Send Message'}</button>
            </div>
        </motion.form>

        <motion.div
            className="contactInfo"
            ref={ref}
            initial={{ x: '10vw', opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: '10vw', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <h4 className="contentTitle">Contact Information</h4>
            <div className="personalContactInfo">
                <div className="infoType">Name</div>
                {personalDetails.name}
            </div>

            <div className="personalContactInfo">
                <div className="infoType">Location</div>
                {personalDetails.location}
            </div>

            <div className="personalContactInfo">
                <div className="infoType">Email</div>
                <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
            </div>

            <hr/>

            <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeInVariants}>
                <SocialLinks />
                <div className="cv-section">
                    <button className="btn" onClick={handleDownload}>
                    Download CV
                    </button>
                </div>
            </motion.div>
        </motion.div>
        </section>
    </div>
    );
};

export default ContactPage;

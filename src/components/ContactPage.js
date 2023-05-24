import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavBar from '../NavBar';
import './ContactPage.css';

const ContactPage = ({personalDetails}) => {

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        access_key: "",
    });

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: data,
    })
        .then((res) => res.json())
        .then((data) => {
            setSuccess(true);
            setFormData({
            ...formData,
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    })
    .catch((err) => console.log(err));
};


    return (
        <>
        <NavBar/>
        <motion.form
        action=""
        ref={ref}
        className="contactForm"
        initial={{ x: "-10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onSubmit={handleSubmit}
        >

        <h4 className="contentTitle">Message Me</h4>
        <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
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
        <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
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
            rows="5"
            placeholder="Message"
            required
        ></textarea>
        </div>
        <div className="col-12 formGroup formSubmit">
        <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
        </div>
        </motion.form>

        <motion.div
            className="contactInfo"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        <h4 className="contentTitle">Contact Information</h4>
            <ul className="listInfo">
                <li>
                    <div className="personalContactInfo">
                        <span className="infoIcon">
                        <i className="icon fa-solid fa-user"></i>{" "}
                        </span>
                        <div className="mediaWrap">
                        <h6 className="infoType">Name</h6>
                        <span className="infoValue">{personalDetails.name}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="personalContactInfo">
                        <span className="infoIcon">
                        <i className="icon fa-solid fa-location-pin "></i>{" "}
                        </span>
                        <div className="mediaWrap">
                        <h6 className="infoType">Location</h6>
                        <span className="infoValue">{personalDetails.location}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="personalContactInfo">
                        <span className="infoIcon">
                            <i className="icon fa-solid fa-envelope "></i>{" "}
                        </span>
                        <div className="mediaWrap">
                        <h6 className="infoType">Email</h6>
                        <span className="infoValue">
                            <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
                        </span>
                    </div>
                </div>
            </li>
            </ul>
        </motion.div>
        </>
    )
};

export default ContactPage
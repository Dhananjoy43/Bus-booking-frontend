import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
    // importing env variables
    const SERVER = import.meta.env.VITE_REACT_APP_SERVER_ADDRESS;

    const [ContactForm, setContactForm] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setContactForm({ ...ContactForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios(`${SERVER}/messages`, ContactForm);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }

        // axios
        //     .post(`${SERVER}/messages`, ContactForm)
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <form method="post">
            <div className="input_container">
                <div className="align-center">
                    <h2>Contact Us</h2>
                </div>
                <div className="input_field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={ContactForm.name}
                        onChange={handleInputs}
                    />
                </div>
                <div className="input_field">
                    <label htmlFor="mobile">Mobile No:</label>
                    <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        placeholder="Enter your mobile no"
                        value={ContactForm.mobile}
                        onChange={handleInputs}
                    />
                </div>
                <div className="input_field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={ContactForm.email}
                        onChange={handleInputs}
                    />
                </div>
                <div className="input_field">
                    <label htmlFor="message">Message:</label>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        value={ContactForm.message}
                        onChange={handleInputs}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

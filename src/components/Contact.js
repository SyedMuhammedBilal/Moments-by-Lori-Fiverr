import React from 'react'
import './Contact.css'
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className="background">
            <div className="c-container">
                <div className="contact-box">
                    <div className="contact-body">
                        <div className="body-item left">
                            <div className="title">
                                <span>Contact Us</span>
                            </div>
                            <ContactDetails />
                        </div>
                        <div className="body-item right">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

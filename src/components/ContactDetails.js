import React from 'react'
import './Contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function ContactDetails() {
    return (
        <div className="contact-detail">
        Contact - #12345678910 <br />
            <ul>
                <li><FacebookIcon /></li>
                <li><InstagramIcon /></li>
                <li><WhatsAppIcon  /></li>
            </ul>
        </div>
    )
}

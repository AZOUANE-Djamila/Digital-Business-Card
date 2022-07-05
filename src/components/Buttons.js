import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Button() {
    let url=""
    return (
        <div className="header-btn-group">
            <a  href={url} className="social-button social-button-email" >
                <FaEnvelope className="button-social-icon" />
                E-mail
            </a>
            <a href={url} className="social-button social-button-linkedin" target="_blank" rel="noreferrer">
                <FaLinkedin className="button-social-icon" />
                Linkedin
            </a>
        </div>
    )
}

export default Button
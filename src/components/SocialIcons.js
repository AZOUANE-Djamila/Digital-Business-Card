import React from 'react'
import { FaTwitter,FaFacebookF, FaInstagram ,FaLinkedinIn } from 'react-icons/fa';

function SocialIcons() {
      let url="";
  return (
    <div>
         <a href={url} className="social-link" target="_blank" rel="noreferrer">
                <FaTwitter className="social-link-icon" />
          </a>
          <a href={url} className="social-link" target="_blank" rel="noreferrer">
          <FaFacebookF className="social-link-icon" />
          </a>
          <a href={url} className="social-link" target="_blank" rel="noreferrer">
                <FaInstagram className="social-link-icon" />
          </a>
          <a href={url} className="social-link" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="social-link-icon" />
          </a>
    </div>
  )
}

export default SocialIcons
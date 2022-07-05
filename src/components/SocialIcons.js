import React from 'react'
import { FaTwitter, FaInstagram ,FaLinkedinIn } from 'react-icons/fa';

function SocialIcons() {
      let url="";
  return (
    <div>
         <a href={'https://twitter.com/DjamilaAZ1'} className="social-link" target="_blank" rel="noreferrer">
                <FaTwitter className="social-link-icon" />
          </a>
          <a href={'https://www.instagram.com/azouane_djamila/'} className="social-link" target="_blank" rel="noreferrer">
                <FaInstagram className="social-link-icon" />
          </a>
          <a href={'https://www.linkedin.com/in/djamila-azouane/'} className="social-link" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="social-link-icon" />
          </a>
    </div>
  )
}

export default SocialIcons
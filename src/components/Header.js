import React from 'react'
import profile from '../images/profile.jpg'
import Buttons from './Buttons'
function Header() {
  return (
    <header className="profile-header">
      <img src={profile} alt="Profile img" className="profile-image" />
      <h3 className="profile-name">AZOUANE Djamila</h3>
      <span className="profile-title">Web and mobile Product Manager</span>
      <a href={'https://azouane.com/'} className="profile-website">azouane.com</a>
      <Buttons />

    </header>
  )
}

export default Header
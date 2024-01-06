import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import discord_icon from '../Assets/discord_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Quang Market</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <a href="https://www.instagram.com/quangalangs/" target="blank"><img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
        <a href="https://discord.gg/KDZXzJpYA7" target="blank"><img src={discord_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
        <a href="https://www.facebook.com/hymical" target="blank"><img src={facebook_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>@ Quang 2024</p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='footer-col'>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href='#'>Privacy Settings</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Resources</h4>
              <ul>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Accessibility</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Socials</h4>
              <ul>
                <li><a href='#'>Here</a></li>
                <li><a href='#'>Hello</a></li>
                <li><a href='#'>Yes</a></li>
              </ul>
            </div>

          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
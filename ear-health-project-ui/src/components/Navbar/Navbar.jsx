import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = 
({isLoggedIn,
  logOutHandler
}) => {
  return (
    <div>
      <header>
        <nav className='navbar'>
          <ul className='listed-links'>
            <li>
              <Link to="/">
                <p className='logo-name'>RUBEN</p>              
                </Link>
            </li>
            <li>
              <Link to="/forum">
                <p>Forum</p>
              </Link>
            </li>   
          </ul>

          {isLoggedIn ? 
          (
            <ul className='signedout'>
              <Link to = {`/notifications`} ><img  className='notification-icon' src = "https://cdn-icons-png.flaticon.com/512/565/565422.png"/></Link>
              <button className='login' onClick={logOutHandler}>Sign Out</button>
            </ul>
          ) : (
            <ul className='logged-in'>
              <li>
                <Link to="/login">
                <button className='login'>Login</button>
                </Link>
              </li>
              <li>
                <Link to="register">
                  <button className='register_button'>Register</button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
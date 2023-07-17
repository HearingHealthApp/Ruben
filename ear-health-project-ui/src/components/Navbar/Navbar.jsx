import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = 
({isLoggedIn,
  logOutHandler
}) => {
  return (
    <div>
      <nav className='navbar'>
        <ul className='listed-links'>
          <li>
            <Link to="/">
              <img className='logo' src='https://t4.ftcdn.net/jpg/02/61/77/53/360_F_261775338_nEPbSAfDLTAo8JUguMzsxXttBPyNZZqC.jpg' alt='logo'/>
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
            <button className='signout' onClick={logOutHandler}>Sign Out</button>
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
    </div>
  )
}

export default Navbar
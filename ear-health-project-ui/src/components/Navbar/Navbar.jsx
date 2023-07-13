import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({isLoggedIn}) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src='https://t4.ftcdn.net/jpg/02/61/77/53/360_F_261775338_nEPbSAfDLTAo8JUguMzsxXttBPyNZZqC.jpg' alt='logo'/>
            </Link>
          </li>
          <li>
            <Link to="/forum">
              <p>Forum</p>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
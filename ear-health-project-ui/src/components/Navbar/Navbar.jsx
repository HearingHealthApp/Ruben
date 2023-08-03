import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  isLoggedIn,
  logOutHandler,
  user,
  profileImageKey,
  navNotifs,
}) => {
  console.log("from navbar", user);

  let imageLink = `http://localhost:3001/s3/image/${profileImageKey}`;

  useEffect(() => {
    // This effect will run every time the profileImage prop changes
    imageLink = `http://localhost:3001/s3/image/${profileImageKey}`;
    console.log();
    console.log("Navbar profileImage changed:", profileImageKey);
  }, [imageLink]);

  console.log("from navbar NOTIFS", navNotifs);

  const onlyNewNotifs = navNotifs.filter((notif) => notif.viewStatus == false);

  console.log(onlyNewNotifs);

  return (
    <div className="navbar-container">
      <header>
        <nav className="navbar">
          <ul className="listed-links">
            <li>
              <Link to="/">
                <p className="logo-name">RUBEN</p>
              </Link>
            </li>
            <li>
              <Link to="/forum">
                <p>Forum</p>
              </Link>
            </li>
            <li>
              <Link to="/listener">
                <p>Listener</p>
              </Link>
            </li>
            <li>
              <Link to="/history">
                <p>History</p>
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div>
              {onlyNewNotifs.length <= 0 ? (
                <ul className="signedout">
                  <Link to={`/notifications`}>
                    <img
                      className="notification-icon"
                      src="https://cdn-icons-png.flaticon.com/512/565/565422.png"
                    />
                  </Link>
                  {/* <button className="login" onClick={logOutHandler}>
                Sign Out
              </button> */}
                  <div className="dropdown">
                    <img src={imageLink} className="user-img-navbar" />
                    <div class="dropdown-content">
                      <Link to={`/profile/${user.userId}`}>
                        <p>Profile</p>
                      </Link>
                      <a onClick={logOutHandler} className="dropdown-logout">
                        Logout
                      </a>
                    </div>
                  </div>
                </ul>
              ) : (
                <ul className="signedout">
                  <Link to={`/notifications`}>
                    <img
                      className="notification-icon"
                      src="../../src/assets/565422.png"
                    />
                  </Link>
                  {/* <button className="login" onClick={logOutHandler}>
                Sign Out
              </button> */}
                  <div className="dropdown">
                    <img src={imageLink} className="user-img-navbar" />
                    <div class="dropdown-content">
                      <Link to={`/profile/${user.userId}`}>
                        <p>Profile</p>
                      </Link>
                      <a onClick={logOutHandler} className="dropdown-logout">
                        Logout
                      </a>
                    </div>
                  </div>
                </ul>
              )}
            </div>
          ) : (
            <div>
              <ul className="logged-in">
                <li>
                  <Link to="/login">
                    <button className="login">Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="register">
                    <button className="register_button">Register</button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

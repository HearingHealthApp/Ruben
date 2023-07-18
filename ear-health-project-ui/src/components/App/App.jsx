import { useState } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.jsx";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import Footer from "../Footer/Footer";
import Forum from "../Forum/Forum";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterDoctor from "../RegisterDoctor/RegisterDoctor";

function App() {
  //useState for login boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useState for the user that is currently logged in
  const [user, setUser] = useState({});

  //loginHandler
  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  //setup a logout handler
  const logOutHandler = () => {
    // we set our isLoggedIn use state to false
    setIsLoggedIn(false);

    // we delete the token in our local storage
    localStorage.setItem("HearingHealthToken", null);
  };

  //function that updates the user state with the user we receive from the backend
  const userUpdater = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar
            isLoggedIn={isLoggedIn}
            logOutHandler={logOutHandler}
          ></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RegisterPage
                  loginHandler={loginHandler}
                  userUpdater={userUpdater}
                />
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage
                  loginHandler={loginHandler}
                  userUpdater={userUpdater}
                />
              }
            />
            <Route path="/forum" element={<Forum user={user} />} />
            <Route
              path="/register/doctor"
              element={
                <RegisterDoctor
                  loginHandler={loginHandler}
                  userUpdater={userUpdater}
                />
              }
            />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

export default App;

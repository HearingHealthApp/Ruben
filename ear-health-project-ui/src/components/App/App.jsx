import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.jsx";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import Footer from "../Footer/Footer";
import Forum from "../Forum/Forum";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterDoctor from "../RegisterDoctor/RegisterDoctor";
import ApiClient from "../../services/apiClient.JS";
import ForumPost from "../ForumPost/ForumPost"
import Profile from "../Profile/Profile";


function App() {
  //useState for login boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useState for the user that is currently logged in
  const [user, setUser] = useState({});

  //useState for 

  console.log(user)

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await ApiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
        setIsLoggedIn(true);
      }

      if (error){
        console.log(error)
      }

    };

    const token = localStorage.getItem("HearingHealthToken");

    if (token) {
      ApiClient.setToken(token);
      fetchUser();
    }
  }, []);

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

    //we reset what our user state is
    setUser({})
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
            <Route path="/forum" element={<Forum user = {user}/>} />
            <Route
              path="/register/doctor"
              element={
                <RegisterDoctor
                  loginHandler={loginHandler}
                  userUpdater={userUpdater}
                />
              }
            />

            <Route path = "/forum/post/:postId" element = {<ForumPost user = {user}/>}/>

            <Route path = "/profile/:userId" element = {<Profile/>}/>

          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;

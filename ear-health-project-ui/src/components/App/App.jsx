import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import Home from "../Home/Home.jsx";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import Footer from "../Footer/Footer";
import Forum from "../Forum/Forum";
import History from "../History/History";
import { HashRouter, Routes, Route } from "react-router-dom";
import RegisterDoctor from "../RegisterDoctor/RegisterDoctor";
import apiClient from "../../services/apiClient.js";
import ForumPost from "../ForumPost/ForumPost";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import NotificationView from "../NotificationView/NotificationView";
import Listener from "../Listener/Listener";
import Loading from "../Loading/Loading";

function App() {
  //useState for login boolean
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useState for the user that is currently logged in
  const [user, setUser] = useState({});

  //useState for the user's image
  const [profileImageKey, setProfileImageKey] = useState("");

  //useState for the user's notifications to conditionally display on the navbar
  const [navNotifs, setNavNotifs] = useState([]);

  //useState for when we are waiting for data(loading)
  const [isLoading, setIsLoading] = useState(false);

  const loadingSetter = (value) => {
    setIsLoading(value);
  };

  const fetchNavNotifs = async (data) => {
    setNavNotifs(data);
  };

  useEffect(() => {
    const fetchUser = async () => {
      // setIsLoading(true);

      const { data, error } = await apiClient.fetchUserFromToken();

      const notificationData = await apiClient.getUserNotifications(
        data.user.userId
      );

      // if the fetch user gets a user,
      if (data) {
        setUser(data.user);
        setIsLoggedIn(true);
        setProfileImageKey(data.user.image);
        setNavNotifs(notificationData.data.notifications);
      }

      if (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    const token = localStorage.getItem("HearingHealthToken");

    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  //notification getter that runs every 15 minnutes
  let timer = setInterval(async function () {
    if (user?.userId) {
      const { data } = await apiClient.getUserNotifications(user.userId);
      setNavNotifs(data.notifications);
    }
  }, 900000);

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
    setUser({});

    //we reset the image key
    setProfileImageKey("");

    //reset the navNotifs
    setNavNotifs([]);
  };

  //function that updates the user state with the user we receive from the backend
  const userUpdater = (userData) => {
    setUser(userData);
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div>
        <HashRouter>
          <Navbar
            isLoggedIn={isLoggedIn}
            logOutHandler={logOutHandler}
            user={user}
            profileImageKey={profileImageKey}
            navNotifs={navNotifs}
            loadingSetter={loadingSetter}
          ></Navbar>
          <div className="primary-container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home isLoggedIn={isLoggedIn} loadingSetter={loadingSetter} />
                }
              />
              <Route
                path="/register"
                element={
                  <RegisterPage
                    loginHandler={loginHandler}
                    userUpdater={userUpdater}
                    setProfileImageKey={setProfileImageKey}
                    loadingSetter={loadingSetter}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <LoginPage
                    loginHandler={loginHandler}
                    userUpdater={userUpdater}
                    setProfileImageKey={setProfileImageKey}
                    fetchNavNotifs={fetchNavNotifs}
                    loadingSetter={loadingSetter}
                  />
                }
              />
              <Route
                path="/forum"
                element={
                  <Forum
                    user={user}
                    isLoggedIn={isLoggedIn}
                    loadingSetter={loadingSetter}
                  />
                }
              />
              <Route
                path="/register/doctor"
                element={
                  <RegisterDoctor
                    loginHandler={loginHandler}
                    userUpdater={userUpdater}
                    setProfileImageKey={setProfileImageKey}
                    loadingSetter={loadingSetter}
                  />
                }
              />

              <Route
                path="/forum/post/:postId"
                element={
                  <ForumPost
                    user={user}
                    isLoggedIn={isLoggedIn}
                    loadingSetter={loadingSetter}
                  />
                }
              />

              <Route
                path="/profile/:userId"
                element={
                  <Profile
                    user={user}
                    setProfileImageKey={setProfileImageKey}
                    profileImageKey={profileImageKey}
                    loadingSetter={loadingSetter}
                  />
                }
              />

              <Route
                path="/notifications"
                element={
                  <NotificationView
                    user={user}
                    isLoggedIn={isLoggedIn}
                    setNavNotifs={setNavNotifs}
                    navNotifs={navNotifs}
                    fetchNavNotifs={fetchNavNotifs}
                    loadingSetter={loadingSetter}
                  />
                }
              />

              <Route
                path="/listener"
                element={<Listener loadingSetter={loadingSetter} />}
              />

              <Route
                path="/history"
                element={<History loadingSetter={loadingSetter} />}
              />

              <Route
                path="*"
                element={<NotFound loadingSetter={loadingSetter} />}
              />
            </Routes>
          </div>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
}

export default App;

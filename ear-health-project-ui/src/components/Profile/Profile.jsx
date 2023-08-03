import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import { Link } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";
import UploadImage from "../UploadImage/UploadImage";
import "./Profile.css";

const Profile = ({ user, setProfileImageKey }) => {
  console.log(user);
  //get the userId from the link
  const { userId } = useParams();
  //get userData using a fetcher
  const [userData, setUserData] = useState({});
  //for getting the comments
  const [userComments, setUserComments] = useState([]);
  //for getting the posts
  const [userPosts, setUserPosts] = useState([]);
  //useState for conditionally rendering comments and posts
  const [conditionalRender, setConditonalRender] = useState("Posts");
  //for updating the user's conditons
  const [condition, setCondition] = useState("");
  const [existingConditions, setexistingConditions] = useState("");
  //imageKey
  const [imageKey, setImageKey] = useState("");
  //useState for button, as well as handleClick function
  const [clicked, setClicked] = useState(false);
  //useState boolean for when editing the profile picture
  const [imageClick, setImageClick] = useState(false);
  //updating description useStates and other necessary items
  const [existingDescription, setExistingDescription] = useState("");
  const [description, setDescription] = useState("");
  

  const getUserInfo = async () => {
    const { data } = await apiClient.getUserData(userId);
    console.log(data)
    setUserData(data.user);
    setUserComments(data.userComments);
    setUserPosts(data.userPosts);
    setexistingConditions(data.user.conditions);
    setExistingDescription(data.user.description);
    setImageKey(data.user.image);
    setDescription(data.user.description)
  };

  //call the fetch on page load
  useEffect(() => {
    getUserInfo();
  }, [userId]);

  

  const handleClick = () => {
    if (clicked == false) {
      setClicked(true);
    } else {
      setClicked(false);
      setDescription(existingDescription)

    }
  };

  //query the db from the frontend and update the description
  const updateDescription = async (e) => {
    e.preventDefault();
    const { data } = await apiClient.updateDescription(description, userId);
    setExistingDescription(data.description);
    handleClick();
  };

  //update the description based on the input
  const inputUpdater = (e) => {
    setDescription(e.target.value);
  };

  //input updater for the user's conditions

  const conditionUpdater = (e) => {
    console.log(e.target.value);
    setCondition(e.target.value);
  };

  //query the db from the frontend and update the conditions array
  const updateConditions = async (e) => {
    e.preventDefault();
    const { data } = await apiClient.updateConditions(condition, userId);
    console.log(data);
    setexistingConditions(data.conditions);
  };
  //for the button to update conditions
  const [conditionClick, setConditionClicked] = useState(false);

  const handleConditionClick = () => {
    if (conditionClick == true) {
      setConditionClicked(false);
    } else {
      setConditionClicked(true);
    }
  };

  const handleImageClick = () => {
    if (imageClick == true) {
      setImageClick(false);
    } else {
      setImageClick(true);
    }
  };

  const imageLink = `http://localhost:3001/s3/image/${imageKey}`;

  const conditions = Object.values(existingConditions || {}) || [];

  // console.log(conditions)
  return (
    <div className="user-outer-container">
      <div className="row1">
        <div className="profile-card">
          {user.userId == userId ? (
            <div className="avatar-container">
              {userData.image != null ? (
                <img
                  src={imageLink}
                  className="avatar-image"
                  onClick={handleImageClick}
                />
              ) : null}
            </div>
          ) : (
            <div className="image-container">
              <img src={imageLink} className="avatar-image" />
            </div>
          )}
          {imageClick && user.userId == userId ? (
            <UploadImage
              userId={userId}
              setImageKey={setImageKey}
              setProfileImageKey={setProfileImageKey}
            />
          ) : null}

          <div className="username-box">
            <h1 className="username">{userData.username}</h1>
          </div>

          <div className="conditions-container">
            {userData.isDoctor ? (
              <p>im a doctor</p>
            ) : (
              <>
                <h3 className="profile-label">Conditions</h3>
                <div className="conditions">
                  {conditions != null
                    ? conditions.map((conditionMap) => (
                        <p className="condition">{conditionMap}</p>
                      ))
                    : null}
                </div>
              </>
            )}
          </div>

          {conditionClick ? (
            <div className="condition-form">
              <form onSubmit={updateConditions}>
                <input
                  type="text"
                  onChange={conditionUpdater}
                  maxLength={17}
                  minLength={1}
                />
                <br />
                <button className="interaction-filter-buttons" type="submit">
                  Add Condition
                </button>
                <button onClick={handleConditionClick}>Cancel</button>
              </form>
            </div>
          ) : (
            <div>
              {user.userId == userId && conditions.length < 5 ? (
                <button
                  className="condition-adder"
                  onClick={handleConditionClick}
                >
                  Add a Condition
                </button>
              ) : null}
            </div>
          )}

          <h3 className="profile-label">Description</h3>
          <div className="description-box">
            {existingDescription == null ? (
              <p>No description yet!</p>
            ) : (
              <p>{existingDescription}</p>
            )}
          </div>

          {clicked ? (
            <div>
              <form onSubmit={updateDescription}>
                <textarea
                  className="description-input-box"
                  onChange={inputUpdater}
                  value={description}
                />{" "}
                <br />
                <button className="description-buttons" type="submit">
                  Submit
                </button>
                <button className="description-buttons" onClick={handleClick}>
                  Cancel
                </button>
              </form>
            </div>
          ) : (
            <div>
              {user.userId == userId ? (
                <button className="description-buttons" onClick={handleClick}>
                  Edit description
                </button>
              ) : null}
            </div>
          )}
        </div>

        <div className="user-interactions-container">
          <div className="interaction-filter-buttons-container">
            <div className="interaction-filter-buttons">
              <button onClick={() => setConditonalRender("Posts")}>
                Posts
              </button>
              <button onClick={() => setConditonalRender("Comments")}>
                Commments
              </button>
            </div>
          </div>

          <div className="user-interaction-container">
            <div className="user-interactions">
              {conditionalRender === "Posts"
                ? userPosts
                    .filter((post) => !post.isAnonymous)
                    .map((post) => (
                      <div>
                        <Link
                          className="link"
                          to={`/forum/post/${post.postId}`}
                        >
                          <ForumPostCard key={post.postId} post={post} />
                        </Link>
                      </div>
                    ))
                : conditionalRender === "Comments" &&
                  userComments
                    .filter((comment) => !comment.isAnonymous)
                    .map((comment) => (
                      <div>
                        <Link
                          className="link"
                          to={`/forum/post/${comment.postId}`}
                        >
                          <CommentCard comment={comment} />
                        </Link>
                      </div>
                    ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

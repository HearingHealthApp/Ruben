import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import { Link } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";
import UploadImage from "../UploadImage/UploadImage";
import "./Profile.css";

const Profile = ({ user }) => {
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

  const getUserInfo = async () => {
    const { data } = await apiClient.getUserData(userId);
    setUserData(data.user);
    setUserComments(data.userComments);
    setUserPosts(data.userPosts);
    setexistingConditions(data.user.conditions);
    setExistingDescription(data.user.description);
    setImageKey(data.user.image);
  };

  //call the fetch on page load
  useEffect(() => {
    getUserInfo();
  }, []);

  //useState for button, as well as handleClick function

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked == false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  //updating description useStates and other necessary items

  const [description, setDescription] = useState("");
  const [existingDescription, setExistingDescription] = useState("");

  //query the db from the frontend and update the description
  const updateDescription = async (e) => {
    e.preventDefault();
    const { data } = await apiClient.updateDescription(description, userId);
    setExistingDescription(data.description);
  };

  //update the description based on the input
  const inputUpdater = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  //input updater for the user's conditions

  const conditionUpdater = (e) => {
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

  console.log(user);
  console.log(userId);

  //useState boolean for when editing the profile picture
  const [imageClick, setImageClick] = useState(false);

  const handleImageClick = () => {
    if (imageClick == true) {
      setImageClick(false);
    } else {
      setImageClick(true);
    }
  };

  const imageLink = `http://localhost:3001/s3/image/${imageKey}`;
  console.log(existingConditions);
  return (
    <div>
      <div className="profile-card">
        {user.userId == userId ? (
          <div class="avatar-container">
            {userData.image != null ? (
              <img
                src={imageLink}
                className="avatar-image"
                onClick={handleImageClick}
              />
            ) : null}
          </div>
        ) : (
          <div>
            <img src={imageLink} className="avatar-image" />
          </div>
        )}
        {imageClick && user.userId == userId ? (
          <UploadImage userId={userId} setImageKey={setImageKey} />
        ) : null}

        <h1>{userData.username}</h1>

        

        <br />

        {existingConditions}

        <br />

        {conditionClick ? (
          <div>
            <form onSubmit={updateConditions}>
              <input onChange={conditionUpdater} />
              <button type="submit">Add Condition</button>
              <button onClick={handleConditionClick}>Cancel</button>
            </form>
          </div>
        ) : (
          <div>
            {user.userId == userId ? (
              <button onClick={handleConditionClick}>Add a Condition</button>
            ) : null}
          </div>
        )}

        {existingDescription == null ? (
          <p>No description yet!</p>
        ) : (
          <p>{existingDescription}</p>
        )}

        {clicked ? (
          <div>
            <form onSubmit={updateDescription}>
              <input onChange={inputUpdater} />
              <button type="submit">Submit</button>
              <button onClick={handleClick}>Cancel</button>
            </form>
          </div>
        ) : (
          <div>
            {user.userId == userId ? (
              <button onClick={handleClick}>Add a description</button>
            ) : null}
          </div>
        )}
      </div>

      <br />

      <div>
        <button onClick={() => setConditonalRender("Posts")}>Posts</button>
        <button onClick={() => setConditonalRender("Comments")}>
          Commments
        </button>
      </div>

      {conditionalRender === "Posts"
        ? userPosts.filter((post) => !post.isAnonymous).map((post) => (
            <div>
              <Link className="link" to={`/forum/post/${post.postId}`}>
                <ForumPostCard key={post.postId} post={post} />
              </Link>
            </div>
          ))
        : conditionalRender === "Comments" &&
          userComments.filter((comment) => ! comment.isAnonymous).map((comment) => (
            <div>
              <Link className="link" to={`/forum/post/${comment.postId}`}>
                <CommentCard comment={comment} />
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Profile;

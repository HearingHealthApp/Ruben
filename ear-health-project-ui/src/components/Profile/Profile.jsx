import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import { Link } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";

const Profile = ({ user }) => {
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

  const getUserInfo = async () => {
    const { data } = await apiClient.getUserData(userId);
    setUserData(data.user);
    setUserComments(data.userComments);
    setUserPosts(data.userPosts);
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

  return (
    <div>
      <div>
        <h1>{userData.username}</h1>
        {userData.description == null ? (
          <p>No description yet!</p>
        ) : (
          <p>{userData.description}</p>
        )}

        {clicked ? (
          <div>
            <input />
            <button>Submit</button>
            <button onClick={handleClick}>Cancel</button>
          </div>
        ) : (
          <div>
            {user.userId == userId ? (
              <button onClick={handleClick}>Add a description</button>
            ) : null}
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setConditonalRender("Posts")}>Posts</button>
        <button onClick={() => setConditonalRender("Comments")}>
          Commments
        </button>
      </div>

      {conditionalRender === "Posts"
        ? userPosts.map((post) => (
            <div>
              <Link className="link" to={`/forum/post/${post.postId}`}>
                <ForumPostCard key={post.postId} post={post} />
              </Link>
            </div>
          ))
        : conditionalRender === "Comments" &&
          userComments.map((comment) => (
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

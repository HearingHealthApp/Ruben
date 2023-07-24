import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import { Link } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";

const Profile = () => {
  //get the userId from the link
  const { userId } =  useParams();

  //get userData using a fetcher
  const [userData, setUserData] = useState({});

  //for getting the comments
  const [userComments, setUserComments] = useState([])

  //for getting the posts  
  const [userPosts, setUserPosts] = useState([])

  //useState for conditionally rendering comments and posts
  const [conditionalRender, setConditonalRender] = useState("Posts")

  const getUserInfo = async () => {
    console.log("here1")
    console.log(userId)
    const {data}  = await apiClient.getUserData(userId)
    console.log(data.userComments)
    setUserData(data.user)
    setUserComments(data.userComments)
    setUserPosts(data.userPosts)
  };

  //call the fetch on page load
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>{userData.username}</h1>
      <button onClick={() => setConditonalRender("Posts")}>Posts</button>
      <button onClick={() => setConditonalRender("Comments")}>Commments</button>

      {conditionalRender === "Posts" ?
      userPosts.map((post) => (
        <div>
        <Link className = 'link' to = {`/forum/post/${post.postId}`}>
        <ForumPostCard key={post.postId} post={post} />
        </Link>
        </div>
      )): conditionalRender === "Comments" &&
      userComments.map((comment) => (
        <CommentCard comment={comment} />
      ))
      }

    </div>
  );
};

export default Profile;

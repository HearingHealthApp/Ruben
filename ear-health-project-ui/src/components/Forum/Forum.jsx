import React, { useEffect, useState } from "react";
import "./Forum.css";
import ForumPrompt from "../ForumPrompt/ForumPrompt";
import ApiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import {Link} from 'react-router-dom'

const Forum = ({ user }) => {
  //conditionally render the forum post form so to reduce clutter when a user does not want to make a post
  const [createPostTrue, setCreatePostTrue] = useState(false);

  //useState variables for adding a new posst to the already existing db of forum posts
  const [newPost, setNewPost] = useState({});
  const [exisitngPosts, setExistingPosts] = useState([]);

  //useState for a fetch error
  const [fetchError, setFetchError] = useState(null);

  //dataAttainable
  const [dataAttainable, setDataAttainable] = useState(true)

  // current page number
  const [pageNum, setPageNum] =  useState(0);
  console.log("page is mounted and pageNum is set to ", pageNum)

  // TODO Call ApiuClient like ApiClient.postsGetter()
  const fetchAllPosts = async () => {
    const { data, error } = await ApiClient.postsGetter(pageNum);

    if (error) {
      setFetchError(error);
    }


    setExistingPosts([...exisitngPosts, ...data.posts]);
    // const newPageNum = pageNum+1
    setPageNum(pageNum+1);

    if(data.posts.length === 0) {
      setDataAttainable(false)
    }

  };

  //call the fetch on page load
  useEffect(() => {
    fetchAllPosts();
  }, []);

  //buttons that handle the conditional rendering of the post form
  const clickButton = () => {
    setCreatePostTrue(true);
  };

  const cancelButton = () => {
    setCreatePostTrue(false);
  };

  const loadMorePosts = async () => {
    fetchAllPosts()
  };

  return (
    <div>
      <input type="text" placeholder="Search for a post" />
      <br />

      {createPostTrue ? (
        <div>
          <ForumPrompt user = {user} fetchAllPosts = {fetchAllPosts} />
          <button onClick={cancelButton}>Cancel</button>
        </div>
      ) : (
        <button onClick={clickButton}>Create a Post</button>
      )}

      <div>
        {exisitngPosts.map((post) => (
          <div>
          <Link className = 'link' to = "/:postId">
          <ForumPostCard key={post.post_id} post={post} />
          </Link>
          </div>
        ))}
        {dataAttainable ? 
        <button onClick={loadMorePosts}>Load More Posts</button>: <p>No more posts!</p>
        }
      </div>
    </div>
  );
};

export default Forum;

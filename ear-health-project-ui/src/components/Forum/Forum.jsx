import React, { useEffect, useState } from "react";
import "./Forum.css";
import ForumPrompt from "../ForumPrompt/ForumPrompt";
import ApiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

const Forum = ({ user }) => {
  //conditionally render the forum post form so to reduce clutter when a user does not want to make a post
  const [createPostTrue, setCreatePostTrue] = useState(false);

  //useState variables for adding a new posst to the already existing db of forum posts
  const [newPost, setNewPost] = useState({});
  const [exisitngPosts, setExistingPosts] = useState([]);

  //useState for a fetch error
  const [fetchError, setFetchError] = useState(null);

  //dataAttainable
  const [dataAttainable, setDataAttainable] = useState(true);

  // current page number
  const [pageNum, setPageNum] = useState(0);
  console.log("page is mounted and pageNum is set to ", pageNum);

  //useState for the searchItem
  const [searchItem, setSearchItem] = useState("");
  const [searchBool, setSearchBool] = useState(false);

  //useState for every post (not limited )
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () => {
    const { data, error } = await ApiClient.postsGetter(pageNum);

    if (error) {
      setFetchError(error);
    }

    setExistingPosts([...exisitngPosts, ...data.posts]);
    // const newPageNum = pageNum+1
    setPageNum(pageNum + 1);

    if (data.posts.length === 0) {
      setDataAttainable(false);
    }
  };

  //call the fetch on page load
  useEffect(() => {
    fetchAllPosts();
    getAllPosts();
  }, []);

  //buttons that handle the conditional rendering of the post form
  const clickButton = () => {
    setCreatePostTrue(true);
  };

  const cancelButton = () => {
    setCreatePostTrue(false);
  };

  const loadMorePosts = async () => {
    fetchAllPosts();
  };

  const handleSearchItem = (event) => {
    setSearchBool(true);

    if (event.target.value === "") {
      setSearchBool(false);
    }
    setSearchItem(event.target.value);
  };

  const getAllPosts = async () => {
    const { data } = await apiClient.getPosts();

    const posts = data.posts;
    setAllPosts(posts);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a post"
        onChange={handleSearchItem}
      />
      <br />

      <div>
        <button>Medical</button>
        <button>Lifestyle</button>
      </div>

      {createPostTrue ? (
        <div>
          <ForumPrompt user={user} fetchAllPosts={fetchAllPosts} />
          <button onClick={cancelButton}>Cancel</button>
        </div>
      ) : (
        <button onClick={clickButton}>Create a Post</button>
      )}

      <div>
        {searchBool
          ? allPosts
              .filter((post) =>
                post.title.toLowerCase().includes(searchItem.toLowerCase())
              )
              .map((post) => (
                <div>
                  <Link className="link" to={`/forum/post/${post.postId}`}>
                    <ForumPostCard key={post.postId} post={post} />
                  </Link>
                </div>
              ))
          : exisitngPosts.map((post) => (
              <div>
                <Link className="link" to={`/forum/post/${post.postId}`}>
                  <ForumPostCard key={post.postId} post={post} />
                </Link>
              </div>
            ))}

        {dataAttainable & !searchBool ? (
          <button onClick={loadMorePosts}>Load More Posts</button>
        ) : (
          <p>No posts!</p>
        )}
      </div>
    </div>
  );
};

export default Forum;

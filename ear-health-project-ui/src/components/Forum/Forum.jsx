import React, { useEffect, useState } from "react";
import "./Forum.css";
import ForumPrompt from "../ForumPrompt/ForumPrompt";
import ApiClient from "../../services/apiClient";
import ForumPostCard from "../ForumPostCard/ForumPostCard";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";

const Forum = ({ user, isLoggedIn }) => {
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

  //will fetch all posts with an offset and a delimiter that is based on pageNum
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

  //call the fetches on page load
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

  //will set a boolean to true which will determine whether to show the delimiter view or the search view
  const handleSearchItem = (event) => {
    setSearchBool(true);

    if (event.target.value === "") {
      setSearchBool(false);
    }
    setSearchItem(event.target.value);
  };

  //gets all the posts without the use of a delimiter
  const getAllPosts = async () => {
    const { data } = await apiClient.getPosts();

    const posts = data.posts;
    setAllPosts(posts);
  };

  //for the purpose of filtering through the forums based on category
  // we will do so by getting the value of the buttons and filtering through the posts through that value
  let [activeCategory, setActiveCategory] = useState("")
  const [categoryBool, setCategoryBool] = useState(false)

  const handleUpdateCategory = (event) => {
    activeCategory = event.target.id
    if (activeCategory === "") {
      setCategoryBool(false)
    } else {
      setCategoryBool(true)
    }
    setActiveCategory(...activeCategory)
  }

  let filteredData = allPosts.filter(post => post.category.includes(activeCategory))

  console.log(filteredData)


  return (
    <div>
      <input
        type="text"
        placeholder="Search for a post"
        onChange={handleSearchItem}
      />
      <br />

      <div>
        <button id = "" onClick={handleUpdateCategory}>All</button>
        <button id = "Medical" onClick={handleUpdateCategory}>Medical</button>
        <button id = "Lifestyle" onClick={handleUpdateCategory}>Lifestyle</button>
      </div>

      {createPostTrue ? (
        <div>
          <ForumPrompt user={user} fetchAllPosts={fetchAllPosts} />
          <button onClick={cancelButton}>Cancel</button>
        </div>
      ) : (
        <div>
        {isLoggedIn ? 
          <button onClick={clickButton}>Create a Post</button> :
          null
        }
        </div>
      )}

      <div>
        {searchBool || categoryBool
          ? filteredData
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

        {dataAttainable & !searchBool & !categoryBool ? (
          <button onClick={loadMorePosts}>Load More Posts</button>
        ) : (
          <p>No posts!</p>
        )}
      </div>
    </div>
  );
};

export default Forum;

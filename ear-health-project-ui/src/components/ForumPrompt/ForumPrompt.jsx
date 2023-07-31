import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import { useNavigate } from "react-router-dom";
import "../ForumPrompt/ForumPrompt.css";

const ForumPrompt = ({ user, fetchAllPosts, cancelButton }) => {
  //useState variables for the input types
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [isAnonymous, setAnonymous] = useState(false);
  const [content, setContent] = useState("");

  let navigate = useNavigate();

  const createForumPost = async (e) => {
    e.preventDefault();
    try {
      let doctor = false;
    if (user.isDoctor) {
      doctor = true;
    }
      const response = await apiClient.postPoster(
        JSON.stringify({
          userId: user.userId,
          username: user.username,
          title: title,
          content: content,
          category: category,
          isAnonymous: isAnonymous,
          isDoctor: doctor,
        })
      );

      const { data, error } = response;

      if (data) {
        navigate(`/forum/post/${data.post.postId}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="forum-prompt-container">
      <div className="prompt">
        <form onSubmit={createForumPost}>
          <label>Title: </label>
          <input
            type="text"
            placeholder="Enter a title for your post!"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div>
            <label>Category:</label>
            <select onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select a Category</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Medical">Medical</option>
              <option value="General">General</option>
            </select>
            <br />

            <label>Post as anonymous?</label>
            <input
              type="checkbox"
              value={isAnonymous}
              onChange={(e) => {
                if (isAnonymous === false) {
                  setAnonymous(true);
                } else {
                  setAnonymous(false);
                }
              }}
            />
            <br />
          </div>

          <textarea
            rows="8"
            columns="8"
            placeholder="Enter your post content"
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="prompt-button" type="submit">Submit</button>
          <button className="prompt-button" id="create-post-button" onClick={cancelButton}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForumPrompt;

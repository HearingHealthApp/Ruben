import React, {useState} from 'react'
import apiClient from '../../services/apiClient'
import axios from 'axios'

const ForumPrompt = ({user, fetchAllPosts}) => {
  // console.log(user)
  // console.log(user.user_id)
    //useState variables for the input types
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [isAnonymous, setAnonymous] = useState(false)
    const [content, setContent] = useState("")

    


    //useState for the post to be added
    const [newPost, setNewPost] = useState({})
    console.log(newPost)
    const createForumPost = async (e) => {
      e.preventDefault()
      try {
        setNewPost(JSON.stringify({ userId: user.userId, username: user.username, title: title, content: content, category: category, isAnonymous: isAnonymous }))
        const response = await apiClient.postPoster(newPost);
        fetchAllPosts()
      } catch(err) {
        console.error(err)
      }
    }

  return (
    <div>
    <form onSubmit={createForumPost}>
        <label>Title: </label>
        <input type = "text" 
        placeholder = 'Enter a title for your post!' 
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
        required/>

        <br/>
        
        <div>
        <label>Category:</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value = "">Select a Category</option>
          <option value= "Lifestyle">Lifestyle</option>
          <option value = "Medical">Medical</option>
          <option value = "General">General</option>
        </select>
        <br/>

        <label>Post as anonymous?</label>
        <input type = "checkbox" value = {isAnonymous} onChange={(e) => {
            if (isAnonymous === false) {
                setAnonymous(true)
            } else {
                setAnonymous(false)
            }
        }}/>
        <br/>

        </div>

        <textarea rows = "8" columns = "8" 
        placeholder="Enter your post content"  
        onChange={(e) => setContent(e.target.value)}/>
        <br/>
        <button type = 'submit'>Submit</button>
      </form>
    </div>
  )
}

export default ForumPrompt
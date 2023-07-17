import React, { useState } from 'react'
import "./Forum.css"
import ForumPrompt from '../ForumPrompt/ForumPrompt'

const Forum = () => {

  const [createPostTrue, setCreatePostTrue] = useState(false)

  const clickButton = () => {
    setCreatePostTrue(true)
  }
  const cancelButton = () => {
    setCreatePostTrue(false)
  }

  return (
    <div>
      <input type = "text" placeholder = 'Search for a post'/>
      <br/>

      {createPostTrue ? 
      <div>
      <ForumPrompt/> 
      <button onClick={cancelButton}>Cancel</button> 
      </div>: <button onClick={clickButton}>Create a Post</button>
      }
    </div>
  )
}

export default Forum
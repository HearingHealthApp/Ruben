import React, {useState} from 'react'

const ForumPrompt = () => {

    //useState variables for the input types
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [anonymous, setAnonymous] = useState(false)
    const [content, setContent] = useState("")
    
    //handler for the forum post 

    const handleForumPost = (e) => {
        e.preventDefault()
        console.log({title, category, anonymous, content})
    }

  return (
    <div>
    <form onSubmit={handleForumPost}>
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
        <input type = "checkbox" value = {anonymous} onChange={(e) => {
            if (anonymous === false) {
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
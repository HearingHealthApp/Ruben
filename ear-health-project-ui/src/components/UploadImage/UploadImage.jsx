import React from 'react'
import apiClient from '../../services/apiClient'


const UploadImage = () => {

    //useState for the image file
    const [selectedFile, setSelectedFile] = useState(null)

    //useState for the actual image 
    const [image, setImage] = useState(null)

    //submit Handler

    const handleSubmit = async(e) => {
        e.preventDefault()
        //will contain the post route to upload an image into the bucket, alongside a put route to update the user db with the location of the image
        // const result = await apiClient
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type = 'file'/>
        <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default UploadImage
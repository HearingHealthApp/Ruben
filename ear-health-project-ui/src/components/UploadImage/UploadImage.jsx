import React from 'react'
import apiClient from '../../services/apiClient'
import { useState } from 'react'


const UploadImage = ({userId}) => {

    //useState for the image file
    const [selectedFile, setSelectedFile] = useState(null)

    //useState for the actual image 
    const [file, setFile] = useState(null)

    //submit Handler

    const handleSubmit = async(e) => {
        e.preventDefault()
        //will contain the post route to upload an image into the bucket, alongside a put route to update the user db with the location of the image
        // const result = await apiClient

        const {data} = await apiClient.updateProfilePicture({image:file, userId})
        console.log(data)
    }

    const fileSelected = (e) => {
      const file = e.target.files[0]
      setFile(file)
      console.log(file)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type = 'file' accept = "image/*" onChange={fileSelected}/>
        <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default UploadImage
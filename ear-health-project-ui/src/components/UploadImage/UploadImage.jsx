import React from "react";
import { useState } from "react";
import axios from "axios";
import "../UploadImage/UploadImage.css";

const UploadImage = ({ userId, setImageKey, setProfileImageKey }) => {
  //useState for the input file
  const [file, setFile] = useState(null);

  const postImage = async ({ image }, userId) => {
    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(
      `https://ruben-api.onrender.com/s3/upload/${userId}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return result.data;
  };

  //submit Handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    //will contain the post route to upload an image into the bucket, alongside a put route to update the user db with the location of the image
    // const result = await apiClient

    const result = await postImage({ image: file }, userId);
    setImageKey(result.dbResult.image);
    setProfileImageKey(result.dbResult.image);
  };

  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div className="upload-form">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={fileSelected} />
        <button className="file-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadImage;

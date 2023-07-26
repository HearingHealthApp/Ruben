// installing necessary dependencies to set up the routes
const express = require("express");

const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile } = require("../s3");

//setup router for posting an image to the s3 bucket
router.post("/upload", upload.single("image"), async (req, res, next) => {
  try {
    //get the image file from the req body
    const file = req.file;

    const result = await uploadFile(file);

    console.log(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

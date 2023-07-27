// installing necessary dependencies to set up the routes
const express = require("express");

const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, sendImageKey } = require("../s3");

//setup router for posting an image to the s3 bucket
router.post("/upload/:userId", upload.single("image"), async (req, res, next) => {
  try {
    //get the image file from the req body
    const {userId} = req.params
    const file = req.file;

    const result = await uploadFile(file);

   const dbResult = await sendImageKey(result.Key, userId)

    res.status(200).json({result, dbResult})
  } catch (err) {
    next(err);
  }
});



module.exports = router;

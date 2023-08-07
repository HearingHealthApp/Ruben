// installing necessary dependencies to set up the routes
const express = require("express");

const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, sendImageKey, getFileStream } = require("../s3");

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)


//setup router for posting an image to the s3 bucket
router.post("/upload/:userId", upload.single("image"), async (req, res, next) => {
  try {
    //get the image file from the req body
    const {userId} = req.params
    const file = req.file;

    const result = await uploadFile(file);

   const dbResult = await sendImageKey(result.Key, userId)
    res.status(200).json({result, dbResult})
    await unlinkFile(file.path)
  } catch (err) {
    next(err);
  }
});

//get the actual image to display
router.get("/image/:key", (req, res, next) => {
  try {
    const {key} = req.params

    const readStream = getFileStream(key)

    readStream.pipe(res)
  } catch(err) {
    next(err)
  }
})


module.exports = router;

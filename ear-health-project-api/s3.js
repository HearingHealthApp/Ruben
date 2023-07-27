const fs = require('fs')
const S3 = require("aws-sdk/clients/s3")
require('dotenv').config()
const db = require("./db")
const { convertSnakeToCamel } = require("./utils/formatters");

//these values belong to the bucket, they are in quarantine because uploaded to github, will be in a .gitignore
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

//uploading a file to the s3 bucket
const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.name
    }

    return s3.upload(uploadParams).promise()
}



//send the image key to the db
const sendImageKey = async (imageKey, userId) => {
    const updateUserImage = `UPDATE users SET image = $1 WHERE user_id = $2 RETURNING *`;

    const values = [imageKey, userId]

    const result = await db.query(updateUserImage, values)

    return convertSnakeToCamel(result.rows[0])

}

//downloads a file from s3 and sends the image key to the db
const getFileStream = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}


module.exports = {
    uploadFile,
    sendImageKey,
}


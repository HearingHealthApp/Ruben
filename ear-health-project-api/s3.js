const fs = require('fs')
const S3 = require("aws-sdk/clients/s3")

//these values belong to the bucket, they are in quarantine because uploaded to github, will be in a .gitignore
const bucketName = "hearinghealth"
const region = "us-west-1"
const accessKeyId = "AKIAUYZVEIOYC3EBUOS2"
const secretAccessKey = "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"

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


module.exports = {
    uploadFile,

}


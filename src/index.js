var fs = require("fs");
const upload = require("./services/GoogleCloudStorageService");


const fileData = fs.readFileSync('file-exemple.pdf', 'utf8');

const bucketName = process.env.BUCKET_NAME

const isPublic = true

const fileName = 'pdfs/FileExemple.pdf'
upload({fileData, bucketName, fileName, isPublic})
  .then((url)=>console.log(url))

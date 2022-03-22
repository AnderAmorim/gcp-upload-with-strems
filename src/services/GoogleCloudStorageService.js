require('dotenv').config({path:__dirname+'/./../../.env'})
const { Storage } = require('@google-cloud/storage')

module.exports = async function upload ({ fileData, bucketName, fileName, isPublic }) {
  try {
    const storage = new Storage({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    })
    const file = storage.bucket(bucketName).file(fileName)
    await file.save(fileData)
    if (isPublic) await file.acl.add({ entity: 'allUsers', role: storage.acl.READER_ROLE })
    return file.publicUrl()
  } catch (error) {
    console.log(error)
    return null
  }
}



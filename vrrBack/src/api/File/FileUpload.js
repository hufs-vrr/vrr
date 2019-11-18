// import { createWriteStream } from 'fs'
// import * as mkdirp from 'mkdirp'
// import * as shortid from 'shortid'
// import lowdb = require('lowdb')
// import FileSync = require('lowdb/adapters/FileSync')

// const uploadDir = './uploads'
// const db = new lowdb(new FileSync('db.json'))

// Seed an empty DB
// db.defaults({ uploads: [] }).write()

// Ensure upload directory exists
// mkdirp.sync(uploadDir)

// const storeUpload = async ({ stream, filename }): Promise<any> => {
//   const id = shortid.generate()
//   const path = `${uploadDir}/${id}-${filename}`

//   return new Promise((resolve, reject) =>
//     stream
//       .pipe(createWriteStream(path))
//       .on('finish', () => resolve({ id, path }))
//       .on('error', reject),
//   )
// }

// const recordFile = file =>
//   db
//     .get('uploads')
//     .push(file)
//     .last()
//     .write()

const processUpload = async upload => {
  const { createReadStream, filename, mimetype, encoding } = await upload
  const stream = createReadStream()
  console.log(stream)
//   const { id, path } = await storeUpload({ stream, filename })
  return true
  return recordFile({ id, filename, mimetype, encoding, path })
}


export default {
    // Query: {
    //   uploads: () => db.get('uploads').value(),
    // },
    Mutation: {
      UploadFile: (obj, { file }) => processUpload(file),
      multipleUpload: (obj, { files }) => Promise.all(files.map(processUpload)),
    },
}
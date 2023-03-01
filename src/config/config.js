// import React, { useState } from 'react';
// import { Storage } from '@google-cloud/storage';

// const storage = new Storage({
//   projectId: 'your-project-id',
//   keyFilename: 'path/to/your/keyfile.json',
// });

// const UploadImage = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleImageUpload = async () => {
//     const fileName = image.name;
//     const bucketName = 'your-bucket-name';

//     const bucket = storage.bucket(bucketName);
//     const blob = bucket.file(fileName);

//     const blobWriter = blob.createWriteStream({
//       resumable: false,
//     });

//     blobWriter.on('error', (err) => {
//       console.error(err);
//     });

//     blobWriter.on('finish', () => {
//       console.log(`File ${fileName} uploaded.`);
//     });

//     blobWriter.end(image);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handleImageUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default UploadImage;

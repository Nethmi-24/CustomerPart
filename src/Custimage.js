import { useState } from 'react';
import { storage } from './Custfirebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import './CusFormStyle.css'
function Image() {
  const [imageUpload, setImageUpload] = useState(null)

  const uploadImage = async () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}${v4()}`);
    try {
      await uploadBytes(imageRef, imageUpload);
      alert("Image uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
        <div>
        <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
        <button onClick={uploadImage}>Upload Image</button>
        </div>
     
    </div>
    

  );
}

export default Image;

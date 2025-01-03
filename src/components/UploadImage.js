
import React, { useState } from 'react';

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    onUpload(file);
  };

  return (
    <div className="upload-container">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <p>{image.name}</p>}
    </div>
  );
};

export default UploadImage;

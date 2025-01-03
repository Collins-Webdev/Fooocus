
import React, { useState } from 'react';
import UploadImage from './components/UploadImage';
import ImageProcessing from './components/ImageProcessing';
import DownloadButton from './components/DownloadButton';

const App = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleUpload = (file) => {
    setImage(file);
  };

  const handleProcessingComplete = (processedImageUrl) => {
    setProcessedImage(processedImageUrl);
  };

  return (
    <div className="app-container">
      <h1>Application de Traitement d'Images</h1>
      <UploadImage onUpload={handleUpload} />
      <ImageProcessing image={image} onProcessingComplete={handleProcessingComplete} />
      <DownloadButton processedImage={processedImage} />
    </div>
  );
};

export default App;

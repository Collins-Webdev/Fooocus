
import React from 'react';

const DownloadButton = ({ processedImage }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'processed_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-container">
      {processedImage && <button onClick={handleDownload}>Télécharger l'image traitée</button>}
    </div>
  );
};

export default DownloadButton;

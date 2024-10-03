import React, { useRef, useState } from 'react';

const VideoToJPG = ({ videoSource, captureTime = 1 }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (video && video.videoWidth > 0 && video.videoHeight > 0) {
      // Maintain aspect ratio
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const image = canvas.toDataURL('image/jpeg');
      setImageSrc(image);
    }
  };

  const handleLoadedMetadata = () => {
    videoRef.current.currentTime = captureTime;
  };

  const handleSeeked = () => {
    captureFrame();
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={videoSource}
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
        style={{ display: 'none' }}
      />

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {imageSrc && (
        <img src={imageSrc} alt="Extracted Thumbnail" className="video-thumbnail" />
      )}
    </div>
  );
};

export default VideoToJPG;

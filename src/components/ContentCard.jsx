import React, { useRef, useState } from 'react';
import "./ContentCard.css"; // Make sure your CSS file is correctly set up
import VideoToJPG from "../VideoToJPG.jsx";
import { useTranslation } from 'react-i18next';
import placeholder from '../assets/S_Logo_White.svg';
import { media1, media2, media3, media4, media5, media6 } from '../assets/media';
import { FaPlayCircle } from 'react-icons/fa';

const mediaArray = [media1, media2, media3, media4, media5, media6];

function ContentCard({ id, className = 'contentcard', href, noButton, noTitle, noDescription }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const titleKey = `CardTitle${id}`;
  const descKey = `CardDesc${id}`;
  const buttonKey = `CardButton${id}`;

  const media = mediaArray[id - 1];
  const isVideo = media && media.endsWith('.mp4');

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsHovered(false);
  };

  return (
    <div 
      className={className} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        width: '100%', 
        maxWidth: '18rem', 
        margin: '0 auto', 
        position: 'relative', 
        cursor: 'pointer' 
      }} 
    >
      {isVideo ? (
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <video
            ref={videoRef}
            src={media}
            loop
            // muted
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
          <FaPlayCircle 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '3rem',
              color: 'rgba(255, 255, 255, 0.8)',
              pointerEvents: 'none',
              opacity: isHovered ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          />
          <div 
             style={{ 
              position: 'absolute', 
              top: '63%', 
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: isHovered ? 0 : 1, // Change opacity based on hover state
              transition: 'opacity 0.3s ease',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Background color
              padding: '0.5rem 0.5rem', // Padding
              borderRadius: '10px', // Optional rounded corners
              backdropFilter: 'blur(3px)',
              boxShadow: '0 0 15px rgba(0, 0, 0, 1)', // Shadow for blurred edges
            }}
          >
            <p style={{ textAlign: 'center', margin: 0}}>
              Hover to play with sound
            </p>
          </div>
        </div>
      ) : (
        <img 
          src={media || placeholder} 
          alt={`Media for card ${id}`} 
          style={{ width: '100%', height: 'auto' }} 
        />
      )}
      {!(noTitle && noDescription) && (
        <div style={{ padding: '1rem' }}>
          {!noTitle && (
            <h5>{t(titleKey)}</h5>
          )}
          {!noDescription && (
            <p>
              {t(descKey).split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
            </p>
          )}
          {!noButton && (
            <a 
              className='cardButton'
              href={href} 
              target="_blank" 
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                marginTop: '1rem',
                transition: 'background-color 0.3s ease', // Smooth transition for background color
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'green'} // Change color on hover
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'} // Reset color
            >
              {t(buttonKey)}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ContentCard;

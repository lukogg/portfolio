import React, { useRef } from 'react';
import "./ContentCard.css";
import VideoToJPG from "../VideoToJPG.jsx";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import placeholder from '../assets/S_Logo_White.svg';
import { media1, media2, media3, media4, media5, media6 } from '../assets/media';

const mediaArray = [media1, media2, media3, media4, media5, media6];

function ContentCard({ id, className = 'contentcard', href, noButton }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  const titleKey = `CardTitle${id}`;
  const descKey = `CardDesc${id}`;
  const buttonKey = `CardButton${id}`;

  const media = mediaArray[id - 1];
  
  const isVideo = media && media.endsWith('.mp4');

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Card 
      className={className} 
      style={{ width: '18rem' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVideo ? (
        <>
          <video
            ref={videoRef}
            src={media}
            style={{ display: 'none' }}
            onLoadedMetadata={() => {

              videoRef.current.currentTime = 0;
            }}
          />
          <VideoToJPG videoSource={media} />
        </>
      ) : (
        <Card.Img variant="top" src={media || placeholder} alt={`Media for card ${id}`} />
      )}

      <Card.Body>
        <Card.Title>{t(titleKey)}</Card.Title>
        <Card.Text>
          {t(descKey).split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </Card.Text>
        {noButton ? null : (
        <Button href={href} target="_blank" variant="primary" style={{textAlign: 'center', margin: 'auto', display: 'block'}}>
          {t(buttonKey)}
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ContentCard;

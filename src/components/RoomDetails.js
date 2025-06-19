import Layout from './Layout';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/rooms';
import './RoomDetails.css'; // Make sure this path is correct

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return <h2 style={{ padding: '2rem' }}>Room not found.</h2>;
  }

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % room.images.length);
  };

  return (
    <Layout>
    <div className="room-container">
      <h1 className="room-title">{room.name}</h1>

      <div className="image-slider">
        {Array.isArray(room.images) && room.images.length > 0 ? (
          <>
            <img src={room.images[imageIndex]} alt={room.name} />
            <button className="slider-button" onClick={nextImage}>
              &gt;
            </button>
          </>
        ) : (
          <p>No images available.</p>
        )}
      </div>

      <div className="details-section">
        <h2 className="details-title">Details</h2>
        <ul className="details-list">
          {room.details.map((d, i) => (
            <li key={i}>
              <img src={d.icon} alt="" />
              {d.text}
            </li>
          ))}
        </ul>
      </div>

      {room.tabs.map((tab, i) => (
        <div className="tab-section" key={i}>
          <h3 className="tab-title">{tab.title}</h3>
          <div className="tab-content">
            {Array.isArray(tab.content) ? (
              <ul>
                {tab.content.map((item, j) => (
                  <li key={j}>
                    <img src={item.icon} alt="" />
                    {item.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{tab.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/rooms'; 
export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  if (!room) return <h2 style={{ padding: "2rem" }}>Room not found.</h2>;

  return (
    <div style={{ padding: "2rem", fontFamily: "serif" }}>
      <h1>{room.name}</h1>
      <img
        src={room.image}
        alt={room.name}
        style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
      />

      <h2>Details</h2>
      <ul>
        {room.details.map((d, i) => (
          <li key={i}>
            <img src={d.icon} alt="" style={{ width: 20, marginRight: 10 }} />
            {d.text}
          </li>
        ))}
      </ul>

      {room.tabs.map((tab, i) => (
        <div key={i}>
          <h3>{tab.title}</h3>
          {Array.isArray(tab.content) ? (
            <ul>
              {tab.content.map((item, j) => (
                <li key={j}>
                  <img src={item.icon} alt="" style={{ width: 20, marginRight: 10 }} />
                  {item.text}
                </li>
              ))}
            </ul>
          ) : (
            <p>{tab.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

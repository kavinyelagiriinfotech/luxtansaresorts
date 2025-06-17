// import React from 'react';
// import { useParams } from 'react-router-dom';
// import rooms from '../data/rooms'; 
// export default function RoomDetails() {
//   const { id } = useParams();
//   const room = rooms.find(r => r.id === parseInt(id));

//   if (!room) return <h2 style={{ padding: "2rem" }}>Room not found.</h2>;

//   return (
//     <div style={{ padding: "2rem", fontFamily: "serif" }}>
//       <h1>{room.name}</h1>
//       <img
//         src={room.image}
//         alt={room.name}
//         style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
//       />

//       <h2>Details</h2>
//       <ul>
//         {room.details.map((d, i) => (
//           <li key={i}>
//             <img src={d.icon} alt="" style={{ width: 20, marginRight: 10 }} />
//             {d.text}
//           </li>
//         ))}
//       </ul>

//       {room.tabs.map((tab, i) => (
//         <div key={i}>
//           <h3>{tab.title}</h3>
//           {Array.isArray(tab.content) ? (
//             <ul>
//               {tab.content.map((item, j) => (
//                 <li key={j}>
//                   <img src={item.icon} alt="" style={{ width: 20, marginRight: 10 }} />
//                   {item.text}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>{tab.content}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import rooms from '../data/rooms';

// export default function RoomDetails() {
//   const { id } = useParams();
//   const room = rooms.find(r => r.id === parseInt(id));
//   const [imageIndex, setImageIndex] = useState(0);

//   if (!room) return <h2 style={{ padding: "2rem" }}>Room not found.</h2>;

//   const nextImage = () => {
//     setImageIndex((prev) => (prev + 1) % room.images.length);
//   };

//   return (
//     <div style={{ padding: "2rem", fontFamily: "serif" }}>
//       <h1>{room.name}</h1>

//      <div style={{ position: "relative", maxWidth: "100%", maxHeight: 400 }}>
//   {Array.isArray(room.images) && room.images.length > 0 ? (
//     <>
//       <img
//         src={room.images[imageIndex]}
//         alt={room.name}
//         style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: "10px" }}
//       />
//       <button
//         onClick={nextImage}
//         style={{
//           position: "absolute",
//           right: 10,
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "rgba(0,0,0,0.6)",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: 35,
//           height: 35,
//           cursor: "pointer",
//           fontSize: 18
//         }}
//       >
//         &gt;
//       </button>
//     </>
//   ) : (
//     <p>No images available.</p>
//   )}
// </div>


//       <h2 style={{color:"#962E3F"}}>Details</h2>
//       <ul>
//         {room.details.map((d, i) => (
//           <li key={i}>
//             <img src={d.icon} alt="" style={{ width: 20, marginRight: 10 }} />
//             {d.text}
//           </li>
//         ))}
//       </ul>

//       {room.tabs.map((tab, i) => (
//         <div key={i}>
//           <h3>{tab.title}</h3>
//           {Array.isArray(tab.content) ? (
//             <ul>
//               {tab.content.map((item, j) => (
//                 <li key={j}>
//                   <img src={item.icon} alt="" style={{ width: 20, marginRight: 10 }} />
//                   {item.text}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>{tab.content}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/rooms';
import './RoomDetails.css'; // Make sure this path is correct

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));
  const [imageIndex, setImageIndex] = useState(0);

  if (!room) {
    return <h2 style={{ padding: '2rem' }}>Room not found.</h2>;
  }

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % room.images.length);
  };

  return (
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
  );
}

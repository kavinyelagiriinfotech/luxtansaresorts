import React from 'react';

const RoomCard = ({ room, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} my-10 items-center`}>
      <div className="md:w-1/2 w-full">
        <img src={room.image} alt={room.title} className="w-full rounded-xl shadow-lg" />
      </div>
      <div className="md:w-1/2 w-full px-6 mt-6 md:mt-0">
        <h2 className="text-3xl font-semibold mb-4">{room.title}</h2>
        <p className="mb-1"><strong>Size:</strong> {room.size}</p>
        <p className="mb-1"><strong>Capacity:</strong> {room.capacity}</p>
        <p className="mb-1"><strong>Bed:</strong> {room.bed}</p>
        <p className="mb-4"><strong>View:</strong> {room.view}</p>

        <h3 className="text-lg font-medium mb-2">Facilities</h3>
        <ul className="list-disc list-inside text-gray-700">
          {room.facilities.map((facility, i) => (
            <li key={i}>{facility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;

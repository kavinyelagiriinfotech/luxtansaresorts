import React from 'react';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';

import roomsImage from '../assets/roomImg1.png';
import spaImage from '../assets/spa2.jpg';
import diningImage from '../assets/dining2.jpg';
import adventureImage from '../assets/adventure.jpg';
import cultureImage from '../assets/local-culture.jpg';
import accommodationImage from '../assets/accommodation.jpg';
import recreationImage from '../assets/recreation.jpg';
import entertainmentImage from '../assets/entertainment.jpg';
import relaxationImage from '../assets/relax.jpg';
import specializedImage from '../assets/specialized.jpg';

const services = [
  {
    title: 'Rooms & Suites',
    description:
      'Experience luxurious comfort in our elegantly designed rooms and suites, offering modern amenities and breathtaking views for a perfect getaway.',
    image: roomsImage,
    link: '/rooms-and-suites',
  },
  {
    title: 'Waterfall Garden Spa',
    description:
      'Relax and rejuvenate at our serene Waterfall Garden Spa, where nature meets luxury. Enjoy a range of wellness treatments in a peaceful garden setting.',
    image: spaImage,
    link: '/services#spa',
  },
  {
    title: 'Dining at Luxtansa',
    description:
      'Indulge your taste buds with a culinary journey at Dining at Luxtansa. Our gourmet restaurant serves a fusion of international and local cuisines.',
    image: diningImage,
    link: '/services#dining',
  },
  {
    title: 'Adventure & Relax',
    description:
      'From thrilling outdoor adventures to peaceful retreats, we offer something for everyone. Explore nature trails, yoga sessions, and more.',
    image: adventureImage,
    link: '/services#adventure',
  },
  {
    title: 'Local Culture',
    description:
      'Immerse yourself in the vibrant local culture through traditional performances, craft workshops, and cuisine tours.',
    image: cultureImage,
    link: '/services#culture',
  },
  {
    title: 'Accommodation',
    description:
      'Our resort offers a range of lodging options from cozy hotel rooms to luxury villas and suites for every kind of traveler.',
    image: accommodationImage,
    link: '/services#accommodation',
  },
  {
    title: 'Recreation',
    description:
      'Dive into fun with access to swimming pools, fitness centers, sports courts, and exciting water activities.',
    image: recreationImage,
    link: '/services#recreation',
  },
  {
    title: 'Entertainment',
    description:
      'Enjoy live music, cultural performances, games, and evening shows right inside the resort.',
    image: entertainmentImage,
    link: '/services#entertainment',
  },
  {
    title: 'Relaxation',
    description:
      'Unwind with a range of spa services, massages, and wellness therapies designed to relax your body and mind.',
    image: relaxationImage,
    link: '/services#relaxation',
  },
  {
    title: 'Specialized Activities',
    description:
      'Our resort includes themed activities like golfing, skiing, and scuba diving based on the season and location.',
    image: specializedImage,
    link: '/services#specialized',
  },
];

function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>

      {services.map((service, index) => (
        <section
          className={`service-section ${index % 2 === 0 ? 'row-reverse' : ''}`}
          key={index}
        >
          <div className="service-image-wrapper">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button
              className="details-button"
              onClick={() => navigate(service.link)}
            >
              More Details →
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ServicesPage;

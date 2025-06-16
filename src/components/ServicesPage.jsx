import React from 'react';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>

      <section className="service-section">
        <h2>Rooms & Suites</h2>
        <p>
          Experience luxurious comfort in our elegantly designed rooms and suites, offering modern amenities and breathtaking views for a perfect getaway.
        </p>
      </section>

      <section className="service-section">
        <h2>Waterfall Garden Spa</h2>
        <p>
          Relax and rejuvenate at our serene Waterfall Garden Spa, where nature meets luxury. Enjoy a range of wellness treatments in a peaceful garden setting.
        </p>
      </section>

      <section className="service-section">
        <h2>Dining at Luxtansa</h2>
        <p>
          Indulge your taste buds with a culinary journey at Dining at Luxtansa. Our gourmet restaurant serves a fusion of international and local cuisines.
        </p>
      </section>

      <section className="service-section">
        <h2>Adventure & Relax</h2>
        <p>
          From thrilling outdoor adventures to peaceful retreats, we offer something for everyone. Explore nature trails, yoga sessions, and much more.
        </p>
      </section>

      <section className="service-section">
        <h2>Local Culture</h2>
        <p>
          Immerse yourself in the vibrant local culture through curated experiences, including traditional performances, craft workshops, and local cuisine tours.
        </p>
      </section>
    </div>
  );
}

export default ServicesPage;

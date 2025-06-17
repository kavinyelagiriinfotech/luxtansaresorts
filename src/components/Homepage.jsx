import React from 'react';
import './Homepage.css'; 
import imagesData from '../images.json'
import poolImage from '../assets/regImage.png'
import roomImage from '../assets/roomImg1.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import rooms from '../rooms.json'; 
import { imageMap } from '../components/imageMap';
import services from '../data/servicesData.json';
import { serviceImageMap } from './serviceImageMap';
import experiencesData from "../data/experiences.json";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';  
import Layout from './Layout';  


const Homepage = () => {
    // Home page
    const [homecurrentIndex, sethomeCurrentIndex] = useState(0);

    useEffect( () => {
        const interval = setInterval( () => {
            sethomeCurrentIndex( (prev) => (prev + 1) % imagesData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const backgroundImage = {
        backgroundImage: `url(${imagesData[homecurrentIndex].src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        transition: 'background-image 1s ease-in-out'
    };


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    //Explore section
    const [showDetails, setShowDetails] = useState({
        rooms: false,
        resort: false,
    });

    const navigate = useNavigate();

    const toggleDetails = (section) => {
        setShowDetails((prev) => ({
        ...prev,
        [section]: !prev[section],
        }));
    };

    // Carousel Page
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevImage = () => {
    //     setCurrentIndex((prevIndex) =>
    //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    // const nextImage = () => {
    //     setCurrentIndex((prevIndex) =>
    //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    // Rooms & suites page
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount());

    function getVisibleCount() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1200) return 2;
        return 3;
    }

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getVisibleCount());
    };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
    };

    const visibleRooms = [];
        for (let i = 0; i < visibleCount; i++) {
            visibleRooms.push(rooms[(index + i) % rooms.length]);
    }
    
    return ( 
        <Layout>   
        <div>
            <div className='background-image' style={backgroundImage}> 
                <div className="overlay"></div> 

                <div className='main-content'>
                    <h1 className='welcome-heading'> Welcome to Luxtansa Resorts</h1>
                    <p> Luxtansa is a wellness resort</p>
                </div>
                
                <div className="booking-form">
                    <div className="form-group">
                        <label htmlFor="checkin">Check-in</label>
                        <input type="date" id="checkin" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="checkout">Check-out</label>
                        <input type="date" id="checkout" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="totalrooms">No. of Rooms</label>
                        <input type="number" id="tatalrooms" placeholder="No. of Rooms" min="1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="adults">Adults</label>
                        <input type="number" id="adults" placeholder="Adults" min="1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="children">Children</label>
                        <input type="number" id="children" placeholder="Children" min="0" />
                    </div>

                    <Link to="/booking" className="book-button" onClick={toggleSidebar}>
                        Book Now
                    </Link>
                </div>
            </div>

            {/* Explore section */}
            <div className="explore-container">
                <h1 className="explore-title">Explore Luxtansa...!</h1>
                <p className="explore-subtitle">
                    Luxtansa provides an exceptional wellness retreat for those who want to have deep connection with nature
                </p>

                <div className="explore-cards">
                    <div className="explore-card">
                    <img src={roomImage} alt="Rooms" className="explore-img" />
                    <h3>Rooms & Suites</h3>
                    {showDetails.rooms && (
                        <p className="explore-details">
                        Discover our range of luxurious rooms and suites tailored for relaxation and comfort, featuring modern amenities and scenic views.
                        </p>
                    )}
                    <button onClick={() => toggleDetails('rooms')}>
                        {showDetails.rooms ? 'Less Details' : 'More Details'}
                    </button>
                        {showDetails.rooms && (
                            <button className="navigate-btn" onClick={() => navigate('/services#rooms')}>
                            Go to Rooms & Suites
                            </button>
                        )}
                    </div>
                    <div className="explore-card">
                    <img src={poolImage} alt="Resort" className="explore-img" />
                    <h3>Resort Facilities</h3>
                    {showDetails.resort && (
                        <p className="explore-details">
                        From our spa and wellness services to the elegant dining and adventure activities, explore what makes Luxtansa a complete destination.
                        </p>
                    )}
                    <button onClick={() => toggleDetails('resort')}>
                        {showDetails.resort ? 'Less Details' : 'More Details'}
                    </button>
                    {showDetails.resort && (
                        <button className="navigate-btn" onClick={() => navigate('/services')}>
                        Explore Services
                        </button>
                    )}
                    </div>
                </div>
            </div>

            {/* Carousel section */}
            {/* <section className="third-section"> 
                <div className="carousel">
                    <button className="nav-button left" onClick={prevImage}>
                        &#60;
                    </button>

                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="carousel-image"
                    />

                    <button className="nav-button right" onClick={nextImage}>
                        &#62;
                    </button>
                </div>
            </section>  */}

            {/* Rooms & Suits section */}
            <section className="homepage-room-section">
                <h2 className="homepage-room-title">Rooms & Suits</h2>
                <p className="homepage-room-subtitle"> Relaxation sounded by nature</p>
                <div className="homepage-room-carousel">
                <button className="homepage-arrow-button left" onClick={handlePrev}>&larr;</button>
                
                <div className="homepage-room-cards">
                    {visibleRooms.map((room, i) => (
                    <Link to={`/rooms/${room.id}`} key={i} className="homepage-room-card-link">
                        <div className="homepage-room-card">
                        <img src={imageMap[room.image]} alt={room.title} />
                        <h3>{room.title}</h3>
                        <p><strong>Price:</strong> ${room.price}</p>
                        <p><strong>Bed:</strong> {room.bed}</p>
                        <p><strong>People:</strong> {room.people}</p>
                        </div>
                    </Link>
                    ))}
                </div>
        
                <button className="homepage-arrow-button right" onClick={handleNext}>&rarr;</button>
                </div>
            </section>

            {/* Service section  */}

            <div className="homepage-service-wrapper">
                <h2 className="homepage-service-title">Our Services</h2>
                <p className="homepage-service-subtitle"> Lorem ipsum dolor sit.</p>
                {services.map((service, i) => {
                    const isEven = i % 2 === 1;

                    return (
                    <div key={service.id} className={`homepage-service-block ${isEven ? 'reverse' : ''}`}>
                        <div className="homepage-service-images">
                        <img
                            src={serviceImageMap[service.images[0]]}
                            alt={`${service.title} main`}
                            className="homepage-image-main"
                        />
                        <img
                            src={serviceImageMap[service.images[1]]}
                            alt={`${service.title} sub`}
                            className="homepage-image-sub"
                        />
                        </div>
                        <div className="homepage-service-content">
                        <p className="homepage-service-tagline">{service.tagline.toUpperCase()}</p>
                        <h2 className="homepage-service-title">{service.title}</h2>
                        <p className="homepage-service-description">{service.description}</p>
                        <ul>
                            {service.features.map((f, indx) => (
                            <li key={indx}>{f}</li>
                            ))}
                        </ul>
                        <Link to="/services" onClick={toggleSidebar}>
                            <button className="homepage-service-button">{service.button}</button>
                        </Link>
                        </div>
                    </div>
                    );
                })}
                </div>

            {/* Experience section */}
            <section className="experience-section">
                <div className="experience-header">
                    <p className="experience-subtitle">RELAX TO THE SOUND OF THE WATERFALL</p>
                    <h2 className="experience-title">Live unforgettable moments</h2>
                    <p className="experience-description">
                        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
                <div className="experience-cards">
                    {experiencesData.map((item, index) => (
                        <Link to="/services" onClick={toggleSidebar}>
                            <div className="experience-card" key={index}>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <Link to="/services" onClick={toggleSidebar}>
                    <button className="experience-button">Explore All Experiences</button>
                </Link>
            </section>
        </div>
        </Layout>
  );
};

export default Homepage;

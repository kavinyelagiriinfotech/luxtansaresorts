import './Roomsandsuits.css';
import { useNavigate } from 'react-router-dom';
import React from "react";
import rooms from '../data/rooms';
import beachfront from '../images/beachfront-bungalow.jpg';
import deluxe from "../images/deluxe-suite.jpg";
import garden from "../images/garden-villa.jpg";
// import luxury from "./images/Luxury-double.jpg";
import mountain from "../images/mountain-cabin.jpg";
import premium from "../images/premium-double.jpg";
import skyline from "../images/skyline-penthouse.jpg";
import group from "../images/group.png";
import bed from "../images/bedicon.png";
import logo from "../images/luxtansaBgRemoved.png";
import tv from "../images/tv.png";
import coffee from "../images/coffee.png";
import bar from "../images/bar.png";
import speaker from "../images/speaker.png";
import hilltop from "../images/hilltop.png";
// import twin from "./images/twin.png";
import sun from "../images/sunrise.png";
import wifi from "../images/wifi.png";
import swim from "../images/swim.png";
import ac from "../images/ac.png";
import luxury1 from "../images/luxury1.png";
import luxury2 from "../images/luxury2.png";
import luxury3 from "../images/luxury3.png";
import deluxe1 from "../images/deluxe1.png";
import deluxe2 from "../images/deluxe2.png";
import deluxe3 from "../images/deluxe3.png";
import mount1 from "../images/mount1.png";
import mount2 from "../images/mount2.png";
import mount3 from "../images/mount3.png";
import premium1 from "../images/premium1.png";
import premium2 from "../images/premium2.png";
import premium3 from "../images/premium3.png";
import skyline1 from "../images/skyline1.png";
import skyline2 from "../images/skyline2.png";
import skyline3 from "../images/skyline3.png";
import garden1 from "../images/garden1.png";
import garden2 from "../images/garden2.png";
import garden3 from "../images/garden3.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Layout from './Layout';

export default function Roomsandsuits() {

  const rooms = [
    {
      id: 1,
      name: "Luxury Doubleee",
      image: beachfront,
       thumbnails: [luxury1, luxury2, luxury3],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows, Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        }
      ]

    },
    {
      id: 2,
      name: "Deluxe Suite",
      image: deluxe,
       thumbnails: [deluxe1, deluxe2, deluxe3],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows, Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        }
      ]

    },
    {
      id: 3,
      name: "Mount Cabin",
      image: mountain,
       thumbnails: [mount1, mount2, mount3],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows, Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        }
      ]

    },
    {
      id: 4,
      name: "Premium Double",
      image: premium,
       thumbnails: [premium1, premium2, premium3],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows, Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        }
      ]

    },
    {
      id: 5,
      name: "Skyline Penthouse",
      image: skyline,
       thumbnails: [skyline1, skyline2, skyline3],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows,Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }  
          ]
        }
      ]  
    
    },
    {
      id: 6,
      name: "HillTop",
      image: hilltop,
       thumbnails: ["thumb1.jpg", "thumb2.jpg", "thumb3.jpg"],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows, Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        }
      ]

    },
    {
      id: 7,
      name: "Garden Villa",
      image: garden,
       thumbnails: [garden1, garden2, garden3],
      details: [
        { icon: group, text: "1,500 sq ft / 80 sq m" },
        { icon: group, text: "2 persons" },
        { icon: bed, text: "1 King Size Bed" },
        { icon: sun, text: "Hills view" }
      ],
      tabs: [
        {
          title: "DESCRIPTION",
          content: [
            { icon: bed, text: "King Size Bed" },
            { icon: swim, text: "Private Swimming Pool" },
            { icon: wifi, text: "High-speed Wifi" },
            { icon: ac, text: "Air conditioning" }
          ]
        },
        {
          title: "KEY FACTS",
          content:
            "Offers stunning hills view through large panoramic windows, Designed with elegant interiors and modern furnishings for a premium experience."
        },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        }
      ]

    }
   
  ]

  //  const [activeTab, setActiveTab] = useState('DESCRIPTION');
const navigate = useNavigate();
   const [selectedImages, setSelectedImages] = useState(
    rooms.map((room) => room.image)
  );

  //  const [expandedRooms, setExpandedRooms] = useState(
  //   Array(rooms.length).fill(false)
  // );

  const handleThumbnailClick = (roomIndex, imageUrl) => {
    const updatedImages = [...selectedImages];
    updatedImages[roomIndex] = imageUrl;
    setSelectedImages(updatedImages);
  };

  // const toggleDetails = (index) => {
  //   const updated = [...expandedRooms];
  //   updated[index] = !updated[index];
  //   setExpandedRooms(updated);
  // };


  return (
    <Layout>
    <div className='page-background'>


      {/* <div className="mobile-resp" style={{ display: 'flex', gap: 30, alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>

        <div>
          <img src={logo} alt='person' style={{ height: "50px" }} />
        </div>

        <div className="mobile-resp" style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }} >

          <button style={{
            backgroundColor: '#962E3F',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}>
            Rooms&Suites
          </button>


          <button style={{
            backgroundColor: '#962E3F',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Spa
          </button>

          <button style={{
            backgroundColor: '#962E3F',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Restaurant
          </button>

          <button style={{
            backgroundColor: '#962E3F',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Contact
          </button>
        </div>
      </div> */}

      <div style={{ textAlign: "center", fontFamily: "serif" }}>
        <br />
        <br />
        <br />
        <br />
        <h1>Staying at Laxtansa</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="mobile-resp" style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        padding: '20px'
      }}>
        <div>
          <label>Check in<br />
            <input type="date" />
          </label>
        </div>

        <div>
          <label>Check out<br />
            <input type="date" />
          </label>
        </div>

        <div>
          <label>Adults<br />
            <select>
              {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}> {n} </option>)}
            </select>
          </label>
        </div>

        <div>
          <label>Children<br />
            <select>
              {[0, 1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
        </div>

        <button style={{
          backgroundColor: '#962E3F',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          BOOK NOW
        </button>
      </div>

      <div style={{ textAlign: "center", backgroundColor: "white", opacity: "0.6" }}>
        <br />
        <p>Welcome to Luxtansa</p>
      </div>

      <div style={{ textAlign: "center", backgroundColor: "white" }}>
        <br />
        <br />
        <br />
        <h1>Enjoy local fare, artisanal cocktails, and farm fresh <br />produce when you dine with us.</h1>
        <br />
        <br />
      </div>

      


        {/* <div className="room-container">
        {rooms.map((room, index) => (
          <div key={room.id} className={`room-card room-${index + 1}`}>
            <div className="room-content">
              <div className="room-image">
                <img
                  src={selectedImages[index]}
                  alt={room.name}
                  className="main-image"
                />
                <div className="thumbnail-row">
                  {room.thumbnails?.map((thumb, i) => (
                    <img
                      key={i}
                      src={thumb}
                      alt={`Thumbnail ${i + 1}`}
                      className="thumbnail"
                      onClick={() => handleThumbnailClick(index, thumb)}
                    />
                  ))}
                </div>
              </div>

              <div className="room-text">
                <h2>{room.name}</h2>

                {!expandedRooms[index] && (
                  <ul className="room-info">
                    {room.details.map((detail, i) => (
                      <li key={i}>
                        <img src={detail.icon} alt="icon" />
                        {detail.text}
                      </li>
                    ))}
                  </ul>
                )}

                {expandedRooms[index] && (
                  <div className="room-sections">
                    {room.tabs.map((tab, tabIndex) => (
                      <div key={tabIndex}>
                        <h4 className="section-title">{tab.title}</h4>
                        {Array.isArray(tab.content) ? (
                          <ul>
                            {tab.content.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <img src={item.icon} alt="icon" />
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
                )}

                <div className="button-group">
                  <button className="book-now">BOOK NOW</button>
                  <button
                    className="more-details"
                    onClick={() => toggleDetails(index)}
                  >
                    {expandedRooms[index] ? "LESS DETAILS" : "MORE DETAILS"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="room-container">
      {rooms.map((room, index) => (
        <div key={room.id} className={`room-card room-${index + 1}`}>
          <div className="room-content">
            <div className="room-image">
              <img
                src={selectedImages[index]}
                alt={room.name}
                className="main-image"
              />
              <div className="thumbnail-row">
                {room.thumbnails?.map((thumb, i) => (
                  <img
                    key={i}
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    className="thumbnail"
                    onClick={() => handleThumbnailClick(index, thumb)}
                  />
                ))}
              </div>
            </div>
            <div className="room-text">
              <h2>{room.name}</h2>
              <ul className="room-info">
                {room.details.map((detail, i) => (
                  <li key={i}>
                    <img src={detail.icon} alt="icon" />
                    {detail.text}
                  </li>
                ))}
              </ul>
              <div className="room-sections">
                {room.tabs.map((tab, tabIndex) => (
                  <div key={tabIndex}>
                    <h4 className="section-title">{tab.title}</h4>
                    {Array.isArray(tab.content) ? (
                      <ul>
                        {tab.content.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <img src={item.icon} alt="icon" />
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
              <div className="button-group">
                <button className="book-now">BOOK NOW</button>
                <button
  className="more-details"
  onClick={() => navigate(`/rooms/${room.id}`)}
>
  MORE DETAILS
</button>


              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  
{/* Newsletter Section */}
            {/* <section className="newsletter-section">
                <div className="quote-container">
                <p className="quote-text">
                “Travel opens your heart, broadens your mind and fills your life with stories to tell.”
                </p>
                <div className="quote-author">
                <span className="quote-line" /> Paula Bendfeldt
                </div>
                </div>
                <div className="newsletter-content">
                    <h2>Receive News and Special Offers</h2>
                    <p>Sign up to our newsletter to lorem ipsum dolor sit amet!</p>
                    <form className="newsletter-form">
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Your email" />
                    <button type="submit">Subscribe</button>
                    </form>
                </div>
                
            </section> */}
            {/* Footer section*/}
            {/* <footer className="footer-section">
                <div className="footer-content">
                    <div className="footer-left">
                    <div className="footer-block">
                        <h4>ADDRESS</h4>
                        <p>Luxtansa Resorts<br />#city, #State<br />
                        <span className="footer-link">#locationlink</span>
                        </p>
                    </div>
                    <div className="footer-block">
                        <h4>CONTACT</h4>
                        <p>+91-98765-43210 <br />
                        <a href="mailto:reservations@luxtansareosort.com">reservations@luxtansareosort.com</a>
                        </p>
                    </div>
                    <div className="footer-block">
                        <h4>FOLLOW US</h4>
                        <div className="footer-socials">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        </div>
                    </div>
                    </div>
                    <div className="footer-right">
                    <div className="footer-links">
                        <a href="#rooms">Rooms & Suites</a>
                        <a href="#services">Services</a>
                        <a href="#restaurant">Restaurant</a>
                        <a href="#activities">Activities</a>
                        <a href="#events">Events</a>
                        <a href="#about">About us</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-links">
                        <a href="#newsletter">Newsletter</a>
                        <a href="#press">Press</a>
                        <a href="#careers">Careers</a>
                        <a href="#sanitarymeasures">Sanitary Measures</a>
                        <a href="#legalnotice">Legal Notice</a>
                        <a href="#privacypolicy">Privacy Policy</a>
                        <a href="#cookiespolicy">Cookies Policy</a>
                    </div>
                    </div>
                </div>
            </footer> */}


      </div>
      </Layout>
 );
}

// export default Roomsandsuits;
   
 
// Only imports needed to define the room objects

// import rooms from '../data/rooms';
import beachfront from '../images/beachfront-bungalow.jpg';
import deluxe from "../images/deluxe-suite.jpg";
import garden from "../images/garden-villa.jpg";
import mountain from "../images/mountain-cabin.jpg";
import premium from "../images/premium-double.jpg";
import skyline from "../images/skyline-penthouse.jpg";
import hilltop from "../images/hilltop.png";

import group from "../images/group.png";
import bed from "../images/bedicon.png";
import sun from "../images/sunrise.png";
import wifi from "../images/wifi.png";
import swim from "../images/swim.png";
import ac from "../images/ac.png";
import tv from "../images/tv.png";
import coffee from "../images/coffee.png";
import bar from "../images/bar.png";
import speaker from "../images/speaker.png";

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

// Define room array (copy-paste your existing array from inside Roomsandsuits)
const rooms = [
  {
    id: 1,
    name: "Luxury Double",
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

];

// Export only the rooms array
export default rooms;

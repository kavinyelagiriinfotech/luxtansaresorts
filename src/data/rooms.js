// Only imports needed to define the room objects

// import rooms from '../data/rooms';
import beachfront from '../images/beachfront-bungalow.jpg';
import luxury from "../images/luxury-double.png";
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
import hill1 from "../images/hill1.png";
import hill2 from "../images/hill2.png";
import hill3 from "../images/hill3.png";
import garden1 from "../images/garden1.png";
import garden2 from "../images/garden2.png";
import garden3 from "../images/garden3.png";

// Define room array (copy-paste your existing array from inside Roomsandsuits)
const rooms = [
  {
    id: 1,
    name: "Luxury Double",
    images: [luxury, luxury1, luxury2],
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
      "This exclusive suite offers breathtaking panoramic views of the surrounding hills, visible through floor-to-ceiling windows. Thoughtfully designed with elegant interiors, curated artwork, and high-end modern furnishings to provide a refined and immersive experience. Ideal for honeymooners, couples, or discerning guests seeking peace and luxury."
  },
      {
        title: "MORE FACILITIES",
        content: [
          { icon: tv, text: "LCD television" },
          { icon: speaker, text: "Speaker system" },
          { icon: coffee, text: "Tea and coffee" },
          { icon: bar, text: "Minibar" }
        ]
      },

       {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
    ]
  },
  {
      id: 2,
      name: "Deluxe Suite",
      images: [deluxe, deluxe1, deluxe2],
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
      "This exclusive suite offers breathtaking panoramic views of the surrounding hills, visible through floor-to-ceiling windows. Thoughtfully designed with elegant interiors, curated artwork, and high-end modern furnishings to provide a refined and immersive experience. Ideal for honeymooners, couples, or discerning guests seeking peace and luxury."
  },
        {
          title: "FACILITIES",
          content: [
            { icon: tv, text: "LCD television" },
            { icon: speaker, text: "Speaker system" },
            { icon: coffee, text: "Tea and coffee" },
            { icon: bar, text: "Minibar" }
          ]
        },

         {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
      ]

    },
    {
      id: 3,
      name: "Mount Cabin",
      images: [mountain, mount1, mount2],
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
        },
         {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
      ]

    },
    {
      id: 4,
      name: "Premium Double",
      images: [premium, premium1, premium2],
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
        },
         {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
      ]

    },
    {
      id: 5,
      name: "Skyline Penthouse",
      images: [skyline, skyline1, skyline2],
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
        },

         {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
      ]  
    
    },
    {
      id: 6,
      name: "HillTop",
      images: [hilltop, hill1, hill2],
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
        },
         {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
      ]

    },
    {
      id: 7,
      name: "Garden Villa",
      images: [garden, garden1, garden2],
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
        },

         {
    title: "ACCESS & TIMINGS",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM\n\nRoom service available 24 hours.\nSwimming pool accessible from 6:00 AM to 10:00 PM.\nComplimentary breakfast served from 7:00 AM to 10:30 AM in the main dining area.\nDaily housekeeping and turndown service included."
  }
      ]

    }

];

// Export only the rooms array
export default rooms;

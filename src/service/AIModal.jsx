import {
    GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: 'user',
            parts: [
              {
                text: `INSERT_INPUT_HERE`,
              },
            ],
        },
        {
            role: 'model',
            parts: [
              {
                text: `**Planning a Vegas Trip**
      
      I've started with the basics: Las Vegas, 3 days, a couple on a budget. I'm breaking down the request to find the key elements. I'm focusing on "cheap" and how that impacts the itinerary. I'm now structuring the plan with an assumption that the couple will be okay with the occasional cheap attraction to enjoy an overall great trip.
      
      
      **Outlining Itinerary Details**
      
      I'm now diving into the specifics. I've begun to define the key deliverables: hotel options and a detailed 3-day itinerary, all formatted as JSON. Defining "cheap" is essential. For hotels, I'm aiming for under $100/night, acknowledging this might fluctuate. For activities, I'll emphasize free and low-cost options, including walking the Strip and affordable dining, to maximize their value. I will also incorporate transportation, in case the couple wants to venture further out.
      
      
      **Finalizing the Budget Strategy**
      
      I'm now integrating the hotel selection and itinerary brainstorm. I'm focusing on "cheap" activities and transportation, defining strategies for each area. Hotel choices are being finalized within the budget constraints. I'm noting that the couple's flexibility is essential, as prices fluctuate. I'm emphasizing walking, free attractions, and affordable meals. The "Best time to visit" aspect is being added, considering weather, crowds, and specific attraction timings.
      
      
      **Detailing Hotel Options**
      
      I'm now generating a list of hotel options. I'm focusing on providing details such as names, addresses, estimated prices, images, and geolocation coordinates. I have noted prices fluctuate. I am also planning to include ratings and descriptions for each hotel. I am building a well rounded list. I will ensure that the list is clear and useful for my audience.
      
      
      **Finalizing Itinerary and Details**
      
      I'm now finalizing the 3-day itinerary, including estimated travel times between locations. I'm actively researching current ticket pricing for paid attractions, marking free activities accordingly. Placeholder image URLs are being compiled, and approximate geo-coordinates for each location are being retrieved. I'm ensuring all the information is accessible and organized for a smooth experience, while keeping the budget in mind.
      
      
      **Refining Itinerary and Details**
      
      I'm now integrating all aspects, focusing on a detailed itinerary, incorporating travel times, and current pricing estimates. I'm actively researching and finalizing activity descriptions and ensuring all details align with the budget constraints. Also, I'm now compiling image URLs and approximate geo-coordinates for each location, making sure everything is clear and useful for my audience.
      
      
      **Defining Final Structure**
      
      I've started to compile a detailed JSON structure to hold all the hotel and itinerary data. I'm focusing on "HotelName," "HotelAddress," estimated "Price," and geolocation. I'm also preparing for the full itinerary by including information about travel times, place images, and specific ratings. All this will be clear and useful for my audience.
      
      
      **Defining JSON Structure**
      
      I'm now focusing on a structured JSON format. I am planning to break down the final JSON into sections: \`Hotels\` with hotel details and an \`Itinerary\` with a daily breakdown of activities and estimates. Each hotel will have details like \`HotelName\`, \`HotelAddress\`, and estimated \`Price\`. Similarly, the itinerary will have \`placeName\`, detailed \`placeDetails\`, and approximate geo-coordinates. I am ensuring that the structure is well-organized for clarity.
      
      
      **Defining the Data Structures**
      
      I've shifted to a more structured plan. My aim is to define distinct data structures: one for hotels, incorporating elements like name, address, price, and geolocation, and another for the daily itinerary, including activities, travel times, and details. I'm focusing on ensuring these structures will be both clear and comprehensive for the user.
      
      
      `,
              },
              {
                text: `Okay, here's a 3-day Las Vegas travel plan for a couple on a cheap budget, in JSON format.
      
      **Important Notes for a Cheap Budget:**
      
      1.  **Hotel Prices:** The prices listed are *estimates* for off-peak, midweek stays. Weekend prices and prices during conventions/holidays can be significantly higher. Always check current rates for your specific dates and book in advance. Consider staying Sunday-Thursday for the best deals.
      2.  **Resort Fees:** Nearly all Las Vegas hotels charge a mandatory daily resort fee (typically $30-$50 + tax) not included in the room rate. Factor this into your budget.
      3.  **Food:** Opt for food courts, happy hour deals, off-Strip local eateries, or grab-and-go options. Many hotels have affordable cafes. Consider bringing some snacks/drinks.
      4.  **Transportation:** The Strip is walkable, but long. Use the Deuce bus or RTC (Regional Transportation Commission) buses for longer distances. Ride-shares (Uber/Lyft) are convenient but can add up.
      5.  **Free Entertainment:** Las Vegas excels at free entertainment! Bellagio Fountains, Mirage Volcano (check showtimes, as it might be phased out), street performers, window shopping, and people-watching are all free.
      6.  **Gambling:** If you choose to gamble, set a strict budget and stick to it. Consider it entertainment cost, not an investment.
      7.  **Image URLs:** These are placeholder URLs for illustrative purposes. Actual hotel/place images can be found on their respective websites or booking platforms.
      8.  **Geo Coordinates:** These are approximate.
      9.  **Travel Times:** "TravelToNextLocationMinutes" are estimates and can vary greatly depending on walking speed, bus waits, and traffic.
      
      \`\`\`json
      {
        "tripDetails": {
          "location": "Las Vegas",
          "duration": "3 Days",
          "travelerType": "Couple",
          "budget": "Cheap"
        },
        "hotelOptions": [
          {
            "HotelName": "Ellis Island Hotel Casino & Brewery",
            "HotelAddress": "4178 Koval Ln, Las Vegas, NV 89109",
            "Price": "$40 - $120 per night (estimate, excluding resort fee)",
            "HotelImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/1f/cb/92/ellis-island-casino.jpg?w=900&h=-1&s=1",
            "GeoCoordinates": {
              "latitude": 36.1130,
              "longitude": -115.1660
            },
            "Rating": 4.0,
            "Description": "A budget-friendly hotel known for its on-site brewery, popular karaoke, and affordable steak specials. Located a short walk or ride from the central Strip."
          },
          {
            "HotelName": "The LINQ Hotel + Experience",
            "HotelAddress": "3535 S Las Vegas Blvd, Las Vegas, NV 89109",
            "Price": "$50 - $150 per night (estimate, excluding resort fee)",
            "HotelImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/7b/95/51/adults-only-linq-pool.jpg?w=1200&h=-1&s=1",
            "GeoCoordinates": {
              "latitude": 36.1178,
              "longitude": -115.1716
            },
            "Rating": 4.0,
            "Description": "Centrally located on the Strip with modern rooms. Good for accessing the High Roller and LINQ Promenade. Can often find good deals, especially midweek."
          },
          {
            "HotelName": "Excalibur Hotel & Casino",
            "HotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
            "Price": "$30 - $100 per night (estimate, excluding resort fee)",
            "HotelImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c2/4a/f3/excalibur-hotel-casino.jpg?w=1200&h=-1&s=1",
            "GeoCoordinates": {
              "latitude": 36.0986,
              "longitude": -115.1758
            },
            "Rating": 3.5,
            "Description": "Iconic castle-themed hotel on the South Strip. Offers some of the lowest room rates on the Strip. Connected by tram to Luxor and Mandalay Bay."
          },
          {
            "HotelName": "Fremont Hotel & Casino (Downtown)",
            "HotelAddress": "200 E Fremont St, Las Vegas, NV 89101",
            "Price": "$35 - $110 per night (estimate, excluding resort fee)",
            "HotelImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/76/b0/fremont-hotel-casino.jpg?w=1200&h=-1&s=1",
            "GeoCoordinates": {
              "latitude": 36.1709,
              "longitude": -115.1430
            },
            "Rating": 3.5,
            "Description": "Located in the heart of Downtown Las Vegas, right on the Fremont Street Experience. Offers classic Vegas vibe and generally lower prices than Strip hotels."
          }
        ],
        "itinerary": [
          {
            "day": 1,
            "theme": "South & Mid-Strip Exploration",
            "bestTimeToVisit": "Afternoon to Evening (for lights and atmosphere)",
            "activities": [
              {
                "placeName": "Welcome to Fabulous Las Vegas Sign",
                "placeDetails": "Iconic photo opportunity. It's a bit south of the main Strip, so consider a bus or rideshare, or a long walk. There's usually a line for photos.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Welcome_to_Fabulous_Las_Vegas_sign.jpg/800px-Welcome_to_Fabulous_Las_Vegas_sign.jpg",
                "GeoCoordinates": {
                  "latitude": 36.0820,
                  "longitude": -115.1728
                },
                "ticketPricing": "$0 (Free)",
                "rating": 4.5,
                "timeToVisit": "30-45 minutes (including wait for photo)",
                "travelToNextLocationMinutes": 20
              },
              {
                "placeName": "Explore South Strip Casinos (Excalibur, Luxor, New York-New York)",
                "placeDetails": "Walk through the themed casinos. Excalibur has a medieval castle theme, Luxor is an Egyptian pyramid, and New York-New York recreates the NYC skyline. Free to enter and walk around. Look for affordable food court options for lunch/dinner.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/New_York_New_York_Hotel_Casino_Exterior_2020.jpg/800px-New_York_New_York_Hotel_Casino_Exterior_2020.jpg",
                "GeoCoordinates": {
                  "latitude": 36.0999,
                  "longitude": -115.1750
                },
                "ticketPricing": "$0 (Free to explore)",
                "rating": 4.0,
                "timeToVisit": "2-3 hours",
                "travelToNextLocationMinutes": 15
              },
              {
                "placeName": "Bellagio Conservatory & Botanical Gardens",
                "placeDetails": "A stunning indoor garden display that changes seasonally. Absolutely free and breathtaking. Located inside the Bellagio Hotel.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bellagio_Conservatory_Chinese_New_Year_2019.jpg/800px-Bellagio_Conservatory_Chinese_New_Year_2019.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1126,
                  "longitude": -115.1767
                },
                "ticketPricing": "$0 (Free)",
                "rating": 4.8,
                "timeToVisit": "45-60 minutes",
                "travelToNextLocationMinutes": 5
              },
              {
                "placeName": "Bellagio Fountains Show",
                "placeDetails": "Iconic water show synchronized to music and lights in front of the Bellagio. Shows run frequently in the afternoons and evenings. Check schedule.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bellagio_Fountains_night.jpg/800px-Bellagio_Fountains_night.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1126,
                  "longitude": -115.1740
                },
                "ticketPricing": "$0 (Free)",
                "rating": 4.8,
                "timeToVisit": "15-30 minutes (per show)",
                "travelToNextLocationMinutes": null
              }
            ],
            "foodSuggestion": "Look for happy hour deals or affordable eats in casino food courts (e.g., The Park, between NYNY and Park MGM, or inside Planet Hollywood's Miracle Mile Shops)."
          },
          {
            "day": 2,
            "theme": "North Strip & Downtown Adventure",
            "bestTimeToVisit": "Afternoon for Strip, Evening for Downtown",
            "activities": [
              {
                "placeName": "The Venetian & Palazzo Grand Canal Shoppes",
                "placeDetails": "Explore the stunning Italian-themed interiors, watch gondoliers (rides are extra and not budget-friendly, but watching is free), and enjoy the atmosphere. Streetmosphere performers often appear.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Grand_Canal_Shoppes_interior.jpg/800px-Grand_Canal_Shoppes_interior.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1212,
                  "longitude": -115.1697
                },
                "ticketPricing": "$0 (Free to explore)",
                "rating": 4.7,
                "timeToVisit": "1.5-2 hours",
                "travelToNextLocationMinutes": 10
              },
              {
                "placeName": "Wynn Conservatory & Atrium",
                "placeDetails": "Similar to Bellagio, Wynn offers a beautiful, free floral conservatory and whimsical atrium displays. Very picturesque.",
                "placeImageUrl": "https://s3-media0.fl.yelpcdn.com/bphoto/Xw04YpS9lU7L3X6J7L9vQQ/o.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1265,
                  "longitude": -115.1659
                },
                "ticketPricing": "$0 (Free)",
                "rating": 4.6,
                "timeToVisit": "45-60 minutes",
                "travelToNextLocationMinutes": 30
              },
              {
                "placeName": "Fremont Street Experience (Downtown)",
                "placeDetails": "Historic downtown Las Vegas, now a pedestrian mall with a massive LED canopy (Viva Vision light shows hourly in the evening), street performers, live music on multiple stages, and cheaper food/drinks. Take the Deuce bus or a rideshare from the Strip.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Fremont_Street_Experience_-_Las_Vegas.jpg/800px-Fremont_Street_Experience_-_Las_Vegas.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1707,
                  "longitude": -115.1450
                },
                "ticketPricing": "$0 (Free to explore, shows are free)",
                "rating": 4.5,
                "timeToVisit": "3-4 hours",
                "travelToNextLocationMinutes": 5
              },
              {
                "placeName": "Downtown Container Park",
                "placeDetails": "An open-air shopping center and park made of repurposed shipping containers. Features boutique shops, unique food options, a kids' play area, and often live music. The giant praying mantis sculpture at the entrance shoots fire at night.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Downtown_Container_Park%2C_Las_Vegas_01.jpg/800px-Downtown_Container_Park%2C_Las_Vegas_01.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1680,
                  "longitude": -115.1365
                },
                "ticketPricing": "$0 (Free to enter)",
                "rating": 4.3,
                "timeToVisit": "1-1.5 hours",
                "travelToNextLocationMinutes": null
              }
            ],
            "foodSuggestion": "Downtown has many cheap eats. Evel Pie for pizza, Heart Attack Grill (for the spectacle, maybe split a meal), or various food trucks/stalls on Fremont East."
          },
          {
            "day": 3,
            "theme": "Unique Vegas & Relaxation/Departure Prep",
            "bestTimeToVisit": "Morning/Afternoon for activities, Evening for winding down",
            "activities": [
              {
                "placeName": "Pinball Hall of Fame",
                "placeDetails": "A museum dedicated to pinball machines from all eras. Not a typical museum - you pay to play the games! Most games are 25-75 cents. A fun and affordable way to spend a few hours.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pinball_Hall_of_Fame_Las_Vegas.jpg/800px-Pinball_Hall_of_Fame_Las_Vegas.jpg",
                "GeoCoordinates": {
                  "latitude": 36.0912,
                  "longitude": -115.1490
                },
                "ticketPricing": "$0 (Free to enter, pay per game - budget $10-20 for play)",
                "rating": 4.6,
                "timeToVisit": "1.5-2.5 hours",
                "travelToNextLocationMinutes": 20
              },
              {
                "placeName": "Relax by the Hotel Pool / Explore LINQ Promenade",
                "placeDetails": "Enjoy some downtime at your hotel pool (check if it's open/heated depending on season). Alternatively, explore the LINQ Promenade, which has shops, eateries, and access to the High Roller observation wheel (ticketed, look for deals if interested).",
                "placeImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1f/a7/34/photo0jpg.jpg?w=1200&h=-1&s=1",
                "GeoCoordinates": {
                  "latitude": 36.1178,
                  "longitude": -115.1700
                },
                "ticketPricing": "$0 (Pool is free for guests, Promenade free to walk)",
                "rating": 4.2,
                "timeToVisit": "2-3 hours",
                "travelToNextLocationMinutes": 15
              },
              {
                "placeName": "Window Shopping & People Watching on the Strip",
                "placeDetails": "Take a final stroll along a section of the Strip you haven't seen, or revisit a favorite spot. The Forum Shops at Caesars Palace or the Miracle Mile Shops at Planet Hollywood are great for window shopping and have elaborate interiors.",
                "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/The_Forum_Shops_at_Caesars_Palace.jpg/800px-The_Forum_Shops_at_Caesars_Palace.jpg",
                "GeoCoordinates": {
                  "latitude": 36.1162,
                  "longitude": -115.1745
                },
                "ticketPricing": "$0 (Free)",
                "rating": 4.4,
                "timeToVisit": "1-2 hours",
                "travelToNextLocationMinutes": null
              }
            ],
            "foodSuggestion": "Grab an affordable lunch at In-N-Out Burger (multiple locations, one near LINQ Promenade) or use up any remaining snack supplies. Check for early dinner specials before heading to the airport if departing."
          }
        ],
        "generalTips": [
          "Book hotels and any specific shows/tours well in advance, especially for weekend trips.",
          "Check hotel resort fees and factor them into your budget.",
          "Wear comfortable shoes – you'll be doing a LOT of walking.",
          "Stay hydrated, especially in warmer months. Carry a reusable water bottle.",
          "Take advantage of free casino loyalty cards for potential discounts or free play (if you plan to gamble a little).",
          "Be aware of street performers who expect tips if you take photos/videos.",
          "Public transportation (Deuce/SDX buses) is a cost-effective way to get around the Strip and Downtown."
        ]
      }
      \`\`\``,
              },
            ],
          },
    ],
});

  
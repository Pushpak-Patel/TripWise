export const SelectTravelersList = [
    {
        id:1,
        title: 'Just Me',
        desc: 'A sole travelers in exploration',
        people:'1 Person'
    },
    {
        id:2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        people:'2 People'
    },
    {
        id:3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        people:'3 to 5 People'
    },
    {
        id:4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        people:'5 to 10 People'
    }
]


export const SelectBudgetOptions = [
    {
        id:1,
        title:'Economical',
        desc:'Stay conscious of costs'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost'
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {travellers} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'
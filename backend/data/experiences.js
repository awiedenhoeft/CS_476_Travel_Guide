// Fake data for Progress Report 1 so that we can test frontend and backend.
// This will be updated when connected to the database.

const experiences = [
    {
        id: 1,
        title: 'Sunrise at Golden Gate Bridge',
        username: 'Frequent_Traveler',
        userId: 101,
        images: ['https://testing.com/SF.jpg'],
        tags: ['Fun', 'Cloudy', 'Bridge'],
        location: 'San Francisco, California',
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        address: 'Golden Gate Bridge',
        description: 'Lovely sunrise at the Golden Gate Bridge',
        priceRange: '$$',
        duration: '2 hours',
        timeOfDay: 'Morning',
        dayOfWeek: 'Saturday',
        season: 'Spring',
        likes: 100,
        rating: 0,
        reviewCount: 0,
        savedBy: [101, 102],
        reviews: []
    },
    {
        id: 2,
        title: 'Must Eat here! Pizza',
        username: 'Pizza_hunter',
        userId: 102,
        images: ['https://testing.com/pizza.jpg'],
        tags: ['Family Business', 'hidden gem', 'food'],
        location: 'Chicago, Illinois',
        city: 'Chicago',
        state: 'Illinois',
        country: 'United States',
        address: '123 Fake Street, Chicago',
        description: 'The best place for a deep dish pizza.',
        priceRange: '$$',
        duration: '1 hour',
        timeOfDay: 'Evening',
        dayOfWeek: 'Friday',
        season: 'Winter',
        likes: 80,
        rating: 0,
        reviewCount: 0,
        savedBy: [101],
        reviews: []
    },
    {
        id: 3,
        title: 'Fun adventure at Disneyland',
        username: 'Disney_Fan',
        userId: 103,
        images: ['https://testing.com/Disneyland.jpg'],
        tags: ['Mickey', 'Disney', 'Theme Park'],
        location: 'Anaheim, California',
        city: 'Anaheim',
        state: 'California',
        country: 'United States',
        address: 'SoCal',
        description: 'Literally the happiest place on Earth!',
        priceRange: '$$$',
        duration: 'Full day',
        timeOfDay: 'Afternoon',
        dayOfWeek: 'Sunday',
        season: 'Summer',
        likes: 200,
        rating: 5.0,
        reviewCount: 1,
        savedBy: [102, 103],
        reviews: [
            {
                id: 1,
                userId: 101,
                username: 'Frequent_Traveler',
                travelStyle: 'Adventure',
                title: 'Disney Fun!',
                location: 'Anaheim, California',
                priceRange: '$$$',
                duration: 'Full day',
                tags: ['Disney', 'Theme Park'],
                rating: 5,
                description: 'There was a lot to do! Definitely check out the Haunted Mansion :D',
                image: 'https://testing.com/disneyreview1.jpg'
            }
        ]
    }
];

module.exports = experiences;
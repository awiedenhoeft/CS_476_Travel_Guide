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
        address: 'Golden Gate Bridge',
        description: 'Lovely sunrise at the Golden Gate Bridge',
        likes: 100,
        rating: 5.0,
        reviewCount: 10,
        savedBy: [101, 102]
    },
    {
        id: 2,
        title: 'Must Eat here! Pizza',
        username: 'Pizza_hunter',
        userId: 102,
        images: ['https://testing.com/pizza.jpg'],
        tags: ['Family Business', 'hidden gem', 'food'],
        location: 'Chicago, Illinois',
        address: '123 Fake Street, Chicago',
        description: 'The best place for a deep dish pizza.',
        likes: 80,
        rating: 4.1,
        reviewCount: 10,
        savedBy: [101]
    },
    {
        id: 3,
        title: 'Fun adventure at Disneyland',
        username: 'Disney_Fan',
        userId: 103,
        images: ['https://testing.com/Disneyland.jpg'],
        tags: ['Mickey', 'Disney', 'Theme Park'],
        location: 'Anaheim, California',
        address: 'SoCal',
        description: 'Literally the happiest place on Earth!',
        likes: 200,
        rating: 4.5,
        reviewCount: 105,
        savedBy: [102, 103]
    }
];

module.exports = experiences;
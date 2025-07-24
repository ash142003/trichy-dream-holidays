// data.js

const tripData = [
    {
        category: "Tamil Nadu Destinations",
        title: "Kanyakumari",
        image: "kanyakumari.jpg",
        description: "Experience the majestic confluence of three oceans at India's southern tip. Visit the Vivekananda Rock Memorial and the towering Thiruvalluvar Statue. Sunrises and sunsets here are truly unforgettable."
    },
    {
        category: "Tamil Nadu Destinations",
        title: "Chennai",
        image: "Chennai.jpg",
        description: "Explore the vibrant capital of Tamil Nadu. From the historic Central Railway Station to Marina Beach and rich cultural landmarks, Chennai is a city of contrasts and endless discovery."
    },
    {
        category: "Tamil Nadu Destinations",
        title: "Ooty",
        image: "OOTY.jpg",
        description: "Known as the 'Queen of Hill Stations', Ooty offers breathtaking views of the Nilgiri Hills, serene lakes, and sprawling tea gardens. A perfect escape into nature's lap."
    },
    {
        category: "Tamil Nadu Destinations",
        title: "Pondicherry",
        image: "PONDY.jpg",
        description: "Discover the unique charm of the French Riviera of the East. Stroll through the picturesque French Quarter with its colonial architecture, vibrant cafes, and serene seaside promenade."
    },
    {
        category: "Tamil Nadu Destinations",
        title: "Kodaikanal",
        image: "KODAI.jpg",
        description: "Visit the 'Princess of Hill Stations'. Kodaikanal's misty landscapes, serene lakes, and unique sights like the Pillar Rocks make it a popular destination for nature lovers and adventurers."
    },
    {
        category: "Tamil Nadu Destinations",
        title: "Yercaud",
        image: "YERCUD.jpg",
        description: "A tranquil hill station in the Eastern Ghats. Yercaud is known for its beautiful lake, lush coffee plantations, and stunning viewpoints, offering a peaceful retreat from city life."
    },
    {
        category: "Kerala - God's Own Country",
        title: "Cochin (Kochi)",
        image: "CHOCHIN.jpg",
        description: "A vibrant city where history and modernity coexist. Explore the iconic Chinese Fishing Nets, the historic Fort Kochi area, and the bustling spice markets."
    },
    {
        category: "Kerala - God's Country",
        title: "Alleppey (Alappuzha)",
        image: "ALLEPPEY.jpg",
        description: "Cruise through the serene backwaters of Alleppey on a traditional houseboat. Experience the tranquil village life, lush paddy fields, and the unique ecosystem of 'The Venice of the East'."
    },
    {
        category: "Kerala - God's Country",
        title: "Munnar",
        image: "download (5).jpg",
        description: "Immerse yourself in the vast, rolling hills of Munnar's tea plantations. This hill station is a paradise for nature lovers, offering misty mountains, diverse wildlife, and fragrant air."
    },
    {
        category: "Kerala - God's Country",
        title: "Trivandrum",
        image: "download (3).jpg",
        description: "The capital city of Kerala, home to the magnificent Padmanabhaswamy Temple. Explore its rich history, beautiful beaches like Kovalam, and numerous museums and palaces."
    },
    {
        category: "Kerala - God's Country",
        title: "Varkala",
        image: "VARKALA.jpg",
        description: "Famous for its stunning cliff-side beaches overlooking the Arabian Sea. Varkala is a unique destination offering a relaxed atmosphere, yoga retreats, and breathtaking ocean views."
    },
    {
        category: "Kerala - God's Country",
        title: "Thekkady",
        image: "download (4).jpg",
        description: "Home to the Periyar National Park, Thekkady is a haven for wildlife enthusiasts. Enjoy boat safaris on Periyar Lake, spice plantation tours, and treks through the dense forests."
    },
    {
        category: "Karnataka Highlights",
        title: "Mysore",
        image: "image.jpg",
        description: "Step into the royal city of Mysore, famous for its opulent Mysore Palace, vibrant markets, and rich heritage. The illuminated palace at night is a sight to behold."
    },
    {
        category: "Karnataka Highlights",
        title: "Bangalore",
        image: "BANGALORE.jpg",
        description: "India's 'Silicon Valley' is a bustling metropolis with beautiful parks, a lively nightlife, and modern architecture like UB City. A perfect blend of cosmopolitan culture and green spaces."
    },
    {
        category: "Karnataka Highlights",
        title: "Coorg",
        image: "COORG.jpg",
        description: "Known as the 'Scotland of India', Coorg is a picturesque hill station famous for its aromatic coffee plantations, misty hills, and cascading waterfalls. A perfect destination for trekking and relaxation."
    },
    {
        category: "Karnataka Highlights",
        title: "Chikmaglur",
        image: "CHICKMAGLUR.jpg",
        description: "The 'Coffee Land of Karnataka' offers serene landscapes with lush green hills and fragrant coffee estates. It's a paradise for trekkers, nature lovers, and those seeking tranquility."
    },
    {
        category: "Karnataka Highlights",
        title: "Bylakuppe",
        image: "licensed-image.jpeg",
        description: "Home to the stunning Namdroling Monastery, also known as the Golden Temple. Experience the peaceful and spiritual ambiance of one of the largest Tibetan settlements in South India."
    },
    {
        category: "Goa & Hyderabad",
        title: "Goa",
        image: "GOA.jpg",
        description: "India's party capital, famous for its sun-kissed beaches, vibrant nightlife, Portuguese architecture, and delicious seafood. A perfect blend of relaxation and excitement."
    },
    {
        category: "Goa & Hyderabad",
        title: "Hyderabad",
        image: "HYDERABAD.jpg",
        description: "The 'City of Pearls' boasts a rich history with iconic landmarks like the Charminar. Indulge in its world-famous biryani and explore the grandeur of its Nizam-era palaces."
    },
    {
        category: "North India Adventures",
        title: "Delhi",
        image: "delhi.jpg",
        description: "Explore the heart of India, where ancient history meets modern life. Visit majestic monuments like India Gate, Humayun's Tomb, and the bustling lanes of Chandni Chowk."
    },
    {
        category: "North India Adventures",
        title: "Jaipur",
        image: "JAIPUR.jpg",
        description: "The 'Pink City' of India, known for its stunning forts, royal palaces like Hawa Mahal, and vibrant markets. Experience the rich culture and hospitality of Rajasthan."
    },
    {
        category: "North India Adventures",
        title: "Amritsar",
        image: "AMIR.jpg",
        description: "Home to the serene and stunning Golden Temple, the spiritual center for Sikhs. Witness the patriotic fervor at the Wagah Border ceremony and savor the delicious local cuisine."
    },
    {
        category: "North India Adventures",
        title: "Manali",
        image: "manali.jpg",
        description: "Nestled in the Himalayas, Manali is a gateway for adventure sports like skiing, paragliding, and trekking. Enjoy the breathtaking mountain scenery and the crisp, fresh air."
    },
    {
        category: "North India Adventures",
        title: "Kashmir",
        image: "Kashmir.jpg",
        description: "Often called 'Paradise on Earth', Kashmir mesmerizes with its snow-capped mountains, serene Dal Lake, and charming Shikara boats. A destination of unparalleled natural beauty."
    },
    {
        category: "North India Adventures",
        title: "Jammu - Vaishno Devi",
        image: "JAMMU.jpg",
        description: "Embark on a spiritual pilgrimage to the holy shrine of Vaishno Devi, nestled in the Trikuta Mountains. The journey is as sacred and scenic as the destination itself."
    }
];
export const countries = [
    { 
        id: 1, 
        name: 'India', 
        toursCount: 24, 
        img: 'https://images.unsplash.com/photo-1532664189809-02133fee698d?w=1600', 
        desc: 'Discover vibrant culture, historical marvels like the Taj Mahal, and diverse landscapes stretching from the Himalayas to tropical beaches.',
        paragraphs: [
            "India is a land of vibrant colors, deeply rooted traditions, and diverse landscapes that stretch from the snow-capped Himalayas in the north to the sun-kissed beaches of the south. With a history spanning thousands of years, every corner of this vast country offers a unique story, an architectural marvel, and a culinary adventure that will awaken your senses.",
            "Whether you are seeking spiritual enlightenment on the ghats of the Ganges, thrilling wildlife safaris in Ranthambore, or the architectural splendor of the Taj Mahal, India is a country that never ceases to amaze. The warmth of the people, the richness of the culture, and the sheer scale of the sights make it a destination that leaves a lasting impression on every traveler."
        ],
        photos: [
            'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
            'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600',
            'https://picsum.photos/id/1047/800/600'
        ],
        tours: [
            { 
                id: 101, name: 'Golden Triangle Explorer', duration: '7 Days', price: '$899', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
                dates: 'Oct - Mar (Every Sunday)', food: 'Breakfast & 2 Dinners', features: ['Hotel', 'Transport', 'English Guide', 'Sightseeing'],
                overview: 'Experience the magic of India by visiting Delhi, Agra, and Jaipur in a spectacular 7-day journey.',
                roadmap: [
                    { day: 1, title: 'Arrival in Delhi', desc: 'Welcome to India! Transfer to hotel and rest.' },
                    { day: 2, title: 'Delhi Sightseeing', desc: 'Visit Red Fort, India Gate, and Jama Masjid.' },
                    { day: 3, title: 'Agra and the Taj Mahal', desc: 'Drive to Agra and witness the iconic Taj Mahal at sunset.' },
                    { day: 4, title: 'Fatehpur Sikri to Jaipur', desc: 'Explore the abandoned Mughal city en route to the Pink City.' },
                    { day: 5, title: 'Amber Fort', desc: 'Elephant or jeep ride to the majestic Amber Fort.' },
                    { day: 6, title: 'Jaipur Markets', desc: 'Shop in local bazaars for textiles and jewelry.' },
                    { day: 7, title: 'Departure', desc: 'Return to Delhi for your onward journey.' }
                ]
            },
            { 
                id: 102, name: 'Kerala Backwaters Retreat', duration: '5 Days', price: '$650', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
                dates: 'All Year Round', food: 'All Meals on Houseboat', features: ['Houseboat', 'Transfers', 'Nature Guide'],
                overview: 'Relax in the serene backwaters of Kerala, surrounded by lush palm trees and tranquil waters.',
                roadmap: [
                    { day: 1, title: 'Arrival in Kochi', desc: 'Explore the historic port city of Kochi.' },
                    { day: 2, title: 'Munnar Tea Gardens', desc: 'Drive to Munnar and visit vast tea plantations.' },
                    { day: 3, title: 'Alleppey Houseboat', desc: 'Board a traditional houseboat for an overnight cruise.' },
                    { day: 4, title: 'Kumarakom Bird Sanctuary', desc: 'A peaceful morning bird-watching tour.' },
                    { day: 5, title: 'Departure', desc: 'Transfer back to Kochi airport.' }
                ]
            },
            { 
                id: 103, name: 'Himalayan Adventure Trek', duration: '10 Days', price: '$1200', img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400',
                dates: 'May - Sep', food: 'All Meals during Trek', features: ['Camping Gear', 'Trek Guide', 'Porters', 'Permits'],
                overview: 'Challenge yourself with a breathtaking trek through the Indian Himalayas.',
                roadmap: [
                    { day: 1, title: 'Arrive in Manali', desc: 'Acclimatize in the beautiful mountain town.' },
                    { day: '2-4', title: 'Trek to Base Camp', desc: 'Ascend through pine forests and alpine meadows.' },
                    { day: 5, title: 'Acclimatization Day', desc: 'Rest and prepare for the pass crossing.' },
                    { day: '6-8', title: 'High Pass Crossing', desc: 'Cross the dramatic mountain pass and descend.' },
                    { day: 9, title: 'Return to Civilization', desc: 'Finish the trek and celebrate with a hot shower.' },
                    { day: 10, title: 'Departure', desc: 'Leave Manali for home.' }
                ]
            }
        ]
    },
    { 
        id: 2, 
        name: 'Japan', 
        toursCount: 18, 
        img: 'https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=1600', 
        desc: 'Experience the perfect blend of ultra-modern neon skyscrapers and ancient shrines.',
        paragraphs: [
            "Japan offers a fascinating contrast where ancient traditions seamlessly blend with futuristic technology. From the neon-lit streets of Tokyo to the tranquil zen gardens of Kyoto, every moment in Japan is a discovery.",
            "The culinary scene is just as diverse, offering everything from street food delicacies to Michelin-starred sushi experiences."
        ],
        photos: [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',
            'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600'
        ],
        tours: [
            { 
                id: 201, name: 'Tokyo Neon & Kyoto Zen', duration: '8 Days', price: '$1450', img: 'https://picsum.photos/id/1067/800/600',
                dates: 'Mar - May / Sep - Nov', food: 'Breakfast', features: ['Bullet Train Pass', 'Hotels', 'Guided Tours'],
                overview: 'Experience the striking contrast of Japan by exploring ultra-modern Tokyo and historic Kyoto.',
                roadmap: [
                    { day: 1, title: 'Touchdown in Tokyo', desc: 'Arrive and check into your Shinjuku hotel.' },
                    { day: 2, title: 'Tokyo City Highlights', desc: 'Visit Shibuya Crossing and Meiji Shrine.' },
                    { day: 3, title: 'Akihabara & Asakusa', desc: 'Explore tech districts and traditional temples.' },
                    { day: 4, title: 'Shinkansen to Kyoto', desc: 'Ride the bullet train to the ancient capital.' },
                    { day: 5, title: 'Golden Pavilion', desc: 'Visit Kinkaku-ji and the Arashiyama Bamboo Grove.' },
                    { day: 6, title: 'Fushimi Inari', desc: 'Hike through thousands of red torii gates.' },
                    { day: 7, title: 'Osaka Day Trip', desc: 'Experience the street food capital of Japan.' },
                    { day: 8, title: 'Departure', desc: 'Fly out from Kansai Airport.' }
                ]
            },
            { 
                id: 202, name: 'Mount Fuji Expedition', duration: '4 Days', price: '$750', img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400',
                dates: 'Jul - Aug (Climbing Season)', food: 'Mountain Hut Meals', features: ['Mountain Guide', 'Hut Stay', 'Transfers'],
                overview: 'Conquer Japan’s most iconic peak and witness the sunrise from the summit of Mount Fuji.',
                roadmap: [
                    { day: 1, title: 'Tokyo to Fuji Five Lakes', desc: 'Travel to the base of the mountain.' },
                    { day: 2, title: 'Ascent Begins', desc: 'Hike up to the 8th station and rest in a mountain hut.' },
                    { day: 3, title: 'Summit Sunrise', desc: 'Reach the crater for sunrise, then descend.' },
                    { day: 4, title: 'Hot Springs Relax', desc: 'Soak in an onsen before returning to Tokyo.' }
                ]
            },
            { 
                id: 203, name: 'Hokkaido Nature Trail', duration: '6 Days', price: '$1100', img: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=400',
                dates: 'Dec - Mar (Winter) / Jun - Aug (Summer)', food: 'Breakfast & 3 Dinners', features: ['Car Rental', 'Hotels', 'Park Passes'],
                overview: 'Explore the wild northern island of Hokkaido, famous for its volcanoes, natural hot springs, and ski areas.',
                roadmap: [
                    { day: 1, title: 'Arrive in Sapporo', desc: 'Explore the capital of Hokkaido.' },
                    { day: 2, title: 'Otaru Canal', desc: 'Visit the historic port town known for glassworks.' },
                    { day: 3, title: 'Furano Flower Fields', desc: 'See vast lavender fields (summer) or snowscapes (winter).' },
                    { day: '4-5', title: 'Daisetsuzan National Park', desc: 'Hike or ski in Japan’s largest national park.' },
                    { day: 6, title: 'Departure', desc: 'Fly out from New Chitose.' }
                ]
            }
        ]
    },    
    { 
        id: 3, 
        name: 'Italy', 
        toursCount: 15, 
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600', 
        desc: 'Dive into world-class culinary masterpieces, Renaissance history, and stunning coastlines.',
        paragraphs: [
            "Italy is a living museum, where every city, town, and village whispers tales of a glorious past.",
            "Beyond its rich history, Italy is a paradise for food lovers. Savor authentic pasta, wood-fired pizza, and world-renowned wines."
        ],
        photos: [
            'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=600',
            'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600',
            'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600'
        ],
        tours: [
            { 
                id: 301, name: 'Rome & Florence Art Tour', duration: '7 Days', price: '$1200', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400',
                dates: 'Apr - Oct', food: 'Breakfast', features: ['Train Passes', 'Museum Tickets', 'Hotels'],
                overview: 'Immerse yourself in the heart of the Renaissance and the ruins of the Roman Empire.',
                roadmap: [
                    { day: 1, title: 'Arrival in Rome', desc: 'Check in and enjoy an evening pasta-making class.' },
                    { day: 2, title: 'Ancient Rome', desc: 'Guided tour of the Colosseum and Roman Forum.' },
                    { day: 3, title: 'Vatican City', desc: 'Explore the Vatican Museums and Sistine Chapel.' },
                    { day: 4, title: 'Train to Florence', desc: 'Travel to Tuscany and explore the Duomo.' },
                    { day: 5, title: 'Uffizi Gallery', desc: 'Marvel at works by Michelangelo and Leonardo da Vinci.' },
                    { day: 6, title: 'Pisa Day Trip', desc: 'Visit the iconic Leaning Tower.' },
                    { day: 7, title: 'Departure', desc: 'End of your Italian art adventure.' }
                ]
            },
            { 
                id: 302, name: 'Amalfi Coast Getaway', duration: '5 Days', price: '$950', img: 'https://picsum.photos/id/1057/800/600',
                dates: 'May - Sep', food: 'Breakfast & Wine Tasting', features: ['Coastal Transport', 'Hotels', 'Boat Tour'],
                overview: 'Relax on the dramatic, cliffside coastal towns of southern Italy.',
                roadmap: [
                    { day: 1, title: 'Arrive in Naples', desc: 'Transfer to Sorrento or Positano.' },
                    { day: 2, title: 'Positano & Amalfi', desc: 'Drive the spectacular coastal road.' },
                    { day: 3, title: 'Capri Boat Tour', desc: 'Sail to the glamorous island of Capri.' },
                    { day: 4, title: 'Pompeii Ruins', desc: 'Explore the ancient city preserved in ash.' },
                    { day: 5, title: 'Departure', desc: 'Transfer back to Naples.' }
                ]
            },
            { 
                id: 303, name: 'Tuscan Wine Tasting', duration: '4 Days', price: '$600', img: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=400',
                dates: 'Sep - Oct (Harvest Season)', food: 'All Meals & Wine', features: ['Villa Stay', 'Sommelier Guide', 'Transfers'],
                overview: 'Indulge in the finest wines and rustic cuisine amid the rolling hills of Tuscany.',
                roadmap: [
                    { day: 1, title: 'Welcome to Chianti', desc: 'Settle into a traditional Tuscan villa.' },
                    { day: 2, title: 'Vineyard Tours', desc: 'Visit three local wineries for tastings.' },
                    { day: 3, title: 'Siena Excursion', desc: 'Explore the medieval city of Siena.' },
                    { day: 4, title: 'Departure', desc: 'Final breakfast and farewell.' }
                ]
            }
        ]
    },
    { 
        id: 4, 
        name: 'Switzerland', 
        toursCount: 12, 
        img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1600', 
        desc: 'Explore pristine alpine landscapes, crystal-clear lakes, and breathtaking peaks.',
        paragraphs: [
            "Switzerland is synonymous with breathtaking natural beauty. Nestled in the heart of the Alps, it offers a dramatic landscape of soaring peaks and emerald valleys.",
            "With an impeccably efficient transport system featuring panoramic train rides, traveling through this alpine wonderland is an experience in itself."
        ],
        photos: [
            'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600',
            'https://picsum.photos/id/1036/800/600',
            'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600'
        ],
        tours: [
            { 
                id: 401, name: 'Swiss Alps Hiking Trail', duration: '8 Days', price: '$1500', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400',
                dates: 'Jun - Sep', food: 'Half Board', features: ['Mountain Guide', 'Cable Car Passes', 'Chalets'],
                overview: 'Hike beneath the shadow of the Matterhorn and across majestic glaciers.',
                roadmap: [
                    { day: 1, title: 'Arrive in Zermatt', desc: 'Check into your alpine chalet.' },
                    { day: '2-6', title: 'Alpine Trails', desc: 'Daily guided hikes through pristine mountain scenery.' },
                    { day: 7, title: 'Gornergrat Railway', desc: 'Ride Europe’s highest open-air cog railway.' },
                    { day: 8, title: 'Departure', desc: 'Train back to Zurich or Geneva.' }
                ]
            },
            { 
                id: 402, name: 'Glacier Express Journey', duration: '3 Days', price: '$850', img: 'https://picsum.photos/id/1036/800/600',
                dates: 'All Year', food: 'Breakfast & On-board Lunch', features: ['First Class Tickets', 'Hotels', 'Transfers'],
                overview: 'Experience the world’s slowest express train journey through the heart of the Alps.',
                roadmap: [
                    { day: 1, title: 'St. Moritz', desc: 'Arrive in the glamorous resort town.' },
                    { day: 2, title: 'The Glacier Express', desc: 'An 8-hour panoramic train journey to Zermatt.' },
                    { day: 3, title: 'Zermatt Views', desc: 'Morning view of the Matterhorn and departure.' }
                ]
            },
            { 
                id: 403, name: 'Lucerne Lakes & Castles', duration: '5 Days', price: '$1100', img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400',
                dates: 'Apr - Oct', food: 'Breakfast', features: ['Boat Pass', 'Museum Entries', 'Hotels'],
                overview: 'A gentle exploration of central Switzerland’s sparkling lakes and historic towns.',
                roadmap: [
                    { day: 1, title: 'Welcome to Lucerne', desc: 'Stroll across the famous Chapel Bridge.' },
                    { day: 2, title: 'Mount Pilatus', desc: 'Ascend the mountain via the steepest cogwheel railway.' },
                    { day: 3, title: 'Lake Cruise', desc: 'Cruise Lake Lucerne to historic castles.' },
                    { day: 4, title: 'Bern Day Trip', desc: 'Visit the Swiss capital.' },
                    { day: 5, title: 'Departure', desc: 'End of your scenic tour.' }
                ]
            }
        ]
    },
    { 
        id: 5, 
        name: 'France', 
        toursCount: 20, 
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600', 
        desc: 'Immerse yourself in romance, fine art, world-renowned fashion, and iconic monuments.',
        paragraphs: [
            "France captivates the imagination with its elegance, romance, and cultural wealth. Discover the sun-drenched vineyards of Bordeaux and the glamorous beaches of the French Riviera.",
            "Renowned globally for its culinary excellence, France is the perfect destination for epicureans. Every region offers distinct flavors and traditions."
        ],
        photos: [
            'https://picsum.photos/id/1048/800/600',
            'https://images.unsplash.com/photo-1523522204961-d7f9999a38ee?w=600',
            'https://images.unsplash.com/photo-1502599291079-c73bf54045f0?w=600'
        ],
        tours: [
            { 
                id: 501, name: 'Parisian Highlights', duration: '4 Days', price: '$800', img: 'https://picsum.photos/id/1048/800/600',
                dates: 'All Year', food: 'Breakfast', features: ['Museum Pass', 'Seine Cruise', 'Boutique Hotel'],
                overview: 'A whirlwind romance with the City of Light, covering all major landmarks.',
                roadmap: [
                    { day: 1, title: 'Eiffel Tower & Seine', desc: 'Arrival and evening river cruise.' },
                    { day: 2, title: 'The Louvre', desc: 'Skip-the-line access to the world’s largest art museum.' },
                    { day: 3, title: 'Montmartre', desc: 'Explore the bohemian district and Sacré-Cœur.' },
                    { day: 4, title: 'Departure', desc: 'Morning croissants and farewell.' }
                ]
            },
            { 
                id: 502, name: 'Loire Valley Châteaux', duration: '5 Days', price: '$1050', img: 'https://picsum.photos/id/1040/800/600',
                dates: 'May - Oct', food: 'Breakfast & 2 Dinners', features: ['Castle Entries', 'Wine Tasting', 'Transport'],
                overview: 'Step back in time to an era of French royalty and magnificent architecture.',
                roadmap: [
                    { day: 1, title: 'Arrive in Tours', desc: 'Gateway to the Loire Valley.' },
                    { day: 2, title: 'Château de Chambord', desc: 'Visit the largest and most majestic castle.' },
                    { day: 3, title: 'Chenonceau', desc: 'Explore the beautiful castle spanning the river.' },
                    { day: 4, title: 'Wine Tasting', desc: 'Sample the region’s famous white wines.' },
                    { day: 5, title: 'Departure', desc: 'Return to Paris.' }
                ]
            },
            { 
                id: 503, name: 'Riviera Sun & Sea', duration: '6 Days', price: '$1200', img: 'https://picsum.photos/id/1050/800/600',
                dates: 'Jun - Sep', food: 'Breakfast', features: ['Resort Stay', 'Yacht Tour', 'Transfers'],
                overview: 'Experience the glamour of the Côte d’Azur from Nice to Monaco.',
                roadmap: [
                    { day: 1, title: 'Nice Promenade', desc: 'Arrive and stroll the Promenade des Anglais.' },
                    { day: 2, title: 'Monaco Glamour', desc: 'Visit the casino and royal palace.' },
                    { day: 3, title: 'Cannes', desc: 'Walk the famous film festival steps.' },
                    { day: '4-5', title: 'Beach Days', desc: 'Relax by the Mediterranean Sea.' },
                    { day: 6, title: 'Departure', desc: 'Fly out from Nice.' }
                ]
            }
        ]
    },
    { 
        id: 6, 
        name: 'Egypt', 
        toursCount: 9, 
        img: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1600', 
        desc: 'Uncover the ancient mysteries of the Pharaohs and the Great Pyramids.',
        paragraphs: [
            "Egypt is the cradle of civilization, a mesmerizing land where ancient history stands tall amidst the golden sands of the desert.",
            "Beyond its Pharaonic legacy, Egypt offers bustling bazaars in Cairo and the vibrant marine life of the Red Sea."
        ],
        photos: [
            'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600',
            'https://picsum.photos/id/1015/800/600',
            'https://picsum.photos/id/1016/800/600' 
        ],
        tours: [
            { 
                id: 601, name: 'Pyramids & Sphinx Discovery', duration: '3 Days', price: '$400', img: 'https://picsum.photos/id/1040/800/600',
                dates: 'Oct - Apr', food: 'Breakfast', features: ['Egyptologist Guide', 'Transport', 'Hotel'],
                overview: 'A focused, short trip to witness the last remaining Wonder of the Ancient World.',
                roadmap: [
                    { day: 1, title: 'Cairo Arrival', desc: 'Check in and evening sound & light show.' },
                    { day: 2, title: 'Giza Plateau', desc: 'Explore the Pyramids and the Great Sphinx.' },
                    { day: 3, title: 'Egyptian Museum', desc: 'See King Tut’s treasures before departure.' }
                ]
            },
            { 
                id: 602, name: 'Nile River Cruise', duration: '7 Days', price: '$1100', img: 'https://picsum.photos/id/1015/800/600',
                dates: 'Oct - Apr', food: 'All Inclusive on Boat', features: ['Cruise Cabin', 'Guided Tours', 'Flights from Cairo'],
                overview: 'Sail down the lifeblood of Egypt from Luxor to Aswan, stopping at ancient temples.',
                roadmap: [
                    { day: 1, title: 'Luxor Embarkation', desc: 'Board your 5-star cruise ship.' },
                    { day: 2, title: 'Valley of the Kings', desc: 'Explore royal tombs and Karnak Temple.' },
                    { day: '3-5', title: 'Sailing the Nile', desc: 'Visit Edfu and Kom Ombo temples.' },
                    { day: 6, title: 'Aswan High Dam', desc: 'Explore Aswan and Philae Temple.' },
                    { day: 7, title: 'Disembark', desc: 'Fly back to Cairo.' }
                ]
            },
            { 
                id: 603, name: 'Red Sea Diving Adventure', duration: '5 Days', price: '$700', img: 'https://picsum.photos/id/1050/800/600',
                dates: 'All Year', food: 'Half Board', features: ['Dive Gear', 'Resort', 'Boat Dives'],
                overview: 'Dive into world-class coral reefs and crystal-clear waters in Sharm El Sheikh or Hurghada.',
                roadmap: [
                    { day: 1, title: 'Arrive at Red Sea', desc: 'Check into your beach resort.' },
                    { day: '2-4', title: 'Daily Dives', desc: 'Two boat dives per day exploring vibrant reefs.' },
                    { day: 5, title: 'Departure', desc: 'Dry off and head home.' }
                ]
            }
        ]
    },
    { 
        id: 7, 
        name: 'Australia', 
        toursCount: 14, 
        img: 'https://images.unsplash.com/photo-1590716209211-ea74d5f63573?w=1600', 
        desc: 'Sun-drenched beaches, rugged outback adventures, and vibrant coral reefs.',
        paragraphs: [
            "Australia is a vast and wildly diverse continent that promises boundless adventures. From the iconic silhouette of the Sydney Opera House to the vibrant underwater world of the Great Barrier Reef.",
            "With unique wildlife like kangaroos and koalas, and thriving cosmopolitan cities, Australia is an unforgettable destination."
        ],
        photos: [
            'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600',
            'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',
            'https://picsum.photos/id/1018/800/600'
        ],
        tours: [
            { 
                id: 701, name: 'Sydney & Blue Mountains', duration: '6 Days', price: '$1100', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400',
                dates: 'Sep - May', food: 'Breakfast', features: ['Harbor Cruise', 'Hotels', 'Guided Hikes'],
                overview: 'Combine cosmopolitan city life with the rugged nature of the Blue Mountains.',
                roadmap: [
                    { day: 1, title: 'Sydney Arrival', desc: 'Settle in and visit Circular Quay.' },
                    { day: 2, title: 'Opera House & Bondi', desc: 'Tour the Opera House and walk the Bondi to Coogee path.' },
                    { day: 3, title: 'Harbor Cruise', desc: 'Sail past iconic landmarks.' },
                    { day: '4-5', title: 'Blue Mountains', desc: 'Hike among eucalyptus forests and the Three Sisters.' },
                    { day: 6, title: 'Departure', desc: 'Fly out of Sydney.' }
                ]
            },
            { 
                id: 702, name: 'Great Barrier Reef Snorkel', duration: '4 Days', price: '$800', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400',
                dates: 'May - Oct', food: 'Lunch on Boat', features: ['Snorkel Gear', 'Catamaran Cruise', 'Hotel'],
                overview: 'Get up close with the world’s largest coral reef system from Cairns.',
                roadmap: [
                    { day: 1, title: 'Arrive in Cairns', desc: 'Explore the tropical northern city.' },
                    { day: '2-3', title: 'Outer Reef Tours', desc: 'Full day snorkeling and swimming with marine life.' },
                    { day: 4, title: 'Departure', desc: 'Transfer to Cairns airport.' }
                ]
            },
            { 
                id: 703, name: 'Outback Uluru Experience', duration: '5 Days', price: '$1250', img: 'https://picsum.photos/id/1018/800/600',
                dates: 'Apr - Sep', food: 'Camp Meals', features: ['Outback Guide', 'Swag Camping', 'Transfers'],
                overview: 'Experience the spiritual heart of Australia’s Red Centre.',
                roadmap: [
                    { day: 1, title: 'Alice Springs', desc: 'Arrive in the heart of the Outback.' },
                    { day: 2, title: 'Drive to Uluru', desc: 'Watch the sunset change the rock’s colors.' },
                    { day: 3, title: 'Kata Tjuta', desc: 'Hike through the spectacular Valley of the Winds.' },
                    { day: 4, title: 'Kings Canyon', desc: 'A rim walk with breathtaking views.' },
                    { day: 5, title: 'Departure', desc: 'End of your outback safari.' }
                ]
            }
        ]
    },
    { 
        id: 8, 
        name: 'Greece', 
        toursCount: 16, 
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600', 
        desc: 'Relax by whitewashed coastal towns overlooking the deep blue Aegean sea.',
        paragraphs: [
            "Greece is a sun-drenched haven where mythology, history, and stunning natural beauty intertwine. Athens, the birthplace of democracy, is crowned by the majestic Acropolis.",
            "Wander through the narrow, whitewashed streets of Santorini and Mykonos, indulge in delicious Mediterranean cuisine, and swim in crystal-clear waters."
        ],
        photos: [
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600',
            'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600',
            'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600'
        ],
        tours: [
            { 
                id: 801, name: 'Athens Historical Walk', duration: '3 Days', price: '$450', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
                dates: 'All Year', food: 'Breakfast', features: ['Archaeologist Guide', 'Museum Passes', 'Hotel'],
                overview: 'A deep dive into the birthplace of Western civilization.',
                roadmap: [
                    { day: 1, title: 'Athens Arrival', desc: 'Check in and dine in the Plaka district.' },
                    { day: 2, title: 'The Acropolis', desc: 'Guided tour of the Parthenon and Acropolis Museum.' },
                    { day: 3, title: 'Ancient Agora & Departure', desc: 'Explore ancient marketplaces before leaving.' }
                ]
            },
            { 
                id: 802, name: 'Santorini Sunset Cruise', duration: '5 Days', price: '$900', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400',
                dates: 'May - Oct', food: 'Breakfast & 1 Dinner', features: ['Catamaran Tour', 'Boutique Hotel', 'Transfers'],
                overview: 'Experience the world-famous sunsets and caldera views of Santorini.',
                roadmap: [
                    { day: 1, title: 'Arrive in Santorini', desc: 'Settle into your cliffside hotel in Oia.' },
                    { day: 2, title: 'Volcano Boat Tour', desc: 'Sail the caldera and swim in hot springs.' },
                    { day: 3, title: 'Wine Tasting', desc: 'Sample unique volcanic wines.' },
                    { day: 4, title: 'Sunset Catamaran', desc: 'A luxury evening cruise with dinner onboard.' },
                    { day: 5, title: 'Departure', desc: 'Transfer to airport or ferry.' }
                ]
            },
            { 
                id: 803, name: 'Island Hopping Adventure', duration: '8 Days', price: '$1350', img: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400',
                dates: 'Jun - Sep', food: 'Breakfast', features: ['Ferry Tickets', 'Hotels', 'Guided Tours'],
                overview: 'Explore the diverse vibes of Mykonos, Paros, and Naxos.',
                roadmap: [
                    { day: 1, title: 'Start in Athens', desc: 'Ferry to Mykonos.' },
                    { day: '2-3', title: 'Mykonos', desc: 'Enjoy the vibrant nightlife and beautiful beaches.' },
                    { day: '4-5', title: 'Paros', desc: 'Relax in traditional fishing villages.' },
                    { day: '6-7', title: 'Naxos', desc: 'Explore ancient ruins and large sandy beaches.' },
                    { day: 8, title: 'Return', desc: 'Ferry back to Athens.' }
                ]
            }
        ]
    },
    { 
        id: 9, 
        name: 'Thailand', 
        toursCount: 22, 
        img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600', 
        desc: 'Discover vibrant street life, ornate golden temples, and pristine tropical islands.',
        paragraphs: [
            "Thailand, known as the 'Land of Smiles', is a Southeast Asian gem that offers an intoxicating mix of chaotic cities, tranquil temples, and stunning beaches.",
            "Whether you are exploring the vibrant nightlife of Phuket, diving in Koh Tao, or relaxing in Koh Samui, Thailand offers a tropical escape."
        ],
        photos: [
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600',
            'https://images.unsplash.com/photo-1531737212413-667205e1cda7?w=600',
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600'
        ],
        tours: [
            { 
                id: 901, name: 'Bangkok City & Temples', duration: '4 Days', price: '$500', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400',
                dates: 'All Year', food: 'Breakfast & Street Food Tour', features: ['Local Guide', 'Tuk-Tuk Rides', 'Hotel'],
                overview: 'Dive into the energetic capital city with its ornate palaces and bustling markets.',
                roadmap: [
                    { day: 1, title: 'Arrive in Bangkok', desc: 'Evening street food walking tour.' },
                    { day: 2, title: 'Grand Palace', desc: 'Visit Wat Phra Kaew and Wat Pho.' },
                    { day: 3, title: 'Floating Market', desc: 'A day trip to Damnoen Saduak floating market.' },
                    { day: 4, title: 'Departure', desc: 'Transfer to Suvarnabhumi Airport.' }
                ]
            },
            { 
                id: 902, name: 'Chiang Mai Jungle Trek', duration: '5 Days', price: '$650', img: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?w=400',
                dates: 'Nov - Feb', food: 'Most Meals Included', features: ['Trek Guide', 'Homestay', 'Elephant Sanctuary'],
                overview: 'Experience the lush mountains of Northern Thailand and ethical elephant encounters.',
                roadmap: [
                    { day: 1, title: 'Chiang Mai', desc: 'Explore the old city temples.' },
                    { day: '2-3', title: 'Jungle Trekking', desc: 'Hike to remote hill tribe villages.' },
                    { day: 4, title: 'Elephant Sanctuary', desc: 'Feed and bathe rescued elephants.' },
                    { day: 5, title: 'Departure', desc: 'End of your northern adventure.' }
                ]
            },
            { 
                id: 903, name: 'Phuket Island Retreat', duration: '7 Days', price: '$950', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
                dates: 'Nov - Apr', food: 'Breakfast', features: ['Beachfront Resort', 'Boat Tour', 'Transfers'],
                overview: 'Unwind on the pristine beaches and islands of the Andaman Sea.',
                roadmap: [
                    { day: 1, title: 'Welcome to Phuket', desc: 'Check into your beach resort.' },
                    { day: '2-3', title: 'Beach Relaxation', desc: 'Enjoy the sun, sand, and local seafood.' },
                    { day: 4, title: 'Phi Phi Islands', desc: 'Speedboat tour to stunning limestone bays.' },
                    { day: '5-6', title: 'Explore or Relax', desc: 'Optional trips to James Bond Island.' },
                    { day: 7, title: 'Departure', desc: 'Fly out of Phuket.' }
                ]
            }
        ]
    }
];

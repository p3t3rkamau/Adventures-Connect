export interface Safari {
  id: string;
  title: string;
  country: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  category: 'luxury' | 'mid-range' | 'budget';
  experience: 'honeymoon' | 'family' | 'adventure' | 'wildlife';
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
  pricing: {
    lowSeason: { solo: number; twoPersons: number; group: number };
    highSeason: { solo: number; twoPersons: number; group: number };
  };
  accommodation: string[];
  gallery: string[];
}

export const safaris: Safari[] = [
  {
    id: 'masai-mara-3-days',
    title: '3 Days Masai Mara Safari',
    country: 'kenya',
    duration: '3 Days',
    price: 850,
    description: 'Experience the magic of Masai Mara with incredible wildlife viewing and stunning landscapes.',
    image: 'https://images.unsplash.com/photo-1724581777107-c132d05753a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMG1hcmElMjB3aWxkbGlmZSUyMHNhZmFyaXxlbnwxfHx8fDE3NzIzNTAwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'mid-range',
    experience: 'wildlife',
    highlights: [
      'Big Five game viewing',
      'Wildebeest migration (seasonal)',
      'Masai cultural visit',
      'Sunset game drives'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Masai Mara',
        description: 'Depart Nairobi in the morning and drive to Masai Mara National Reserve. Arrive in time for lunch at your lodge. Afternoon game drive in the reserve. Dinner and overnight at the lodge.'
      },
      {
        day: 2,
        title: 'Full Day Masai Mara',
        description: 'Full day game viewing in Masai Mara with picnic lunch. Optional visit to a Masai village. Return to lodge for dinner and overnight.'
      },
      {
        day: 3,
        title: 'Masai Mara to Nairobi',
        description: 'Early morning game drive. Return to lodge for breakfast. Depart for Nairobi, arriving in the afternoon.'
      }
    ],
    included: [
      'Park entrance fees',
      'Accommodation',
      'All meals',
      'Game drives',
      'Professional driver/guide',
      'Transport in 4x4 safari vehicle'
    ],
    notIncluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Tips and gratuities',
      'Personal expenses',
      'Optional activities'
    ],
    pricing: {
      lowSeason: { solo: 1200, twoPersons: 850, group: 650 },
      highSeason: { solo: 1500, twoPersons: 1100, group: 900 }
    },
    accommodation: ['Mara Sopa Lodge', 'Ashnil Mara Camp', 'Similar mid-range lodges'],
    gallery: [
      'https://images.unsplash.com/photo-1724581777107-c132d05753a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMG1hcmElMjB3aWxkbGlmZSUyMHNhZmFyaXxlbnwxfHx8fDE3NzIzNTAwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1729796914745-6656569db42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwYWZyaWNhJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzcyMzUwMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1552635408-80ae6cd8edeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZWJyYSUyMHNhZmFyaSUyMGFmcmljYXxlbnwxfHx8fDE3NzIzNTAwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'masai-mara-nakuru-5-days',
    title: '5 Days Masai Mara + Lake Nakuru',
    country: 'kenya',
    duration: '5 Days',
    price: 1350,
    description: 'Combine the best of Kenya - Masai Mara wildlife and the pink flamingos of Lake Nakuru.',
    image: 'https://images.unsplash.com/photo-1669557673726-293309494c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMHNhZmFyaSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIzMTQ0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'mid-range',
    experience: 'wildlife',
    highlights: [
      'Big Five at Masai Mara',
      'Flamingos at Lake Nakuru',
      'Rhino sanctuary visit',
      'Diverse bird species'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Lake Nakuru',
        description: 'Pick up from Nairobi and drive to Lake Nakuru National Park. Game drive en route to your lodge. Overnight at Lake Nakuru.'
      },
      {
        day: 2,
        title: 'Lake Nakuru to Masai Mara',
        description: 'Morning game drive at Lake Nakuru. After lunch, depart for Masai Mara. Arrive in the evening. Dinner and overnight.'
      },
      {
        day: 3,
        title: 'Full Day Masai Mara',
        description: 'Full day exploring Masai Mara with picnic lunch. Evening return to lodge.'
      },
      {
        day: 4,
        title: 'Masai Mara Game Drives',
        description: 'Morning and afternoon game drives. Optional hot air balloon safari. Overnight at lodge.'
      },
      {
        day: 5,
        title: 'Masai Mara to Nairobi',
        description: 'Early morning game drive. Breakfast and drive back to Nairobi.'
      }
    ],
    included: [
      'Park entrance fees',
      'Accommodation',
      'All meals',
      'Game drives',
      'Professional driver/guide',
      'Transport in 4x4 safari vehicle'
    ],
    notIncluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Hot air balloon safari',
      'Tips and gratuities',
      'Personal expenses'
    ],
    pricing: {
      lowSeason: { solo: 1800, twoPersons: 1350, group: 1100 },
      highSeason: { solo: 2200, twoPersons: 1750, group: 1450 }
    },
    accommodation: ['Lake Nakuru Sopa Lodge', 'Mara Sopa Lodge', 'Similar lodges'],
    gallery: [
      'https://images.unsplash.com/photo-1669557673726-293309494c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMHNhZmFyaSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIzMTQ0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxlcGhhbnQlMjBzYWZhcml8ZW58MXx8fHwxNzcyMjM1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1645264206324-8146a951ef57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJhZmZlJTIwc3Vuc2V0JTIwYWZyaWNhfGVufDF8fHx8MTc3MjM1MDA5OXww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'serengeti-ngorongoro-6-days',
    title: '6 Days Serengeti & Ngorongoro',
    country: 'tanzania',
    duration: '6 Days',
    price: 1850,
    description: 'Explore the iconic Serengeti plains and the magnificent Ngorongoro Crater.',
    image: 'https://images.unsplash.com/photo-1560440293-855922f9cc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzdW5zZXQlMjBhZnJpY2F8ZW58MXx8fHwxNzcyMzUwMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'luxury',
    experience: 'wildlife',
    highlights: [
      'Serengeti National Park',
      'Ngorongoro Crater',
      'Great Migration (seasonal)',
      'Big Five viewing',
      'Olduvai Gorge visit'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Arusha',
        description: 'Arrive at Kilimanjaro Airport. Transfer to Arusha for overnight at a comfortable hotel.'
      },
      {
        day: 2,
        title: 'Arusha to Serengeti',
        description: 'After breakfast, drive to Serengeti National Park via Ngorongoro Conservation Area. Game drive en route. Overnight in Serengeti.'
      },
      {
        day: 3,
        title: 'Full Day Serengeti',
        description: 'Full day game drives in Serengeti. Witness the incredible wildlife and landscapes. Overnight at lodge.'
      },
      {
        day: 4,
        title: 'Serengeti to Ngorongoro',
        description: 'Morning game drive in Serengeti. After lunch, drive to Ngorongoro. Overnight on the crater rim.'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Tour',
        description: 'Descend into the crater for a full day of game viewing. Picnic lunch by the hippo pool. Ascend in late afternoon.'
      },
      {
        day: 6,
        title: 'Ngorongoro to Arusha',
        description: 'After breakfast, drive back to Arusha. Transfer to airport for departure.'
      }
    ],
    included: [
      'Airport transfers',
      'Park fees',
      'Accommodation',
      'All meals',
      'Game drives',
      'Professional guide',
      '4x4 safari vehicle with pop-up roof'
    ],
    notIncluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Tips',
      'Drinks at lodges',
      'Personal expenses'
    ],
    pricing: {
      lowSeason: { solo: 2800, twoPersons: 1850, group: 1450 },
      highSeason: { solo: 3400, twoPersons: 2350, group: 1950 }
    },
    accommodation: ['Serengeti Sopa Lodge', 'Ngorongoro Sopa Lodge', 'Arusha Coffee Lodge'],
    gallery: [
      'https://images.unsplash.com/photo-1560440293-855922f9cc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzdW5zZXQlMjBhZnJpY2F8ZW58MXx8fHwxNzcyMzUwMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1667550507974-cc647990b75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MjM1MDA5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1738508041350-03453c14811c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBqZWVwJTIwYWZyaWNhfGVufDF8fHx8MTc3MjM1MDA5OXww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'gorilla-trekking-rwanda-3-days',
    title: '3 Days Gorilla Trekking Rwanda',
    country: 'rwanda',
    duration: '3 Days',
    price: 2500,
    description: 'An unforgettable encounter with mountain gorillas in Volcanoes National Park.',
    image: 'https://images.unsplash.com/photo-1667504319000-8133f9021cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzcyMzUwMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'luxury',
    experience: 'adventure',
    highlights: [
      'Mountain gorilla trekking',
      'Volcanoes National Park',
      'Golden monkey tracking',
      'Visit Dian Fossey tomb',
      'Cultural experiences'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kigali',
        description: 'Arrive in Kigali. City tour including genocide memorial. Transfer to Volcanoes National Park. Overnight at lodge.'
      },
      {
        day: 2,
        title: 'Gorilla Trekking',
        description: 'Early morning gorilla trekking in Volcanoes National Park. Spend one hour with the gorillas. Return to lodge for relaxation.'
      },
      {
        day: 3,
        title: 'Golden Monkey Trek & Departure',
        description: 'Optional golden monkey trekking or cultural village visit. Transfer back to Kigali for departure.'
      }
    ],
    included: [
      'Gorilla trekking permit',
      'Park fees',
      'Accommodation',
      'All meals',
      'Airport transfers',
      'Professional guide',
      'Transport in 4x4 vehicle'
    ],
    notIncluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Golden monkey permit',
      'Tips',
      'Personal expenses'
    ],
    pricing: {
      lowSeason: { solo: 3200, twoPersons: 2500, group: 2200 },
      highSeason: { solo: 3500, twoPersons: 2800, group: 2500 }
    },
    accommodation: ['Mountain Gorilla View Lodge', 'Da Vinci Gorilla Lodge', 'Similar lodges'],
    gallery: [
      'https://images.unsplash.com/photo-1667504319000-8133f9021cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzcyMzUwMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1682773083915-5375145f99e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyd2FuZGElMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIzNTAwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1667550469774-295fd6849afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMHBlb3BsZSUyMGN1bHR1cmV8ZW58MXx8fHwxNzcyMzUwMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 'murchison-falls-uganda-4-days',
    title: '4 Days Murchison Falls Safari',
    country: 'uganda',
    duration: '4 Days',
    price: 1200,
    description: 'Discover the mighty Murchison Falls and abundant wildlife of Uganda.',
    image: 'https://images.unsplash.com/photo-1671830018944-eb7622e8b8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXJjaGlzb24lMjBmYWxscyUyMHVnYW5kYXxlbnwxfHx8fDE3NzIzNTAwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'mid-range',
    experience: 'adventure',
    highlights: [
      'Murchison Falls boat cruise',
      'Game drives',
      'Top of the Falls hike',
      'Nile River wildlife',
      'Budongo Forest chimp tracking'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kampala to Murchison Falls',
        description: 'Depart Kampala and drive to Murchison Falls National Park. Visit Ziwa Rhino Sanctuary en route. Arrive in the evening.'
      },
      {
        day: 2,
        title: 'Game Drive & Boat Safari',
        description: 'Morning game drive on the northern bank. Afternoon boat cruise to the base of the falls. Evening relaxation.'
      },
      {
        day: 3,
        title: 'Top of Falls & Chimp Tracking',
        description: 'Hike to the top of Murchison Falls. Optional chimp tracking in Budongo Forest. Return to lodge.'
      },
      {
        day: 4,
        title: 'Murchison to Kampala',
        description: 'Morning at leisure. Depart for Kampala after breakfast, arriving in the afternoon.'
      }
    ],
    included: [
      'Park entrance fees',
      'Accommodation',
      'All meals',
      'Game drives',
      'Boat safari',
      'Professional guide',
      'Transport in safari vehicle'
    ],
    notIncluded: [
      'International flights',
      'Visa fees',
      'Travel insurance',
      'Chimp tracking permit',
      'Tips',
      'Personal expenses'
    ],
    pricing: {
      lowSeason: { solo: 1600, twoPersons: 1200, group: 950 },
      highSeason: { solo: 1900, twoPersons: 1500, group: 1200 }
    },
    accommodation: ['Paraa Safari Lodge', 'Pakuba Safari Lodge', 'Similar lodges'],
    gallery: [
      'https://images.unsplash.com/photo-1671830018944-eb7622e8b8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXJjaGlzb24lMjBmYWxscyUyMHVnYW5kYXxlbnwxfHx8fDE3NzIzNTAwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1657658153344-3fa560150950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1Z2FuZGElMjBzYWZhcmklMjBuYXR1cmV8ZW58MXx8fHwxNzcyMzUwMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxlcGhhbnQlMjBzYWZhcml8ZW58MXx8fHwxNzcyMjM1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
];

export const destinations = [
  {
    id: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    description: 'The heart of safari adventures with iconic Masai Mara and diverse landscapes.',
    image: 'https://images.unsplash.com/photo-1669557673726-293309494c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMHNhZmFyaSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIzMTQ0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Masai Mara', 'Amboseli', 'Lake Nakuru', 'Samburu']
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    flag: '🇹🇿',
    description: 'Home to Serengeti, Ngorongoro Crater, and Mount Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1560440293-855922f9cc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmdldGklMjBzdW5zZXQlMjBhZnJpY2F8ZW58MXx8fHwxNzcyMzUwMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Zanzibar']
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    flag: '🇷🇼',
    description: 'The land of a thousand hills and home to mountain gorillas.',
    image: 'https://images.unsplash.com/photo-1682773083915-5375145f99e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyd2FuZGElMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIzNTAwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Volcanoes NP', 'Nyungwe Forest', 'Lake Kivu', 'Akagera NP']
  },
  {
    id: 'uganda',
    name: 'Uganda',
    flag: '🇺🇬',
    description: 'The Pearl of Africa with stunning waterfalls and primate tracking.',
    image: 'https://images.unsplash.com/photo-1657658153344-3fa560150950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1Z2FuZGElMjBzYWZhcmklMjBuYXR1cmV8ZW58MXx8fHwxNzcyMzUwMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Murchison Falls', 'Bwindi Forest', 'Queen Elizabeth NP', 'Jinja']
  },
  {
    id: 'South Africa',
    name: 'South Africa',
    flag: '🇿🇦',
    description: 'The Rainbow Nation with diverse cultures and stunning landscapes.',
    image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/cape-town-aerial-view-greenpoint-stadium.jpg',
    highlights: ['Kruger NP', 'Table Mountain', 'Cape Winelands', 'Garden Route']
  }
  
  
];

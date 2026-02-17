// Sample data for packages
export const packages = [
  {
    id: 1,
    name: 'J&K Bliss',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1579613832125-5d34a13e98a3?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 245,
    tag: 'Best Seller',
    tagColor: 'from-emerald-500 to-emerald-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Shikara'],
  },
  {
    id: 2,
    name: 'Honeymoon Special',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    groupSize: '2',
    rating: '4.9',
    reviews: 189,
    tag: 'Romantic',
    tagColor: 'from-rose-500 to-pink-600',
    includes: ['Luxury Hotel', 'All Meals', 'Houseboat', 'Gondola'],
  },
  {
    id: 3,
    name: 'Grand J&K',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Leh'],
    groupSize: '2-10',
    rating: '5.0',
    reviews: 312,
    tag: 'Premium',
    tagColor: 'from-amber-500 to-orange-600',
    includes: ['5-Star', 'All Meals', 'Flights', 'Guide'],
  },
  {
    id: 4,
    name: 'Family Fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-8',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-sky-500 to-blue-600',
    includes: ['Family Rooms', 'All Meals', 'Pony Ride', 'Shikara'],
  },
  {
    id: 5,
    name: 'Adventure Explorer',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    destinations: ['Srinagar', 'Sonmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 156,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Camp + Hotel', 'All Meals', '4x4 Cab', 'Trek'],
  },
  {
    id: 6,
    name: 'Budget J&K',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg'],
    groupSize: '2-4',
    rating: '4.6',
    reviews: 320,
    tag: 'Budget',
    tagColor: 'from-teal-500 to-cyan-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Sightseeing'],
  },
];

// API functions
export const getPackages = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(packages);
    }, 500);
  });
};

export const getPackageByName = async (name: string) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const decodedName = name.replace(/-/g, ' ');
      const foundPackage = packages.find(
        (pkg) => pkg.name.toLowerCase() === decodedName
      );
      resolve(foundPackage || null);
    }, 500);
  });
};

export const searchPackages = async (query: string) => {
  // Simulate API call with search
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = packages.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(query.toLowerCase()) ||
          pkg.destinations.some((dest) =>
            dest.toLowerCase().includes(query.toLowerCase())
          )
      );
      resolve(results);
    }, 500);
  });
};

// Sample data for destinations
export const destinations = [
  {
    id: 1,
    name: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=800&q=80',
    description: 'The summer capital of Jammu and Kashmir, known for its beautiful Dal Lake and Mughal gardens.',
    rating: '4.7',
    reviews: 1245,
    tag: 'Popular',
  },
  {
    id: 2,
    name: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    description: 'Famous for its skiing resorts and the Gulmarg Gondola, one of the highest cable cars in the world.',
    rating: '4.8',
    reviews: 987,
    tag: 'Adventure',
  },
  {
    id: 3,
    name: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1545569341-9b35c9de6f7d?w=800&q=80',
    description: 'A hill station known for its scenic beauty, golf courses, and as a base camp for Amarnath Yatra.',
    rating: '4.6',
    reviews: 856,
    tag: 'Scenic',
  },
  {
    id: 4,
    name: 'Sonamarg',
    image: 'https://images.unsplash.com/photo-1590845947676-fa2576f401d4?w=800&q=80',
    description: 'Known as the \'Meadow of Gold\', it serves as a base for the Amarnath Yatra and offers stunning Himalayan views.',
    rating: '4.5',
    reviews: 723,
    tag: 'Trekking',
  },
];

// Sample data for hotels
export const hotels = [
  {
    id: 1,
    name: 'The Lalit Grand Palace',
    location: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    rating: '4.8',
    price: 12000,
    amenities: ['Free WiFi', 'Restaurant', 'Spa', 'Lake View'],
  },
  {
    id: 2,
    name: 'Khyber Himalayan Resort & Spa',
    location: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    rating: '4.9',
    price: 18000,
    amenities: ['Ski-in/Ski-out', 'Spa', 'Fine Dining', 'Mountain View'],
  },
  {
    id: 3,
    name: 'The Pahalgam Hotel',
    location: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    rating: '4.6',
    price: 9500,
    amenities: ['Garden', 'Restaurant', 'Room Service', 'Valley View'],
  },
];

// Sample data for cabs
export const cabs = [
  {
    id: 1,
    type: 'Sedan',
    name: 'Toyota Etios',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    capacity: 4,
    pricePerKm: 15,
    features: ['AC', 'Music', 'Comfortable Seats'],
  },
  {
    id: 2,
    type: 'SUV',
    name: 'Toyota Innova Crysta',
    image: 'https://images.unsplash.com/photo-1580273916551-e352fca7cce5?w=800&q=80',
    capacity: 7,
    pricePerKm: 20,
    features: ['AC', 'Extra Luggage Space', 'Comfortable for Long Drives'],
  },
  {
    id: 3,
    type: 'Luxury',
    name: 'Mercedes-Benz E-Class',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    capacity: 3,
    pricePerKm: 35,
    features: ['Premium Interior', 'WiFi', 'Refreshments', 'Professional Driver'],
  },
];

// API functions for other entities
export const getDestinations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(destinations);
    }, 500);
  });
};

export const getHotels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hotels);
    }, 500);
  });
};

export const getCabs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cabs);
    }, 500);
  });
};

// Search function for all entities
export const searchAll = async (query: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = {
        packages: packages.filter(
          (pkg) =>
            pkg.name.toLowerCase().includes(query.toLowerCase()) ||
            pkg.destinations.some((dest) =>
              dest.toLowerCase().includes(query.toLowerCase())
            )
        ),
        destinations: destinations.filter(
          (dest) =>
            dest.name.toLowerCase().includes(query.toLowerCase()) ||
            dest.description.toLowerCase().includes(query.toLowerCase())
        ),
        hotels: hotels.filter(
          (hotel) =>
            hotel.name.toLowerCase().includes(query.toLowerCase()) ||
            hotel.location.toLowerCase().includes(query.toLowerCase())
        ),
        cabs: cabs.filter((cab) =>
          cab.name.toLowerCase().includes(query.toLowerCase()) ||
          cab.type.toLowerCase().includes(query.toLowerCase())
        ),
      };
      resolve(results);
    }, 500);
  });
};

import { useState, useContext } from 'react';
import { Star, MapPin, Wifi, Utensils, Mountain, Car, Coffee, Building, Phone } from 'lucide-react';
import { CallbackContext } from '../components/Layout';

const hotels = [
  {
    name: 'The LaLiT Grand Palace Srinagar',
    location: 'Gupkar Rd, Srinagar, Jammu and Kashmir 190001',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430a2aa8d?w=800&q=80',
    rating: 4.9,
    amenities: ['Wifi', 'Restaurant', 'Spa', 'Pool', 'Room Service'],
    type: 'Luxury',
    desc: 'Iconic 5-star luxury palace hotel on the banks of Dal Lake with world-class amenities.'
  },
  {
    name: 'Welcomhotel by ITC Hotels, Pine N Peak, Pahalgam',
    location: 'Aru Road, Near Amusement Park, Pahalgam, Jammu and Kashmir 192126',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    rating: 4.8,
    amenities: ['Mountain View', 'Restaurant', 'Spa', 'Adventure Desk'],
    type: 'Luxury',
    desc: 'Premium ITC hotel nestled in the pristine valleys of Pahalgam with breathtaking views.'
  },
  {
    name: 'The Khyber Himalayan Resort & Spa',
    location: 'Pinnacle Site, Near Gulmarg Gondola, Hotel Khyber Road, Forest Block, Gulmarg, Baramulla, Jammu and Kashmir 193403',
    image: 'https://images.unsplash.com/photo-1571003706349-9db9d2b9e9b1?w=800&q=80',
    rating: 4.9,
    amenities: ['Ski Access', 'Restaurant', 'Spa', 'Bar', 'Heated Pool'],
    type: 'Luxury',
    desc: 'Ultra-luxury ski-in/ski-out resort with world-class spa and panoramic Himalayan views.'
  },
  {
    name: 'Radisson Collection Hotel & Spa, Riverfront Srinagar',
    location: 'Near Silk Factory Road, Jehlum Bund, Rajbagh, Srinagar, Jammu and Kashmir 190008',
    image: 'https://images.unsplash.com/photo-1618821881168-1c2bccce6c54?w=800&q=80',
    rating: 4.8,
    amenities: ['River View', 'Restaurant', 'Spa', 'Wifi', 'Room Service'],
    type: 'Luxury',
    desc: 'Elegant riverfront luxury hotel with stunning Jhelum river views and premium amenities.'
  },
  {
    name: 'TAJ DAL VIEW BY HOTEL TAJ',
    location: 'Kralsangri, Brein, Srinagar, Jammu and Kashmir 191121',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    rating: 4.7,
    amenities: ['Lake View', 'Restaurant', 'Traditional Cuisine', 'Shikara Ride'],
    type: 'Luxury',
    desc: 'Taj hospitality with spectacular Dal Lake views and authentic Kashmiri experiences.'
  }
];

export default function HotelsPage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [filter, setFilter] = useState('All');

  const filteredHotels = hotels.filter(hotel => {
    const matchesType = filter === 'All' || hotel.type === filter;
    return matchesType;
  });

  const hotelTypes = ['All', ...new Set(hotels.map(hotel => hotel.type))];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="pt-16 pb-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400">
                <Building className="h-4 w-4" />
                Premium Stays
              </span>
              <h1 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Luxury Accommodations
                <span className="block gradient-text">in Paradise</span>
              </h1>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-slate-300 mb-2">Hotel Type</label>
            <div className="flex flex-wrap gap-2">
              {hotelTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === type
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.name}
                className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-slate-700"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-sm font-medium text-white">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {hotel.rating}
                  </div>

                  {/* Type tag */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-amber-500/90 px-3 py-1 text-xs font-bold text-white">
                      {hotel.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white font-playfair">{hotel.name}</h3>
                      <div className="flex items-center gap-1.5 text-emerald-400 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-400">{hotel.desc}</p>

                  {/* Amenities */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hotel.amenities.map(amenity => (
                      <span 
                        key={amenity} 
                        className="flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] text-slate-300"
                      >
                        {amenity === 'Wifi' && <Wifi className="h-3 w-3" />}
                        {amenity === 'Restaurant' && <Utensils className="h-3 w-3" />}
                        {amenity === 'Ski Access' && <Mountain className="h-3 w-3" />}
                        {amenity === 'Car Parking' && <Car className="h-3 w-3" />}
                        {amenity === 'Coffee Shop' && <Coffee className="h-3 w-3" />}
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onRequestCallback()}
                    className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50"
                  >
                    <Phone className="h-4 w-4" />
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredHotels.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-slate-400">No hotels match your filters</h3>
              <p className="mt-2 text-slate-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
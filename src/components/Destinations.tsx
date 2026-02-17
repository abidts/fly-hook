import { useState, useRef } from 'react';
import { MapPin, Phone, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Props {
  onRequestCallback: (subject?: string) => void;
}

const destinations = [
  {
    name: 'Gulmarg',
    tagline: 'Meadow of Flowers',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
    desc: 'World-class skiing destination and the highest gondola ride in Asia.',
    rating: '4.9',
    highlight: 'Ski Paradise',
  },
  {
    name: 'Pahalgam',
    tagline: 'Valley of Shepherds',
    image: 'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80',
    desc: 'A pristine valley with lush meadows, rivers, and the starting point of Amarnath Yatra.',
    rating: '4.8',
    highlight: 'River Valley',
  },
  {
    name: 'Sonmarg',
    tagline: 'Meadow of Gold',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    desc: 'Gateway to Ladakh with glaciers, meadows, and the stunning Thajiwas Glacier.',
    rating: '4.9',
    highlight: 'Golden Meadows',
  },
  {
    name: 'Dal Lake',
    tagline: 'Jewel of Srinagar',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
    desc: 'Iconic houseboat stays, Shikara rides, and floating gardens on crystal waters.',
    rating: '4.9',
    highlight: 'Houseboat Stay',
  },
  {
    name: 'Leh Ladakh',
    tagline: 'Land of High Passes',
    image: 'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=800&q=80',
    desc: 'Breathtaking moonscapes, ancient monasteries, and the highest motorable passes.',
    rating: '5.0',
    highlight: 'Adventure Hub',
  },
  {
    name: 'Srinagar',
    tagline: 'City of Gardens',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    desc: 'Mughal gardens, historic old city, and the famous handicraft bazaars.',
    rating: '4.7',
    highlight: 'Heritage City',
  },
];

export default function Destinations({ onRequestCallback }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 260 : 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="destinations" className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6 reveal">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 text-sm font-medium text-sky-400">
              <Sparkles className="h-4 w-4" />
              Top Destinations
            </span>
            <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Explore Enchanting
              <span className="block gradient-text">Destinations</span>
            </h2>
          </div>
          
          {/* Navigation arrows for desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white transition-all hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/30 tap-scale"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white transition-all hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/30 tap-scale"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div 
          ref={scrollRef}
          className="mt-8 sm:mt-12 flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:snap-none"
        >
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="group relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-auto overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-slate-700 snap-start tap-scale"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {/* Rating badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-sm font-medium text-white">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {dest.rating}
                </div>
                
                {/* Highlight tag */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="rounded-full bg-sky-500/90 px-3 py-1 text-[10px] sm:text-xs font-bold text-white">
                    {dest.highlight}
                  </span>
                </div>
                
                {/* Location & tagline */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                  <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-xs sm:text-sm font-medium">{dest.tagline}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{dest.name}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5">
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{dest.desc}</p>
                
                {/* CTA Button */}
                <button
                  onClick={() => onRequestCallback(`${dest.name} Trip`)}
                  className={`mt-4 w-full flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all tap-scale ${
                    hoveredIndex === index
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  Request Call Back
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 lg:hidden">
          <ChevronLeft className="h-4 w-4 swipe-hint" style={{ animationDirection: 'reverse' }} />
          <span>Swipe to explore destinations</span>
          <ChevronRight className="h-4 w-4 swipe-hint" />
        </div>
      </div>
    </section>
  );
}

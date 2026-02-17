import { useRef, useEffect, useState } from 'react';
import { Clock, MapPin, Users, Star, Check, Phone, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'J&K Bliss',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 245,
    tag: 'Best Seller',
    tagColor: 'from-emerald-500 to-emerald-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Shikara'],
    slug: 'jk-bliss',
  },
  {
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
    slug: 'honeymoon-special',
  },
  {
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
    slug: 'grand-jk',
  },
  {
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
    slug: 'family-fun',
  },
  {
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
    slug: 'adventure-explorer',
  },
  {
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
    slug: 'budget-jk',
  },
  {
    name: 'Short & Adventure Trip',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Tangmarg'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 164,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Hotel', 'Meal', 'Transfer', 'Sightseeing', 'Activities'],
    slug: 'short-adventure-trip',
  },
];

export default function PackagesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCard, setActiveCard] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Calculate active card for mobile indicator
      const cardWidth = 300;
      const newActive = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(newActive, packages.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 280 : 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="pt-16 pb-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400">
                <Sparkles className="h-4 w-4" />
                Tour Packages
              </span>
              <h1 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Handcrafted Travel
                <span className="block gradient-text">Packages for You</span>
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400">
                Choose from our curated packages. Contact us for custom itineraries!
              </p>
            </div>

            {/* Desktop Slider Nav */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all tap-scale ${
                  canScrollLeft
                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30'
                    : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all tap-scale ${
                  canScrollRight
                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30'
                    : 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div
            ref={scrollRef}
            className="mt-8 sm:mt-12 flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth"
          >
            {packages.map((pkg, index) => (
              <Link
                key={pkg.name}
                to={`/packages/${pkg.slug}`}
                className="group relative flex-shrink-0 w-[280px] sm:w-[360px] overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-500 hover:border-slate-700 snap-start tap-scale"
                style={{
                  transform: activeCard === index ? 'scale(1)' : 'scale(0.98)',
                  opacity: activeCard === index ? 1 : 0.8,
                }}
              >
                {/* Image */}
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  {/* Tag */}
                  <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-gradient-to-r ${pkg.tagColor} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                    {pkg.tag}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-white">{pkg.rating}</span>
                  </div>

                  {/* Package name */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair">{pkg.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">
                  {/* Duration & Group */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-emerald-400" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-sky-400" />
                      {pkg.groupSize} People
                    </span>
                  </div>

                  {/* Destinations */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pkg.destinations.slice(0, 3).map((d) => (
                      <span key={d} className="flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] sm:text-xs text-slate-300">
                        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-400" />
                        {d}
                      </span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] sm:text-xs text-emerald-400 font-medium">
                        +{pkg.destinations.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {pkg.includes.map((item) => (
                      <span key={item} className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400">
                        <Check className="h-3 w-3 text-emerald-400" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div
                    className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 active:scale-[0.98] tap-scale btn-ripple"
                  >
                    <Phone className="h-4 w-4" />
                    Request a Call Back
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = 280;
                    scrollRef.current.scrollTo({
                      left: i * cardWidth,
                      behavior: 'smooth',
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === activeCard
                    ? 'w-6 h-2 bg-emerald-500'
                    : 'w-2 h-2 bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
            <ChevronLeft className="h-4 w-4 swipe-hint sm:hidden" style={{ animationDirection: 'reverse' }} />
            <span className="sm:hidden">Swipe to explore</span>
            <span className="hidden sm:inline">Use arrows or scroll to explore more packages</span>
            <ChevronRight className="h-4 w-4 swipe-hint sm:hidden" />
          </div>
        </div>
      </main>
    </div>
  );
}

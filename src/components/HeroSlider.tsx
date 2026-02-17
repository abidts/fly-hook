import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { ChevronLeft, ChevronRight, Phone, Play, Sparkles } from 'lucide-react';
import { CallbackContext } from './Layout';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1768147765107-5eef8e032a62?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Dal Lake with houseboats
    title: 'Paradise on Earth',
    subtitle: 'J&K Awaits You',
    desc: 'Embark on an unforgettable journey through majestic valleys, pristine lakes, and snow-capped mountains.',
    cta: 'Plan Your Trip',
  },
  {
    image: 'https://images.unsplash.com/photo-1651509094074-e8acaeb84d8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Gulmarg snow landscape
    title: 'Gulmarg Magic',
    subtitle: 'Ski & Snow Adventures',
    desc: 'Experience world-class skiing, Asia\'s highest gondola, and breathtaking alpine meadows.',
    cta: 'Explore Gulmarg',
  },
  {
    image: 'https://images.unsplash.com/photo-1599493867961-1bc9808137a9?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Pahalgam landscape
    title: 'Pahalgam Beauty',
    subtitle: 'Nature\'s Masterpiece',
    desc: 'Lush green meadows, crystal rivers, pony rides, and the gateway to Amarnath.',
    cta: 'Discover Pahalgam',
  },
  {
    image: 'https://images.unsplash.com/photo-1701957494296-a42832ab0a17?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Sonmarg landscape
    title: 'Golden Sonmarg',
    subtitle: 'Gateway to Ladakh',
    desc: 'Golden meadows, glaciers, and landscapes that feel like paintings come to life.',
    cta: 'Visit Sonmarg',
  },
  {
    image: 'https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Kashmir valley landscape
    title: 'Kashmir Valley',
    subtitle: 'Land of Serenity',
    desc: 'Experience the tranquility of Kashmir\'s legendary valleys and pristine nature.',
    cta: 'Explore Kashmir',
  },
];

export default function HeroSlider() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section 
      id="home"
      ref={sliderRef}
      className="relative h-[calc(100svh-4rem)] min-h-[600px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover ${i === current ? 'img-zoom-in' : ''}`}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-5 sm:left-10 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-emerald-500/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-40 right-5 sm:right-10 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-sky-500/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-16">
          <div className="max-w-2xl lg:max-w-3xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === current
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
              >
                {i === current && (
                  <>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-sm mb-4 sm:mb-6 animate-fade-in-down">
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 fill-emerald-400 text-emerald-400" />
                      <span>{slide.subtitle}</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg leading-[1.1] animate-fade-in-up">
                      <span className="block">{slide.title.split(' ')[0]}</span>
                      <span className="gradient-text-animated">{slide.title.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 text-shadow leading-relaxed max-w-xl animate-fade-in-up delay-150">
                      {slide.desc}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-fade-in-up delay-300">
                      <button
                        onClick={() => onRequestCallback(slide.cta)}
                        className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl sm:rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-2xl shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105 tap-scale btn-ripple"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Request a Call Back</span>
                      </button>
                      <a
                        href="#packages"
                        className="flex items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-white/20 bg-white/5 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 tap-scale"
                      >
                        <Play className="h-5 w-5 text-emerald-400" />
                        {slide.cta}
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Slide Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 tap-scale"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 tap-scale"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>


      {/* Swipe hint for mobile */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 sm:hidden flex items-center gap-2 text-xs text-white/50">
        <ChevronLeft className="h-4 w-4 swipe-hint" style={{ animationDirection: 'reverse' }} />
        <span>Swipe to explore</span>
        <ChevronRight className="h-4 w-4 swipe-hint" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-20 sm:bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-[6000ms] ease-linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}

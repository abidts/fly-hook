import { useEffect } from 'react';
import HeroSlider from './components/HeroSlider';
import Cabs from './components/Cabs';
import Hotels from './components/Hotels';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomNav from './components/MobileBottomNav';
import TourPackages from './components/TourPackages';

export default function App() {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-slate-950">
      <HeroSlider />
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
              Our Popular Tour Packages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          </div>
          <TourPackages />
        </div>
      </section>

      <section className="py-16 sm:py-24 relative bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
              Car Rentals & Cabs
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Comfortable and reliable transportation for all your travel needs in Kashmir
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-4" />
          </div>
          <Cabs />
        </div>
      </section>

      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
              Premium Hotels & Stays
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Luxury hotels, houseboats, and resorts for an unforgettable Kashmir experience
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-4" />
          </div>
          <Hotels />
        </div>
      </section>

      <ContactSection />

      {/* Desktop only */}
      <ScrollToTop />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}

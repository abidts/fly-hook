import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  onRequestCallback: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Cabs', href: '/cabs' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Adventure', href: '/adventure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ onRequestCallback }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-2' : 'bg-slate-950/90 backdrop-blur-xl py-3 sm:py-4'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 shadow-lg shadow-emerald-500/30 transition-all group-hover:scale-110 group-hover:shadow-emerald-500/50">
                <Mountain className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div>
                <span className="block font-playfair text-base sm:text-lg font-bold text-white leading-tight">FLY HOOK</span>
                <span className="block font-dancing text-xs sm:text-sm text-emerald-400 leading-tight -mt-0.5">Tour & Travel</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300 group-hover:left-1 group-hover:w-[calc(100%-8px)]" />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onRequestCallback}
                className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105 tap-scale"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Request Call Back</span>
                <span className="md:hidden">Call Back</span>
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 tap-scale"
                aria-label="Toggle menu"
              >
                <div className={`transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}>
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 z-[45] lg:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col pt-20 pb-8 px-6 transition-all duration-500 ${menuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium text-white transition-all hover:bg-emerald-500/10 tap-scale animate-fade-in-up`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{link.label}</span>
                <ChevronRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="space-y-3 pt-4 border-t border-slate-800 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <button
              onClick={() => {
                setMenuOpen(false);
                onRequestCallback();
              }}
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/30 tap-scale"
            >
              <Phone className="h-5 w-5" />
              Request a Call Back
            </button>

            <p className="text-center text-xs text-slate-500">
              Our experts are available 24/7 to help you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

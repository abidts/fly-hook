import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <Mail className="h-4 w-4" />
            Get in Touch
          </span>
          <h1 className="mt-4 font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Have questions about your Kashmir travel plans? Our travel experts are here to help you plan the perfect trip.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Details - Centered */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all text-center group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <a href="tel:+917006277077" className="text-slate-400 hover:text-emerald-400 transition-colors">
              +91 70062 77077
            </a>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all text-center group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <a href="mailto:flyhooktourtravel@gmail.com" className="text-slate-400 hover:text-amber-400 transition-colors break-all">
              flyhooktourtravel@gmail.com
            </a>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all text-center group">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-slate-400">
              Syedapora Humchi, Hazratbal<br />
              Srinagar, J&K 190006
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Business Hours</h4>
              <p className="text-slate-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-slate-400 text-sm">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">24/7 Support</h4>
              <p className="text-slate-400 text-sm">Emergency assistance for booked customers</p>
              <p className="text-slate-400 text-sm">Available on WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Call Back CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-8 sm:p-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-400">
              Priority Support
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              Request a Call Back
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Share your details and our travel expert will call you within 30 minutes to plan your Kashmir trip.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-callback-from-contact'))}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

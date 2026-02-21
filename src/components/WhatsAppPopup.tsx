import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '916006500852';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I\'m interested in Kashmir tour packages. Please share more details.')}`;

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={openWhatsApp}
        className="flex items-center justify-center rounded-full w-14 h-14 bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-bounce"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-green-600">
          ✓
        </span>
      </button>
    </div>
  );
}

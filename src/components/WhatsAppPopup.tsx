import { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react';

const WHATSAPP_NUMBER = '917006277077';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I\'m interested in Kashmir tour packages. Please share more details.')}`;

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div 
          className={`bg-white rounded-t-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isMinimized ? 'h-12' : 'h-[500px] w-80'}`}
        >
          {/* Header */}
          <div 
            className="bg-green-500 text-white px-4 py-3 flex justify-between items-center cursor-pointer"
            onClick={toggleChat}
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">WhatsApp Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleMinimize}
                className="p-1 rounded-full hover:bg-green-600 transition-colors"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="p-1 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          
          {/* Chat Content */}
          {!isMinimized && (
            <div className="h-[calc(100%-48px)]">
              <iframe
                src={WHATSAPP_URL}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="WhatsApp Chat"
              />
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center rounded-full w-14 h-14 bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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

# FLY HOOK TOUR AND TRAVEL - Kashmir Travel Website

A modern, responsive travel website for exploring the beautiful destinations of Jammu & Kashmir, built with React, Vite, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Hero Slider**: Dynamic image carousel showcasing Kashmir's beauty
- **Tour Packages**: Browse and explore curated tour packages
- **Car Rentals & Cabs**: Book transportation services
- **Contact Forms**: Easy inquiry and booking forms
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

### Interactive Elements
- **WhatsApp Integration**: Floating chat button with popup window (appears after 3 seconds)
- **Mobile Bottom Navigation**: Quick access on mobile devices
- **Smooth Animations**: Intersection Observer for scroll animations
- **Callback Popup**: Request callback functionality

### Pages
- **Home Page**: Main landing with hero, packages, and services
- **Cabs Page**: Dedicated page for car rentals and cab services
- **Navigation**: Clean navbar with links to all sections

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17
- **Routing**: React Router DOM 7.13.0
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kashmir-travel-website-build
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
kashmir-travel-website-build/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── CallbackPopup.tsx
│   │   ├── Cabs.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── MobileBottomNav.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preloader.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── TourPackages.tsx
│   │   └── WhatsAppPopup.tsx
│   ├── pages/            # Page components
│   │   └── CabsPage.tsx
│   ├── assets/           # Images and static files
│   ├── App.tsx          # Main App component
│   └── main.tsx         # App entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Custom Components

### WhatsAppPopup
- Floating WhatsApp button appears after 3 seconds
- Popup window with minimize/maximize functionality
- Embedded WhatsApp Web interface
- Positioned in bottom-right corner

### HeroSlider
- Auto-rotating image carousel
- Smooth transitions
- Responsive design

### TourPackages & Cabs
- Dynamic content display
- Callback functionality
- Responsive grid layout

## 🔧 Configuration

### Tailwind CSS
- Uses Tailwind CSS v4.1.17
- Custom animations and transitions
- Responsive design utilities

### TypeScript
- Full TypeScript support
- Type-safe components
- Interface definitions for props

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized navigation for mobile

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_WHATSAPP_NUMBER=917006277077
VITE_CONTACT_PHONE=+917006277077
VITE_CONTACT_EMAIL=info@flyhooktours.com
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build files will be in the `dist` directory.

### Deploy to Static Hosting
The project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Company**: FLY HOOK TOUR AND TRAVEL
- **WhatsApp**: +91 7006277077
- **Email**: info@flyhooktours.com

## 📄 License

This project is proprietary and belongs to FLY HOOK TOUR AND TRAVEL.

---

**Built with ❤️ for exploring the paradise of Kashmir**

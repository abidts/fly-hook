import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-6">
          <h2 className="text-2xl font-bold text-white text-center">Get in Touch</h2>
          <p className="text-emerald-100 text-center mt-2">Fill out the form below and we'll get back to you shortly</p>
        </div>
        
        <div className="p-2">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSejKmlWTIXyMOc-_reDhDOV61rSS6o92UrNz3kaB8bP7UpTtg/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="rounded-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

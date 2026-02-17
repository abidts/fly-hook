import { useState } from 'react';
import { X, Phone, Mail, User, Send, CheckCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdweNhOrnaNXdVOJpwAu1jO5jhBvi9t15SWrNW1tZhJFZA4AQ/formResponse';

// Google Form field IDs
const FIELD_FULL_NAME = 'entry.370871562';
const FIELD_EMAIL = 'entry.504321316';
const FIELD_PHONE = 'entry.1367742169';
// Optional subject mapping to message field in the Google Form
const FIELD_MESSAGE = 'entry.1505399963';

export default function CallbackPopup({ isOpen, onClose, subject }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      const data = new FormData();
      data.append(FIELD_FULL_NAME, formData.name);
      data.append(FIELD_EMAIL, formData.email);
      data.append(FIELD_PHONE, formData.phone);
      if (subject) data.append(FIELD_MESSAGE, subject);
      data.append('fvv', '1');
      data.append('partialResponse', '[]');
      data.append('pageHistory', '0');
      data.append('fbzx', `${Date.now()}`);

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        onClose();
      }, 2200);
    } catch (err) {
      // Silently fail but close submitting state so the user can retry
      console.error('Failed to submit callback form', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 animate-glow-pulse">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white font-playfair mb-2">Thank You!</h3>
            <p className="text-slate-400">
              Our travel expert will call you back within 30 minutes.
            </p>
          </div>
        ) : (
          <>
            <div className="p-6 sm:p-8 border-b border-slate-800">
              <h3 className="text-2xl font-bold text-white font-playfair">
                Request a Call Back
              </h3>
              <p className="text-slate-400 mt-2">
                Fill in your details and we'll call you within 30 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                {submitting ? 'Sending...' : 'Request Call Back'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

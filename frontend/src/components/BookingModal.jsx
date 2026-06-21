import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('');
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail?.service) {
        setService(e.detail.service);
      } else {
        setService('');
      }
      setIsOpen(true);
      setStatus('idle');
      setFormData({
        clientName: '',
        phone: '',
        date: '',
        time: ''
      });
    };

    window.addEventListener('open-booking', handleOpen);
    return () => window.removeEventListener('open-booking', handleOpen);
  }, []);

  const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://soujanyas-beauty-salon.onrender.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.clientName || !formData.phone || !formData.date || !formData.time) {
      setStatus('error');
      setErrorMessage('Please fill out all booking details.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientName: formData.clientName,
          phone: formData.phone,
          service: service || 'Custom Aesthetics consult',
          date: formData.date,
          time: formData.time
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to request reservation.');
      }

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to request reservation.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Box */}
      <div className="bg-[#111111] border border-parlourGold/20 w-full max-w-md p-8 relative z-10 gold-glow transition-all duration-300 font-montserrat">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          /* Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-parlourGold/10 flex items-center justify-center border border-parlourGold/30 mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-parlourGold" />
            </div>
            <h3 className="font-cormorant font-bold text-3xl text-white tracking-wide mb-3">
              Request Received
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Your request for <span className="text-parlourGold font-semibold">{service || 'Custom Aesthetics'}</span> has been successfully logged. Our Dharwad helpline manager will contact you shortly to confirm your time slot.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 bg-parlourGold text-parlourDark uppercase tracking-[0.2em] font-bold text-xs hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              Back to Sanctuary
            </button>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="flex items-center gap-2 mb-2 text-parlourGold">
              <Sparkles className="w-4 h-4 text-parlourGold" />
              <span className="text-[10px] tracking-widest uppercase font-semibold">Priority Booking</span>
            </div>
            <h3 className="font-cormorant font-bold text-3xl text-white tracking-wider mb-6">
              Reserve An Experience
            </h3>

            {service && (
              <div className="bg-parlourGold/5 border border-parlourGold/15 px-4 py-2.5 mb-6 text-xs text-gray-300 flex items-center justify-between">
                <span>Selected Service:</span>
                <span className="font-semibold text-parlourGold">{service}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Client Name */}
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Full Name</label>
                <input 
                  type="text" 
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="e.g. your name"
                  className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Contact Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 9876543210"
                  className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                  required
                />
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Preferred Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">Preferred Time</label>
                  <div className="relative">
                    <input 
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-parlourGold/40 transition-colors font-light"
                      required
                    />
                  </div>
                </div>
              </div>

              {status === 'error' && (
                <div className="bg-red-950/20 border border-red-500/30 p-3 text-[11px] text-red-400 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Action Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 py-4 bg-parlourGold text-parlourDark uppercase tracking-[0.2em] font-bold text-xs hover:brightness-110 transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? 'Submitting Reservation...' : 'Request Reservation'}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

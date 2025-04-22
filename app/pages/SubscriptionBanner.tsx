"use client";
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SubscriptionBanner: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Replace with your actual API endpoint
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, phone }),
      // });
      
      // Simulate success
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12 px-4">
      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-100 via-white to-pink-100 shadow-lg">
        <div className="px-8 py-16 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Join Driven Professionals & Launch<br />
            Your Dream Career Today!
          </h2>
          
          <p className="text-slate-600 mb-10 max-w-3xl mx-auto">
            Connect with a network of driven professionals, gain valuable insights, and access
            resources that propel you toward your dream career.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="flex-1 px-6 py-4 rounded-full border-0 bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="flex-1 px-6 py-4 rounded-full border-0 bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 md:whitespace-nowrap"
              >
                {isSubmitting ? 'Joining...' : 'Join With Us'}
                <ArrowRight size={20} />
              </button>
            </form>
          ) : (
            <div className="bg-green-50 text-green-700 p-6 rounded-xl max-w-xl mx-auto">
              <h3 className="font-bold text-xl mb-2">Thank you for joining!</h3>
              <p>We‘ll be in touch soon with more information about your journey ahead.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry about ${formData.product || 'KASP Products'}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}
Product Interest: ${formData.product}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:harneet@kasp.tech?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
          Product of Interest
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
        >
          <option value="">Select a product</option>
          <option value="Service Vans">Service Vans</option>
          <option value="Hybrid Towers">Hybrid Towers</option>
          <option value="Solar Towers">Solar Towers</option>
          <option value="Power House Towers">Power House Towers</option>
          <option value="Diesel Towers">Diesel Towers</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-vertical"
          placeholder="Please describe your requirements, project details, or any questions you have..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors font-semibold flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <Send className="h-4 w-4" />
      </button>

      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to be contacted by our team regarding your inquiry.
      </p>
    </form>
  );
}
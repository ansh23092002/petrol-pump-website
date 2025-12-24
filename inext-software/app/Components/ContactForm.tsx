// app/components/ContactForm.tsx
"use client";

import { useState } from "react";
import Squares from "./ui/Squares";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    lookingFor: "",
    message: "",
    hearAbout: "",
    consent: false,
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, file);
    // Add your form submission logic here
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-white py-8 sm:py-12 lg:py-16">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0}
          squareSize={55}
          direction="diagonal"
          borderColor="#d1d5db"
          hoverFillColor="#FEFDFD"
        />
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-blue-600">
                Connect With Us
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Vocal
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  for Local
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md leading-relaxed">
                Supporting local businesses and building digital solutions that make a difference.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Fast Response</h3>
                  <p className="text-xs text-gray-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-xs text-gray-500">Skilled professionals at your service</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Trusted Service</h3>
                  <p className="text-xs text-gray-500">100% satisfaction guaranteed</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-3 sm:pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                <a href="mailto:hello@inext.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium">hello@inext.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium">+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-xl w-full">
            <div className="mb-4 sm:mb-6 text-center">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 uppercase tracking-wide">
                Explain Your Project And
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-blue-600 uppercase tracking-wide">
                Book A Meeting Today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name & Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm text-gray-600 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 py-1 sm:py-1.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm text-gray-600 mb-1">
                    Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 py-1 sm:py-1.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm text-gray-600 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 py-1 sm:py-1.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm text-gray-600 mb-1">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 py-1 sm:py-1.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Looking For Dropdown */}
              <div>
                <label htmlFor="lookingFor" className="block text-xs sm:text-sm text-gray-600 mb-1">
                  I am looking for*
                </label>
                <select
                  id="lookingFor"
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-md py-2 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-600 transition-colors bg-white appearance-none cursor-pointer"
                >
                  <option value="">Please Select</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm text-gray-600 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full border-b-2 border-gray-300 py-1 sm:py-1.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors bg-transparent resize-none"
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <label htmlFor="hearAbout" className="block text-xs sm:text-sm text-gray-600 mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-md py-2 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base text-gray-900 focus:outline-none focus:border-blue-600 transition-colors bg-white appearance-none cursor-pointer"
                >
                  <option value="">Please Select</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">
                  File Upload (Optional)
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <label className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-blue-600 text-blue-600 rounded cursor-pointer hover:bg-blue-50 transition-colors">
                    <span className="text-xs sm:text-sm font-medium">CHOOSE FILE</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs sm:text-sm text-gray-500 truncate max-w-full">
                    {file ? file.name : "No file chosen"}
                  </span>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-0.5 sm:mt-1 w-4 h-4 border-2 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="consent" className="text-xs sm:text-sm text-gray-600">
                  I allow Imaginary Cloud to store and process my personal data
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-amber-300 text-blue-500 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold  shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Submit
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

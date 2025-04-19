"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: '',
    });
    
    // TODO: Replace with actual form submission logic
    try {
      // Simulate a form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Form submission was successful
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Thank you for contacting us! We will get back to you shortly.',
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      // Form submission failed
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'There was an error submitting your message. Please try again later.',
      });
    }
  };
  
  return (
    <div className="shadow-lg rounded-2xl bg-white p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
      
      {formStatus.success ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
          {formStatus.message}
        </div>
      ) : null}
      
      {formStatus.error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {formStatus.message}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
          <select 
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service</option>
            <option value="hvac">HVAC</option>
            <option value="electrical">Electrical</option>
            <option value="plumbing">Plumbing</option>
            <option value="remodeling">Remodeling</option>
            <option value="other">Other/Not Sure</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="bg-primary text-white rounded-full px-6 py-3 font-medium w-full hover:ring-2 hover:ring-primary transition-all duration-300"
          disabled={formStatus.submitting}
        >
          {formStatus.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subdetails: 'Mon-Sat, 9AM-6PM',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@hostelportal.com',
      subdetails: 'We reply within 24 hours',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Campus Hostel Block A',
      subdetails: 'University Road, City',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Saturday',
      subdetails: '9:00 AM - 6:00 PM',
      color: 'bg-orange-500'
    }
  ];

  const quickLinks = [
    'Technical Support',
    'Account Issues',
    'Feature Request',
    'General Inquiry',
    'Report a Bug',
    'Training & Help'
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-gray-100 text-center"
            >
              <div className={`${item.color} h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 font-medium">{item.details}</p>
              <p className="text-sm text-gray-500 mt-1">{item.subdetails}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="technical">Technical Support</option>
                        <option value="account">Account Issues</option>
                        <option value="feature">Feature Request</option>
                        <option value="general">General Inquiry</option>
                        <option value="bug">Report a Bug</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Help</h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
                  >
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
              <p className="text-blue-100 mb-4">
                Our support team is available during office hours to assist you with any urgent matters.
              </p>
              <button className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-all duration-200">
                Call Support Now
              </button>
            </div>

            {/* FAQ Link */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit our FAQ</h3>
              <p className="text-gray-600 mb-4">
                Find answers to commonly asked questions about the hostel attendance portal.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Browse FAQs
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
            <p className="text-blue-100">We'd love to meet you in person at our campus location.</p>
          </div>
          <div className="bg-gray-100 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Map Integration Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Campus Hostel Block A, University Road</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
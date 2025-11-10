import { ClipboardCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Attendance Tracking', path: '/services/tracking' },
    { name: 'Student Management', path: '/services/students' },
    { name: 'Reports & Analytics', path: '/services/reports' },
    { name: 'Notifications', path: '/services/notifications' },
    { name: 'Mobile App', path: '/services/mobile' }
  ];

  const resources = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Help Center', path: '/help' },
    { name: 'Video Tutorials', path: '/tutorials' },
    { name: 'FAQs', path: '/faq' }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Refund Policy', path: '/refund' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:bg-blue-700' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:bg-pink-600' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Stay Updated with Latest Features
              </h3>
              <p className="text-blue-100">
                Subscribe to our newsletter and get updates on new features and improvements.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg outline-none text-gray-900"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 whitespace-nowrap">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <ClipboardCheck className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-white font-bold text-xl">
                Hostel Portal
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Streamline your hostel attendance management with our intelligent system. 
              Track, monitor, and generate reports efficiently.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-sm">support@hostelportal.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Campus Hostel, University Road</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1">
                © {currentYear} Hostel Attendance Portal. Made with 
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                All rights reserved.
              </p>
            </div>
87dcz
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className={`bg-gray-800 ${social.color} text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Designed and developed for educational institutions | Version 2.0.1
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </footer>
  );
}



































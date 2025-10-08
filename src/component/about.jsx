import { Award, Target, Lightbulb, Users, TrendingUp, Shield, Zap, Clock, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering educational institutions with efficient attendance management solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving with cutting-edge technology and user-centered design.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Protecting student data with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a supportive ecosystem for administrators, staff, and students.'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Real-time Tracking',
      description: 'Instant attendance updates and notifications for administrators and staff.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive reports and insights to identify attendance patterns and trends.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support team ready to assist you anytime.'
    },
    {
      icon: Shield,
      title: 'Data Privacy',
      description: 'GDPR compliant with encrypted storage and regular security audits.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Former hostel administrator with 15+ years of experience in educational management.'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Product Lead',
      image: '👩‍💻',
      bio: 'Software architect passionate about building scalable solutions for education.'
    },
    {
      name: 'Amit Patel',
      role: 'Lead Developer',
      image: '👨‍💻',
      bio: 'Full-stack developer specializing in web and mobile applications for institutions.'
    },
    {
      name: 'Deepika Singh',
      role: 'Customer Success Manager',
      image: '👩‍💼',
      bio: 'Dedicated to ensuring our clients achieve maximum value from our platform.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Hostel Attendance Portal was founded with a vision to revolutionize attendance management.'
    },
    {
      year: '2021',
      title: 'First Launch',
      description: 'Launched our MVP with 10+ partner institutions and 2000+ active users.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Grew to 50+ institutions with mobile app launch and advanced analytics features.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded internationally with 100+ institutions across multiple countries.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Introduced AI-powered insights and automated report generation.'
    },
    {
      year: '2025',
      title: 'Current',
      description: 'Serving 500+ institutions with 200,000+ active users worldwide.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Hostel Attendance Portal
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming educational institutions with intelligent, user-friendly attendance management solutions since 2020.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Hostel Attendance Portal was born from a simple idea: to simplify attendance management for educational institutions. 
              Our founder, Rajesh Kumar, spent years managing hostels manually and understood the pain points firsthand.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              What started as a small project has grown into a trusted platform used by hundreds of educational institutions 
              worldwide. We've helped thousands of administrators save thousands of hours and improved student accountability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, our mission remains unchanged: to empower institutions with technology that makes their lives easier.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 flex items-center justify-center h-96">
            <div className="text-center">
              <Award className="h-20 w-20 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-semibold">Growing with Purpose</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our mission and vision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 text-center"
              >
                <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Industry-leading features and support.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the talented people behind the platform.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32 flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">From startup to industry leader.</p>
        </div>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.year[2]}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-1 h-24 bg-blue-200 mt-4"></div>
                )}
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.year}: {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Institutions</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">200K+</p>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5 Years</p>
              <p className="text-blue-100">In Business</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">99.9%</p>
              <p className="text-blue-100">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Institution?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of educational institutions already using our platform to streamline attendance management.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
            <CheckCircle className="h-5 w-5" />
            Get Started Now
          </button>
          <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 transition-all duration-200">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
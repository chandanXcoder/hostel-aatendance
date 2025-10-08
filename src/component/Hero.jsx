import { ClipboardCheck, Users, Calendar, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Total Students', value: '450', icon: Users, color: 'bg-blue-500' },
    { label: 'Present Today', value: '423', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Attendance Rate', value: '94%', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'This Month', value: '30 Days', icon: Calendar, color: 'bg-orange-500' }
  ];

  const features = [
    'Real-time attendance tracking',
    'Automated report generation',
    'SMS & Email notifications',
    'Multi-user access control'
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              Smart Attendance Management
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Streamline Your
              <span className="text-blue-600"> Hostel Attendance</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Effortlessly manage student attendance with our intelligent system. 
              Track, monitor, and generate reports in real-time with just a few clicks.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 transition-all duration-200">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Content - Illustration/Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Today's Overview</h3>
                <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
              </div>
              
              {/* Mini Dashboard */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700 font-medium">Present</p>
                      <p className="text-3xl font-bold text-green-800">423</p>
                    </div>
                    <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-red-700 font-medium">Absent</p>
                      <p className="text-3xl font-bold text-red-800">27</p>
                    </div>
                    <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-700 font-medium">Attendance Rate</p>
                      <p className="text-3xl font-bold text-purple-800">94%</p>
                    </div>
                    <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                View Full Report
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-72 w-72 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 h-72 w-72 bg-purple-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-gray-100"
            >
              <div className={`${stat.color} h-12 w-12 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
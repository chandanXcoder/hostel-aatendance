import { useState } from 'react';
import { Menu, X, Home, ClipboardCheck, Users, Calendar, Settings, LogOut, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Attendance', icon: ClipboardCheck, path: '/attendance' },
    { name: 'Students', icon: Users, path: '/students' },
    { name: 'Reports', icon: Calendar, path: '/reports' },
    { name: 'Settings', icon: Settings, path: '/settings' }
  ];

  const notifications = [
    { id: 1, text: 'Attendance updated for Room 204', time: '5m ago' },
    { id: 2, text: 'New student registered', time: '1h ago' },
    { id: 3, text: 'Monthly report ready', time: '2h ago' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-white rounded-lg p-2">
                <ClipboardCheck className="h-6 w-6 text-blue-600" />
              </div>
              <span className="ml-3 text-white font-bold text-xl hidden sm:block">
                Hostel Attendance Portal
              </span>
              <span className="ml-3 text-white font-bold text-xl sm:hidden">
                HAP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-white hover:bg-blue-500 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfile(false);
                }}
                className="text-white hover:bg-blue-500 hover:bg-opacity-50 p-2 rounded-full transition-all duration-200 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div key={notif.id} className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                        <p className="text-sm text-gray-800">{notif.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                }}
                className="flex items-center space-x-2 text-white hover:bg-blue-500 hover:bg-opacity-50 px-3 py-2 rounded-full transition-all duration-200"
              >
                <div className="h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="hidden lg:block text-sm font-medium">Admin</span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">Administrator</p>
                    <p className="text-xs text-gray-500">admin@hostel.com</p>
                  </div>
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </button>
                    <hr className="my-2" />
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:bg-blue-500 hover:bg-opacity-50 p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-white hover:bg-blue-600 w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
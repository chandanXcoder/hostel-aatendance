import { useState } from "react";
import {
  Menu,
  X,
  Home,
  ClipboardCheck,
  Users,
  Calendar,
  Settings,
  LogOut,
  Bell,
  User,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Attendance", icon: ClipboardCheck, path: "/attendance" },
    { name: "Students", icon: Users, path: "/students" },
    { name: "Reports", icon: Calendar, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  const notifications = [
    { id: 1, text: "Attendance updated for Room 204", time: "5m ago" },
    { id: 2, text: "New student registered", time: "1h ago" },
    { id: 3, text: "Monthly report ready", time: "2h ago" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/90 border-b border-gray-200 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-md">
              <ClipboardCheck className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-gray-900 text-lg sm:text-xl font-semibold tracking-wide">
              Hostel Attendance Portal
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-2 text-gray-800 hover:text-blue-600 hover:bg-blue-100/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfile(false);
                }}
                className="p-2 rounded-full text-gray-800 hover:text-blue-600 hover:bg-blue-100/40 transition-all duration-200 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-sm font-semibold text-gray-800">
                      Notifications
                    </h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="p-4 hover:bg-gray-100 cursor-pointer transition-all duration-150"
                      >
                        <p className="text-sm text-gray-800">{notif.text}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center bg-gray-50">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View all
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-gray-800 hover:text-blue-600 hover:bg-blue-100/40 transition-all duration-200"
              >
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="hidden lg:block text-sm font-medium">
                  Admin
                </span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <p className="text-sm font-semibold text-gray-800">
                      Administrator
                    </p>
                    <p className="text-xs text-gray-500">admin@hostel.com</p>
                  </div>
                  <div className="py-2">
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-all">
                      <User className="h-4 w-4" />
                      Profile
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-all">
                      <Settings className="h-4 w-4" />
                      Settings
                    </button>
                    <hr className="border-gray-200 my-2" />
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition-all">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-blue-600 hover:bg-blue-100/40 rounded-md transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 w-full text-left text-gray-800 hover:text-blue-600 hover:bg-blue-100/40 px-3 py-2 rounded-lg text-base transition-all"
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

daka
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface User {
  name: string;
  role: string;
  email?: string;
}

interface navigationLink {
  name: string;
  path: string;
}

interface HeaderProps {
  user?: User;
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({
  user = {
    name: "Sachin",
    role: "Developer",
    email: "example@gmail.com",
  },
  logo = "MERN",
}) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigationLinks: navigationLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  let a = 5

  a = "sacjin"
  a = true

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MN</span>
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">
                  {logo}
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:ml-8 md:flex md:space-x-1">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition duration-200 flex items-center space-x-1"
                >
                  <span>{link.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <img
            src="https://th.bing.com/th/id/OIP.3I2V0G6W020pqddb_hhbMQHaEK?w=321&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3"
            alt=""
          />

          {/* Right Section - User Menu and Mobile Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop User Menu */}
            {user && (
              <div className="hidden md:flex items-center space-x-4">
                {/* Notifications */}
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition duration-200">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/* User Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-gray-900">
                          {user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user.role}
                        </span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-200 z-50">
                      <button
                        onClick={() => handleNavigation("/profile")}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Your Profile</span>
                      </button>
                      <button
                        onClick={() => handleNavigation("/settings")}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-200"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>Settings</span>
                      </button>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition duration-200">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <span>Sign out</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-md transition duration-200"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className="flex items-center space-x-3 w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition duration-200"
                >
                  <span>{link.name}</span>
                </button>
              ))}

              {/* Mobile User Actions */}
              {user && (
                <>
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <button
                      onClick={() => handleNavigation("/profile")}
                      className="flex items-center space-x-3 w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition duration-200"
                    >
                      <span>👤</span>
                      <span>Profile</span>
                    </button>
                    <button
                      onClick={() => handleNavigation("/settings")}
                      className="flex items-center space-x-3 w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition duration-200"
                    >
                      <span>⚙️</span>
                      <span>Settings</span>
                    </button>
                    <button className="flex items-center space-x-3 w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition duration-200">
                      <span>🚪</span>
                      <span>Sign Out</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

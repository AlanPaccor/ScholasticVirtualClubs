"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoginPanel from './LoginPanel';
import SignUpPanel from './SignUpPanel';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginPanel, setShowLoginPanel] = useState(false);
  const [showSignUpPanel, setShowSignUpPanel] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (showLoginPanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showLoginPanel]);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoginPanel(true);
  };

  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSignUpPanel(true);
  };

  const handleCloseLoginPanel = () => {
    setShowLoginPanel(false);
  };

  const handleCloseSignUpPanel = () => {
    setShowSignUpPanel(false);
  };

  const handleSwitchToSignUp = () => {
    setShowLoginPanel(false);
    setShowSignUpPanel(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignUpPanel(false);
    setShowLoginPanel(true);
  };

  return (
    <>
      <nav className={`bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="text-4xl font-bold text-black">
                Brilliant
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button onClick={handleLoginClick} className="whitespace-nowrap text-lg font-medium text-gray-500 hover:text-gray-900 border border-gray-200 rounded-full px-4 py-2">
                Log in
              </button>
              <button onClick={handleSignUpClick} className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>
      {showLoginPanel && <LoginPanel onClose={handleCloseLoginPanel} onSwitchToSignUp={handleSwitchToSignUp} />}
      {showSignUpPanel && <SignUpPanel onClose={handleCloseSignUpPanel} onSwitchToLogin={handleSwitchToLogin} />}
    </>
  );
}

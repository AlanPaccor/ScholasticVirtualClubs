"use client";

import Image from "next/image";
import landingImage from "../../../public/modern-tech.jpg";
import { useState, useEffect } from "react";
import LoginPanel from "./LoginPanel";
import SignUpPanel from "./SignUpPanel";

export default function Landing() {
  const [showLoginPanel, setShowLoginPanel] = useState(false);
  const [showSignUpPanel, setShowSignUpPanel] = useState(false);

  useEffect(() => {
    if (showLoginPanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showLoginPanel]);

  const handleLoginClick = () => {
    setShowLoginPanel(true);
  };

  const handleSignUpClick = () => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="flex items-center justify-between h-14">
        <div className="flex-shrink-0">
          <a href="/" className="text-5xl font-semibold tracking-tight hover:text-gray-700 transition-colors duration-200">
            Brilliant
          </a>
        </div>
        
        <button 
          className="rounded-full px-4 py-2 text-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors duration-200"
          onClick={handleLoginClick}
        >
          Log in
        </button>
      </nav>

      <div className="mt-12 flex justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-semibold tracking-tight">
            Learn by <span className="text-blue-500">doing</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Interactive problem solving that's effective and fun. Get smarter in 15 minutes a day.
          </p>
          <button 
            className="mt-6 px-8 py-3 bg-emerald-500 text-white rounded-full text-lg font-medium hover:bg-emerald-600 transition-colors duration-200"
            onClick={handleSignUpClick}
          >
            Get started
          </button>
        </div>

        <div className="flex-shrink-0 ml-20">
          <div className="bg-white rounded-xl shadow-2xl p-4 transform rotate-2">
            <Image 
              src={landingImage}
              alt="Creative coding interface" 
              className="rounded-lg"
              width={500}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center pb-8">
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <span className="text-blue-600 text-xl">📐</span>
          <span className="font-medium">Math</span>
        </button>

        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <span className="text-orange-500 text-xl">📊</span>
          <span className="font-medium">Data Analysis</span>
        </button>

        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <span className="text-purple-600 text-xl">💫</span>
          <span className="font-medium">Computer Science</span>
        </button>

        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <span className="text-green-600 text-xl">💻</span>
          <span className="font-medium">Programming & AI</span>
        </button>

        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <span className="text-yellow-500 text-xl">⚡</span>
          <span className="font-medium">Science & Engineering</span>
        </button>
      </div>

      {showLoginPanel && <LoginPanel onClose={handleCloseLoginPanel} onSwitchToSignUp={handleSwitchToSignUp} />}
      {showSignUpPanel && <SignUpPanel onClose={handleCloseSignUpPanel} onSwitchToLogin={handleSwitchToLogin} />}
    </div>
  );
}

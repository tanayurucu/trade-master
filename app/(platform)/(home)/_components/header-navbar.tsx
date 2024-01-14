"use client"

import React, { useState } from 'react';
import HeaderNavItem from './header-nav-item';
import FeaturesWindow from './features-window';

const HeaderNavbar: React.FC = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        {/* Other header items */}
        <HeaderNavItem title="Home" />
        <HeaderNavItem
          title="Features"
          onMouseEnter={() => setShowFeatures(true)}
          onMouseLeave={() => setShowFeatures(false)}
        />
        {/* Features dropdown */}
        {showFeatures && <FeaturesWindow />}
        <HeaderNavItem title="Learn" />
        <HeaderNavItem title="Academy" />
      </div>
      <div className="flex gap-4">
        <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
          Log in
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default HeaderNavbar;

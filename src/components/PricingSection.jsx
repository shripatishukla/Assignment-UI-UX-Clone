import React, { useState } from 'react';


import { IoToggleSharp } from "react-icons/io5";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);


  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      {/* Title */}
      <h1 className="text-sm  text-blue-600  font-bold mb-2">#PRICING</h1>
      
      {/* Subtitle */}
      <h2 className="text-2xl font-semibold mb-4">Plans and Pricing</h2>
      
      {/* Description */}
      <p className="text-lg text-gray-600 mb-6">
        Choose the best plan for your business.
      </p>
      
      {/* Toggle Button */}
     

    </div>
  );
};

export default PricingSection;

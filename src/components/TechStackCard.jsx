import React from 'react';

export default function TechStackCard({ tech }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:border-orange-700 transition-shadow duration-300 transition-border duration-300 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 border-2 border-orange-200">
      <div className="shadow-sm rounded-full w-full h-full flex items-center justify-center">
        <span className="text-gray-700 text-center text-xs sm:text-sm md:text-base">{tech}</span>
      </div>
    </div>
  );
}
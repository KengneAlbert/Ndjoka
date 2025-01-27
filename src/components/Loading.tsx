import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* Logo animation */}
        <div className="w-24 h-24 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin" />
        
        {/* Loading dots */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce [animation-delay:-.3s]" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce [animation-delay:-.5s]" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">Chargement...</p>
        <p className="text-sm text-gray-400">Veuillez patienter</p>
      </div>
    </div>
  );
};

export default Loading;

"use client";

import React from 'react';

interface WidgetVideoProps {
  title?: string;
  onPlay?: () => void;
  className?: string;
}

export const WidgetVideo: React.FC<WidgetVideoProps> = ({
  title = "Meet Dr. Bellamy",
  onPlay,
  className = ""
}) => {
  return (
    <div className={`w-[360px] bg-gray-200 rounded-2xl overflow-hidden relative ${className}`}>
      {/* Video Container */}
      <div className="relative w-full h-48 bg-gray-300">
        <img
          src="/Storefront/Doctor Widget/Video/VideoImage.png"
          alt="Video preview"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* Title in top-left corner */}
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-white font-sans font-bold text-lg">
            {title}
          </h3>
        </div>
        
        {/* Play button - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            aria-label="Play video"
            onClick={onPlay}
            className="focus:outline-none hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/Storefront/Doctor Widget/Video/PlayButton.svg"
              alt="Play"
              className="w-12 h-12"
              draggable={false}
            />
          </button>
        </div>
      </div>
    </div>
  );
}; 
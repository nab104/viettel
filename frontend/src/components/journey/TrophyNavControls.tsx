"use client";
import React from "react";

interface TrophyNavControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export const TrophyNavControls: React.FC<TrophyNavControlsProps> = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
  total,
  current,
  onDotClick
}) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-12">
      {/* Arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
            canPrev 
              ? "border-gray-300 hover:border-[#EE0033] hover:text-[#EE0033]" 
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={onNext}
          disabled={!canNext}
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
            canNext 
              ? "border-gray-300 hover:border-[#EE0033] hover:text-[#EE0033]" 
              : "border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all duration-300 rounded-full h-2 ${
              current === index ? "bg-[#EE0033] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

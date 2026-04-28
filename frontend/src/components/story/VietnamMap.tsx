"use client";
import React from "react";
import { batch1 } from "./map-data/batch-1";
import { batch2 } from "./map-data/batch-2";

const provinces = [
  ...batch1,
  ...batch2
];

export const VietnamMap = () => {
  return (
    <div 
      className="absolute" 
      style={{ 
        top: "50px", 
        left: "50px", 
        width: "800px", 
        height: "2500px", 
        zIndex: 100,
        backgroundColor: "rgba(0, 0, 255, 0.1)", // Debug: blue tint
        border: "2px solid blue" // Debug border
      }}
    >
      {provinces.map((province) => (
        <div
          key={province.id}
          className="absolute transition-transform hover:scale-110 hover:z-[110] cursor-pointer group"
          style={{
            width: province.width,
            height: province.height,
            top: `${province.top}px`,
            left: `${province.left}px`,
          }}
        >
          {/* Debug Label */}
          <span className="absolute -top-4 left-0 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap">
            {province.name}
          </span>
          <div className="w-full h-full relative">
            {/* We ensure the SVG takes up the full container space */}
            {React.isValidElement(province.svg) 
              ? React.cloneElement(province.svg as React.ReactElement<any>, { 
                  width: "100%", 
                  height: "100%",
                  style: { display: "block" } 
                }) 
              : province.svg}
          </div>
        </div>
      ))}
    </div>
  );
};



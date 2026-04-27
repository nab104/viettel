"use client";

import React from "react";
import { TrophyGridOrCarousel } from "./TrophyGridOrCarousel";
import { RipplePattern } from "./RipplePattern";

export const TrophyAwardsSection: React.FC = () => {
  return (
    <section 
      className="relative bg-white overflow-hidden"
      style={{ 
        paddingTop: '160px', 
        paddingBottom: '200px', 
        minHeight: '900px' 
      }}
    >

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <img
    src="/images/diahinh2.2_2.png"
    alt="Pattern"
    className="absolute opacity-50 max-w-none"
    style={{
      width: "12000px",
      height: "auto",
      top: "60%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(1.5)",
      transformOrigin: "center",
    }}
  />
</div>

      {/* CONTENT */}
      <div className="mx-auto max-w-[1680px] px-8 relative z-10">
        <div className="mb-16 relative inline-block">
          <h2 className="text-[#EE0033] text-[32px] md:text-[40px] lg:text-[48px] font-bold uppercase leading-tight font-beausans">
            CÚP VÀ GIẢI THƯỞNG
          </h2>
          <RipplePattern 
            className="absolute" 
            style={{ top: '-80px', right: '1200px', width: '150px', height: '150px' }} 
          />
          <RipplePattern 
            className="absolute" 
            style={{ top: '-140px', right: '1100px', width: '100px', height: '100px' }} 
          />
        </div>

        <TrophyGridOrCarousel />
      </div>
    </section>
  );
};

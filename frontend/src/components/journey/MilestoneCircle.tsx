import React, { memo } from "react";
import Image from "next/image";
import { Milestone } from "@/data/journeyData";

interface MilestoneCircleProps {
  milestone: Milestone;
  isActive: boolean;
  onClick: () => void;
}

export const MilestoneCircle = memo(({ milestone, onClick }: MilestoneCircleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width: 300, height: 300, minWidth: 300, minHeight: 300 }}
      className="relative block shrink-0 rounded-full overflow-hidden shadow-xl cursor-pointer bg-gray-100 group will-change-transform"
    >
      {/* Background image */}
      <Image
        src={milestone.image}
        alt={milestone.title}
        fill
        sizes="300px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* LEFT HALF — dark overlay */}
      <div className="absolute top-0 left-0 h-full w-[150px] bg-black/40 z-[2]" />

      {/* RIGHT HALF — SVG curved overlay */}
      <svg
        className="absolute z-[2]"
        style={{ top: '50%', left: '150px', transform: 'translateY(-50%)' }}
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="320"
        viewBox="0 0 146 290"
        fill="none"
      >
        <path
          d="M-0.000948627 1.269e-06C19.1075 2.10426e-06 38.0289 3.75052 55.6828 11.0374C73.3368 18.3244 89.3776 29.005 102.889 42.4695C116.401 55.934 127.119 71.9187 134.432 89.5109C141.744 107.103 145.508 125.958 145.508 145C145.508 164.042 141.744 182.897 134.432 200.489C127.119 218.081 116.401 234.066 102.889 247.53C89.3775 260.995 73.3367 271.676 55.6828 278.963C38.0289 286.249 19.1075 290 -0.000976562 290L-0.000954966 145L-0.000948627 1.269e-06Z"
          fill="black"
          fillOpacity="0.44"
        />
      </svg>

      {/* LEFT HALF — Year centered */}
      <div className="absolute top-0 left-0 h-full w-[150px] z-[3] flex items-center justify-center">
        <p style={{
          color: '#FFF',
          fontFamily: 'var(--font-beausans)',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          textAlign: 'center',
          paddingLeft: '20px',
        }}>
          {milestone.year}
        </p>
      </div>

      {/* RIGHT HALF — Title + Description */}
      <div
        className="absolute top-0 h-full z-[3] flex flex-col justify-start"
        style={{ left: '150px', width: '150px', padding: '80px 12px 0', alignItems: 'flex-start' }}
      >
        <h4 style={{
          width: '101px',
          color: '#FFF',
          fontFamily: 'var(--font-beausans)',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '1.3',
          textAlign: 'left',
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {milestone.title}
        </h4>
        <p style={{
          width: '126px',
          height: '104px',
          color: '#D9D9D9',
          fontFamily: 'var(--font-roboto)',
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          textAlign: 'left',
          overflow: 'hidden',
          marginBottom: '10px',
        }}>
          {milestone.description}
        </p>

        {/* Icon under text */}
        <div style={{ marginTop: '5px' }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="25.439" 
            height="25.439" 
            viewBox="0 0 26 26" 
            fill="none"
          >
            <circle cx="12.7193" cy="12.7193" r="12.2193" stroke="white"/>
            <path d="M9.46551 17.1563L17.1562 12.7193L9.46551 8.28233" stroke="white"/>
          </svg>
        </div>
      </div>
    </button>
  );
});

MilestoneCircle.displayName = "MilestoneCircle";
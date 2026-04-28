"use client";
import React from "react";
import { motion } from "framer-motion";

interface MapPinProps {
  name: string;
  className?: string;
}

export const MapPin: React.FC<MapPinProps> = ({ name, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex items-center justify-center pointer-events-none ${className}`}
      style={{
        width: "68px",
        height: "82px",
      }}
    >
      <svg
        width="68"
        height="82"
        viewBox="0 0 68 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <g filter="url(#filter0_d_2816_4204)">
          {/* Main Pin Shape - Restored Red Fill for visibility */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.7153 7.12609C40.0848 1.31746 28.1352 1.21873 18.4135 6.86747C8.69177 12.5162 2.69279 23.0438 2.69922 34.4445C2.99216 42.8168 5.80765 50.8944 10.7634 57.5803C16.6858 65.5899 23.9791 72.4447 32.2924 77.8148C32.8199 78.1349 33.4174 78.3162 34.031 78.3423C34.6684 78.2431 35.2827 78.026 35.8435 77.7017C41.2888 74.1278 46.3045 69.9166 50.7881 65.1541C58.5563 56.9398 64.7708 46.3138 64.9928 35.0097C65.0468 23.6309 59.2511 13.053 49.7153 7.12609ZM47.6677 12.3675C39.2798 7.121 28.8721 7.03183 20.4048 12.1339C11.9375 17.2359 6.71258 26.7447 6.71819 37.042C6.97332 44.604 9.42552 51.8999 13.7418 57.9388C18.9 65.1732 25.2522 71.3645 32.4929 76.2149C32.9523 76.5041 33.4727 76.6678 34.0071 76.6914C34.5623 76.6018 35.0974 76.4057 35.5858 76.1128C40.3285 72.8848 44.697 69.0811 48.602 64.7796C55.3679 57.3602 60.7806 47.7627 60.9739 37.5525C61.0209 27.2749 55.9731 17.7208 47.6677 12.3675Z"
            fill="#FFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2816_4204"
            x="-0.000781298"
            y="-0.000781298"
            width="67.693"
            height="81.0445"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.35" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.47 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2816_4204" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2816_4204" result="shape" />
          </filter>
        </defs>
      </svg>

      {/* Dynamic Name Overlay */}
      <div
        style={{
          width: "53px",
          height: "39px",
          color: "#FFF", // Red Text for white pin background
          textAlign: "center",
          fontFamily: "var(--font-beausans), 'FS PF BeauSans Pro', sans-serif",
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.1",
          letterSpacing: "-0.78px",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "22px", // Manually adjusted to fit in pin head
          zIndex: 1,
          padding: "0 4px",
          wordBreak: "break-word",
        }}
      >
        {name}
      </div>
    </motion.div>
  );
};

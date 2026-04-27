import React from 'react';

type RipplePatternProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const RipplePattern: React.FC<RipplePatternProps> = ({ className, style }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className ?? ""}`}
      style={style}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 131 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <path d="M65.501 51.5286C73.2171 51.5287 79.4727 57.7841 79.4727 65.5002C79.4725 73.2163 73.217 79.4708 65.501 79.4709C57.7848 79.4709 51.5294 73.2163 51.5293 65.5002C51.5293 57.784 57.7848 51.5286 65.501 51.5286Z" stroke="#ED1C24" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M65.5 34.6859C82.5183 34.686 96.3145 48.4821 96.3145 65.5004C96.3144 82.5185 82.5182 96.3148 65.5 96.3148C48.4818 96.3148 34.6856 82.5185 34.6855 65.5004C34.6855 48.4821 48.4817 34.6859 65.5 34.6859Z" stroke="#ED1C24" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M65.5 18.4669C91.4758 18.4669 112.533 39.5243 112.533 65.5001C112.533 91.4758 91.4758 112.533 65.5 112.533C39.5243 112.533 18.4668 91.4758 18.4668 65.5001C18.4669 39.5244 39.5243 18.467 65.5 18.4669Z" stroke="#ED1C24" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M65.5 1C101.122 1 130 29.8776 130 65.5C130 101.122 101.122 130 65.5 130C29.8776 130 1 101.122 1 65.5C1 29.8777 29.8776 1.00007 65.5 1Z" stroke="#ED1C24" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    </div>
  );
};

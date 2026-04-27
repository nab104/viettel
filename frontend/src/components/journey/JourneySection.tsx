"use client";
import Image from "next/image";
import { JourneyGrid } from "./JourneyGrid";

export const JourneySection = () => {
  return (
    <section 
      className="relative bg-[#F2F2F2] mt-32"
      style={{ 
        paddingTop: "260px",
        paddingBottom: "260px",
      }}
    >
      <div className="absolute inset-x-0 top-[135px] h-[620px] z-0 opacity-[0.1] pointer-events-none">
        <Image
          src="/images/diahinh1.1.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-beausans font-bold text-[36px] md:text-[48px] text-[#EE0033] uppercase leading-tight">
            HÀNH TRÌNH TỰ HÀO
          </h2>
          <p style={{
            color: '#B5B4B4',
            textAlign: 'center',
            fontFamily: 'var(--font-beausans)',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginTop: '8px',
          }}>
            15 cột mốc lịch sử
          </p>
        </div>

        <JourneyGrid />
      </div>
    </section>
  );
};

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TuongLaiPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      
      {/* Main Future Vision Section */}
      <section 
        className="relative h-screen flex items-center justify-end overflow-hidden"
        style={{ background: 'rgba(0, 0, 0, 0.85)' }}
      >
        <div className="absolute inset-0 opacity-60">
          <Image 
            src="/images/tuong-lai/viettel-store-10-min.png" 
            alt="Future Vision" 
            fill 
            className="object-cover scale-90 translate-y-32"
          />
        </div>
        <div className="relative z-10 flex flex-col items-end text-right pr-24" style={{ transform: 'translateY(-150px)' }}>
          <div style={{ marginRight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <motion.div 
              style={{ width: '626px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 style={{ 
                color: '#FFF', 
                fontFamily: 'var(--font-beausans)',
                fontSize: '52px', 
                fontWeight: 700, 
                lineHeight: 'normal',
                textTransform: 'uppercase',
                margin: 0,
                whiteSpace: 'nowrap'
              }}>
                VỮNG BƯỚC <motion.span 
                  style={{ color: '#E03' }}
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(224, 0, 51, 0.3)",
                      "0 0 25px rgba(224, 0, 51, 0.9)",
                      "0 0 12px rgba(224, 0, 51, 0.5)",
                      "0 0 35px rgba(224, 0, 51, 1)",
                      "0 0 5px rgba(224, 0, 51, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    times: [0, 0.1, 0.2, 0.4, 1],
                    ease: "easeInOut" 
                  }}
                >
                  TƯƠNG LAI
                </motion.span>
              </h1>
            </motion.div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', marginRight: '40px' }}>
              <p style={{
                width: '324px',
                color: '#F2F2F2',
                textAlign: 'right',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
              }}>
                Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
              </p>
              <div style={{ width: '2px', height: '63px', background: '#E03' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TẦM NHÌN 2023 SECTION */}
      <section className="relative w-full bg-[#F2F2F2] overflow-hidden" style={{ minHeight: '850px' }}>
        {/* Topographic Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/diahinh2.2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            transform: 'rotate(23.355deg) scale(1.2) translateY(10px)',
            mixBlendMode: 'multiply',
            opacity: 0.2
          }}
        />

        <motion.div 
          className="relative z-10 mx-auto flex flex-row items-center justify-between"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            maxWidth: '1180px', 
            gap: '120px', 
            paddingTop: '150px', 
            paddingBottom: '150px' 
          }}
        >
          {/* LEFT IMAGE COLUMN */}
          <motion.div 
            className="relative shrink-0" 
            style={{ width: '384px', height: '549px', marginLeft: '40px' }}
            whileHover={{ 
              scale: 1.02,
              y: -15,
              rotate: 1
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            {/* Red background card (Rotated) */}
            <motion.div 
              style={{
                width: '384px',
                height: '549px',
                background: '#E03',
                borderRadius: '26px',
                position: 'absolute',
                top: '22px',
                left: '-22px',
                transform: 'rotate(-5.404deg)',
                zIndex: 1
              }}
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(224, 0, 51, 0.3)",
                  "0 0 40px rgba(224, 0, 51, 0.6)",
                  "0 0 15px rgba(224, 0, 51, 0.3)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            {/* Main image card */}
            <div 
              style={{
                width: '384px',
                height: '549px',
                borderRadius: '26px',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                boxShadow: '3px -2px 8.4px 0 rgba(0, 0, 0, 0.45)',
                background: 'url(/images/tuong-lai/TamNhin2023.jpg) lightgray -149.381px 0.034px / 190.625% 100% no-repeat'
              }}
            />
          </motion.div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="flex flex-col items-start shrink-0" style={{ width: '520px', position: 'relative', zIndex: 10 }}>
            <h2 style={{
              width: '424px',
              color: '#E03',
              fontFamily: 'var(--font-beausans)',
              fontSize: '52px',
              fontWeight: 700,
              lineHeight: 'normal',
              textTransform: 'uppercase',
              marginBottom: '28px'
            }}>
              TẦM NHÌN 2023
            </h2>

            <p style={{
              width: '475px',
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 'normal',
              marginBottom: '32px',
              textAlign: 'left',
              whiteSpace: 'normal',
              overflowWrap: 'normal'
            }}>
              Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
            </p>

            {/* VISION ITEM LIST */}
            <div className="flex flex-col" style={{ gap: '22px' }}>
              {[
                "Công ty bán lẻ đa dịch vụ hiện đại, chuyên nghiệp hàng đầu Việt Nam",
                "Dẫn đầu về ứng dụng công nghệ và trải nghiệm khách hàng",
                "Đóng góp lớn cho Tập đoàn và là đại diện hình ảnh Viettel"
              ].map((text, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center group cursor-pointer" 
                  style={{ gap: '16px' }}
                  whileHover="hover"
                >
                  <motion.div 
                    className="shrink-0" 
                    style={{ width: '41px', height: '41px' }}
                    variants={{
                      hover: { x: 8 }
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                      <circle cx="20.5" cy="20.5" r="20.5" fill="#EE0033" fillOpacity="0.08"/>
                      <path d="M31.7071 21.7071C32.0976 21.3166 32.0976 20.6834 31.7071 20.2929L25.3431 13.9289C24.9526 13.5384 24.3195 13.5384 23.9289 13.9289C23.5384 14.3195 23.5384 14.9526 23.9289 15.3431L29.5858 21L23.9289 26.6569C23.5384 27.0474 23.5384 27.6805 23.9289 28.0711C24.3195 28.4616 24.9526 28.4616 25.3431 28.0711L31.7071 21.7071ZM9 21V22H31V21V20H9V21Z" fill="#EE0033"/>
                    </svg>
                  </motion.div>
                  <span style={{
                    width: '424px',
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          height: '900px',
          backgroundImage: 'url(/images/tuong-lai/header-ve-chung-toi.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Red Overlay */}
        <div 
          className="absolute inset-0 bg-[#EE0033] opacity-40 z-[1]"
        />

        {/* Content Wrapper */}
        <motion.div 
          className="relative z-[2] h-full flex flex-col items-center justify-center text-center text-white px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div style={{ 
            fontFamily: 'Rockwell', 
            fontSize: '128px', 
            fontWeight: 700, 
            marginBottom: '-20px',
            lineHeight: 'normal'
          }}>
            “
          </div>
          
          <h2 style={{
            width: '913px',
            fontFamily: 'var(--font-beausans)',
            fontSize: '52px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '28px',
            lineHeight: 'normal'
          }}>
            CHÚNG TA SẼ LÀM NÊN TƯƠNG LAI<br />
            ABXYZ (QUOTE)
          </h2>

          <p style={{
            width: '424px',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal'
          }}>
            Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
          </p>
        </motion.div>
      </section>

    </div>
  );
}

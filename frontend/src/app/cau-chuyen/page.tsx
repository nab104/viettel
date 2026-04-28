"use client";
import React, { useState, useEffect, useRef } from "react";
import { VietnamMap } from "@/components/story/VietnamMap";
import Image from "next/image";

const basePathNew = "/images/drive-download-20260428T084631Z-3-001/";
const basePathChibo = "/images/dangbophanvachibo/";

const heartPieces = [
  { id: "BOX-001", x: 528, y: 2402, w: 106, h: 106, img: basePathChibo + "anh9.jpg" },
  { id: "BOX-002", x: 450, y: 2436, w: 72, h: 72, img: basePathNew + "21.jpg" },
  { id: "BOX-003", x: 330, y: 2472, w: 114, h: 114, img: basePathChibo + "anh7.jpg" },
  { id: "BOX-004", x: 252, y: 2514, w: 72, h: 72, img: basePathNew + "23.jpg" },
  { id: "BOX-005", x: 450, y: 2514, w: 72, h: 72, img: basePathNew + "379821127_6714712878550133_1259772817272396481_n.jpg" },
  { id: "BOX-006", x: 528, y: 2514, w: 150, h: 72, img: basePathChibo + "anh10.jpg" },
  { id: "BOX-007", x: 840, y: 2450, w: 58, h: 58, img: basePathNew + "410766003_6650243398419215_4248629283733151294_n.jpg" },
  { id: "BOX-008", x: 762, y: 2514, w: 72, h: 72, img: basePathNew + "8.jpg" },
  { id: "BOX-009", x: 840, y: 2514, w: 72, h: 72, img: basePathNew + "Bản sao của 14.jpg" },
  { id: "BOX-010", x: 918, y: 2514, w: 72, h: 72, img: basePathNew + "Bản sao của 4.JPG" },
  { id: "BOX-011", x: 904, y: 2422, w: 86, h: 86, img: basePathNew + "Bản sao của 8.JPG" },
  { id: "BOX-012", x: 996, y: 2472, w: 114, h: 114, img: basePathChibo + "anh8.jpg" },
  { id: "BOX-013", x: 1116, y: 2514, w: 72, h: 72, img: basePathNew + "Bản sao của 9.JPG" },
  { id: "BOX-014", x: 294, y: 2592, w: 228, h: 72, img: basePathChibo + "anh5.jpg" },
  { id: "BOX-015", x: 528, y: 2592, w: 150, h: 150, img: basePathChibo + "anh2.jpg" },
  { id: "BOX-016", x: 684, y: 2592, w: 72, h: 72, img: basePathNew + "Bản sao của DSC00510.JPG" },
  { id: "BOX-017", x: 762, y: 2592, w: 228, h: 228, img: basePathChibo + "anhmain.jpg" },
  { id: "BOX-018", x: 996, y: 2592, w: 150, h: 72, img: basePathNew + "Bản sao của DSC01890-2.JPG" },
  { id: "BOX-019", x: 1152, y: 2592, w: 72, h: 72, img: basePathNew + "Bản sao của DSC02114.JPG" },
  { id: "BOX-020", x: 294, y: 2670, w: 72, h: 72, img: basePathNew + "DSC04322.jpg" },
  { id: "BOX-021", x: 372, y: 2670, w: 72, h: 72, img: basePathNew + "TNB-47496-04.jpg" },
  { id: "BOX-022", x: 450, y: 2670, w: 72, h: 72, img: basePathNew + "thị mai.jpg" },
  { id: "BOX-023", x: 335, y: 2748, w: 109, h: 72, img: basePathNew + "z5260074056289_56ea67f628a32187d6de49a6223afc41.jpg" },
  { id: "BOX-024", x: 450, y: 2748, w: 150, h: 150, img: basePathChibo + "anh3.jpg" },
  { id: "BOX-025", x: 606, y: 2748, w: 72, h: 72, img: basePathNew + "z7749622513668_1a35e432b1292d9319551cb78361c139.jpg" },
  { id: "BOX-026", x: 684, y: 2670, w: 72, h: 72, img: basePathNew + "z7749625211493_478bcf6f11d10f026fa4d0808514bfa4.jpg" },
  { id: "BOX-027", x: 685, y: 2748, w: 72, h: 72, img: basePathNew + "z7749625481581_df038ad664702526acdf65b1591480d5.jpg" },
  { id: "BOX-028", x: 996, y: 2670, w: 122, h: 122, img: basePathChibo + "anh6.jpg" },
  { id: "BOX-029", x: 1124, y: 2670, w: 72, h: 72, img: basePathNew + "14.png" },
  { id: "BOX-030", x: 996, y: 2798, w: 72, h: 72, img: basePathNew + "21.jpg" },
  { id: "BOX-031", x: 840, y: 2827, w: 150, h: 71, img: basePathNew + "23.jpg" },
  { id: "BOX-032", x: 762, y: 2826, w: 72, h: 72, img: basePathNew + "6.png" },
  { id: "BOX-033", x: 606, y: 2827, w: 150, h: 72, img: basePathNew + "8.jpg" },
  { id: "BOX-034", x: 399, y: 2826, w: 45, h: 45, img: basePathNew + "IMG_0008.JPG" },
  { id: "BOX-035", x: 528, y: 2904, w: 72, h: 72, img: basePathNew + "IMG_0038.JPG" },
  { id: "BOX-036", x: 606, y: 2904, w: 72, h: 72, img: basePathNew + "OK5A7255.JPG" },
  { id: "BOX-037", x: 582, y: 2983, w: 96, h: 72, img: basePathNew + "DSC04322.jpg" },
  { id: "BOX-038", x: 684, y: 2904, w: 150, h: 150, img: basePathChibo + "anh4.jpg" },
  { id: "BOX-039", x: 684, y: 3060, w: 72, h: 72, img: basePathNew + "thị mai.jpg" },
  { id: "BOX-040", x: 762, y: 3060, w: 72, h: 72, img: basePathNew + "Bản sao của 14.jpg" },
  { id: "BOX-041", x: 840, y: 2983, w: 72, h: 72, img: basePathNew + "Bản sao của 4.JPG" },
  { id: "BOX-042", x: 840, y: 2904, w: 72, h: 72, img: basePathNew + "Bản sao của 8.JPG" },
  { id: "BOX-043", x: 918, y: 2904, w: 72, h: 72, img: basePathNew + "Bản sao của 9.JPG" },
];

export default function CauChuyenPage() {
  const minX = 252;
  const minY = 2402;

  const heartRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heartRef.current) return;
      const rect = heartRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Bắt đầu tính khi đỉnh trái tim chạm đáy màn hình (rect.top = windowHeight)
      // Kết thúc khi đáy trái tim chạm đỉnh màn hình (rect.top = -rect.height)
      const startPos = windowHeight;
      const endPos = 50; // Dừng sớm hơn một chút để chắc chắn lật hết
      
      let progress = (startPos - rect.top) / (startPos - endPos);
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#F2F2F2] pt-24 min-h-screen relative">
      <style jsx global>{`
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg) !important;
          transition: transform 0.4s ease;
        }

        /* Logic lật dựa trên tiến trình cuộn */
        .is-active .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        /* Khi cuộn qua hết (progress > 0.95), lật lại về 0deg */
        .is-finished .flip-card-inner {
          transform: rotateY(0deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 4px;
          contain: strict;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        @keyframes radiate {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }
        .animate-radiate {
          animation: radiate 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div style={{ width: "100%", height: "2350px", background: "#F2F2F2", position: "relative", overflow: "hidden" }}>
        <VietnamMap />
        <div style={{ position: "absolute", right: "calc(16% + 5px)", top: "96px", zIndex: 10 }}>
          <h1 style={{ width: "410px", color: "#484848", textAlign: "right", fontFamily: "var(--font-beausans)", fontSize: "52px", fontWeight: 700, lineHeight: "1", margin: 0 }}>CÂU CHUYỆN</h1>
          <h2 style={{ width: "410px", color: "#ED1C24", textAlign: "right", fontFamily: "var(--font-beausans)", fontSize: "52px", fontWeight: 700, lineHeight: "1", margin: 0 }}>VIETTEL STORE</h2>
          <p style={{ width: "324px", color: "#484848", textAlign: "right", fontFamily: "var(--font-roboto)", fontSize: "16px", fontWeight: 400, lineHeight: "normal", margin: 0, marginTop: "10px" }}>
            Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
          </p>
        </div>
      </div>

      <div style={{ width: "100%", minHeight: "800px", background: "#ED1C24", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 0 30vh 0", overflow: "hidden" }}>
        <div className="relative z-10 w-full" style={{ paddingLeft: "10%" }}>
          <h2 className="text-white font-beausans font-bold text-4xl md:text-5xl uppercase leading-[0.8] mb-10 text-left" style={{ letterSpacing: "0.01em" }}>
            CẢM ƠN VÌ ĐÃ LÀ MỘT MẢNH GHÉP <br /> CỦA VIETTEL STORE
          </h2>
        </div>

        <div ref={heartRef} className="relative w-full flex justify-center mt-6">
          <div style={{ width: "972px", height: "730px", position: "relative", perspective: "1000px" }}>
            
            {/* Giảm số lượng vòng tròn để tối ưu hiệu năng */}
            <div 
              className="absolute animate-radiate border border-white/30 rounded-full pointer-events-none"
              style={{ width: "1000px", height: "1000px", left: "49.5%", top: "46%", animationDelay: "0s" }}
            />
            <div 
              className="absolute animate-radiate border border-white/20 rounded-full pointer-events-none"
              style={{ width: "1000px", height: "1000px", left: "49.5%", top: "46%", animationDelay: "2.5s" }}
            />

            {heartPieces.map((box) => {
              // Chuẩn hóa vị trí Y của từng mảnh trong khoảng 0 - 1
              const pieceYNorm = (box.y - minY) / (3060 - minY);
              
              // Cực kỳ nhạy: chỉ cần cuộn 60% là lật hết
              const isActive = scrollProgress > (pieceYNorm * 0.6);
              const isFinished = scrollProgress > 0.98;

              return (
                <div
                  key={box.id}
                  className={`flip-card absolute ${isActive && !isFinished ? 'is-active' : ''} ${isFinished ? 'is-finished' : ''}`}
                  style={{
                    left: `${box.x - minX}px`,
                    top: `${box.y - minY}px`,
                    width: `${box.w}px`,
                    height: `${box.h}px`,
                    zIndex: 10
                  }}
                >
                  <div className="flip-card-inner shadow-sm">
                    <div className="flip-card-front bg-white flex items-center justify-center" />
                    <div className="flip-card-back bg-gray-200 overflow-hidden">
                      <Image
                        src={box.img}
                        fill
                        className="object-cover"
                        alt={`Staff ${box.id}`}
                        sizes="(max-width: 768px) 100px, 200px"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

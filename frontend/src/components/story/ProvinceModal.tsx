"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { StoryCard } from "./map-data/provincesContent";

interface ProvinceModalProps {
  isOpen: boolean;
  onClose: () => void;
  provinceName: string | null;
  stories?: StoryCard[] | null;
}

export const ProvinceModal: React.FC<ProvinceModalProps> = ({ 
  isOpen, 
  onClose, 
  provinceName,
  stories
}) => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset index when opening modal for a new province
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, provinceName]);

  if (!mounted) return null;

  const currentStory = stories && stories.length > 0 ? stories[currentIndex] : null;
  const hasMultipleStories = stories && stories.length > 1;

  const handlePrev = () => {
    if (!stories) return;
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    if (!stories) return;
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 999999 }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />
          
          {/* Content Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative"
            style={{
              width: "900px",
              height: "650px",
              flexShrink: 0,
              borderRadius: "37px",
              background: "#FFF",
              boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.3)",
              zIndex: 1000000,
              display: "flex",
              flexDirection: "column",
              padding: "60px 80px",
              marginTop: "40px", // Đẩy xuống để không bị Header che
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-10 text-gray-400 hover:text-[#ED1C24] transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>



            {/* Content Section: Row with Text and Image */}
            <div className="flex flex-row justify-between items-start h-full">
              {/* Left Column: Text */}
              <div className="flex flex-col flex-1 pr-8 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-1"
                  >
                    {/* Province Name */}
                    <h2 
                      style={{
                        width: "100%",
                        height: "44px",
                        color: "#ED1C24",
                        fontFamily: 'var(--font-beausans), sans-serif',
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textTransform: "uppercase",
                        margin: 0,
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {provinceName}
                    </h2>

                    {/* Subheader */}
                    <h3
                      style={{
                        width: "100%",
                        minHeight: "21.156px",
                        color: "#ED1C24",
                        fontFamily: 'var(--font-beausans), sans-serif',
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textTransform: "uppercase",
                        marginTop: "8px",
                        marginBottom: 0,
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {currentStory?.subheader || "Hệ thống cửa hàng Viettel Store"}
                    </h3>

                    {/* Paragraph */}
                    <div 
                      className="custom-scrollbar overflow-y-auto pr-4 mt-6"
                      style={{ maxHeight: "330px" }}
                    >
                      <p
                        style={{
                          width: "100%",
                          color: "#000",
                          fontFamily: 'var(--font-roboto), sans-serif',
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "1.6",
                          marginBottom: 0,
                          whiteSpace: "pre-line"
                        }}
                      >
                        {currentStory?.paragraph || `Chào mừng bạn đến với Viettel Store tại ${provinceName}. Chúng tôi tự hào cung cấp những sản phẩm công nghệ mới nhất cùng dịch vụ chăm sóc khách hàng chuyên nghiệp, tận tâm nhất.`}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Bar at Bottom */}
                {hasMultipleStories && (
                  <div className="flex flex-row items-center gap-6 mt-auto pt-6 border-t border-gray-100">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-[#ED1C24] hover:bg-gray-50 transition-all"
                      aria-label="Previous story"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div className="flex-1 flex justify-center gap-2">
                      {stories.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#ED1C24] w-8' : 'bg-gray-200 w-1.5'}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-[#ED1C24] hover:bg-gray-50 transition-all"
                      aria-label="Next story"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Picture */}
              <div className="relative" style={{ width: "320px", height: "500px", flexShrink: 0 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "22px",
                      background: `url(${currentStory?.image || '/images/story-map/province-preview.png'}) lightgray 50% / cover no-repeat`,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

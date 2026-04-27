"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyData, Milestone } from "@/data/journeyData";
import { MilestoneCircle } from "./MilestoneCircle";
import { JourneyModal } from "./JourneyModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const JourneyGrid: React.FC = () => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(journeyData.length / itemsPerPage);
  
  const [[page, direction], setPage] = useState([0, 0]);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paginate = (newDirection: number) => {
    const nextPage = (page + newDirection + totalPages) % totalPages;
    setPage([nextPage, newDirection]);
  };

  const setPageDirect = (targetPage: number) => {
    const newDirection = targetPage > page ? 1 : -1;
    setPage([targetPage, newDirection]);
  };

  const currentItems = journeyData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
  };

  return (
    <div className="w-full relative pt-6 flex flex-col items-center overflow-hidden">
      <div className="w-full flex justify-center min-h-[660px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="grid grid-cols-3 grid-rows-2 justify-items-center items-center"
            style={{ columnGap: '158px', rowGap: '48px', width: 'max-content' }}
          >
            {currentItems.map((milestone) => (
              <MilestoneCircle
                key={milestone.id}
                milestone={milestone}
                isActive={true}
                onClick={() => {
                  setSelectedMilestone(milestone);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <JourneyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        milestone={selectedMilestone}
      />

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#EE0033] hover:text-[#EE0033] transition-all duration-300"
          aria-label="Previous Page"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2.5 items-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPageDirect(index)}
              className={cn(
                "h-2 transition-all duration-300 rounded-full",
                page === index 
                  ? "w-8 bg-[#EE0033]" 
                  : "w-2 bg-[#B5B4B4] hover:bg-[#EE0033]/40"
              )}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#EE0033] hover:text-[#EE0033] transition-all duration-300"
          aria-label="Next Page"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

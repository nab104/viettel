"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Milestone } from "@/data/journeyData";

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  milestone: Milestone | null;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose, milestone }) => {
  if (!milestone) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 will-change-[opacity]"
          style={{ background: "rgba(0, 0, 0, 0.9)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-[#333] w-full max-w-[1200px] overflow-hidden rounded-lg shadow-2xl flex flex-col md:flex-row"
            style={{ minHeight: "600px" }}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-6 right-6 z-[110] p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px]">
              <Image
                src={milestone.modalImage || milestone.image}
                alt={milestone.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
              <div className="space-y-12 overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
                {milestone.events?.map((event, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h3
                      style={{
                        alignSelf: "stretch",
                        color: "#FFF",
                        fontFamily: "var(--font-beausans)",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                      }}
                    >
                      {event.date}
                    </h3>
                    <p
                      style={{
                        alignSelf: "stretch",
                        color: "#FFF",
                        fontFamily: "var(--font-roboto)",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.6",
                      }}
                    >
                      {event.content}
                    </p>
                  </div>
                ))}
                
                {/* Fallback if no events are defined yet */}
                {!milestone.events && (
                  <div className="flex flex-col gap-4">
                    <h3
                      style={{
                        alignSelf: "stretch",
                        color: "#FFF",
                        fontFamily: "var(--font-beausans)",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                      }}
                    >
                      {milestone.year}
                    </h3>
                    <p
                      style={{
                        alignSelf: "stretch",
                        color: "#FFF",
                        fontFamily: "var(--font-roboto)",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "1.6",
                      }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

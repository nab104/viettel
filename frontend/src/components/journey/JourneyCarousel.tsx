"use client";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { journeyData } from "@/data/journeyData";
import { MilestoneCircle } from "./MilestoneCircle";
export const JourneyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = journeyData.length;
  const windowSize = 5;
  const visibleItems = useMemo(() => {
    const items: Array<{ idx: number; offset: number }> = [];
    const half = Math.floor(windowSize / 2);
    for (let i = -half; i <= half; i += 1) {
      const idx = (activeIndex + i + total) % total;
      items.push({ idx, offset: i });
    }
    return items;
  }, [activeIndex, total]);
  const onPrev = () => setActiveIndex((p) => (p - 1 + total) % total);
  const onNext = () => setActiveIndex((p) => (p + 1) % total);
  return (
    <div className="w-full">
      <div className="relative h-[360px] md:h-[430px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[1200px] h-full">
          {visibleItems.map(({ idx, offset }) => {
            const item = journeyData[idx];
            const isActive = offset === 0;
            const xMap: Record<number, string> = {
              [-2]: "translateX(-520px)",
              [-1]: "translateX(-260px)",
              [0]: "translateX(0px)",
              [1]: "translateX(260px)",
              [2]: "translateX(520px)",
            };
            const scaleMap: Record<number, number> = {
              [-2]: 0.72,
              [-1]: 0.86,
              [0]: 1,
              [1]: 0.86,
              [2]: 0.72,
            };
            const opacityMap: Record<number, number> = {
              [-2]: 0.75,
              [-1]: 0.95,
              [0]: 1,
              [1]: 0.95,
              [2]: 0.75,
            };
            return (
              <div
                key={`${item.id}-${idx}`}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                  transform: `${xMap[offset]} scale(${scaleMap[offset]})`,
                  opacity: opacityMap[offset],
                  zIndex: isActive ? 20 : 10,
                }}
              >
                <MilestoneCircle
                  milestone={item}
                  isActive={isActive}
                  onClick={() => setActiveIndex(idx)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* Nav controls */}
      <div className="mt-8 flex items-center justify-center gap-8">
        <button
          onClick={onPrev}
          aria-label="Mốc trước"
          className="w-12 h-12 rounded-full border border-[#EE0033] text-[#EE0033] hover:bg-[#EE0033] hover:text-white transition-colors inline-flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {journeyData.map((_, i) => (
            <button
              key={i}
              aria-label={`Chuyển tới mốc ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-8 bg-[#EE0033]" : "w-2 bg-[#B5B4B4]"
              }`}
            />
          ))}
        </div>
        <button
          onClick={onNext}
          aria-label="Mốc tiếp theo"
          className="w-12 h-12 rounded-full border border-[#EE0033] text-[#EE0033] hover:bg-[#EE0033] hover:text-white transition-colors inline-flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

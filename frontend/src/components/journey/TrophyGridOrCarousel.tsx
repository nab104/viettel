"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { trophiesData } from "@/data/trophies";
import { TrophyNavControls } from "./TrophyNavControls";

export const TrophyGridOrCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 3, align: "start" }
    },
    loop: false
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative z-10 w-full mt-[65px]">
      <div 
        ref={emblaRef} 
        style={{ maxWidth: '1391px', overflow: 'hidden' }}
        className="mx-auto"
      >
        <div className="flex">
          {trophiesData.map((trophy) => (
            <div
              key={trophy.id}
              style={{ flex: '0 0 480.58px', minWidth: '480.58px', paddingRight: '51.58px' }}
              className="group cursor-pointer"
            >
              <div 
                style={{ 
                  width: '429px', 
                  height: '429px', 
                  background: 'radial-gradient(100% 100% at 50% 50%, #F5F5F5 0%, #D9D9D9 100%)',
                  borderRadius: '25px',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.4)',
                }}
                className="overflow-hidden flex items-center justify-center relative transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-[#EE0033]/20"
              >
                {/* Subtle shine effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tr from-white via-transparent to-white pointer-events-none" />
                
                <img
                  src={trophy.image}
                  alt={trophy.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    transform: trophy.id === '9'
                      ? 'scale(2.0) translateY(-60px) translateX(-30px)'
                      : ['10', '11', '12'].includes(trophy.id) 
                        ? 'scale(1.6) translateY(-25px) translateX(-15px)' 
                        : trophy.id === '13'
                          ? 'scale(1.6) translateX(-15px)'
                          : trophy.id === '14' 
                            ? 'scale(2.0) translateY(-25px)' 
                            : trophy.id === '18'
                              ? 'scale(1.8) translateX(15px) translateY(15px)'
                              : 'scale(2.0)' 
                  }}
                  className="object-contain group-hover:scale-[1.05]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[35px] flex justify-center">
        <TrophyNavControls
          onPrev={scrollPrev}
          onNext={scrollNext}
          canPrev={canPrev}
          canNext={canNext}
          total={scrollSnaps.length}
          current={selectedIndex}
          onDotClick={scrollTo}
        />
      </div>
    </div>
  );
};

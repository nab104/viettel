"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import { motion } from "framer-motion";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HÀNH TRÌNH TỰ HÀO", href: "/hanh-trinh" },
    { name: "CON NGƯỜI VIETTEL STORE", href: "/con-nguoi" },
    { name: "CÂU CHUYỆN VIETTEL STORE", href: "/cau-chuyen" },
    { name: "VỮNG BƯỚC TƯƠNG LAI", href: "/tuong-lai" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-none w-full max-w-7xl px-8 md:px-12 h-20 flex items-center justify-between pointer-events-auto border border-white/20">
        <div className="flex items-center flex-shrink-0 h-full">
          <Link href="/" className="block relative w-48 h-full md:w-64 overflow-hidden">
            <Image 
              src="/images/logo-viettel-store.png" 
              alt="Viettel Store" 
              fill 
              className="object-contain object-left scale-[3.8] origin-left translate-x-12 translate-y-2"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 ml-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "relative text-xs xl:text-sm font-black transition-colors uppercase whitespace-nowrap tracking-tight py-1",
                  isActive ? "text-viettel" : "text-gray-500 hover:text-viettel"
                )}
                style={{ fontFamily: 'var(--font-beausans)' }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-viettel"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-4 gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "text-base font-black transition-colors uppercase py-3 border-b border-gray-50",
                  isActive ? "text-viettel" : "text-gray-500"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

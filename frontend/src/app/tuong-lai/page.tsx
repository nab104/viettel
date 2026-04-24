"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TuongLaiPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white pt-24">
      
      {/* Main Future Vision Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#EE0033]">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/ảnh trang chủ.jpg" 
            alt="Future Vision" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-tight">
            VỮNG BƯỚC <br /> TƯƠNG LAI
          </h1>
          <p className="text-xl md:text-3xl font-light text-red-100 uppercase tracking-[0.3em] mb-12">Kiến tạo cuộc sống mới</p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Navigation Matrix */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/hanh-trinh" className="group">
              <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center h-full">
                <span className="text-4xl mb-6 group-hover:scale-125 transition-transform">📜</span>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-4 group-hover:text-[#EE0033]">Hành trình tự hào</h3>
                <p className="text-gray-500 text-sm">Nhìn lại những cột mốc lịch sử đầy tự hào.</p>
              </div>
            </Link>
            <Link href="/con-nguoi" className="group">
              <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center h-full">
                <span className="text-4xl mb-6 group-hover:scale-125 transition-transform">👥</span>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-4 group-hover:text-[#EE0033]">Con người Viettel Store</h3>
                <p className="text-gray-500 text-sm">Sức mạnh từ sự đoàn kết và tận tâm.</p>
              </div>
            </Link>
            <Link href="/cau-chuyen" className="group">
              <div className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center h-full">
                <span className="text-4xl mb-6 group-hover:scale-125 transition-transform">💬</span>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-4 group-hover:text-[#EE0033]">Câu chuyện Viettel Store</h3>
                <p className="text-gray-500 text-sm">Những khoảnh khắc tận tâm vì khách hàng.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Branding Statement */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-12">
            <Image 
              src="/images/Logo Viettel Store (1).png" 
              alt="Viettel Store Logo" 
              width={200} 
              height={80} 
              className="mx-auto opacity-80"
            />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed italic">
            "Viettel Store - Cộng hưởng giá trị, kiến tạo tương lai. Chúng tôi cam kết mang đến những trải nghiệm tốt nhất cho mọi khách hàng."
          </p>
        </div>
      </section>

    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";

const leaders = [
  { name: "ĐINH THỊ DUNG", role: "Thiếu tá - Giám đốc", img: "/images/z5250551338991_e69aae7652c168f0874c54ff8b85240d.jpg" },
  { name: "NGUYỄN DANH HIẾU", role: "Thượng tá - Phó Giám đốc", img: "/images/duy.jpg" },
  { name: "TRỊNH NGỌC TRUNG", role: "Thượng tá - Phó Giám đốc", img: "/images/lợi.jpg" },
];

const formerDirectors = [
  { name: "NGUYỄN CHÍ THANH", rank: "Đại tá", img: "/images/Anh 5.jpg" },
  { name: "NGUYỄN DUY TUẤN", rank: "Đại tá", img: "/images/Anh 6.jpg" },
  { name: "NGUYỄN QUANG VINH", rank: "Đồng chí", img: "/images/JAY_4272.JPG" },
  { name: "LÊ QUỐC TUẤN", rank: "Đồng chí", img: "/images/PMD_2426.jpg" },
  { name: "PHẠM THỊ THANH VÂN", rank: "Đại tá", img: "/images/thảo.jpg" },
  { name: "VŨ TÂM HÒA", rank: "Thượng tá", img: "/images/thuỷ.jpg" },
];

const departments = [
  { name: "Phòng Kinh doanh Thiết bị", icon: "📱" },
  { name: "Khối Thương mại Điện tử", icon: "🌐" },
  { name: "Phòng Kinh doanh Dịch vụ", icon: "⚙️" },
  { name: "Phòng Marketing", icon: "📣" },
];

export default function ConNguoiPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white pt-24">
      
      {/* Hero Section */}
      <section className="bg-[#EE0033] py-20 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">CON NGƯỜI VIETTEL STORE</h1>
          <p className="text-xl md:text-2xl font-medium text-red-100 uppercase tracking-widest">Sức mạnh từ sự đoàn kết</p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-[#EE0033] font-black text-3xl md:text-4xl uppercase mb-16 text-center tracking-tight">BAN GIÁM ĐỐC</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {leaders.map((leader, idx) => (
              <div key={idx} className="flex flex-col items-center group w-full sm:w-64">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-[#EE0033] p-1 transition-transform duration-500 group-hover:scale-105">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                      <Image
                        src={leader.img}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-[#EE0033] font-bold uppercase tracking-widest text-sm">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Former Directors */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-[#EE0033] font-black text-3xl md:text-4xl uppercase mb-16 text-center tracking-tight">GIÁM ĐỐC CÁC THỜI KỲ</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {formerDirectors.map((director, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200 p-1 group-hover:border-[#EE0033] transition-colors">
                    <div className="relative w-full h-full rounded-full overflow-hidden grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      <Image
                        src={director.img}
                        alt={director.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter mb-1">{director.rank}</p>
                  <h4 className="text-sm font-black text-gray-900 group-hover:text-[#EE0033] transition-colors">{director.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-white font-black text-3xl md:text-4xl uppercase mb-16 text-center tracking-tight">CÁC PHÒNG BAN & KHỐI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-[#222222] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#EE0033]/50 transition-all duration-500 group cursor-pointer text-center">
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-125 duration-500">{dept.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-[#EE0033] transition-colors">{dept.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Trần Thị Thu Hà",
    role: "Cửa hàng trưởng Viettel Store 120 Lạch Tray, Hải Phòng",
    text: "Viettel Store là nơi tôi được rèn luyện, trưởng thành và cống hiến hết mình cho công việc. Mỗi khách hàng hài lòng là một niềm hạnh phúc lớn lao đối với tôi và đồng đội.",
    img: "/images/hà.jpg"
  },
  {
    name: "Nguyễn Văn Nam",
    role: "Nhân viên kỹ thuật Viettel Store 236 Khương Đình, Hà Nội",
    text: "Gắn bó với Viettel Store từ những ngày đầu, tôi luôn tự hào về môi trường làm việc chuyên nghiệp và tinh thần đồng đội tuyệt vời nơi đây.",
    img: "/images/duy1.jpg"
  }
];

export default function CauChuyenPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white pt-24">
      
      {/* Hero Section with Red Background and White Text */}
      <section className="bg-[#EE0033] py-24 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter leading-tight max-w-4xl mx-auto">
            CẢM ƠN VÌ ĐÃ LÀ MỘT MẢNH GHÉP CỦA VIETTEL STORE
          </h1>
          <p className="text-lg md:text-xl font-medium text-red-100 uppercase tracking-[0.2em]">Câu chuyện về sự tận tâm</p>
        </div>
        
        {/* Heart Collage Visual Placeholder (Abstract) */}
        <div className="mt-16 container mx-auto px-4 max-w-5xl">
          <div className="relative aspect-[2/1] bg-white/10 rounded-[3rem] backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-30">
               <Image 
                 src="/images/z5250551338991_e69aae7652c168f0874c54ff8b85240d.jpg" 
                 alt="Collage Background" 
                 fill 
                 className="object-cover blur-sm"
               />
            </div>
            <div className="relative z-10 text-center p-8">
              <div className="text-8xl mb-4 animate-pulse">❤️</div>
              <p className="text-sm uppercase tracking-widest font-bold">Hàng nghìn mảnh ghép tạo nên một trái tim Viettel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-[#EE0033] font-black text-4xl md:text-5xl uppercase mb-8 tracking-tighter">PHỦ SÓNG 63 TỈNH THÀNH</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Từ vùng cao biên giới đến hải đảo xa xôi, Viettel Store luôn hiện diện để mang công nghệ đến gần hơn với mọi người dân Việt Nam. Sự tin tưởng của khách hàng trên khắp mọi miền Tổ quốc là động lực để chúng tôi không ngừng vươn xa.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-5xl font-black text-[#EE0033]">400+</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Siêu thị</span>
              </div>
              <div>
                <span className="block text-5xl font-black text-[#EE0033]">63</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Tỉnh thành</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 bg-[#EE0033]/5 rounded-full animate-ping"></div>
            <div className="relative w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-gray-100 p-12">
              {/* Abstract Map Representation */}
              <div className="text-[#EE0033] opacity-20 transform scale-150">
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                  <path fill="currentColor" d="M100,20 C110,40 130,50 140,70 C150,90 140,120 120,140 C100,160 80,180 70,160 C60,140 50,110 60,80 C70,50 90,30 100,20 Z" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-[#EE0033] text-center px-8">KẾT NỐI MỌI MIỀN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-[#EE0033] font-black text-3xl md:text-4xl uppercase mb-16 text-center tracking-tight">NHỮNG CHUYỆN CHƯA KỂ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">{t.name}</h3>
                    <p className="text-xs text-[#EE0033] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

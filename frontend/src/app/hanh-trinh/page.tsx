"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Target, Rocket, Globe, ShieldCheck } from "lucide-react";

export default function HanhTrinhPage() {
  const [timelineRef, timelineApi] = useEmblaCarousel({ align: "start", loop: false });
  const [awardRef, awardApi] = useEmblaCarousel({ loop: true });
  const [cupRef, cupApi] = useEmblaCarousel({ align: "center", loop: true });

  const milestones = [
    { year: "2006", title: "Khởi đầu một hành trình lớn", img: "/images/z5250551338991_e69aae7652c168f0874c54ff8b85240d.jpg" },
    { year: "2008", title: "Bứt tốc mở rộng quy mô", img: "/images/khai-truong-viettel-store-7-750x419.jpg" },
    { year: "2009", title: "Xây nền vận hành quy chuẩn", img: "/images/viettel-store-10-min.png" },
    { year: "2010", title: "Tạo đà tăng trưởng", img: "/images/viettel-store-2.jpg" },
    { year: "2011", title: "Phủ sóng toàn quốc", img: "/images/viettel-store-3-min.png" },
    { year: "2012", title: "Nâng tầm trải nghiệm", img: "/images/viettel-store-6-min.png" },
    { year: "2014", title: "Khẳng định vị thế", img: "/images/viettel-store-8-3.png" },
    { year: "2015", title: "Đột phá doanh thu", img: "/images/558189772_1322856383210664_8383029911879715632_n.jpg" },
    { year: "2016", title: "Chuyển mình kỷ nguyên số", img: "/images/z5250551357995_82a057a13e401ac4007bed59bda159fb.jpg" },
    { year: "2018", title: "Tối ưu hóa hệ thống", img: "/images/DSC04237.jpg" },
    { year: "2019", title: "Vươn tầm dịch vụ", img: "/images/DSC04246.jpg" },
    { year: "2020", title: "Vững vàng vượt sóng", img: "/images/DSC04322.jpg" },
    { year: "2021", title: "Dẫn đầu xu hướng", img: "/images/JAY_4272.JPG" },
    { year: "2022", title: "Bứt phá đa kênh", img: "/images/PMD_2426.jpg" },
    { year: "2023", title: "Kỷ niệm 17 năm", img: "/images/z5260074056289_56ea67f628a32187d6de49a6223afc41.jpg" },
  ];

  const trophies = [
    { title: "SAMSUNG PARTNER", subtitle: "Nhà bán lẻ xuất sắc nhất 2023", img: "/images/TRI_0877.JPG" },
    { title: "GOLD STAR AWARD", subtitle: "Performance in Driving Top Line 2023", img: "/images/TRI_0984.JPG" },
    { title: "VIETTEL STORE", subtitle: "Top 10 Công ty Bán lẻ uy tín 2022", img: "/images/OK5A7235.JPG" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white pt-24 overflow-x-hidden">
      
      {/* 1. VỀ CHÚNG TÔI (Detailed High-Fidelity Section) */}
      <section className="w-full">
        {/* Banner nhân viên ở trên */}
        <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
          <Image 
            src="/images/410A1920.JPG" 
            alt="Viettel Store Employees" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Block nền đỏ lớn */}
        <div className="bg-[#EE0033] relative pt-16 pb-32 md:pb-48 -mt-1">
          <div className="container mx-auto px-6 max-w-[1320px] relative z-10">
            
            {/* Intro Grid: Title/Desc (Left) & Collage (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-start">
              <div className="text-white space-y-8">
                <h2 className="text-4xl md:text-[48px] font-bold leading-none tracking-tight text-white uppercase font-beausans">
                  VỀ CHÚNG TÔI
                </h2>
                <p className="text-sm md:text-[16px] leading-[1.35] font-roboto max-w-xl">
                  Viettel Store được thành lập ngày 03/05/2006 với siêu thị điện thoại đầu tiên tại Hà Nội, là đơn vị nòng cốt thuộc Viettel Commerce. Từ con số 0, Viettel Store đã phát triển trở thành chuỗi bán lẻ thiết bị viễn thông và công nghệ hàng đầu Việt Nam, giữ vững vị thế Top 3 thị trường.
                </p>
              </div>

              {/* Collage Ảnh Mosaic */}
              <div className="grid grid-cols-3 grid-rows-2 gap-1 h-[300px] md:h-[400px]">
                <div className="relative col-span-1 row-span-1">
                  <Image src="/images/z5250551357995_82a057a13e401ac4007bed59bda159fb.jpg" fill className="object-cover" alt="Store 1" />
                </div>
                <div className="bg-[#EE0033] border border-white/10"></div>
                <div className="relative col-span-1 row-span-1">
                  <Image src="/images/DSC04237.jpg" fill className="object-cover" alt="Store 2" />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image src="/images/viettel-store-2-750x447.jpg" fill className="object-cover" alt="Store 3" />
                </div>
                <div className="relative col-span-2 row-span-1">
                  <Image src="/images/z5250551338991_e69aae7652c168f0874c54ff8b85240d.jpg" fill className="object-cover" alt="Store 4" />
                </div>
              </div>
            </div>

            {/* 4 Cột Thông Tin */}
            <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Cột 1 */}
              <div className="flex flex-col items-center text-center text-white group">
                <Target className="w-14 md:w-16 h-14 md:h-16 mb-6 stroke-[1.5]" />
                <h4 className="text-xl md:text-[24px] font-bold uppercase mb-4 font-beausans leading-none">
                  TẦM NHÌN
                </h4>
                <p className="text-sm md:text-[16px] leading-[1.35] font-roboto opacity-90 max-w-[220px]">
                  Trở thành nhà bán lẻ đa sản phẩm, dịch vụ hàng đầu tại Việt Nam
                </p>
              </div>

              {/* Cột 2 */}
              <div className="flex flex-col items-center text-center text-white group">
                <Rocket className="w-14 md:w-16 h-14 md:h-16 mb-6 stroke-[1.5]" />
                <h4 className="text-xl md:text-[24px] font-bold uppercase mb-4 font-beausans leading-none">
                  SỨ MỆNH
                </h4>
                <div className="text-sm md:text-[16px] leading-[1.35] font-roboto opacity-90 max-w-[220px] space-y-4">
                  <p><span className="font-bold">Với khách hàng:</span> Đặt khách hàng làm trung tâm, mang đến trải nghiệm thuận tiện – tận tâm – hiện đại.</p>
                  <p><span className="font-bold">Với đối tác:</span> Hợp tác bền vững, cùng phát triển và mở rộng giá trị công nghệ.</p>
                  <p><span className="font-bold">Với nhân viên:</span> Xây dựng môi trường chuyên nghiệp, kỷ luật và phát triển lâu dài.</p>
                </div>
              </div>

              {/* Cột 3 */}
              <div className="flex flex-col items-center text-center text-white group">
                <Globe className="w-14 md:w-16 h-14 md:h-16 mb-6 stroke-[1.5]" />
                <h4 className="text-xl md:text-[24px] font-bold uppercase mb-4 font-beausans leading-none">
                  MẠNG LƯỚI & SẢN PHẨM
                </h4>
                <p className="text-sm md:text-[16px] leading-[1.35] font-roboto opacity-90 max-w-[220px]">
                  Phủ sóng toàn quốc với hệ thống siêu thị hiện đại, cung cấp đa dạng sản phẩm: smartphone, laptop, thiết bị thông minh và dịch vụ viễn thông – tài chính – số. Đáp ứng toàn diện nhu cầu công nghệ với chất lượng cao và giá cạnh tranh.
                </p>
              </div>

              {/* Cột 4 */}
              <div className="flex flex-col items-center text-center text-white group">
                <ShieldCheck className="w-14 md:w-16 h-14 md:h-16 mb-6 stroke-[1.5]" />
                <h4 className="text-xl md:text-[24px] font-bold uppercase mb-4 font-beausans leading-none">
                  CHUYỂN ĐỔI SỐ & TRẢI NGHIỆM
                </h4>
                <p className="text-sm md:text-[16px] leading-[1.35] font-roboto opacity-90 max-w-[220px]">
                  Chuyển dịch mạnh mẽ sang mô hình bán hàng đa kênh Omnichannel, kết hợp hệ thống cửa hàng và nền tảng online. Không ngừng tối ưu trải nghiệm khách hàng với hệ thống CRM hiện đại.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern đáy (Wavy contour) */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[280px] pointer-events-none z-0">
            <Image 
              src="/images/diahinh2.png" 
              alt="Wave Pattern" 
              fill 
              className="object-cover object-bottom opacity-40 mix-blend-overlay"
            />
          </div>
        </div>
      </section>

      {/* 2. HÀNH TRÌNH TỰ HÀO (Timeline) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[#EE0033] font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">HÀNH TRÌNH TỰ HÀO</h2>
            <p className="text-gray-500 uppercase tracking-widest font-bold text-sm">15 cột mốc lịch sử</p>
          </div>

          <div className="overflow-hidden" ref={timelineRef}>
            <div className="flex gap-8">
              {milestones.map((item, idx) => (
                <div key={idx} className="flex-[0_0_280px] md:flex-[0_0_350px] min-w-0 group relative">
                  <div className="relative aspect-square rounded-full overflow-hidden border-8 border-gray-50 shadow-xl group-hover:border-[#EE0033] transition-colors duration-500">
                    <Image src={item.img} fill alt={item.year} className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-4xl font-black mb-2">{item.year}</span>
                      <p className="text-center text-sm font-bold uppercase">{item.title}</p>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <div className="text-3xl font-black text-[#EE0033] mb-2">{item.year}</div>
                    <div className="w-12 h-1 bg-gray-200 mx-auto rounded-full group-hover:bg-[#EE0033] transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-12">
            <button onClick={() => timelineApi?.scrollPrev()} className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-[#EE0033] hover:text-white transition-all shadow-sm"><ChevronLeft /></button>
            <button onClick={() => timelineApi?.scrollNext()} className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-[#EE0033] hover:text-white transition-all shadow-sm"><ChevronRight /></button>
          </div>
        </div>
      </section>

      {/* 3. THÀNH TỰU (White Stats) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
           <h2 className="text-[#EE0033] font-black text-6xl md:text-8xl uppercase mb-16 tracking-tighter opacity-10 leading-none">THÀNH TỰU</h2>
           
           <div className="bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 relative -mt-32">
             <div className="flex-1 space-y-6">
                {[
                  "Top 3 bán lẻ Việt Nam",
                  "Top 2 Đông Nam Á",
                  "Doanh thu TMĐT dẫn đầu",
                  "Tỷ trọng online cao nhất",
                  "Top 3 thương hiệu uy tín"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-[#EE0033] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-xl md:text-2xl font-black text-gray-800 uppercase italic">{text}</span>
                  </div>
                ))}
             </div>
             <div className="flex-1 text-center md:text-right">
                <h3 className="text-[#EE0033] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">VỊ THẾ <br /> THỊ TRƯỜNG</h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Khẳng định sức mạnh dẫn đầu</p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { title: "HỆ THỐNG & ĐỔI MỚI", items: ["Hệ sinh thái đa kênh", "Phủ sóng toàn quốc", "Tiên phong bán lẻ"] },
                { title: "KHÁCH HÀNG", items: ["20 triệu khách/năm", "Phân phối toàn quốc", "Cửa hàng trải nghiệm chuẩn"] },
                { title: "NHÂN SỰ & CỘNG ĐỒNG", items: ["2.000+ nhân sự", "Môi trường chuyên nghiệp", "Hoạt động xã hội"] }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-all">
                  <h4 className="text-[#EE0033] font-black text-lg mb-6 uppercase tracking-tight border-b pb-4">{card.title}</h4>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="text-gray-600 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. DANH HIỆU (Awards) */}
      <section className="py-24 bg-[#EE0033] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <span className="text-[20rem] font-black italic">AWARDS</span>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-tighter text-center">DANH HIỆU CAO QUÝ</h2>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={awardRef}>
            <div className="flex">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 flex justify-center p-4">
                  <div className="bg-white text-gray-900 rounded-[3rem] p-12 md:p-20 max-w-3xl w-full shadow-2xl text-center relative">
                    <span className="block text-[#EE0033] font-black text-2xl mb-4">NĂM 2025</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tighter leading-tight">CỜ THI ĐUA TẬP ĐOÀN</h3>
                    <div className="w-20 h-1 bg-[#EE0033] mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                      Quyết định số 16704/QĐ-CNVTQĐ ngày 31/12/2025 của Tập đoàn Công nghiệp - Viễn thông Quân đội trao tặng.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CÚP VÀ GIẢI THƯỞNG (Trophy Slider) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-[#EE0033] font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none">CÚP VÀ <br /> GIẢI THƯỞNG</h2>
            <div className="flex gap-4">
              <button onClick={() => cupApi?.scrollPrev()} className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-[#EE0033] hover:text-white transition-all shadow-lg"><ChevronLeft /></button>
              <button onClick={() => cupApi?.scrollNext()} className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-[#EE0033] hover:text-white transition-all shadow-lg"><ChevronRight /></button>
            </div>
          </div>

          <div className="overflow-hidden" ref={cupRef}>
            <div className="flex gap-8">
              {trophies.map((trophy, idx) => (
                <div key={idx} className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0">
                  <div className="bg-gray-50 rounded-[3rem] p-8 h-full border border-gray-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
                    <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-2xl">
                      <Image src={trophy.img} fill alt={trophy.title} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-black text-xl mb-2 text-gray-800 uppercase tracking-tight">{trophy.title}</h4>
                      <p className="text-[#EE0033] font-bold text-xs uppercase tracking-widest">{trophy.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

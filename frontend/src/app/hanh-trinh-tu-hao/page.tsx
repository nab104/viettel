import Image from "next/image";

export default function HanhTrinhTuHaoPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-fs-magistral overflow-hidden">
      
      {/* 1. Hero Banner for Hành Trình */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/Anh 5.jpg"
          alt="Viettel Store Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-wide drop-shadow-lg">HÀNH TRÌNH TỰ HÀO</h1>
          <p className="text-xl md:text-3xl font-light drop-shadow-md">Viettel Store - Nơi kiến tạo tương lai số</p>
        </div>
      </section>

      {/* 2. Core Values (4 Cột) */}
      <section className="bg-[#EE0033] text-white py-20 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
          <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,121.22,201.2,112.5,242.42,107.38,282.8,92.05,321.39,56.44Z" fill="#EE0033"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center max-w-6xl">
          {[
            { icon: "🎯", title: "TẦM NHÌN", desc: "Trở thành hệ thống bán lẻ các sản phẩm, dịch vụ viễn thông, công nghệ thông tin lớn nhất Việt Nam" },
            { icon: "❤️", title: "SỨ MỆNH", desc: "Đem đến cho khách hàng trải nghiệm mua sắm tuyệt vời cùng những sản phẩm công nghệ tiên tiến nhất" },
            { icon: "🤝", title: "MẠNG LƯỚI", desc: "Hơn 400 siêu thị trải dài khắp 63 tỉnh thành trên toàn quốc, phục vụ hàng triệu khách hàng" },
            { icon: "👥", title: "CON NGƯỜI", desc: "Đội ngũ nhân sự trẻ trung, năng động, nhiệt huyết, luôn tận tâm phục vụ khách hàng" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 text-4xl group-hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {item.icon}
              </div>
              <h3 className="font-bold text-2xl mb-4 tracking-wider">{item.title}</h3>
              <p className="text-base font-light text-red-100/90 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Timeline Lịch Sử */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-[#EE0033] font-bold text-4xl md:text-5xl uppercase mb-20 tracking-wider">Hành Trình Tự Hào</h2>
          
          <div className="relative">
            {/* Horizontal Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#EE0033]/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 relative z-10">
              {[
                { year: '2006', image: '/images/DSC04237.jpg', desc: 'Thành lập Hệ thống bán lẻ Viettel' },
                { year: '2009', image: '/images/DSC04246.jpg', desc: 'Mở rộng chuỗi cửa hàng toàn quốc' },
                { year: '2015', image: '/images/Anh 6.jpg', desc: 'Ra mắt nhận diện thương hiệu Viettel Store' },
                { year: '2018', image: '/images/PMD_2333.jpg', desc: 'Đạt mốc 300 siêu thị' },
                { year: '2020', image: '/images/PMD_2426.jpg', desc: 'Đẩy mạnh chuyển đổi số & thương mại điện tử' },
                { year: '2024', image: '/images/C38A5937a.jpg', desc: 'Hơn 400 siêu thị, phục vụ hàng triệu khách hàng' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-gray-200 relative mb-6 transition-all duration-500 group-hover:scale-105 group-hover:border-[#EE0033]/20">
                    <Image
                      src={item.image}
                      alt={`Viettel Store ${item.year}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-black text-3xl md:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wider">{item.year}</span>
                    </div>
                  </div>
                  <p className="text-base text-gray-800 font-medium px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Danh Hiệu & Giải Thưởng */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#EE0033] font-bold text-4xl md:text-5xl uppercase tracking-wider">Danh Hiệu Tập Thể</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
             {/* Left Card */}
             <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex-1 relative transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
               <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#EE0033] rounded-full flex items-center justify-center text-white text-xl shadow-lg">🏆</div>
               <h3 className="text-2xl font-bold mb-4 text-[#EE0033]">Cờ thi đua Tập đoàn</h3>
               <p className="text-gray-600 leading-relaxed">Ghi nhận những thành tích xuất sắc và sự nỗ lực không ngừng nghỉ của tập thể Viettel Store trong việc hoàn thành các chỉ tiêu sản xuất kinh doanh, góp phần vào sự phát triển chung của Tập đoàn.</p>
             </div>
             
             {/* Middle Card (Featured) */}
             <div className="bg-[#EE0033] text-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_40px_rgba(238,0,51,0.2)] flex-1 z-10 transform scale-105">
               <h3 className="text-3xl font-black mb-4 tracking-wide">Tập thể xuất sắc</h3>
               <p className="text-red-100 leading-relaxed mb-6">Đơn vị dẫn đầu phong trào thi đua, luôn hoàn thành vượt mức các kế hoạch được giao, đem lại giá trị cao nhất cho khách hàng.</p>
               <div className="flex gap-2">
                 {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
               </div>
             </div>

             {/* Right Card */}
             <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex-1 relative transform md:rotate-[2deg] hover:rotate-0 transition-transform duration-300">
               <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white border-[3px] border-[#EE0033] rounded-full flex items-center justify-center text-[#EE0033] text-xl shadow-lg">🏅</div>
               <h3 className="text-2xl font-bold mb-4 text-gray-900">Bằng khen các cấp</h3>
               <p className="text-gray-600 leading-relaxed">Liên tục nhận được nhiều bằng khen, giấy khen từ các cấp Bộ, Ban ngành và Tập đoàn vì những đóng góp tích cực cho xã hội.</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* 5. Cúp và Hình Ảnh Nổi Bật */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-[#EE0033] font-bold text-4xl uppercase mb-16 tracking-wider">Hình Ảnh Nổi Bật</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/images/IMG_0006.JPG',
              '/images/IMG_0041.JPG',
              '/images/OK5A7235.JPG',
              '/images/OK5A7255.JPG'
            ].map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl shadow-md aspect-[4/5] relative cursor-pointer">
                <Image
                  src={img}
                  alt={`Hoạt động Viettel Store ${idx}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Khoảnh Khắc Tự Hào</h4>
                  <p className="text-gray-200 text-sm">Hoạt động nội bộ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

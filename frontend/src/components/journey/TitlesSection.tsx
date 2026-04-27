export function TitlesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[#EE0033] font-beausans font-bold text-4xl md:text-5xl uppercase tracking-wider">Danh Hiệu Tập Thể</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Card */}
          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex-1 relative transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#EE0033] rounded-full flex items-center justify-center text-white text-xl shadow-lg">🏆</div>
            <h3 className="text-2xl font-beausans font-bold mb-4 text-[#EE0033]">Cờ thi đua Tập đoàn</h3>
            <p className="text-gray-600 font-roboto font-normal leading-relaxed">Ghi nhận những thành tích xuất sắc và sự nỗ lực không ngừng nghỉ của tập thể Viettel Store trong việc hoàn thành các chỉ tiêu sản xuất kinh doanh, góp phần vào sự phát triển chung của Tập đoàn.</p>
          </div>

          {/* Middle Card (Featured) */}
          <div className="bg-[#EE0033] text-white p-8 md:p-12 rounded-[32px] shadow-[0_20px_40px_rgba(238,0,51,0.2)] flex-1 z-10 transform scale-105">
            <h3 className="text-3xl font-beausans font-bold mb-4 tracking-wide">Tập thể xuất sắc</h3>
            <p className="text-red-100 font-roboto font-normal leading-relaxed mb-6">Đơn vị dẫn đầu phong trào thi đua, luôn hoàn thành vượt mức các kế hoạch được giao, đem lại giá trị cao nhất cho khách hàng.</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex-1 relative transform md:rotate-[2deg] hover:rotate-0 transition-transform duration-300">
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white border-[3px] border-[#EE0033] rounded-full flex items-center justify-center text-[#EE0033] text-xl shadow-lg">🏅</div>
            <h3 className="text-2xl font-beausans font-bold mb-4 text-gray-900">Bằng khen các cấp</h3>
            <p className="text-gray-600 font-roboto font-normal leading-relaxed">Liên tục nhận được nhiều bằng khen, giấy khen từ các cấp Bộ, Ban ngành và Tập đoàn vì những đóng góp tích cực cho xã hội.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

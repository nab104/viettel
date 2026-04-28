"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RipplePattern } from "@/components/journey/RipplePattern";
import { 
  TrendingUp, 
  Cpu, 
  Users, 
  Target, 
  Globe, 
  Zap, 
  Box, 
  Star, 
  UserPlus, 
  ShieldCheck, 
  Flag,
  ArrowRight
} from "lucide-react";

const strategicPillars = [
  {
    id: "01",
    title: "TĂNG TRƯỞNG KINH DOANH",
    content: "Mở rộng quy mô, gia tăng doanh thu và giữ vững hiệu quả lợi nhuận.",
    color: "#EE0033",
    icon: <TrendingUp size={32} />
  },
  {
    id: "02",
    title: "CÔNG NGHỆ & BÁN LẺ MỚI",
    content: "Dẫn đầu ứng dụng AI, Big Data và phát triển hệ sinh thái đa dịch vụ.",
    color: "#004B8D",
    icon: <Cpu size={32} />
  },
  {
    id: "03",
    title: "TỔ CHỨC VỮNG MẠNH",
    content: "Xây dựng bộ máy tinh gọn, nhân sự chuyên nghiệp và Đảng bộ trong sạch.",
    color: "#2D6B3F",
    icon: <Users size={32} />
  }
];

const focusGoals = [
  {
    id: "01",
    title: "MỤC TIÊU TỔNG THỂ",
    icon: <Target className="text-[#EE0033]" size={24} />,
    items: [
      "Top 3 chuỗi bán lẻ lớn nhất Việt Nam",
      "Số 1 về ứng dụng công nghệ",
      "Phát triển thêm ít nhất 01 chuỗi bán lẻ mới độc lập"
    ]
  },
  {
    id: "02",
    title: "TĂNG TRƯỞNG KINH DOANH",
    icon: <TrendingUp className="text-[#EE0033]" size={24} />,
    items: [
      "Doanh thu đạt 13.000 tỷ vào năm 2030",
      "Lợi nhuận trước thuế đạt 200 tỷ",
      "Thị phần bán lẻ điện thoại 13-15%",
      "Tỷ suất lợi nhuận/doanh thu đạt 1,5%"
    ]
  },
  {
    id: "03",
    title: "THỊ TRƯỜNG & KÊNH BÁN",
    icon: <Globe className="text-[#EE0033]" size={24} />,
    items: [
      "Mở rộng 20-30 siêu thị tại khu vực tiềm năng",
      "Kênh online chiếm 40-45% doanh thu",
      "Phát triển đa kênh: offline - online - KHDN - affiliate - tự động hóa",
      "Mở rộng thị trường quốc tế"
    ]
  },
  {
    id: "04",
    title: "CHUYỂN ĐỔI SỐ & CÔNG NGHỆ",
    icon: <Zap className="text-[#EE0033]" size={24} />,
    items: [
      "Dẫn đầu ứng dụng AI, Big Data trong bán lẻ",
      "Số hóa toàn bộ hoạt động quản trị, bán hàng, chăm sóc khách hàng",
      "Tự động hóa vận hành, thanh toán, quản trị",
      "Tăng năng suất và giảm phụ thuộc nhân lực thủ công"
    ]
  },
  {
    id: "05",
    title: "SẢN PHẨM & LĨNH VỰC MỚI",
    icon: <Box className="text-[#EE0033]" size={24} />,
    items: [
      "Xây dựng hệ sinh thái đa sản phẩm - đa dịch vụ (công nghệ, tài chính, giáo dục, sức khỏe...)",
      "Phát triển Smart Home, IoT, thiết bị sức khỏe, làm đẹp, sản phẩm cho trẻ em",
      "Triển khai lĩnh vực mới: Grocery, năng lượng, sản phẩm organic..."
    ]
  },
  {
    id: "06",
    title: "TRẢI NGHIỆM KHÁCH HÀNG",
    icon: <Star className="text-[#EE0033]" size={24} />,
    items: [
      "Nâng cao trải nghiệm theo hướng cá nhân hóa - cao cấp (luxury)",
      "Xây dựng hệ thống CRM và chăm sóc khách hàng toàn diện",
      "Chuẩn hóa đội ngũ bán hàng, nâng cao chất lượng phục vụ"
    ]
  },
  {
    id: "07",
    title: "TỔ CHỨC & NHÂN SỰ",
    icon: <UserPlus className="text-[#EE0033]" size={24} />,
    items: [
      "Xây dựng bộ máy tinh gọn - hiệu quả - công nghệ hóa",
      "Quy mô khoảng 3.200 nhân sự vào 2030",
      "Thu nhập bình quân đạt 20 triệu/người/tháng",
      "Phát triển đội ngũ chuyên nghiệp, kỷ luật, gắn bó và làm chủ công nghệ"
    ]
  },
  {
    id: "08",
    title: "ĐƠN VỊ VỮNG MẠNH",
    icon: <ShieldCheck className="text-[#EE0033]" size={24} />,
    items: [
      "Bảo đảm ổn định chính trị nội bộ, đoàn kết, kỷ luật cao",
      "Không để xảy ra tham nhũng, lãng phí, vi phạm nghiêm trọng",
      "Thực hiện tốt chính sách, chăm lo đời sống vật chất và tinh thần người lao động"
    ]
  },
  {
    id: "09",
    title: "XÂY DỰNG ĐẢNG",
    icon: <Flag className="text-[#EE0033]" size={24} />,
    items: [
      "Xây dựng Đảng bộ trong sạch, vững mạnh toàn diện",
      "100% cán bộ, đảng viên có bản lĩnh chính trị vững vàng, hoàn thành nhiệm vụ",
      "Nâng cao chất lượng công tác cán bộ, kiểm tra, giám sát, sinh hoạt chi bộ",
      "Phòng chống 'tự diễn biến', 'tự chuyển hóa', bảo vệ chính trị nội bộ"
    ]
  }
];

export default function TuongLaiPage() {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Main Future Vision Section */}
      <section 
        className="relative h-screen flex items-center justify-end overflow-hidden"
        style={{ background: 'rgba(0, 0, 0, 0.85)' }}
      >
        {/* Red Box Overlay - Now filling the section */}
        <div 
          style={{ 
            position: 'absolute',
            inset: 0,
            background: 'rgba(112, 6, 6, 0.49)',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0 opacity-60">
          <Image 
            src="/images/tuong-lai/TuongLaiHead.png" 
            alt="Future Vision" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-end text-right pr-24" style={{ transform: 'translateY(-150px)' }}>
          <div style={{ marginRight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <motion.div 
              style={{ width: '626px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 style={{ 
                color: '#FFF', 
                fontFamily: 'var(--font-beausans)',
                fontSize: '52px', 
                fontWeight: 700, 
                lineHeight: 'normal',
                textTransform: 'uppercase',
                margin: 0,
                whiteSpace: 'nowrap'
              }}>
                VỮNG BƯỚC <motion.span 
                  style={{ color: '#E03' }}
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(224, 0, 51, 0.3)",
                      "0 0 25px rgba(224, 0, 51, 0.9)",
                      "0 0 12px rgba(224, 0, 51, 0.5)",
                      "0 0 35px rgba(224, 0, 51, 1)",
                      "0 0 5px rgba(224, 0, 51, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    times: [0, 0.1, 0.2, 0.4, 1],
                    ease: "easeInOut" 
                  }}
                >
                  TƯƠNG LAI
                </motion.span>
              </h1>
            </motion.div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px', marginRight: '0px' }}>
              <p style={{
                width: '324px',
                color: '#F2F2F2',
                textAlign: 'right',
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
              }}>
                Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
              </p>
              <div style={{ width: '2px', height: '63px', background: '#E03' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TẦM NHÌN 2030 SECTION */}
      <section className="relative w-full bg-[#F8F9FA] overflow-hidden py-24">
        {/* Topographic Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/diahinh2.2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            transform: 'rotate(-15deg) scale(1.5)',
            mixBlendMode: 'multiply',
            opacity: 0.05
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          {/* VISION HERO HEADER */}
          <motion.div 
            className="text-center mb-24 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ripple Pattern Decoration */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-[-1] opacity-[0.2]"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <RipplePattern className="w-full h-full" />
            </motion.div>

            <h3 className="text-[#EE0033] text-xl font-bold tracking-[0.2em] mb-4 uppercase">
              MỤC TIÊU ĐẾN NĂM 2030
            </h3>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight relative z-10">
              TRỞ THÀNH <span className="text-[#EE0033]">TOP 3</span><br/>
              CHUỖI BÁN LẺ LỚN NHẤT VIỆT NAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" style={{ fontFamily: 'var(--font-beausans)' }}>
              Dẫn đầu về công nghệ, khác biệt về trải nghiệm và bứt phá về tăng trưởng.
            </p>

            <div className="flex flex-wrap justify-center gap-12 mt-12">
              {[
                { icon: <TrendingUp size={24} />, text: "Tăng trưởng bền vững" },
                { icon: <Cpu size={24} />, text: "Dẫn đầu công nghệ" },
                { icon: <Users size={24} />, text: "Tổ chức vững mạnh" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#EE0033]/10 flex items-center justify-center text-[#EE0033]">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-beausans)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* THREE STRATEGIC PILLARS */}
          <div className="mb-32">
            <motion.h4 
              className="text-center text-2xl font-bold mb-12 tracking-widest text-gray-400 uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              BA TRỤ CỘT CHIẾN LƯỢC
            </motion.h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategicPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  className="bg-white rounded-[32px] p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.15,
                    ease: [0.21, 1.11, 0.81, 0.99] // Smooth spring-like ease
                  }}
                  whileHover={{ 
                    y: -15,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 w-2 h-full" 
                    style={{ background: pillar.color }}
                  />
                  <div className="flex flex-col h-full">
                    <span 
                      className="text-5xl font-black mb-6" 
                      style={{ 
                        color: pillar.color,
                        textShadow: `0 0 10px ${pillar.color}44, 0 0 20px ${pillar.color}22`
                      }}
                    >
                      {pillar.id}
                    </span>
                    <div className="mb-6" style={{ color: pillar.color }}>
                      {pillar.icon}
                    </div>
                    <h5 className="text-2xl font-bold mb-4 leading-tight">
                      {pillar.title}
                    </h5>
                    <p className="text-gray-500 leading-relaxed">
                      {pillar.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* NINE CENTRAL GOALS */}
          <div className="pb-12">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-3xl font-bold mb-4 tracking-widest text-gray-400 uppercase">
                9 MỤC TIÊU TRỌNG TÂM
              </h4>
              <p className="text-xl text-gray-500 italic" style={{ fontFamily: 'var(--font-beausans)' }}>Hệ thống mục tiêu được nhóm theo 3 trụ cột chiến lược</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {focusGoals.map((goal, idx) => {
                const isExpanded = expandedId === goal.id;
                return (
                  <motion.div
                    key={goal.id}
                    className={`bg-white/60 backdrop-blur-sm border border-white rounded-[26px] p-10 transition-all duration-500 cursor-pointer overflow-hidden ${
                      isExpanded ? "shadow-2xl shadow-[#EE0033]/10 bg-white scale-[1.02]" : "hover:bg-white hover:shadow-lg"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.08,
                      ease: "easeOut"
                    }}
                    onClick={() => setExpandedId(isExpanded ? null : goal.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                          {goal.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#EE0033] uppercase tracking-tighter">Mục tiêu {goal.id}</span>
                          <h6 className="font-bold text-lg uppercase">{goal.title}</h6>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        className={`text-[#EE0033] ${isExpanded ? "opacity-100" : "opacity-30"}`}
                      >
                        <ArrowRight size={24} style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }} />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 32 : 0
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <ul className="space-y-5">
                        {goal.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-base text-gray-600 group">
                            <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#EE0033]" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          height: '900px',
          backgroundImage: 'url(/images/tuong-lai/header-ve-chung-toi.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Red Overlay */}
        <div 
          className="absolute inset-0 bg-[#EE0033] opacity-40 z-[1]"
        />

        {/* Content Wrapper */}
        <motion.div 
          className="relative z-[2] h-full flex flex-col items-center justify-center text-center text-white px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div style={{ 
            fontFamily: 'Rockwell', 
            fontSize: '128px', 
            fontWeight: 700, 
            marginBottom: '-20px',
            lineHeight: 'normal'
          }}>
            “
          </div>
          
          <h2 style={{
            width: '1000px',
            fontFamily: 'var(--font-beausans)',
            fontSize: '52px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '28px',
            lineHeight: '1.2'
          }}>
            DẪN ĐẦU VỀ CÔNG NGHỆ - KHÁC BIỆT VỀ TRẢI NGHIỆM - BỨT PHÁ VỀ TĂNG TRƯỞNG
          </h2>

          <p style={{
            width: '600px',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 'normal'
          }}>
            Hành trình đến 2030 là hành trình tăng trưởng, đổi mới và khẳng định vị thế của Viettel Store.
          </p>
        </motion.div>
      </section>

    </div>
  );
}

"use client";
import { VietnamMap } from "@/components/story/VietnamMap";

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
    <div className="w-full bg-[#F2F2F2] pt-24 min-h-screen relative">
      <div
        style={{
          width: "100%",
          height: "3254px",
          background: "#F2F2F2",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Vietnam Map on the left */}
        <VietnamMap />

        {/* Header Text Section (Right side) */}
        <div
          style={{
            position: "absolute",
            right: "calc(16% + 5px)",
            top: "96px",
            zIndex: 10
          }}
        >
          <h1
            style={{
              width: "410px",
              color: "#484848",
              textAlign: "right",
              fontFamily: "var(--font-beausans)",
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "1",
              margin: 0
            }}
          >
            CÂU CHUYỆN
          </h1>
          <h2
            style={{
              width: "410px",
              color: "#ED1C24",
              textAlign: "right",
              fontFamily: "var(--font-beausans)",
              fontSize: "52px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "1",
              margin: 0
            }}
          >
            VIETTEL STORE
          </h2>

          <p
            style={{
              width: "324px",
              color: "#484848",
              textAlign: "right",
              fontFamily: "var(--font-roboto)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginTop: "10px",
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              transform: "translateX(80px)"
            }}
          >
            Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
          </p>
        </div>
      </div>

    </div>
  );
}



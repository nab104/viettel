import Image from "next/image";
import { Target, Compass, Users, UserCheck } from "lucide-react";

type AboutTile = {
  id: string;
  nodeId: string;
  image?: string;
  alt?: string;
  isRed?: boolean;
};

const aboutTiles: AboutTile[] = [
  // row 1
  { id: "r1c1", nodeId: "2474:2404", isRed: true },
  { id: "r1c2", nodeId: "2462:2511", image: "/images/about/2.jpg", alt: "Nhân viên tư vấn" },
  { id: "r1c3", nodeId: "2474:2405", isRed: true },
  { id: "r1c4", nodeId: "2530:1811", image: "/images/about/4.jpg", alt: "Đội ngũ nhân viên" },
  // row 2
  { id: "r2c1", nodeId: "2462:2458", image: "/images/about/1.jpg", alt: "Cửa hàng Viettel" },
  { id: "r2c2", nodeId: "extra-red-1", isRed: true },
  { id: "r2c3", nodeId: "2462:2521", image: "/images/about/3.jpg", alt: "Trải nghiệm khách hàng" },
  { id: "r2c4", nodeId: "extra-red-2", isRed: true },
];

const valueItems = [
  {
    icon: <Target size={83} />,
    title: "TẦM NHÌN",
    titleStyle: { width: '200px', height: '40px'}, 
    content: (
      <div
        style={{
          width: '169px',
          height: '58px',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
      >
        Trở thành nhà bán lẻ đa sản phẩm, dịch vụ hàng đầu tại Việt Nam
      </div>
    ),
  },
  {
    icon: <Compass size={83} />,
    title: "SỨ MỆNH",
    titleStyle: { width: '200px', height: '40px' },
    content: (
      <div
        style={{
          width: '177px',
          height: '156px',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          lineHeight: 'normal',
          fontStyle: 'normal'
        }}
        className="space-y-4"
      >
        <div>
          <p className="font-bold">Với khách hàng</p>
          <p>Đặt khách hàng làm trung tâm, mang đến trải nghiệm thuận tiện - tận tâm - hiện đại</p>
        </div>
        <div>
          <p className="font-bold">Với đối tác</p>
          <p>Hợp tác bền vững, cùng phát triển và mở rộng giá trị công nghiệp</p>
        </div>
        <div>
          <p className="font-bold">Với nhân viên</p>
          <p>Xây dựng môi trường chuyên nghiệp, kỷ luật và phát triển lâu dài</p>
        </div>
      </div>
    ),
  },
  {
    icon: <Users size={83} />,
    title: "MẠNG LƯỚI & SẢN PHẨM",
    titleStyle: { width: '202px', height: '68px'},
    content: (
      <div
        style={{
          width: '320px',
          height: 'auto',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
      >
        Phủ sóng toàn quốc with hệ thống siêu thị hiện đại, cung cấp đa dạng sản phẩm: smartphone, laptop, thiết bị thông minh và dịch vụ viễn thông – tài chính – số. Đáp ứng toàn diện nhu cầu công nghệ với chất lượng cao và giá cạnh tranh.
      </div>
    ),
  },
  {
    icon: <UserCheck size={83} />,
    title: "CHUYỂN ĐỔI SỐ & TRẢI NGHIỆM",
    titleStyle: { width: '300px' },
    content: (
      <div
        style={{
          width: '190px',
          height: '159px',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
      >
        Chuyển dịch mạnh mẽ sang mô hình bán hàng đa kênh (Omnichannel), kết hợp hệ thống cửa hàng và nền tảng online. Không ngừng tối ưu trải nghiệm khách hàng với hệ thống CRM hiện đại.
      </div>
    ),
  },
];

export function AboutUsRedSection() {
  return (
    <section
      data-node-id="2246:1112"
      className="relative w-full bg-[#EE0033] text-white overflow-hidden"
      style={{ minHeight: '1723px' }}
    >
      {/* Subtle terrain background pattern - Left */}
      <div 
        className="absolute z-[1] pointer-events-none" 
        style={{ 
          width: '1364px',
          height: '575px',
          aspectRatio: '216/91',
          background: 'url(/images/about/diahinh3.png) -0.615px -279.851px / 100.108% 158.424% no-repeat',
          opacity: 1,
          mixBlendMode: 'multiply',
          top: '1150px',
          left: '-106px',
          transform: 'scaleY(-1)'
        }} 
      />
      {/* Subtle terrain background pattern - Right (Mirrored) */}
      <div 
        className="absolute z-[1] pointer-events-none" 
        style={{ 
          width: '1364px',
          height: '575px',
          aspectRatio: '216/91',
          background: 'url(/images/about/diahinh3.png) -0.615px -279.851px / 100.108% 158.424% no-repeat',
          opacity: 1,
          mixBlendMode: 'multiply',
          top: '1150px',
          left: '1258px', // -106px + 1364px
          transform: 'scaleY(-1) scaleX(-1)'
        }} 
      />
      <div className="relative z-[2] mx-auto max-w-[1440px] min-h-full">
        {/* Header: VỀ CHÚNG TÔI */}
        <h2
          className="absolute font-beausans font-bold uppercase"
          style={{
            top: '31px',
            left: '146px',
            width: '760px',
            color: '#F2F2F2',
            textAlign: 'left',
            fontSize: '52px',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          VỀ CHÚNG TÔI
        </h2>

        {/* Paragraph: under the header */}
        <p
          className="absolute font-roboto"
          style={{
            top: '160px',
            left: '146px',
            width: '368px',
            height: '120px',
            color: '#F2F2F2',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Viettel Store được thành lập ngày 03/05/2006 với siêu thị điện thoại đầu tiên tại Hà Nội, là đơn vị nòng cốt thuộc Viettel Commerce.Từ con số 0, Viettel Store đã phát triển trở thành chuỗi bán lẻ thiết bị viễn thông và công nghệ hàng đầu Việt Nam, giữ vững vị thế Top 3 thị trường.
        </p>
        {/* Collage Grid to the right of the paragraph */}
        <div 
          className="absolute flex flex-wrap"
          style={{
            top: '0',
            right: '0',
            width: '720px',
            height: '362px',
          }}
        >
          {aboutTiles.map((tile) => (
            <div 
              key={tile.id}
              className="relative overflow-hidden"
              style={{ width: '180px', height: '181px' }}
            >
              {tile.isRed ? (
                <div className="w-full h-full bg-[#EE0033]" />
              ) : (
                <Image 
                  src={tile.image || ""} 
                  alt={tile.alt || ""} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Values Section: aligned with icons at top 700px */}
        <div
          className="absolute w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 text-white items-start"
          style={{ top: '700px', paddingLeft: '207px', paddingRight: '207px' }}
        >
          {valueItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-12 opacity-90 transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3
                className="font-beausans font-bold leading-tight uppercase tracking-tight flex items-center justify-center"
                style={{
                  marginBottom: '80px',
                  color: '#F2F2F2',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '28px',
                  ...item.titleStyle
                }}
              >
                {item.title}
              </h3>
              <div className="font-roboto opacity-80 flex justify-center">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
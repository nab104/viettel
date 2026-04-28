"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "./MapPin";
import { ProvinceModal } from "./ProvinceModal";
import { batch1 } from "./map-data/batch-1";
import { batch2 } from "./map-data/batch-2";
import { batch3 } from "./map-data/batch-3";
import { provincesContent } from "./map-data/provincesContent";

const provinces = [
  ...batch1,
  ...batch2,
  ...batch3
];

const hoangSaAssetUrl = "/images/story-map/hoang-sa.svg";
const truongSaAssetUrl = "/images/story-map/truong-sa.svg";

export const VietnamMap = () => {
  const [hoveredProvinceId, setHoveredProvinceId] = useState<string | null>(null);
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);

  const hoveredProvince = provinces.find(p => p.id === hoveredProvinceId);
  const selectedProvince = provinces.find(p => p.id === selectedProvinceId);
  return (
    <div 
      className="absolute" 
      style={{ 
        top: "50px", 
        left: "150px", 
        width: "1200px", 
        height: "2500px", 
        zIndex: 10,
      }}
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="1" />
            <feOffset dx="0" dy="1.5" result="offsetblur" />
            <feFlood floodColor="rgba(0,0,0,0.85)" result="color" />
            <feComposite operator="in" in="color" in2="offsetblur" result="shadow" />
            <feComposite operator="in" in="shadow" in2="SourceAlpha" result="innerShadow" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerShadow" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <style jsx global>{`
        .province-group path {
          stroke: transparent !important;
          transition: stroke 0.2s ease;
        }
        .province-group:hover path {
          filter: url(#inner-shadow);
          transition: filter 0.2s ease;
        }
        .province-group:hover path[fill="white"] {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
      `}</style>
      {/* Backdrop Layer: Renders all provinces as a solid red base to fill gaps */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        {provinces.map((province) => (
          <motion.div
            key={`backdrop-${province.id}`}
            animate={{ 
              opacity: hoveredProvinceId === null || hoveredProvinceId === province.id ? 1 : 0.6
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute"
            style={{
              width: province.width,
              height: province.height,
              top: `${province.top}px`,
              left: `${province.left}px`,
              // This filter forces the SVG to be solid red (#ED1C24) and slightly "fattens" it to bridge gaps
              filter: "drop-shadow(1px 0px 0px #ED1C24) drop-shadow(-1px 0px 0px #ED1C24) drop-shadow(0px 1px 0px #ED1C24) drop-shadow(0px -1px 0px #ED1C24) brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(7467%) hue-rotate(352deg) brightness(91%) contrast(100%)",
            }}
          >
            {province.svg}
          </motion.div>
        ))}
      </div>

      {/* Hoang Sa (2217:169) and Truong Sa (2217:168) from Figma */}
      {/* Hoang Sa (2217:169) and Truong Sa (2217:168) from Figma */}
      <div className="absolute z-[300] pointer-events-none">
        {/* Hoang Sa */}
        <div
          onClick={() => setSelectedProvinceId("hoang-sa")}
          className="cursor-pointer pointer-events-auto"
          style={{
            position: "absolute",
            left: "900.55px",
            top: "412.632px",
            width: "98.228px",
            height: "90.182px",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 99 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M97.3516 86.124L93.0107 89.1299L88.3574 90.127L86.5713 88.0166L89.1953 86.541L98.1357 84.5547L97.3516 86.124ZM95.0342 86.2773L91.3467 86.9482L91.3438 86.9492L87.3203 87.9551L87.2441 87.9736L87.2939 88.0352L88.8027 89.8789L88.8223 89.9033L88.8535 89.8955L93.5469 88.7217L93.5664 88.7178L93.5771 88.7002L95.0859 86.3535L95.1475 86.2568L95.0342 86.2773ZM36.7627 85.8369L33.6846 87.7803L31.0947 86.9707L33.0391 84.542L36.7627 85.8369ZM34.3184 67.585L35.1445 71.2178L32.0732 73.3193L32.4014 68.8975L32.4053 68.8438H23.1123L23.0977 68.8584L17.7334 74.0547L17.7871 74.1367L22.9609 71.9658L24.377 72.7529L20.9326 75.0498L17.292 76.042L15.9854 73.4316L22.1484 67.9346L32.6758 66.5986L34.3184 67.585ZM52.6328 63.1436V63.1426L52.6191 63.1465L47.3096 64.8057L46.9912 62.8965L53.6338 61.2354L57.1299 62.9834L52.6328 63.1436ZM19.8467 54.959L17.5088 52.3086L18.9111 51.373L19.8467 54.959ZM33.29 49.3037L30.7256 54.4336V48.0215L33.29 49.3037ZM30.0957 46.8467L27.9033 45.9072L29.3125 44.0283L30.0957 46.8467ZM2.14355 32.9551L0.104492 32.1709L2.77051 30.2891L2.14355 32.9551ZM73.6104 10.8691L67.9053 11.8477L66.6367 10.5801L70.5654 9.10645L73.6104 10.8691ZM15.7822 1.02148L10.3848 3.80176L6.77148 2.98145L7.24609 1.71582L11.9023 0.0517578L15.7822 1.02148Z" 
              fill="#ED1C24" 
              stroke="black" 
              strokeWidth="0.1"
            />
          </svg>
          {/* Hoang Sa Label */}
          <div
            style={{
              position: "absolute",
              bottom: "25px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "93px",
              height: "21px",
              borderRadius: "17px",
              background: "#ED1C24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "0px",
              zIndex: 10
            }}
          >
            <span
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"FS PF BeauSans Pro", sans-serif',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              Hoàng Sa
            </span>
          </div>
        </div>

        {/* Truong Sa */}
        <div
          onClick={() => setSelectedProvinceId("truong-sa")}
          className="cursor-pointer pointer-events-auto"
          style={{
            position: "absolute",
            left: "900.968px",
            top: "1000.954px",
            width: "518.464px",
            height: "342.122px",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 519 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_2217_168" fill="white">
              <path d="M86.9974 342.123L87.5003 337.094L89.3441 338.1L86.9974 342.123ZM99.9045 331.059L96.2167 333.741L96.3844 331.897L99.9045 331.059ZM296.026 322.678L289.991 325.863L284.795 331.227L279.096 332.736L278.928 330.389L283.119 331.395L289.824 325.528L294.182 322.511L296.026 322.678ZM0 318.823L2.68201 315.135L3.52013 317.314L0 318.823ZM321.169 305.916L317.314 308.43L313.794 308.262L318.655 304.742L321.169 305.916ZM277.252 301.557L280.939 306.419L275.24 302.563L277.252 301.557ZM14.4158 298.037L13.0748 302.563L11.0633 300.719L11.2309 297.367L14.4158 298.037ZM342.123 289.321L345.14 289.488L347.989 292.003L347.654 294.852L344.805 292.338H335.418L333.574 294.685L324.354 295.188L328.377 293.176L340.446 288.986L342.123 289.321ZM231.825 285.13L229.479 289.321L222.941 296.026L227.132 288.147L231.49 283.622L231.825 285.13ZM225.791 292.17L229.814 288.483L230.652 285.465L227.635 288.147L225.791 292.17ZM379.671 272.055L380.676 273.396L386.208 274.235L385.538 275.24L379.503 274.905L377.324 272.391L379.671 272.055ZM299.043 243.559L300.216 247.917L297.702 249.258L296.864 242.721L299.043 243.559ZM297.87 248.42L299.546 247.582L297.367 244.397L297.87 248.42ZM279.096 235.848L286.303 236.854L288.65 241.38L283.957 241.045L275.575 236.519L279.096 235.848ZM284.292 240.542L287.98 240.877L283.789 236.854L278.09 236.184L278.425 237.86L284.292 240.542ZM169.972 235.178L177.347 236.687L168.798 238.027L167.625 235.01L169.972 235.178ZM468.344 229.479L467.171 232.328L464.824 232.831L465.997 229.646L468.344 229.479ZM259.986 225.12L254.622 227.3L255.46 225.791L259.986 225.12ZM399.45 189.081L400.624 193.439L397.942 194.11L397.271 191.931L399.45 189.081ZM208.19 167.457L199.474 173.827L194.11 176.342L198.636 169.469L201.653 166.787L197.462 172.821L200.815 172.486L207.52 166.787L208.19 167.457ZM486.783 162.764L489.968 162.596L492.482 165.278L484.939 163.602L486.783 162.764ZM434.987 158.238L433.814 163.434L431.467 168.798L431.97 163.602L431.299 160.25L433.311 157.568L434.987 158.238ZM432.137 165.614L434.484 159.411L431.802 160.417L432.137 165.614ZM407.496 147.51L410.178 149.689L407.496 152.036L404.479 151.701L403.473 148.516L407.496 147.51ZM404.647 151.198L407.664 151.701L408.67 148.348L403.976 148.516L404.647 151.198ZM336.926 142.146L335.92 146.001L335.082 142.984L336.926 142.146ZM271.385 141.476L271.05 131.083L272.726 132.256L271.385 141.476ZM388.722 126.054L386.879 128.066L386.543 124.713L388.722 126.054ZM483.766 118.846L481.251 116.835L483.263 114.32L485.442 117.17L483.766 118.846ZM339.776 115.158L337.261 117.673L336.256 115.494L341.117 111.638L339.776 115.158ZM327.707 115.997L327.539 112.644L329.886 110.13L327.707 115.997ZM427.779 98.8988L426.941 103.257L424.594 104.933L421.242 102.754L423.756 98.8988H427.779ZM515.95 97.5578L518.464 96.8873V99.234L515.447 100.91L513.603 97.3902L515.95 97.5578ZM457.616 93.1996H456.443L456.61 83.9802L460.131 90.3499L457.616 93.1996ZM496.505 79.7896L493.153 78.1133L493.656 75.4313L497.511 78.9514L496.505 79.7896ZM433.311 78.2809L435.49 85.824L432.808 83.3096L431.634 78.6162L428.952 78.7838L430.629 89.6794L432.137 89.8471L429.623 94.0377L427.947 82.4715L428.114 78.6162L430.461 75.0961L433.311 78.2809ZM357.544 72.0788L354.862 72.2464L358.55 69.2292L357.544 72.0788ZM291.332 68.0558L291.165 68.3911L287.98 68.5587L290.494 66.2119L291.332 68.0558ZM470.02 29.6696L471.864 23.4675L473.205 24.138L470.02 29.6696ZM337.094 21.6237L334.412 22.2942L333.574 29.1668L333.071 23.8028L334.244 20.9531L337.094 21.6237ZM458.957 24.8086L458.454 23.4675L461.807 20.2827L458.957 24.8086ZM474.379 21.4561L473.205 20.9531L476.223 15.7568L474.379 21.4561ZM465.495 19.4446L464.656 18.6064L470.691 13.2424L471.529 14.2481L465.495 19.4446ZM476.223 9.38706L475.049 8.04608L478.737 5.86687L476.223 9.38706ZM482.257 7.71081L480.078 3.85546L482.592 0L483.095 5.19644L482.257 7.71081Z" />
            </mask>
            <path 
              d="M86.9974 342.123L87.5003 337.094L89.3441 338.1L86.9974 342.123ZM99.9045 331.059L96.2167 333.741L96.3844 331.897L99.9045 331.059ZM296.026 322.678L289.991 325.863L284.795 331.227L279.096 332.736L278.928 330.389L283.119 331.395L289.824 325.528L294.182 322.511L296.026 322.678ZM0 318.823L2.68201 315.135L3.52013 317.314L0 318.823ZM321.169 305.916L317.314 308.43L313.794 308.262L318.655 304.742L321.169 305.916ZM277.252 301.557L280.939 306.419L275.24 302.563L277.252 301.557ZM14.4158 298.037L13.0748 302.563L11.0633 300.719L11.2309 297.367L14.4158 298.037ZM342.123 289.321L345.14 289.488L347.989 292.003L347.654 294.852L344.805 292.338H335.418L333.574 294.685L324.354 295.188L328.377 293.176L340.446 288.986L342.123 289.321ZM231.825 285.13L229.479 289.321L222.941 296.026L227.132 288.147L231.49 283.622L231.825 285.13ZM225.791 292.17L229.814 288.483L230.652 285.465L227.635 288.147L225.791 292.17ZM379.671 272.055L380.676 273.396L386.208 274.235L385.538 275.24L379.503 274.905L377.324 272.391L379.671 272.055ZM299.043 243.559L300.216 247.917L297.702 249.258L296.864 242.721L299.043 243.559ZM297.87 248.42L299.546 247.582L297.367 244.397L297.87 248.42ZM279.096 235.848L286.303 236.854L288.65 241.38L283.957 241.045L275.575 236.519L279.096 235.848ZM284.292 240.542L287.98 240.877L283.789 236.854L278.09 236.184L278.425 237.86L284.292 240.542ZM169.972 235.178L177.347 236.687L168.798 238.027L167.625 235.01L169.972 235.178ZM468.344 229.479L467.171 232.328L464.824 232.831L465.997 229.646L468.344 229.479ZM259.986 225.12L254.622 227.3L255.46 225.791L259.986 225.12ZM399.45 189.081L400.624 193.439L397.942 194.11L397.271 191.931L399.45 189.081ZM208.19 167.457L199.474 173.827L194.11 176.342L198.636 169.469L201.653 166.787L197.462 172.821L200.815 172.486L207.52 166.787L208.19 167.457ZM486.783 162.764L489.968 162.596L492.482 165.278L484.939 163.602L486.783 162.764ZM434.987 158.238L433.814 163.434L431.467 168.798L431.97 163.602L431.299 160.25L433.311 157.568L434.987 158.238ZM432.137 165.614L434.484 159.411L431.802 160.417L432.137 165.614ZM407.496 147.51L410.178 149.689L407.496 152.036L404.479 151.701L403.473 148.516L407.496 147.51ZM404.647 151.198L407.664 151.701L408.67 148.348L403.976 148.516L404.647 151.198ZM336.926 142.146L335.92 146.001L335.082 142.984L336.926 142.146ZM271.385 141.476L271.05 131.083L272.726 132.256L271.385 141.476ZM388.722 126.054L386.879 128.066L386.543 124.713L388.722 126.054ZM483.766 118.846L481.251 116.835L483.263 114.32L485.442 117.17L483.766 118.846ZM339.776 115.158L337.261 117.673L336.256 115.494L341.117 111.638L339.776 115.158ZM327.707 115.997L327.539 112.644L329.886 110.13L327.707 115.997ZM427.779 98.8988L426.941 103.257L424.594 104.933L421.242 102.754L423.756 98.8988H427.779ZM515.95 97.5578L518.464 96.8873V99.234L515.447 100.91L513.603 97.3902L515.95 97.5578ZM457.616 93.1996H456.443L456.61 83.9802L460.131 90.3499L457.616 93.1996ZM496.505 79.7896L493.153 78.1133L493.656 75.4313L497.511 78.9514L496.505 79.7896ZM433.311 78.2809L435.49 85.824L432.808 83.3096L431.634 78.6162L428.952 78.7838L430.629 89.6794L432.137 89.8471L429.623 94.0377L427.947 82.4715L428.114 78.6162L430.461 75.0961L433.311 78.2809ZM357.544 72.0788L354.862 72.2464L358.55 69.2292L357.544 72.0788ZM291.332 68.0558L291.165 68.3911L287.98 68.5587L290.494 66.2119L291.332 68.0558ZM470.02 29.6696L471.864 23.4675L473.205 24.138L470.02 29.6696ZM337.094 21.6237L334.412 22.2942L333.574 29.1668L333.071 23.8028L334.244 20.9531L337.094 21.6237ZM458.957 24.8086L458.454 23.4675L461.807 20.2827L458.957 24.8086ZM474.379 21.4561L473.205 20.9531L476.223 15.7568L474.379 21.4561ZM465.495 19.4446L464.656 18.6064L470.691 13.2424L471.529 14.2481L465.495 19.4446ZM476.223 9.38706L475.049 8.04608L478.737 5.86687L476.223 9.38706ZM482.257 7.71081L480.078 3.85546L482.592 0L483.095 5.19644L482.257 7.71081Z" 
              fill="#ED1C24" 
              stroke="black" 
              strokeWidth="0.2" 
              mask="url(#path-1-inside-1_2217_168)"
            />
          </svg>
          {/* Truong Sa Label */}
          <div
            style={{
              position: "absolute",
              bottom: "90px",
              left: "40%",
              width: "93px",
              height: "21px",
              borderRadius: "17px",
              background: "#ED1C24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "0px",
              zIndex: 10
            }}
          >
            <span
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"FS PF BeauSans Pro", sans-serif',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              Trường Sa
            </span>
          </div>
        </div>
      </div>

      {/* Main Province Layer */}
      {provinces.map((province) => (
        <motion.div
          key={province.id}
          whileHover={{ scale: 0.98 }}
          animate={{ 
            opacity: hoveredProvinceId === null || hoveredProvinceId === province.id ? 1 : 0.6 
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute hover:z-[110] cursor-pointer group province-group"
          style={{
            width: province.width,
            height: province.height,
            top: `${province.top}px`,
            left: `${province.left}px`,
            pointerEvents: "none"
          }}
        >
          <div className="w-full h-full relative">
            {/* We ensure the SVG takes up the full container space */}
            {React.isValidElement(province.svg) 
              ? React.cloneElement(province.svg as React.ReactElement<any>, { 
                  width: "100%", 
                  height: "100%",
                  onMouseEnter: () => setHoveredProvinceId(province.id),
                  onMouseLeave: () => setHoveredProvinceId(null),
                  onClick: (e: any) => {
                    e.stopPropagation();
                    setSelectedProvinceId(province.id);
                  },
                  style: { 
                    display: "block",
                    pointerEvents: "auto"
                  } 
                }) 
              : province.svg}
          </div>
        </motion.div>
      ))}

      {/* Pin Overlay Layer - Positioned exactly over the white dot ("box") */}
      <AnimatePresence>
        {hoveredProvince && (
          <div
            key={`pin-${hoveredProvince.id}`}
            className="absolute z-[999] pointer-events-none"
            style={{
              // If dotX/dotY exist, center pin on dot. Otherwise fallback to province center.
              left: hoveredProvince.dotX !== undefined && hoveredProvince.dotX !== null
                ? hoveredProvince.left + hoveredProvince.dotX + 8.6 - 34
                : hoveredProvince.left + (parseFloat(hoveredProvince.width) / 2) - 34,
              top: (hoveredProvince.dotY !== undefined && hoveredProvince.dotY !== null
                ? hoveredProvince.top + hoveredProvince.dotY + 10.5 - 41
                : hoveredProvince.top + (parseFloat(hoveredProvince.height) / 2) - 41),
            }}
          >
            <MapPin name={hoveredProvince.name} />
          </div>
        )}
      </AnimatePresence>

      <ProvinceModal 
        isOpen={!!selectedProvinceId}
        onClose={() => setSelectedProvinceId(null)}
        provinceName={
          selectedProvinceId === "hoang-sa" ? "Hoàng Sa" :
          selectedProvinceId === "truong-sa" ? "Trường Sa" :
          selectedProvince?.name || null
        }
        stories={selectedProvinceId ? provincesContent[selectedProvinceId]?.stories : null}
      />
    </div>
  );
};



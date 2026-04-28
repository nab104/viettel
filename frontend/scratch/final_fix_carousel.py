import sys

path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start = -1
end = -1
for i, line in enumerate(lines):
    if '{/* Carousel cards wrapper */}' in line:
        start = i
    if '{/* Province name + arrows */}' in line:
        end = i

if start != -1 and end != -1:
    new_block = [
        '              {/* Carousel cards wrapper */}\n',
        '              <div className="relative mx-auto w-full overflow-visible mb-20">\n',
        '                <div className="relative flex h-[450px] md:h-[600px] items-start justify-center overflow-visible">\n',
        '                  {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {\n',
        '                    const idx = (activeProvince + offset + provinces.length) % provinces.length;\n',
        '                    const prov = provinces[idx];\n',
        '                    const abs = Math.abs(offset);\n',
        '                    const isCenter = offset === 0;\n',
        '\n',
        '                    // Precision Arc Math to match screenshot\n',
        '                    const translateX = offset * 300;\n',
        '                    const translateY = abs * 45 + (abs * abs * 20);\n',
        '                    const rotate = offset * 12;\n',
        '                    const scale = isCenter ? 1.15 : 1 - (abs * 0.08);\n',
        '\n',
        '                    return (\n',
        '                      <div\n',
        '                        key={`province-${idx}`}\n',
        '                        onClick={() => setActiveProvince(idx)}\n',
        '                        className={`\n',
        '                          absolute left-1/2\n',
        '                          bg-[#EE0033]\n',
        '                          cursor-pointer\n',
        '                          flex items-center justify-center\n',
        '                          overflow-hidden\n',
        '                          flex-shrink-0\n',
        '                          shadow-[0_30px_80px_rgba(0,0,0,0.8)]\n',
        '                        `}\n',
        '                        style={{\n',
        '                          transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) rotate(${rotate}deg) skewX(${-offset * 2}deg) scale(${scale})`,\n',
        '                          opacity: 1 - (abs * 0.15),\n',
        '                          zIndex: 50 - abs,\n',
        '                          width: "257px",\n',
        '                          height: "350px",\n',
        '                          borderRadius: "40px",\n',
        '                          border: "1px solid rgba(255, 255, 255, 0.2)",\n',
        '                          transition: "all 1500ms cubic-bezier(0.25, 1, 0.5, 1)",\n',
        '                          willChange: "transform, opacity"\n',
        '                        }}\n',
        '                      >\n',
        '                        <div className="relative w-full h-full flex flex-col items-center justify-center">\n',
        '                          {/* FIXED VIETTEL STORE LOGO OVERLAY - HIGH CONTRAST HALO */}\n',
        '                          <div className={`absolute top-12 left-0 right-0 flex flex-col items-center transition-all duration-1500 ${isCenter ? "opacity-100 z-[100] scale-100" : "opacity-0 z-[10] scale-50"}`}>\n',
        '                            <img \n',
        '                              src="/images/logo-viettel-store.png" \n',
        '                              alt="Viettel Store"\n',
        '                              className="w-[160px] object-contain pointer-events-none drop-shadow-[0_0_3px_#fff] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] brightness-110"\n',
        '                            />\n',
        '                          </div>\n',
        '\n',
        '                          {/* Silhouette layer (White) */}\n',
        '                          <img\n',
        '                            src={prov.map}\n',
        '                            alt=\"\"\n',
        '                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? "opacity-0 z-[50]" : "opacity-100 z-[50]"} ${(prov.map.includes("tuyenquang") || prov.map.includes("hanoi") || prov.map.includes("sonla")) ? "grayscale-[100%] brightness-[200%]" : "invert brightness-0"}`}\n',
        '                          />\n',
        '                          {/* Original color layer (Map with embedded logo) */}\n',
        '                          <img\n',
        '                            src={prov.map}\n',
        '                            alt={prov.name}\n',
        '                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? "opacity-100 z-[60] scale-110" : "opacity-0 z-[40] scale-90"}`}\n',
        '                            style={isCenter ? { filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))" } : {}}\n',
        '                          />\n',
        '                        </div>\n',
        '                      </div>\n',
        '                    );\n',
        '                  })}\n',
        '                </div>\n',
        '              </div>\n',
        '\n'
    ]
    lines[start:end] = new_block
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully updated the file.")
else:
    print(f"Could not find start ({start}) or end ({end}) markers.")

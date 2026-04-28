import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Completely rewrite the carousel card block to be 100% correct
pattern = r'<div className="relative flex h-\[450px\] md:h-\[600px\].*?<div className="relative z-\[200\] flex justify-center"'

new_block = r'''<div className="relative flex h-[450px] md:h-[600px] items-start justify-center overflow-visible">
                  {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                    const idx = (activeProvince + offset + provinces.length) % provinces.length;
                    const prov = provinces[idx];
                    const abs = Math.abs(offset);
                    const isCenter = offset === 0;

                    // Precision Arc Math to match screenshot
                    const translateX = offset * 300;
                    const translateY = abs * 45 + (abs * abs * 20);
                    const rotate = offset * 12;
                    const scale = isCenter ? 1.15 : 1 - (abs * 0.08);

                    return (
                      <div
                        key={`province-${idx}`}
                        onClick={() => setActiveProvince(idx)}
                        className={`
                          absolute left-1/2
                          bg-[#EE0033]
                          cursor-pointer
                          flex items-center justify-center
                          overflow-hidden
                          flex-shrink-0
                          shadow-[0_30px_80px_rgba(0,0,0,0.8)]
                                                  `}
                        style={{
                          transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) rotate(${rotate}deg) skewX(${-offset * 2}deg) scale(${scale})`,
                          opacity: 1 - (abs * 0.15),
                          zIndex: 50 - abs,
                          width: '257px',
                          height: '350px',
                          borderRadius: '40px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          transition: 'all 1500ms cubic-bezier(0.25, 1, 0.5, 1)',
                          willChange: 'transform, opacity'
                        }}
                      >
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                          {/* FIXED VIETTEL STORE LOGO OVERLAY - WITH EMPHASIS */}
                          <div className={`absolute top-12 left-0 right-0 flex flex-col items-center transition-all duration-1500 ${isCenter ? 'opacity-100 z-[100] scale-100' : 'opacity-0 z-[10] scale-50'}`}>
                            <img 
                              src="/images/logo-viettel-store.png" 
                              alt="Viettel Store"
                              className="w-[150px] object-contain pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,1)] brightness-110"
                            />
                          </div>

                          {/* Silhouette layer (White) */}
                          <img
                            src={prov.map}
                            alt=""
                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-0 z-[50]' : 'opacity-100 z-[50]'} ${(prov.map.includes('tuyenquang') || prov.map.includes('hanoi') || prov.map.includes('sonla')) ? 'grayscale-[100%] brightness-[200%]' : 'invert brightness-0'}`}
                          />
                          {/* Original color layer (Map with embedded logo) */}
                          <img
                            src={prov.map}
                            alt={prov.name}
                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-100 z-[60] scale-110' : 'opacity-0 z-[40] scale-90'}`}
                            style={isCenter ? { filter: 'none' } : {}}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Province name + arrows */}
              <div
                className="relative z-[200] flex justify-center"'''

content = re.sub(pattern, new_block, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

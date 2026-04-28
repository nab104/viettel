import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Make the logo pop more with drop-shadow and glow
new_img_block = r'''                        <div className="relative w-full h-full flex flex-col items-center justify-center">
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
                        </div>'''

# Target the previous debug block
pattern = r'<div className="relative w-full h-full flex flex-col items-center justify-center">.*?{/\* FIXED VIETTEL STORE LOGO OVERLAY - POSITION ADJUSTED \*/}.*?</div>'
content = re.sub(pattern, new_img_block, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

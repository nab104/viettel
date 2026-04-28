import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Move the logo to the top of the card (top-10 instead of center)
new_img_block = r'''                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                          {/* FIXED VIETTEL STORE LOGO OVERLAY - TOP POSITION */}
                          <img 
                            src="/images/logo-viettel-store.png" 
                            alt="Viettel Store"
                            className={`absolute top-10 left-1/2 -translate-x-1/2 w-[140px] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-100 z-[70] scale-100' : 'opacity-0 z-[10] scale-50'}`}
                          />

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

# Target the previous triple-layer block
pattern = r'<div className="relative w-full h-full flex items-center justify-center">.*?{/\* FIXED VIETTEL STORE LOGO OVERLAY - Guaranteed visibility in center \*/}.*?</div>'
content = re.sub(pattern, new_img_block, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

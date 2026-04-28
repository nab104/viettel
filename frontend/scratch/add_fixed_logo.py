import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add the explicit Viettel Store logo overlay to the center card
new_img_block = r'''                        <div className="relative w-full h-full flex items-center justify-center">
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
                          {/* FIXED VIETTEL STORE LOGO OVERLAY - Guaranteed visibility in center */}
                          <img 
                            src="/images/logo-viettel-store.png" 
                            alt="Viettel Store"
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-100 z-[70] scale-100' : 'opacity-0 z-[10] scale-50'}`}
                          />
                        </div>'''

# Target the previous triple-layer block
pattern = r'<div className="relative w-full h-full flex items-center justify-center">.*?{/\* Original color layer \(Logo\) - FORCED VISIBILITY IN CENTER \*/}.*?</div>'
content = re.sub(pattern, new_img_block, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

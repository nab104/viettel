import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update the img block to be more aggressive and explicit
new_img_block = r'''                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Silhouette layer (White) */}
                          <img
                            src={prov.map}
                            alt=""
                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-0 z-[50]' : 'opacity-100 z-[50]'} ${(prov.map.includes('tuyenquang') || prov.map.includes('hanoi') || prov.map.includes('sonla')) ? 'grayscale-[100%] brightness-[200%]' : 'invert brightness-0'}`}
                          />
                          {/* Original color layer (Logo) - FORCED VISIBILITY IN CENTER */}
                          <img
                            src={prov.map}
                            alt={prov.name}
                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-100 z-[60] scale-110' : 'opacity-0 z-[40] scale-90'}`}
                            style={isCenter ? { filter: 'none' } : {}}
                          />
                        </div>'''

# Target the previous dual-layer block
pattern = r'<div className="relative w-full h-full flex items-center justify-center">.*?{/\* Original color layer \(Logo\) \*/}.*?</div>'
content = re.sub(pattern, new_img_block, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

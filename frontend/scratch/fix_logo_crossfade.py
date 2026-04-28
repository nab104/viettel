import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the single img with two stacked imgs for better transition
old_img_block = r'''                        <img
                          src={prov.map}
                          alt={prov.name}
                          className={`w-\[85%\] h-\[85%\] object-contain pointer-events-none transition-all duration-1500 \$\{isCenter \? '' : \(prov\.map\.includes\('tuyenquang'\) \|\| prov\.map\.includes\('hanoi'\) \|\| prov\.map\.includes\('sonla'\)\) \? 'grayscale-\[100%\] brightness-\[200%\]' : 'invert brightness-0'\}`}
                        />'''

new_img_block = r'''                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Silhouette layer (White) */}
                          <img
                            src={prov.map}
                            alt=""
                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} ${(prov.map.includes('tuyenquang') || prov.map.includes('hanoi') || prov.map.includes('sonla')) ? 'grayscale-[100%] brightness-[200%]' : 'invert brightness-0'}`}
                          />
                          {/* Original color layer (Logo) */}
                          <img
                            src={prov.map}
                            alt={prov.name}
                            className={`absolute w-[85%] h-[85%] object-contain pointer-events-none transition-all duration-1500 ${isCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                          />
                        </div>'''

# Use re.sub with exact-ish match
pattern = r'<img\s+src=\{prov\.map\}\s+alt=\{prov\.name\}\s+className=\{`w-\[85%\] h-\[85%\] object-contain pointer-events-none transition-all duration-1500 \$\{isCenter \? \'\' : \(prov\.map\.includes\(\'tuyenquang\'\) \|\| prov\.map\.includes\(\'hanoi\'\) \|\| prov\.map\.includes\(\'sonla\'\)\) \? \'grayscale-\[100%\] brightness-\[200%\]\' : \'invert brightness-0\'\}`\}\s+/>'

content = re.sub(pattern, new_img_block, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

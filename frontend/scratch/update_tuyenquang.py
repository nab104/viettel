import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update provinces array
content = content.replace('{ name: "TUYÊN QUANG", map: "/images/tuyen-quang-full.png" }', '{ name: "TUYÊN QUANG", map: "/images/provinces/tuyenquang.png" }')

# 2. Update filter exclusion list
# Old: (isCenter || prov.map.includes('tuyen-quang') || prov.map.includes('hanoi') || prov.map.includes('sonla'))
# New: (isCenter || prov.map.includes('tuyenquang') || prov.map.includes('hanoi') || prov.map.includes('sonla'))
content = content.replace("prov.map.includes('tuyen-quang')", "prov.map.includes('tuyenquang')")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

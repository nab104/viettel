import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update the filter logic
# The old content might have some whitespace variations, so we use a more flexible match or exact string from view_file
old_part = "${(isCenter || prov.map.includes('tuyenquang') || prov.map.includes('hanoi') || prov.map.includes('sonla')) ? '' : 'invert brightness-0'}"
new_part = "${isCenter ? '' : (prov.map.includes('tuyenquang') || prov.map.includes('hanoi') || prov.map.includes('sonla')) ? 'grayscale-[100%] brightness-[200%]' : 'invert brightness-0'}"

if old_part in content:
    content = content.replace(old_part, new_part)
else:
    # Try regex if exact match fails
    pattern = r"\$\{\(isCenter \|\| prov\.map\.includes\('tuyenquang'\) \|\| prov\.map\.includes\('hanoi'\) \|\| prov\.map\.includes\('sonla'\)\) \? '' : 'invert brightness-0'\}"
    content = re.sub(pattern, new_part, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

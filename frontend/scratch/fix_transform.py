import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken line first
content = re.sub(r'rotate\(deg\) skewX\(deg\)', r'rotate(${rotate}deg) skewX(${-offset * 2}deg)', content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

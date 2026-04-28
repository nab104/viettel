path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(", 1)' }}", " }}")
content = content.replace(", 1)' }}>", " }}>")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

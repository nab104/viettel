path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken cubic-bezier strings
content = content.replace("cubic-bezier(0.22, 1, 0.36 }}", "cubic-bezier(0.22, 1, 0.36, 1)' }}")
content = content.replace("cubic-bezier(0.22, 1, 0.36 }}>", "cubic-bezier(0.22, 1, 0.36, 1)' }}>")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

import re
path = r'z:\Viettel Web\Viettel\frontend\src\app\con-nguoi\page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target the whole card content block and clean it up
# We want to keep only ONE version of the stack
pattern = r'(<div className="relative w-full h-full flex flex-col items-center justify-center">.*?</div>).*?(\s+<img.*?src=\{prov\.map\}.*?/>.*?)+'
content = re.sub(pattern, r'\1', content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

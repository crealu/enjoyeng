import re

file = 'index.html'
file_new = 'style_py.css'

data = open(file, 'r')
data_new = open(file_new, 'w+')

data_lines = data.readlines()

class_pattern = 'class=".+"\s|class=".+"'

class_array = []
for l in data_lines:
    check = re.search(class_pattern, l)
    if check is not None:
        print('found')
        filtered = check.group().replace('class="', '').replace('"', '').replace(' ', '')
        css_string = '.' + filtered + ' {\n\n}\n\n'
        if css_string not in class_array:
            class_array.append('.' + filtered + ' {\n\n}\n\n')
            data_new.write('.' + filtered + ' {\n\n}\n\n')

for c in class_array:
    data_new.write(c)

print('finished')

filepath = 'docs/module-3-additional-topics/03-terminal-testing.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '    !!! note "Image needed"\n        Insert the **Terminal Session activity configuration** screenshot here.',
    '    ![Terminal Session Configuration](../assets/images/Terminal setup.png)'
)

content = content.replace(
    '    !!! note "Image needed"\n        Insert the terminal response screenshot here.',
    '    ![Terminal Response](../assets/images/Terminal 1.png)'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done: ' + filepath)

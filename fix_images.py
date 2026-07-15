import os

files = {
    'docs/module-1-instructor-led-training/01-getting-started-test-manager.md': (
        '!!! note "Image needed"',
        '![Test Manager Architecture](../assets/images/Test Manager architecture.png)'
    ),
    'docs/module-1-instructor-led-training/03-getting-started-studio.md': (
        '!!! note "Image needed"',
        '![UiPath Studio Backstage View](../assets/images/Studio Backstage View.png)'
    ),
    'docs/module-1-instructor-led-training/06-connect-project-to-test-manager.md': (
        '!!! note "Image needed"',
        '![Connect to Test Manager](../assets/images/test-manager-connect.png)'
    ),
    'docs/module-1-instructor-led-training/12-building-your-own-ai-agents.md': (
        '!!! note "Image needed"',
        '![SAP Agent Example](../assets/images/SAP conn.png)'
    ),
}

for filepath, (old, new) in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    new_lines = []
    skip_next = False
    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue
        if line.strip() == '!!! note "Image needed"':
            new_lines.append(new + '\n')
            skip_next = True  # skip the next indented line
        else:
            new_lines.append(line)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f'Done: {filepath}')

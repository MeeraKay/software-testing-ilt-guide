from pathlib import Path

ROOT_DIR = Path(".")
TARGET = "--”"

total_files = 0
total_replacements = 0

for md_file in ROOT_DIR.rglob("*.md"):
    try:
        text = md_file.read_text(encoding="utf-8", errors="replace")

        count = text.count(TARGET)
        if not count:
            continue

        updated_text = text.replace(TARGET, "")
        md_file.write_text(updated_text, encoding="utf-8")

        total_files += 1
        total_replacements += count

        print(f"[UPDATED] {md_file} ({count} replacement(s))")

    except Exception as e:
        print(f"[ERROR] {md_file}: {e}")

print(
    f"\nCompleted: {total_replacements} replacement(s) across {total_files} file(s)."
)
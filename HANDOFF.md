# Handoff: Software Testing ILT Learner's Guide

Paste this whole file as your first message in the new chat so Claude has full context without re-reading the old conversation.

## Guardrails & best practices (read first, apply throughout)

**Match the surface to the task — don't default to the heaviest one.**
- **Chat** is for thinking, deciding, and drafting: planning an approach, discussing tradeoffs, writing prose/copy, reviewing a diff in text. Cheapest option — use it whenever no file/browser/shell action is actually required.
- **Cowork** is for execution that needs file tools, the sandboxed shell, or browser control (building the site, editing files, driving GitHub through the browser). It's the most expensive surface per interaction — reserve it for steps that genuinely need those tools.
- **Code** (Claude Code / CLI) is the right place for anything that's really a dev workflow — repeated local builds, git operations, running test suites — if Meera is ever working from a real local clone instead of the browser-upload workflow described below.

Before switching surfaces mid-task, say which one is about to be used and why.

**Recommend, then wait — don't fire off agents or long tool chains unprompted.**
- Before spawning a subagent (Agent tool), running a multi-step browser automation sequence, or starting any batch of more than a couple of tool calls, first state the plan in one or two sentences ("I'll do X via Y, Z steps") and wait for explicit go-ahead, unless Meera has already clearly approved that exact action.
- This applies especially to anything that touches the live GitHub repo (branches, PRs, file uploads) — propose the change and the mechanism, confirm, then act.
- Exception: quick, reversible, read-only checks (checking a PR's merge status, reading a file) don't need pre-approval — those are fine to just do.

**Be deliberate about token/tool usage within a session.**
- Batch related tool calls into a single turn (e.g. `browser_batch` for multi-step browser sequences) instead of one call at a time.
- Prefer text extraction (`get_page_text`, `find`) over screenshots; only screenshot when actually verifying visual layout/styling, since images are token-heavy.
- Delegate large, mechanical, repetitive work (bulk scraping, bulk file conversion) to a subagent so the raw output doesn't bloat the main conversation — but per above, confirm the plan with Meera first.
- Don't re-read files or re-fetch pages that haven't changed since they were last read in this session.

**Keep sessions scoped.**
- When a phase of work wraps up (a feature ships, a round of fixes is merged), proactively suggest summarizing state into a handoff doc like this one and starting fresh, rather than letting one conversation run indefinitely.

## Project

Building a step-by-step learner's guide for the "1 Day Software Testing ILT" (UiPath Software & Agentic Testing Instructor-Led Training), styled after the reference site https://uipath-practice.github.io/AgenticPracticeCourse/ (MkDocs + Material theme).

- **Live site:** https://meerakay.github.io/software-testing-ilt-guide/
- **Repo:** https://github.com/MeeraKay/software-testing-ilt-guide (public, GitHub account MeeraKay)
- **Source material:** Articulate Rise 360 course at https://share.articulate.com/sU1LmDXI_dn_po5aDoJB9 (28 lessons, already fully extracted and converted — no need to re-scrape)

**The GitHub repo's `main` branch is the source of truth going forward**, not any local files — content has been edited directly in GitHub via browser automation in several rounds.

## Stack & deploy mechanics

- MkDocs + Material theme, `mkdocs.yml` at repo root, content in `docs/`.
- `.github/workflows/deploy.yml` runs `pip install mkdocs-material && mkdocs gh-deploy --force` on every push to `main`, publishing to the `gh-pages` branch.
- GitHub Pages Settings → Pages → Source = "Deploy from a branch" → `gh-pages` / `(root)`.
- Meera is logged into GitHub (as MeeraKay) in the Claude-in-Chrome browser session tied to this Cowork workspace.

## How we've been making changes (keep doing this)

Meera's explicit preference: **Claude should not commit/merge directly to `main`.** Workflow used successfully several times:
1. Go to `https://github.com/MeeraKay/software-testing-ilt-guide/upload/main/<folder>`, use the file input (via `file_upload` tool) to upload a corrected local file — this overwrites cleanly without typing into GitHub's CodeMirror editor (typing risks auto-paired-bracket corruption in markdown/YAML).
2. Select "Create a new branch for this commit and start a pull request," name it descriptively, commit.
3. Open the PR (`/compare/main...<branch>`), check the diff text via `get_page_text` before finalizing.
4. Leave the PR **open** for Meera to review and merge herself.

## Site structure

- `docs/index.md` — Home
- `docs/module-1-instructor-led-training/` — nav label "Instructor-Led Training": Overview + 12 numbered steps + `you-did-it.md`
- `docs/module-2-course-completion-exercises/` — nav label "Course Completion Exercises": Overview + 6 numbered steps + `you-did-it.md` (titled "Receive Credit")
- `docs/module-3-additional-topics/` — nav label "Additional Topics": Overview + 8 reference topics, no wrap-up page

## Outstanding / pending items

1. **PR #3 is open, not yet merged:** https://github.com/MeeraKay/software-testing-ilt-guide/pull/3 — removes the header's light/dark toggle button, renames nav tabs to descriptive names. Diff already verified clean. Just needs Meera's merge click (or ask new Claude session to check status first).
2. **Known content gaps**, flagged inline with `!!! warning` admonitions rather than invented text — do not fill these in without new source material:
   - Module 1, Step 8 (Data-Driven Testing) — source cuts off mid-list.
   - Additional Topics → "Other Agentic Features in Test Manager" — source ends abruptly, no proper close.
3. **Visual placeholders:** many pages have `!!! note "Image needed"` blocks marking where original screenshots/diagrams/videos should go — these are real gaps (couldn't scrape images/video), not something to auto-generate.
4. **Downloadable exercise files** (zip, .tmh, .xlsx, .csv) are linked directly to the original Articulate CDN URLs rather than rehosted in the repo — my sandbox's network allowlist blocked downloading them, and the browser bridge blocks relaying raw binary data. If Meera wants them fully self-hosted, she'd need to download them herself and hand them over; direct CDN URLs are in the PR #1 diff / `docs/index.md` etc. if needed again.
5. **No custom logo image** — header currently uses a generic Material icon (`material/robot-outline`) since no UiPath/course logo asset was provided. Swap in a real logo if Meera provides one.

## Things that went wrong (avoid repeating)

- Early on, a temporary validation config (`theme: name: mkdocs`, used only to work around not being able to `pip install mkdocs-material` in the sandbox) got accidentally shipped in a packaged zip instead of the real `theme: name: material` config. Caused a plain-blue, wrapped/broken header until caught and fixed via PR #2. **Always diff-check `mkdocs.yml` before delivering a package** — confirm `theme.name: material` and the palette block are intact.
- The sandbox's bash mount can go stale/out-of-sync after a file receives multiple `Edit` calls in quick succession (confirmed on `mkdocs.yml` specifically) — `wc -c`/`cat` in bash showed a stale byte-for-byte-frozen old version while the `Read` tool (authoritative) showed the correct current content. When bash and Read disagree on a repeatedly-edited file, trust `Read`, and reconstruct via heredoc in `/tmp` for any bash-side validation (e.g. `mkdocs build --strict`) rather than trusting bash's copy of the real file.

## If asked to keep building

Remaining natural next steps, if Meera wants them: fill the two content gaps with real source material, add real screenshots/diagrams in place of the "Image needed" placeholders, consider self-hosting the 4 exercise files, add a real logo.

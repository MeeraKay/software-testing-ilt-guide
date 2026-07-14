# 1 Day Software Testing ILT — Learner's Handbook

A step-by-step learner's guide for the UiPath Software & Agentic Testing Instructor-Led Training. Built with [MkDocs](https://www.mkdocs.org/) and the [Material theme](https://squidfunk.github.io/mkdocs-material/).

**Live site:** https://MeeraKay.github.io/software-testing-ilt-guide/

## What's inside

- **Module 1 — Instructor-Led Training** — Test Manager, Agentic Testing, Studio, Object Repository, data-driven testing, Orchestrator, publishing and executing tests, and building your own AI agent.
- **Module 2 — Course Completion Exercises** — Autopilot for developers, Integration Service, API testing, coded test cases, and the graded exercises required for course credit.
- **Module 3 — Additional Topics** — self-paced reference material: templates, the testing framework, terminal testing, best practices, database testing, and CI/CD.

## Known content gaps

A couple of sections were incomplete in the original source material and are flagged inline with warning boxes rather than filled in with invented content:

- Module 1, Step 8 — Data-Driven Testing (best-practices list cuts off)
- Module 3 — Other Agentic Features in Test Manager (section ends without a close)

Screenshots, diagrams, and embedded videos from the original course still need to be added — look for `[IMAGE: ...]` and `[VIDEO: ...]` notes throughout.

## Running locally

```bash
pip install mkdocs-material
mkdocs serve
```

Then open http://127.0.0.1:8000/.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch. GitHub Pages is configured to serve from that branch.

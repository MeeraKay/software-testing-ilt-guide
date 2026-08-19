# Software Testing ILT Guide - Development Guide

## Git Workflow

### Branching Strategy
This project follows a branching workflow to ensure code quality and organized development:

- **main**: Production-ready code only. No direct commits.
- **dev**: Integration branch for features and fixes.
- **feature/*, bugfix/*, enhancement/*, hotfix/*** branches: All changes (enhancements, hot fixes, new features) branch off from `dev`.

### How to Work

1. **Always create a new branch from `dev`** for any changes:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** on your feature branch (never directly on `main` or `dev`)

3. **Create a Pull Request** from your feature branch to `dev` for review

4. **After review and approval**, merge to `dev`

5. **Release to main** only when `dev` is stable and ready for production:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```

### Key Rules
- ❌ Never commit directly to `main`
- ❌ Never commit directly to `dev` 
- ✅ Always use feature/bugfix/enhancement/hotfix branches off `dev`
- ✅ Use pull requests for code review before merging

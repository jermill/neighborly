# Git Quick Reference

## Initial Setup

```bash
cd /Users/mill/Desktop/neighbor

# Initialize repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Neighborly Chat PWA

Features:
- React 18 + Vite + PWA
- 7 themed chat rooms (New Neighbors, Families, Singles, Game Night, Arts & Crafts, LGBTQ+ Community, Pets)
- Authentication with anonymous mode
- Message likes, block, and report features
- Mobile-first responsive design
- Complete documentation

Tech Stack:
- React + React Router
- Vite + vite-plugin-pwa
- Vanilla CSS
- Mock data for demo
- Netlify deployment ready"
```

## Connect to GitHub

### Create New Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `neighborly` (or your choice)
3. Description: "Neighborly Chat - A PWA for neighborhood connections"
4. Keep it public or private
5. **DO NOT** initialize with README (you already have one)
6. Click "Create repository"

### Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/neighborly.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Common Git Commands

```bash
# Check status
git status

# Add specific files
git add src/pages/NewFeature.jsx

# Add all changes
git add .

# Commit changes
git commit -m "Add new feature"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# View commit history
git log --oneline

# Discard local changes
git checkout -- filename
```

## .gitignore

The project already includes a `.gitignore` file that excludes:
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.env*` - Environment variables
- IDE files
- Cache directories

## Recommended Workflow

### For New Features

```bash
# Start from main
git checkout main
git pull

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes, then commit
git add .
git commit -m "Add feature: description"

# Push feature branch
git push -u origin feature/your-feature-name

# Create Pull Request on GitHub
# After review, merge to main
```

### For Quick Fixes

```bash
# Make changes on main
git add .
git commit -m "Fix: description of fix"
git push
```

## Commit Message Guide

**Good commit messages:**
```
feat: Add user profile editing
fix: Resolve login redirect issue
style: Update chat room colors
docs: Add backend integration guide
refactor: Simplify auth context logic
test: Add unit tests for mock data
```

**Format:**
- `feat:` New feature
- `fix:` Bug fix
- `style:` Style changes
- `docs:` Documentation
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

## GitHub Integration with Netlify

Once your code is on GitHub:

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify
5. Select your `neighborly` repository
6. Build settings auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

**Benefits:**
- ✅ Automatic deploys on every push
- ✅ Deploy previews for pull requests
- ✅ Rollback to previous deploys
- ✅ Custom domain support
- ✅ HTTPS automatically

## Branches Strategy (Optional)

### Simple (Recommended for Solo)
- `main` - Production code
- Deploy directly from main

### With Development Branch
- `main` - Production
- `dev` - Development
- Feature branches off `dev`
- Merge to `dev`, then `dev` → `main`

### With Netlify
- `main` → Production site
- `dev` → Staging site (optional)
- Pull requests → Deploy previews

## Useful Git Aliases

Add to `~/.gitconfig`:

```ini
[alias]
  st = status
  co = checkout
  br = branch
  cm = commit -m
  unstage = reset HEAD --
  last = log -1 HEAD
  visual = log --oneline --graph --decorate --all
```

Then use:
```bash
git st       # Instead of git status
git co main  # Instead of git checkout main
git cm "message"  # Instead of git commit -m "message"
```

## Troubleshooting

**Accidentally committed node_modules?**
```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

**Need to undo last commit?**
```bash
# Keep changes
git reset --soft HEAD~1

# Discard changes
git reset --hard HEAD~1
```

**Merge conflict?**
```bash
# Open conflicted files, resolve conflicts
# Then:
git add .
git commit -m "Resolve merge conflicts"
```

**Wrong commit message?**
```bash
# If not pushed yet
git commit --amend -m "Corrected message"

# If already pushed (avoid if possible)
git commit --amend -m "Corrected message"
git push --force
```

## Tags for Releases

```bash
# Create version tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags
git push --tags

# List tags
git tag -l
```

---

## Quick Start Summary

```bash
cd /Users/mill/Desktop/neighbor
git init
git add .
git commit -m "Initial commit - Neighborly Chat PWA"
git remote add origin https://github.com/YOUR_USERNAME/neighborly.git
git push -u origin main
```

Then connect to Netlify for automatic deployments!

---

**Ready to version control! 📝**




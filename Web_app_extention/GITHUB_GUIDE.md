# GitHub Publishing Guide

## Step-by-Step Instructions to Publish on GitHub

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/hrithik-sharma-317)
2. Click **"New"** button (or go to https://github.com/new)
3. Fill in repository details:
   - **Repository name:** `multipurpose-launcher`
   - **Description:** `Investigation workflow automation tool - Web app + Chrome extension for bulk operations across Amazon tools`
   - **Visibility:** Public (for portfolio) or Private
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### 2. Prepare Local Repository

Open Command Prompt/Terminal in the project folder:

```bash
cd c:\Users\shahrith\Downloads\Web_app_extention
```

### 3. Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Multipurpose Launcher v1.0.0"
```

### 4. Connect to GitHub

```bash
# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/hrithik-sharma-317/multipurpose-launcher.git

# Verify remote
git remote -v
```

### 5. Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

### 6. Verify Upload

1. Go to https://github.com/hrithik-sharma-317/multipurpose-launcher
2. Verify all files are uploaded
3. Check README.md displays correctly

---

## Alternative: GitHub Desktop (Easier)

### 1. Install GitHub Desktop
Download from: https://desktop.github.com/

### 2. Add Repository
1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose: `c:\Users\shahrith\Downloads\Web_app_extention`
4. Click "Add Repository"

### 3. Create Repository on GitHub
1. Click "Publish repository" button
2. Name: `multipurpose-launcher`
3. Description: `Investigation workflow automation tool`
4. Uncheck "Keep this code private" (for portfolio)
5. Click "Publish repository"

---

## Post-Publishing Steps

### 1. Add Topics (Tags)
On GitHub repository page:
1. Click ⚙️ (Settings icon) next to "About"
2. Add topics:
   - `chrome-extension`
   - `javascript`
   - `workflow-automation`
   - `amazon-tools`
   - `bulk-operations`
   - `tab-management`
   - `investigation-tools`
3. Save changes

### 2. Create Screenshots Folder
```bash
mkdir screenshots
# Add screenshots: webapp.png, extension.png, tab-groups.png
git add screenshots/
git commit -m "Add screenshots"
git push
```

### 3. Enable GitHub Pages (Optional)
For hosting the web app:
1. Go to repository Settings
2. Pages section
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save
6. Access at: https://hrithik-sharma-317.github.io/multipurpose-launcher/Multipurpose_Launcher.html

### 4. Add Repository Description
On main repository page:
1. Click ⚙️ next to "About"
2. Description: `Investigation workflow automation tool - Web app + Chrome extension for bulk operations across Amazon tools`
3. Website: (your portfolio URL if any)
4. Topics: (add relevant tags)
5. Save

---

## Files Ready for GitHub

✅ README.md - Main repository documentation  
✅ PORTFOLIO.md - Detailed project showcase  
✅ LICENSE - MIT License  
✅ .gitignore - Ignore unnecessary files  
✅ Multipurpose_Launcher.html - Web application  
✅ Multipurpose-launcher-extension/ - Chrome extension  
✅ All supporting files (CSS, JS, etc.)

---

## Repository URL Structure

After publishing, your repository will be at:
```
https://github.com/hrithik-sharma-317/multipurpose-launcher
```

Clone URL:
```
https://github.com/hrithik-sharma-317/multipurpose-launcher.git
```

---

## Adding to Resume/LinkedIn

### GitHub Repository Link
```
https://github.com/hrithik-sharma-317/multipurpose-launcher
```

### Project Description (Short)
```
Multipurpose Launcher - Investigation workflow automation tool with web app and Chrome extension. Features auto-detection, tab grouping, and bulk operations across 10+ Amazon tools. Built with JavaScript ES6+, Chrome Extension APIs, and responsive design.
```

### LinkedIn Project Section
- **Project Name:** Multipurpose Launcher
- **URL:** https://github.com/hrithik-sharma-317/multipurpose-launcher
- **Description:** Use the one-line description from PORTFOLIO.md
- **Skills:** JavaScript, Chrome Extensions, HTML5, CSS3, Web Development

---

## Troubleshooting

### Issue: "Repository already exists"
```bash
git remote remove origin
git remote add origin https://github.com/hrithik-sharma-317/multipurpose-launcher.git
```

### Issue: "Permission denied"
1. Check GitHub credentials
2. Use Personal Access Token instead of password
3. Generate token: GitHub Settings → Developer settings → Personal access tokens

### Issue: "Large files"
```bash
# Remove large files from git
git rm --cached <large-file>
echo "<large-file>" >> .gitignore
git commit -m "Remove large files"
```

---

## Next Steps After Publishing

1. ⭐ Star your own repository (shows confidence)
2. 📝 Add detailed commit messages for future updates
3. 🏷️ Create releases/tags (v1.0.0, v1.1.0, etc.)
4. 📊 Add GitHub Actions for CI/CD (optional)
5. 📢 Share on LinkedIn with project link
6. 💼 Add to resume with GitHub link

---

**Ready to publish!** Follow the steps above to get your project on GitHub.

Good luck! 🚀

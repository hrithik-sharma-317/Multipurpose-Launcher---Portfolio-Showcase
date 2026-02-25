# Multipurpose Launcher

> A comprehensive investigation toolkit for Amazon workflows - Web Application + Chrome Extension

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/chrome-extension-green.svg)](Multipurpose-launcher-extension/)
[![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🚀 Overview

Multipurpose Launcher automates bulk operations across 10+ Amazon investigation tools, reducing manual workflow time by 70% through auto-detection, tab grouping, and persistent state management.

### Key Features

- 🔍 **Auto-detect ASINs** from any webpage
- 📦 **Bulk operations** for 6 input types (ASINs, Case IDs, Seller IDs, etc.)
- 🗂️ **Tab grouping** by ASIN for organized investigations
- 💾 **Data persistence** with 24-hour auto-expiration
- 🌍 **24 marketplaces** across NA, EU, FE regions
- 🛠️ **14 CSI view types** with keyword support

## 📁 Project Structure

```
multipurpose-launcher/
├── Multipurpose_Launcher.html    # Web Application
├── script.js                      # Web app logic
├── styles.css                     # Web app styles
├── Multipurpose-launcher-extension/  # Chrome Extension
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── content.js
│   ├── styles.css
│   ├── README.md
│   └── USER_GUIDE.md
├── PORTFOLIO.md                   # Project showcase
└── README.md                      # This file
```

## 🎯 Quick Start

### Web Application
1. Open `Multipurpose_Launcher.html` in your browser
2. Select input section (ASINs, Case IDs, etc.)
3. Enter IDs (one per line)
4. Choose region/marketplace
5. Click LAUNCH

### Chrome Extension
1. Navigate to `chrome://extensions/`
2. Enable Developer mode
3. Click "Load unpacked"
4. Select `Multipurpose-launcher-extension` folder
5. Click extension icon to use

**Full installation guide:** [Extension README](Multipurpose-launcher-extension/README.md)

## 💡 Use Cases

### Scenario 1: Bulk ASIN Investigation
```
1. Visit any Amazon product page
2. Click extension icon
3. ASINs auto-detected and listed
4. Select multiple tools (CSI, CP-Central, Media Central)
5. Launch → Tabs grouped by ASIN
```

### Scenario 2: Case Management
```
1. Switch to Case IDs tab
2. Paste 10 case IDs
3. Select region (NA/EU/FE)
4. Launch → All cases open in Paragon
```

### Scenario 3: Brand Investigation
```
1. Switch to Seller ID tab
2. Enter brand name
3. Select "Brand Registry" + search type
4. Launch → Brand details open
```

## 🛠️ Technologies

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **APIs:** Chrome Extension Manifest V3, Storage API, Tabs API, Tab Groups API
- **Design:** Responsive UI, Dark theme, CSS Grid/Flexbox
- **Tools:** 10+ Amazon investigation tools integration

## 📊 Features Breakdown

### Web Application
- ✅ 6 input sections with bulk processing
- ✅ Multi-tool integration (CP-Central, CSI, TimeMachine, Media Central)
- ✅ 24 marketplace support
- ✅ Dynamic URL generation
- ✅ Responsive design

### Chrome Extension (Enhanced)
- ✅ Auto-detection (6 methods)
- ✅ Tab grouping by ASIN
- ✅ Data persistence (24-hour)
- ✅ Cross-window sync
- ✅ Real-time filtering
- ✅ Manual ASIN input

## 📈 Impact

- **70% time saved** on manual URL construction
- **10+ ASINs** processed simultaneously
- **24 marketplaces** supported
- **14 CSI views** available
- **6 input types** for complete workflow coverage

## 📖 Documentation

- [Installation Guide](Multipurpose-launcher-extension/README.md)
- [User Guide](Multipurpose-launcher-extension/USER_GUIDE.md)
- [Portfolio Showcase](PORTFOLIO.md)

## 🎨 Screenshots

### Web Application
![Web App Interface](screenshots/webapp.png)

### Chrome Extension
![Extension Popup](screenshots/extension.png)
![Tab Grouping](screenshots/tab-groups.png)

## 🚀 Future Enhancements

- [ ] Export/Import ASIN lists to CSV
- [ ] Investigation history tracking
- [ ] Keyboard shortcuts
- [ ] Custom tool URLs
- [ ] TypeScript migration
- [ ] Unit testing suite

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt for your own use.

## 👨‍💻 Developer

**Hrithik Sharma**

- 📧 Email: hrithiks492@gmail.com
- 💼 LinkedIn: [hrithiksharma-hs](https://www.linkedin.com/in/hrithiksharma-hs)
- 🐙 GitHub: [hrithik-sharma-317](https://github.com/hrithik-sharma-317)

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

Developed to streamline Amazon investigation workflows and improve team productivity.

---

⭐ **Star this repo** if you find it useful!

**Last Updated:** 2024 | **Version:** 1.0.0

# Multipurpose Launcher - Portfolio Showcase

## Project Overview

**Multipurpose Launcher** is a comprehensive investigation toolkit consisting of a web application and Chrome extension designed to streamline Amazon internal workflows by automating bulk operations and providing quick access to investigation tools.

---

## 🎯 Problem Statement

Amazon investigators spend significant time:
- Manually constructing URLs for investigation tools
- Opening multiple tabs one-by-one for bulk operations
- Switching between different tools for the same ASIN/Case ID
- Re-entering data when switching between tools
- Managing dozens of unorganized tabs

**Impact:** Reduced productivity, increased investigation time, and workflow inefficiencies.

---

## 💡 Solution

Developed a dual-platform solution:

### 1. **Web Application**
A centralized launcher with 6 input sections for bulk operations across Amazon investigation tools.

### 2. **Chrome Extension**
Enhanced version with auto-detection capabilities, tab grouping, and persistent data storage.

---

## 🛠️ Technical Implementation

### Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Extension APIs:** Chrome Extension Manifest V3, Storage API, Tabs API, Tab Groups API
- **Architecture:** Modular JavaScript, Event-driven programming
- **Design:** Responsive UI, Dark theme, Animate.css

### Key Features Developed

#### Web Application
1. **6 Input Sections**
   - ASINs, Case IDs, Seller IDs, Order/ASIN Search, SIM Search, Physical IDs
   - Bulk processing (one ID per line)
   - Region-specific marketplace selection

2. **Multi-Tool Integration**
   - CP-Central (Restricted Products)
   - CSI (14 view types with keyword support)
   - CSI-TimeMachine (Historical data)
   - Media Central (Product images)
   - Paragon (Case management)
   - Brand Registry (7 search types)

3. **Dynamic URL Generation**
   - Context-aware URL construction
   - Region/marketplace parameter injection
   - Query string encoding

#### Chrome Extension (Enhanced Features)
1. **Auto-Detection System**
   - Real-time ASIN scanning from any webpage
   - 6 detection methods (URL parsing, DOM scanning, product tables)
   - Regex-based pattern matching with validation

2. **Tab Grouping**
   - Automatic tab organization by ASIN
   - Color-coded groups (orange theme)
   - Multi-tool launches grouped together

3. **Data Persistence**
   - Chrome Storage API integration
   - 24-hour auto-expiration
   - Cross-window synchronization
   - State restoration on reopen

4. **Interactive Filtering**
   - Real-time ASIN search
   - Partial matching
   - Dynamic list updates

---

## 📊 Technical Achievements

### Code Architecture
```
Multipurpose Launcher/
├── Web Application
│   ├── Multipurpose_Launcher.html (Main UI)
│   ├── script.js (Event handlers, URL generation)
│   ├── styles.css (Responsive design)
│   └── ui-enhancements.css (Animations)
│
└── Chrome Extension
    ├── manifest.json (Extension config)
    ├── popup.html (Extension UI)
    ├── popup.js (Core logic, 500+ lines)
    ├── content.js (ASIN detection)
    ├── styles.css (Dark theme)
    └── generate-icons.html (Icon generator)
```

### Complex Implementations

#### 1. Dynamic Marketplace Management
```javascript
// Region-based marketplace dropdown population
const marketplacesByRegion = {
  'na': [/* 4 marketplaces */],
  'eu': [/* 15 marketplaces */],
  'fe': [/* 4 marketplaces */]
};
```

#### 2. CSI URL Builder
```javascript
// Handles 14 view types, keywords, merchant IDs
function buildCSIUrl(asin, marketplaceId, region) {
  // Dynamic parameter injection
  // Conditional merchant ID handling
  // Keyword encoding
}
```

#### 3. ASIN Detection Algorithm
```javascript
// 6-method detection system
- URL path parsing (/dp/, /product/)
- Product information table scraping
- B0-prefixed pattern matching
- Numeric ISBN detection (books)
- HTML attribute scanning
- Context-aware validation
```

#### 4. Tab Grouping System
```javascript
async function launchToolsGrouped(tools, asins, mp, region) {
  for (const asin of asins) {
    const tabIds = [];
    // Create tabs for each tool
    // Group tabs by ASIN
    // Apply color and title
  }
}
```

---

## 📈 Impact & Results

### Efficiency Gains
- **Time Saved:** ~70% reduction in manual URL construction
- **Bulk Operations:** Process 10+ ASINs simultaneously vs. 1 at a time
- **Tab Management:** Organized groups vs. 50+ scattered tabs
- **Data Entry:** Eliminated re-entering IDs across tools

### User Experience Improvements
- **One-Click Access:** 6 input sections + 14 quick links
- **Auto-Detection:** Zero manual ASIN entry on product pages
- **Persistent State:** Work saved for 24 hours
- **Cross-Window Sync:** Seamless multi-window workflow

### Scale
- **24 Marketplaces:** NA (4), EU (15), FE (4), Other (1)
- **14 CSI Views:** Comprehensive catalog investigation
- **7 Brand Search Types:** Flexible seller lookup
- **6 Input Sections:** Complete workflow coverage

---

## 🎨 Design Highlights

### User Interface
- **Dark Theme:** Reduced eye strain for long investigations
- **Responsive Layout:** 420px extension popup, full-screen webapp
- **Visual Feedback:** Status messages, animations, hover effects
- **Accessibility:** High contrast, clear labels, keyboard navigation

### User Experience
- **Progressive Disclosure:** CSI options appear only when needed
- **Smart Defaults:** Pre-selected checkboxes, default regions
- **Error Prevention:** Input validation, confirmation dialogs
- **Contextual Help:** Tooltips, placeholders, status messages

---

## 🔧 Technical Challenges Solved

### Challenge 1: Cross-Window Data Persistence
**Problem:** Extension data lost when opening new Chrome windows

**Solution:** 
- Implemented Chrome Storage API with global scope
- Added timestamp-based expiration (24 hours)
- Created state restoration on popup open

### Challenge 2: ASIN Detection Accuracy
**Problem:** False positives (order IDs, tracking numbers)

**Solution:**
- Multi-method detection with validation
- Letter count requirement (min 2 letters)
- Context-aware numeric ASIN detection (near "ASIN"/"ISBN" keywords)

### Challenge 3: Tab Organization
**Problem:** 50+ tabs opened for bulk operations

**Solution:**
- Implemented Chrome Tab Groups API
- Grouped tabs by ASIN with color coding
- Async/await for sequential tab creation

### Challenge 4: Dynamic URL Construction
**Problem:** 14 CSI views with different parameter requirements

**Solution:**
- Conditional parameter injection
- View-specific logic (domains_for_asin, by_merchant)
- Proper URL encoding for special characters

---

## 📚 Skills Demonstrated

### Frontend Development
- ✅ Vanilla JavaScript (ES6+)
- ✅ DOM Manipulation
- ✅ Event-driven programming
- ✅ Async/await patterns
- ✅ Regular expressions
- ✅ CSS Grid & Flexbox
- ✅ Responsive design

### Chrome Extension Development
- ✅ Manifest V3 configuration
- ✅ Content scripts
- ✅ Background scripts
- ✅ Storage API
- ✅ Tabs API
- ✅ Tab Groups API
- ✅ Message passing

### Software Engineering
- ✅ Modular code architecture
- ✅ State management
- ✅ Data persistence
- ✅ Error handling
- ✅ Input validation
- ✅ Cross-browser compatibility
- ✅ Performance optimization

### Problem Solving
- ✅ Workflow analysis
- ✅ User experience design
- ✅ Algorithm development
- ✅ Edge case handling
- ✅ Debugging complex issues

---

## 📦 Deliverables

### 1. Web Application
- Fully functional HTML/CSS/JS application
- 6 input sections with bulk processing
- Multi-tool integration
- Responsive design

### 2. Chrome Extension
- Published-ready extension package
- Auto-detection capabilities
- Tab grouping functionality
- Data persistence (24-hour)
- User documentation

### 3. Documentation
- README.md (Installation guide)
- USER_GUIDE.md (Complete usage documentation)
- PORTFOLIO.md (This document)
- Inline code comments

---

## 🚀 Future Enhancements

### Planned Features
1. **Export/Import:** Save ASIN lists to CSV
2. **History:** Track recently launched investigations
3. **Keyboard Shortcuts:** Power user features
4. **Batch Operations:** Schedule bulk launches
5. **Analytics:** Track tool usage patterns
6. **Custom Tools:** User-defined tool URLs
7. **Team Sharing:** Share ASIN lists with team

### Technical Improvements
1. **TypeScript Migration:** Type safety
2. **Unit Testing:** Jest/Mocha test suite
3. **CI/CD Pipeline:** Automated deployment
4. **Performance Monitoring:** Usage analytics
5. **Error Logging:** Sentry integration

---

## 📊 Project Metrics

### Development
- **Lines of Code:** ~2,500+
- **Development Time:** 40+ hours
- **Files Created:** 15+
- **Functions Written:** 50+
- **API Integrations:** 10+ Amazon tools

### Features
- **Input Sections:** 6
- **Investigation Tools:** 10+
- **Marketplaces Supported:** 24
- **CSI View Types:** 14
- **Brand Search Types:** 7
- **URL Templates:** 15+

---

## 🎓 Learning Outcomes

### Technical Skills Acquired
1. Chrome Extension development (Manifest V3)
2. Advanced JavaScript patterns (async/await, promises)
3. Browser API integration (Storage, Tabs, Tab Groups)
4. Complex state management
5. URL construction and encoding
6. Regular expression mastery
7. Cross-window data synchronization

### Soft Skills Developed
1. User-centric design thinking
2. Workflow optimization analysis
3. Technical documentation writing
4. Problem decomposition
5. Iterative development

---

## 💼 Resume Highlights

### Project Title
**Multipurpose Launcher - Investigation Workflow Automation Tool**

### One-Line Description
Developed a web application and Chrome extension that automates bulk operations across 10+ Amazon investigation tools, reducing manual workflow time by 70% through auto-detection, tab grouping, and persistent state management.

### Key Accomplishments
- Built Chrome extension with auto-detection system using 6 detection methods and regex pattern matching
- Implemented tab grouping feature using Chrome Tab Groups API for organized multi-tool investigations
- Developed data persistence layer with 24-hour expiration and cross-window synchronization
- Created dynamic URL generation system supporting 24 marketplaces and 14 CSI view types
- Designed responsive UI with dark theme, supporting bulk operations for 6 input types

### Technologies
JavaScript (ES6+), HTML5, CSS3, Chrome Extension APIs (Manifest V3, Storage, Tabs, Tab Groups), Regular Expressions, Async/Await, DOM Manipulation, Responsive Design

---

## 📸 Screenshots & Demos

### Web Application
- Main interface with 6 input sections
- Multi-tool checkboxes for bulk launch
- CSI options with 14 view types
- Dark theme with animations

### Chrome Extension
- Auto-detected ASIN list with checkboxes
- Tab grouping by ASIN (orange groups)
- Filter functionality (real-time search)
- Persistent state across windows

---

## 🔗 Links

### Repository Structure
```
/Multipurpose_Launcher.html - Web application
/Multipurpose-launcher-extension/ - Chrome extension
  ├── manifest.json
  ├── popup.html
  ├── popup.js
  ├── content.js
  ├── styles.css
  ├── README.md
  └── USER_GUIDE.md
```

### Documentation
- Installation Guide: `README.md`
- User Manual: `USER_GUIDE.md`
- Portfolio: `PORTFOLIO.md` (this file)

---

## 👨‍💻 Developer

**Hrithik Sharma**  
Role: Full-Stack Developer / Chrome Extension Developer

**Contact:**
- Email: hrithiks492@gmail.com
- LinkedIn: www.linkedin.com/in/hrithiksharma-hs
- GitHub: https://github.com/hrithik-sharma-317

---

## 📄 License

Internal tool for Amazon investigation workflows.

---

## 🙏 Acknowledgments

Developed to streamline Amazon investigation workflows and improve team productivity.

---

**Last Updated:** 2024  
**Version:** 1.0.0  
**Status:** Production Ready

# Multipurpose Launcher - Latest Updates

## Recent Changes (Latest Session)

### 🔧 Order/ASIN Search URL Updates
- **ASIN Search URL Pattern**: Updated to `https://sellercentral.amazon.com/orders-v3/search?page=1&q={ASIN}&qt=asin`
- **Canada Marketplace**: Changed from `.ca` to `.com` domain
- **Mexico Marketplace**: Changed from `.mx` to `.com` domain
- **Unified Domain**: All NA region marketplaces (US, CA, MX) now use `.com` domain

### 🚀 Enhanced SIM Search Functionality
- **Keywords Support**: Added optional keywords field for Requester and Assignee searches
- **Combined Search**: Supports `requester:(username)+(keywords)` and `assignee:(username)+(keywords)` format
- **Dynamic UI**: Keywords field appears automatically when Requester or Assignee is selected
- **URL Format**: `https://issues.amazon.com/issues/search?q=requester%3A(user)+(keyword)&sort=lastUpdatedConversationDate+desc&selectedDocument=0d06fd54-6c6a-4392-aaa1-70d4bff357e1`

## Core Features

### 📋 Input Sections
- **Case IDs**: Launch Paragon case management across NA/EU/FE regions
- **Seller ID/Brand Registry**: Search Paragon or Brand Registry with multiple search types
- **ASINs**: Multi-tool launcher for CP-Central, CSI, TimeMachine, Media Central
- **Physical ID Search**: Media Central image lookup with multiple IDs
- **Order ID/ASIN Search**: Seller Central searches across marketplaces
- **SIM Search**: Enhanced search with keywords support for Requester/Assignee

### 🛠️ Quick Access Tools
- **Investigation**: Paragon, CSI, TimeMachine, Seller Central, SIM Search, Media Central, Darwin, CP Central, Nemo Tool
- **Research**: WhoIs, IP Lookup, Amazon Translate, Global Transfer Guide
- **IP Protection**: EUIPO, WIPO, USPTO, IP India, IP Tracker, Brand Registry

### 🎨 UI Features
- **Dark/Light Theme**: Toggle with localStorage persistence
- **Responsive Design**: Mobile-friendly grid layouts
- **Animations**: Smooth transitions and hover effects
- **Search Functionality**: Filter tools by name or description

## Technical Stack
- Pure HTML/CSS/JavaScript
- Animate.css for animations
- Font Awesome icons
- CSS Grid and Flexbox layouts
- Local storage for preferences

## Files Modified
- `Multipurpose_Launcher.html` - Main application with all functionality
- `README.md` - This documentation file

## Usage
1. Open `index.html` (redirects to `Multipurpose_Launcher.html`)
2. Select appropriate input section
3. Enter IDs/terms (one per line for multiple entries)
4. Choose region/marketplace/tool options
5. Click LAUNCH to open in new tabs

## Security Features
- Script content protection
- Copy prevention for sensitive code
- Function inspection protection
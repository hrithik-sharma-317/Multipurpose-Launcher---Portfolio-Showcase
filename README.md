# Multipurpose Launcher - Chrome Extension

Chrome extension for launching ASINs, Case IDs, Seller IDs, and more into Amazon investigation tools.

## Installation

### Step 1: Generate Icon Files
1. Open `generate-icons.html` in your browser
2. Click the 3 "Download" buttons
3. Save as `icon16.png`, `icon48.png`, `icon128.png`
4. Place all 3 files in the `icons/` folder

### Step 2: Load Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **"Load unpacked"**
4. Select the `Multipurpose-launcher-extension` folder
5. Done! Extension icon appears in toolbar

### Step 3: Pin Extension (Optional)
1. Click the puzzle icon 🧩 in Chrome toolbar
2. Find "Multipurpose Launcher"
3. Click the pin icon 📌

## Features

- **Auto-detect ASINs** from any page
- **6 input sections**: ASINs, Case IDs, Seller ID, Order/ASIN, SIM Search, Physical ID
- **Multi-tool launch** with tab grouping by ASIN
- **Data persistence** (saves for 24 hours)
- **4 investigation tools**: CP-Central, CSI, CSI-TimeMachine, Media Central
- **14 CSI view types** with keyword support

## Usage

1. Click extension icon in toolbar
2. Switch tabs for different input types
3. Enter IDs (ASINs auto-detected)
4. Select region/marketplace
5. Choose tools and click LAUNCH

## Troubleshooting

**Icon not showing?**
- Generate icon PNG files (Step 1)
- Reload extension in `chrome://extensions/`

**No ASINs detected?**
- Refresh the page
- Reopen extension popup

**Data not saving?**
- Data expires after 24 hours
- Click Reset button to clear manually

## Requirements

- Chrome 88+ (or Edge, Brave, Opera)
- Windows, Mac, or Linux

## Version

1.0.0

# Multipurpose Launcher - User Guide

Complete guide on how to use the Multipurpose Launcher Chrome Extension.

---

## Table of Contents
1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [ASIN Section](#asin-section)
4. [Case IDs Section](#case-ids-section)
5. [Seller ID Section](#seller-id-section)
6. [Order/ASIN Section](#orderasin-section)
7. [SIM Search Section](#sim-search-section)
8. [Physical ID Section](#physical-id-section)
9. [Data Persistence](#data-persistence)
10. [Tips & Tricks](#tips--tricks)

---

## Overview

The Multipurpose Launcher is a Chrome extension that streamlines Amazon investigation workflows by:
- Auto-detecting ASINs from any webpage
- Bulk launching IDs into investigation tools
- Grouping tabs by ASIN for organization
- Saving your work for 24 hours

---

## Getting Started

### Opening the Extension
1. Click the Multipurpose Launcher icon in your Chrome toolbar
2. Extension popup opens (420x650px window)
3. Default view: ASINs tab

### Navigation
- **6 tabs at the top**: ASINs, Case IDs, Seller ID, Order/ASIN, SIM Search, Physical ID
- Click any tab to switch input sections
- All data is saved automatically

### Reset Button
- Located in top-right corner (🔄 Reset)
- Clears all saved data
- Resets extension to default state

---

## ASIN Section

### Auto-Detection
When you open the extension on any page:
- ASINs are automatically detected from page content
- Detected ASINs appear in the list with checkboxes
- All ASINs are pre-selected

### Manual Input
1. Type ASIN in the input field (e.g., B0BLY8VBWK)
2. Press **Enter** to add
3. ASIN appears at top of list
4. Validation: Must be 10 alphanumeric characters with at least 2 letters

### Filtering
- Type in input field to filter ASINs
- Shows only matching ASINs
- Clear input to show all ASINs

### Selection
- **Select All**: Check all ASINs
- **Deselect All**: Uncheck all ASINs
- Click individual checkboxes to select specific ASINs
- Counter shows "X selected"

### Region & Marketplace
1. Select **Region**: NA, EU, FE, or Other
2. **Marketplace** dropdown updates automatically
3. Choose specific marketplace (e.g., US (1), UK (3), JP (6))

### Single Tool Launch
1. Select tool from dropdown:
   - CP-Central
   - CSI-TimeMachine
   - CSI
   - Media Central
2. Click **🚀 LAUNCH**
3. Opens selected ASINs in chosen tool (separate tabs)

### CSI Options (When CSI Selected)
1. **View Type** dropdown appears with 14 options:
   - Blame-O
   - Simple Reconciled Product Data View
   - ASIN Creator
   - Authoritative Contribution History (ACT)
   - Child to Parent Relationships
   - And 9 more...
2. **Keyword** field (optional): Add search keywords
3. **Merchant ID** field (appears for "By Merchant" view)

### Multi-Tool Launch
1. Check multiple tool checkboxes:
   - ☑ CP-Central
   - ☑ CSI-TimeMachine
   - ☑ CSI
   - ☑ Media Central
2. Click **🚀 LAUNCH SELECTED TOOLS**
3. Opens all selected ASINs in all selected tools
4. **Tabs are grouped by ASIN** (orange tab groups)

**Example:**
- 3 ASINs selected
- 3 tools checked
- Result: 9 tabs in 3 groups (one group per ASIN)

---

## Case IDs Section

### Purpose
Launch Paragon cases across regions.

### Usage
1. Click **Case IDs** tab
2. Enter Case IDs (one per line):
   ```
   12345678
   87654321
   11223344
   ```
3. Select **Region**: NA, EU, or FE
4. Click **🚀 LAUNCH**
5. Opens each case in Paragon

**URL Format:**
```
https://paragon-{region}.amazon.com/case/{caseId}
```

---

## Seller ID Section

### Purpose
Search Paragon or Brand Registry for sellers.

### Usage
1. Click **Seller ID** tab
2. Enter Seller IDs (one per line)
3. Select **Region**: NA, EU, or FE
4. Select **Tool**:
   - **Paragon**: Directory search
   - **Brand Registry**: Brand search
5. If Brand Registry selected, choose **Search Type**:
   - Brand Name
   - Brand ID
   - MCID
   - CID
   - Company Code
   - Partner Account ID
   - Trademark Number
6. Click **🚀 LAUNCH**

---

## Order/ASIN Section

### Purpose
Search Seller Central for orders or ASINs.

### Usage
1. Click **Order/ASIN** tab
2. Enter Order IDs or ASINs (one per line)
3. Select **Region**: NA, EU, or FE
4. Select **Marketplace Domain** (updates by region)
5. Select **Type**:
   - **Order ID**: Direct order lookup
   - **ASIN**: ASIN search in orders
6. Click **🚀 LAUNCH**

**URL Formats:**
- Order: `https://sellercentral.amazon.{domain}/orders-v3/order/{orderId}`
- ASIN: `https://sellercentral.amazon.com/orders-v3/search?q={asin}&qt=asin`

---

## SIM Search Section

### Purpose
Search Amazon SIM (Issue Management System).

### Usage
1. Click **SIM Search** tab
2. Enter search term
3. Select **Search Type**:
   - **Keyword**: General search
   - **Requester**: Search by requester username
   - **Assignee**: Search by assignee username
4. If Requester/Assignee selected:
   - **Keywords** field appears
   - Enter optional keywords to narrow search
5. Click **🚀 LAUNCH**

**Search Formats:**
- Keyword: `(searchTerm)`
- Requester: `requester:(username)+(keywords)`
- Assignee: `assignee:(username)+(keywords)`

---

## Physical ID Section

### Purpose
Lookup product images in Media Central by Physical ID.

### Usage
1. Click **Physical ID** tab
2. Enter Physical IDs (one per line):
   ```
   PHYS123456
   PHYS789012
   ```
3. Click **🚀 LAUNCH**
4. Opens Media Central image lookup with all IDs

**URL Format:**
```
https://console.harmony.a2z.com/media-central/image-lookup?physicalIds={id1},{id2}
```

---

## Data Persistence

### What Gets Saved
- All detected ASINs
- ASIN selections (checked/unchecked)
- Tool selections (checkboxes)
- All text inputs (Case IDs, Seller IDs, etc.)
- All dropdown selections (Region, Marketplace, Tool)
- CSI options (View Type, Keywords, Merchant ID)

### When Data Saves
- Automatically on every change
- When switching tabs
- When checking/unchecking items
- When typing in fields

### Data Expiration
- **24 hours** from last save
- After 24 hours, data is cleared automatically
- Manual reset available anytime via Reset button

### Cross-Window Sync
- Data is shared across all Chrome windows
- Changes in one window appear in others
- Storage is global to the extension

---

## Tips & Tricks

### Keyboard Shortcuts
- **Enter** in ASIN input: Add manual ASIN
- **Tab** key: Navigate between fields

### Best Practices
1. **Pin the extension** to toolbar for quick access
2. **Use filtering** to find specific ASINs quickly
3. **Multi-tool launch** for comprehensive investigations
4. **Tab grouping** keeps related tabs organized
5. **Reset regularly** to clear old data

### Performance
- Extension scans page on popup open (1-2 seconds for large pages)
- Manually added ASINs are instant
- Tab grouping may take a few seconds for many ASINs

### Common Workflows

**Workflow 1: Quick ASIN Investigation**
1. Navigate to page with ASINs
2. Open extension
3. ASINs auto-detected
4. Select tool → Launch

**Workflow 2: Multi-Tool Deep Dive**
1. Open extension
2. Check multiple tools (CSI, CP-Central, Media Central)
3. Select ASINs
4. Launch → Tabs grouped by ASIN

**Workflow 3: Case Management**
1. Switch to Case IDs tab
2. Paste case IDs from spreadsheet
3. Select region
4. Launch all cases

**Workflow 4: Seller Investigation**
1. Switch to Seller ID tab
2. Enter seller IDs
3. Choose Paragon or Brand Registry
4. Launch searches

---

## Troubleshooting

### ASINs Not Detected
- Refresh the page
- Reopen extension popup
- Check if page actually contains ASINs
- Manually add ASINs if needed

### Tabs Not Opening
- Check popup blocker settings
- Allow popups for the extension
- Verify you're logged into Amazon tools

### Data Not Saving
- Check if 24 hours have passed (data expired)
- Try manual reset and re-enter data
- Reload extension in chrome://extensions/

### Tab Groups Not Working
- Ensure you're using Multi-Tool Launch
- Single Tool Launch doesn't group tabs
- Check Chrome version (88+ required)

---

## URL Patterns

### CP-Central
```
https://www.cp-central.catalog.amazon.dev/#/members?asins={asin}&programs=RestrictedProducts,ProductSafety,RecalledProducts,OffensiveProducts,EPR,FoodSafety&marketplaces={mp}
```

### CSI-TimeMachine
```
https://timemachine.amazon.com/index.html#/product/{asin}
```

### CSI
```
https://csi.amazon.com/view?view={view}&item_id={asin}&marketplace_id={mp}&realm=USAmazon&region={region}&stage=prod&tb=true&keyword={keyword}&submit=Show
```

### Media Central
```
https://console.harmony.a2z.com/media-central/product-images?asin={asin}
```

---

## Support

For issues or questions:
1. Check this guide
2. Review README.md for installation help
3. Check chrome://extensions/ for error messages

---

**Version:** 1.0.0  
**Last Updated:** 2024

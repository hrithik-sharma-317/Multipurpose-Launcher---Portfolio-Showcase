# Multipurpose Launcher Icon Generation

## New Icon Design
- **Orange gradient circle** background (Amazon orange)
- **Rocket** in center (launch/speed theme)
- **Tool icons** around rocket:
  - Magnifying glass (search/investigation)
  - Wrench (tools)
  - Gear (settings/configuration)
  - Box/Package (products/ASINs)

## Generate PNG Icons

### Option 1: Online Converter (Easiest)
1. Go to https://svgtopng.com/ or https://cloudconvert.com/svg-to-png
2. Upload `icon.svg`
3. Generate 3 sizes:
   - **16x16** → save as `icon16.png`
   - **48x48** → save as `icon48.png`
   - **128x128** → save as `icon128.png`
4. Place all files in `asin-launcher-extension/icons/` folder
5. Reload extension in Chrome (`chrome://extensions/` → click reload button)

### Option 2: ImageMagick Command
```bash
cd asin-launcher-extension
magick icon.svg -resize 16x16 icons/icon16.png
magick icon.svg -resize 48x48 icons/icon48.png
magick icon.svg -resize 128x128 icons/icon128.png
```

### Option 3: Inkscape Command
```bash
inkscape icon.svg --export-filename=icons/icon16.png -w 16 -h 16
inkscape icon.svg --export-filename=icons/icon48.png -w 48 -h 48
inkscape icon.svg --export-filename=icons/icon128.png -w 128 -h 128
```

## After Generating Icons
1. Verify 3 PNG files exist in `icons/` folder
2. Open Chrome → `chrome://extensions/`
3. Click reload button on "Multipurpose Launcher" extension
4. New icon will appear in toolbar and extension list

## Customize Colors
Edit `icon.svg` to change colors:
- Background: `#FF9900` (orange) and `#FF7700` (darker orange)
- Rocket/tools: `#0F1117` (dark)
- Window: `#7EC8E3` (blue)
- Flame: `#FFD700` (gold) and `#FF9900` (orange)

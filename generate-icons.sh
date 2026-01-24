#!/bin/bash
# Simple Icon Generator for Portfolio Sites
# Creates only the essential icons (not full PWA suite)
# Requires: ImageMagick

set -e

SOURCE="${1:-logo.png}"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "🥔 SpudKick Icon Generator (Portfolio Edition)"
echo "==============================================="
echo ""

# Check if source file exists
if [ ! -f "$SOURCE" ]; then
    echo -e "${RED}❌ Error: Source file '$SOURCE' not found${NC}"
    echo ""
    echo "Usage: ./generate-icons.sh your-logo.png"
    echo "Source should be at least 512x512 pixels"
    exit 1
fi

# Check ImageMagick
if ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ ImageMagick not installed${NC}"
    echo "Install: brew install imagemagick (macOS)"
    echo "     or: sudo apt-get install imagemagick (Linux)"
    exit 1
fi

# Check dimensions
WIDTH=$(identify -format "%w" "$SOURCE")
HEIGHT=$(identify -format "%h" "$SOURCE")

echo "Source: $SOURCE (${WIDTH}x${HEIGHT})"

if [ "$WIDTH" -lt 512 ] || [ "$HEIGHT" -lt 512 ]; then
    echo -e "${YELLOW}⚠️  Warning: Image smaller than 512x512${NC}"
    read -p "Continue? (y/n) " -n 1 -r
    echo ""
    [[ ! $REPLY =~ ^[Yy]$ ]] && exit 1
fi

echo ""
echo "Generating essential icons..."
echo "-----------------------------"

# Web manifest icons (just 2)
convert "$SOURCE" -resize 192x192 -background transparent -gravity center -extent 192x192 public/icon-192.png
echo -e "${GREEN}✓${NC} icon-192.png (for manifest)"

convert "$SOURCE" -resize 512x512 -background transparent -gravity center -extent 512x512 public/icon-512.png
echo -e "${GREEN}✓${NC} icon-512.png (for manifest)"

# Favicon (multi-size ICO)
convert "$SOURCE" -resize 256x256 -background transparent -gravity center \
    \( -clone 0 -resize 16x16 \) \
    \( -clone 0 -resize 32x32 \) \
    \( -clone 0 -resize 48x48 \) \
    -delete 0 public/favicon.ico
echo -e "${GREEN}✓${NC} favicon.ico (16, 32, 48px)"

# Apple touch icon (optional but nice)
convert "$SOURCE" -resize 180x180 -background transparent -gravity center -extent 180x180 public/apple-touch-icon.png
echo -e "${GREEN}✓${NC} apple-touch-icon.png (iOS bookmarks)"

echo ""
echo -e "${GREEN}✅ Done! 4 icons created in public/${NC}"
echo ""
echo "Files:"
echo "  • icon-192.png (web manifest)"
echo "  • icon-512.png (web manifest)"
echo "  • favicon.ico (browser tab)"
echo "  • apple-touch-icon.png (iOS)"
echo ""
echo "Next: Copy site.webmanifest to public/ and update Head.astro"

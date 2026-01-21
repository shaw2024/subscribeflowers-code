#!/bin/bash
# Image cleanup script for subscribeflowers-code
# This script removes unnecessary image files and folders

set -e  # Exit on error

cd /workspaces/subscribeflowers-code

echo "Starting image cleanup..."
echo ""

# Delete helper/development files
echo "Removing helper files..."
rm -f public/images/roses/generate-placeholders.sh
rm -f public/images/roses/placeholder-generator.html
rm -f public/images/roses/README.md
rm -f public/images/roses/.gitkeep

# Delete unnecessary/duplicate image files
echo "Removing duplicate and unused image files..."
rm -f public/images/roses/Gemini_Generated_Image_bonedabonedabone.png
rm -f public/images/roses/redrose.png
rm -f public/images/roses/rose-red.jpg

# Delete all pink rose files (use Pexels URLs)
echo "Removing pink rose files (using Pexels CDN)..."
rm -f public/images/roses/rose-pink-closed.png
rm -f public/images/roses/rose-pink-closed.svg
rm -f public/images/roses/rose-pink-open.png
rm -f public/images/roses/rose-pink-open.svg
rm -f public/images/roses/rose-pink-stem.png
rm -f public/images/roses/rose-pink-stem.svg

# Delete all orange rose files (use Pexels URLs)
echo "Removing orange rose files (using Pexels CDN)..."
rm -f public/images/roses/rose-orange-closed.png
rm -f public/images/roses/rose-orange-closed.svg
rm -f public/images/roses/rose-orange-open.png
rm -f public/images/roses/rose-orange-open.svg
rm -f public/images/roses/rose-orange-stem.png
rm -f public/images/roses/rose-orange-stem.svg

# Delete all lavender rose files (use Pexels URLs)
echo "Removing lavender rose files (using Pexels CDN)..."
rm -f public/images/roses/rose-lavender-closed.png
rm -f public/images/roses/rose-lavender-closed.svg
rm -f public/images/roses/rose-lavender-open.png
rm -f public/images/roses/rose-lavender-open.svg
rm -f public/images/roses/rose-lavender-stem.png
rm -f public/images/roses/rose-lavender-stem.svg

# Delete all yellow rose files (use Pexels URLs)
echo "Removing yellow rose files (using Pexels CDN)..."
rm -f public/images/roses/rose-yellow-closed.jpg
rm -f public/images/roses/rose-yellow-closed.png
rm -f public/images/roses/rose-yellow-closed.svg
rm -f public/images/roses/rose-yellow-open.jpg
rm -f public/images/roses/rose-yellow-open.png
rm -f public/images/roses/rose-yellow-open.svg
rm -f public/images/roses/rose-yellow-stem.jpg
rm -f public/images/roses/rose-yellow-stem.png
rm -f public/images/roses/rose-yellow-stem.svg

# Delete all white rose files (use Pexels URLs)
echo "Removing white rose files (using Pexels CDN)..."
rm -f public/images/roses/rose-white-closed.png
rm -f public/images/roses/rose-white-closed.svg
rm -f public/images/roses/rose-white-open.png
rm -f public/images/roses/rose-white-open.svg
rm -f public/images/roses/rose-white-stem.png
rm -f public/images/roses/rose-white-stem.svg

# Delete the redundant red folder
echo "Removing redundant red folder..."
rm -rf public/images/red/

echo ""
echo "Cleanup complete!"
echo ""
echo "Remaining files in public/images/roses/:"
ls -lh public/images/roses/

echo ""
echo "⚠️  WARNING: rose-red-closed.png appears to be corrupted (0 bytes)."
echo "You may need to restore it from git or regenerate it."
echo ""
echo "Expected files (that should remain):"
echo "  - rose-red-closed.png"
echo "  - rose-red-open.png"
echo "  - rose-red-stem.png"

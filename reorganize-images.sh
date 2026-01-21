#!/bin/bash
# Reorganize images from public/ to src/assets/ for proper Vite bundling
# This script will move red rose images and clean up unnecessary files

set -e

cd /workspaces/subscribeflowers-code

echo "================================================"
echo "Image Reorganization Script"
echo "Moving images from public/ to src/assets/"
echo "================================================"
echo ""

# Step 1: Restore corrupted file if needed
echo "Step 1: Checking and restoring corrupted files..."
if [ ! -s public/images/roses/rose-red-closed.png ]; then
    echo "  ⚠️  rose-red-closed.png is corrupted (0 bytes), restoring from git..."
    git restore public/images/roses/rose-red-closed.png
    echo "  ✅ Restored"
else
    echo "  ✅ Files are intact"
fi
echo ""

# Step 2: Copy the 3 red rose PNG files to src/assets
echo "Step 2: Copying red rose images to src/assets/images/roses/..."
cp public/images/roses/rose-red-closed.png src/assets/images/roses/
cp public/images/roses/rose-red-open.png src/assets/images/roses/
cp public/images/roses/rose-red-stem.png src/assets/images/roses/
echo "  ✅ Copied 3 red rose PNG files"
echo ""

# Step 3: Delete the entire public/images directory
echo "Step 3: Removing old public/images directory..."
rm -rf public/images/
echo "  ✅ Deleted public/images/"
echo ""

# Step 4: Delete the cleanup script (no longer needed)
echo "Step 4: Cleaning up temporary files..."
rm -f cleanup-images.sh
echo "  ✅ Removed old cleanup script"
echo ""

echo "================================================"
echo "✅ Image reorganization complete!"
echo "================================================"
echo ""
echo "New structure:"
echo "  src/assets/images/roses/"
echo "    ├── rose-red-closed.png"
echo "    ├── rose-red-open.png"
echo "    └── rose-red-stem.png"
echo ""
echo "⚠️  NEXT STEP: Update src/data/images.ts to import these images"
echo "   (Script will be updated automatically)"
echo ""

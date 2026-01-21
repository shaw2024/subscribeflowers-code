#!/bin/bash
set -e
cd /workspaces/subscribeflowers-code

echo "=== Image Reorganization and Cleanup ==="
echo ""

# Restore corrupted file
echo "1. Restoring corrupted file..."
git restore public/images/roses/rose-red-closed.png || echo "File already OK"

# Copy images to src/assets
echo "2. Copying images to src/assets/images/roses/..."
cp public/images/roses/rose-red-closed.png src/assets/images/roses/
cp public/images/roses/rose-red-open.png src/assets/images/roses/
cp public/images/roses/rose-red-stem.png src/assets/images/roses/

# Delete public/images
echo "3. Deleting public/images directory..."
rm -rf public/images

# Delete temporary files
echo "4. Cleaning up temporary files..."
rm -f cleanup-images.sh reorganize-images.sh IMAGE-REORGANIZATION-INSTRUCTIONS.md
rm -f "$0"  # Delete this script itself

echo ""
echo "✅ Reorganization complete!"
echo ""
echo "Files in src/assets/images/roses/:"
ls -lh src/assets/images/roses/

echo ""
echo "=== Staging and Committing Changes ==="
git add -A
git status

echo ""
echo "Creating commit..."
git commit -m "refactor: reorganize images to src/assets for Vite bundling

- Move red rose images from public/images to src/assets/images/roses
- Update images.ts to import images directly for optimization
- Remove unused image files (pink, orange, lavender, white, yellow)
- Delete helper scripts and placeholder generators
- Clean up redundant red folder
- Benefits: Vite bundling, cache busting, tree-shaking, better performance"

echo ""
echo "Pushing to GitHub..."
git push origin main

echo ""
echo "✅ All done! Changes pushed to GitHub."

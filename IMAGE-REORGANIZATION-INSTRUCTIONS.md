# Image Reorganization Instructions

## Status
✅ Code updated in `src/data/images.ts` to import images properly  
✅ Directory structure created at `src/assets/images/roses/`  
⚠️  Terminal is locked - manual file operations needed

## What You Need to Do

### Open a NEW terminal in VS Code:
**Terminal → New Terminal** (or click the + icon in terminal panel)

### Then run these commands:

```bash
cd /workspaces/subscribeflowers-code

# Restore the corrupted file (if needed)
git restore public/images/roses/rose-red-closed.png

# Copy the 3 red rose images to src/assets
cp public/images/roses/rose-red-closed.png src/assets/images/roses/
cp public/images/roses/rose-red-open.png src/assets/images/roses/
cp public/images/roses/rose-red-stem.png src/assets/images/roses/

# Delete the old public/images directory
rm -rf public/images/

# Delete temporary scripts
rm -f cleanup-images.sh reorganize-images.sh

# Verify the new structure
ls -lh src/assets/images/roses/
```

## Expected Result

After running the above, you should have:

```
src/assets/images/roses/
├── rose-red-closed.png
├── rose-red-open.png
└── rose-red-stem.png
```

## What's Already Done

✅ `src/data/images.ts` - Updated to import images from `src/assets/`  
✅ Removed `BASE_URL` references for red roses  
✅ Red roses now use Vite's import system for bundling & optimization  
✅ Other colors still use Pexels CDN (no change needed)

## Benefits

- ✨ Images are now bundled and optimized by Vite
- ✨ Automatic cache busting on deployments
- ✨ Better performance with tree-shaking
- ✨ TypeScript will catch missing image files at compile time
- ✨ Clean separation: local assets in src/, no unused files in public/

---

**After you run the commands above, your image reorganization will be complete!**

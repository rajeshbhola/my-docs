#!/usr/bin/env node

/**
 * Post-build script to fix URL-encoded directory names in Next.js static export
 * This ensures GitHub Pages can serve files with spaces in directory names correctly
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../out');

function decodePathNames(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist, skipping...`);
    return;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  // Process directories first (depth-first to handle nested structures)
  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Recursively process subdirectories first
      decodePathNames(fullPath);

      // Check if directory name is URL-encoded
      const decodedName = decodeURIComponent(item.name);

      if (decodedName !== item.name) {
        const newPath = path.join(dir, decodedName);

        console.log(`Renaming directory: "${item.name}" -> "${decodedName}"`);

        try {
          fs.renameSync(fullPath, newPath);
          console.log(`  ✓ Success!`);
        } catch (error) {
          console.error(`  ✗ Failed: ${error.message}`);
        }
      }
    }
  }

  // Process files and update references
  const itemsAfterRename = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of itemsAfterRename) {
    const fullPath = path.join(dir, item.name);

    if (item.isFile() && item.name.endsWith('.html')) {
      // Update HTML file contents to fix internal links
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Replace URL-encoded paths in href and src attributes
        content = content.replace(/(href|src)="([^"]*%20[^"]*)"/g, (match, attr, url) => {
          const decoded = decodeURIComponent(url);
          if (decoded !== url) {
            modified = true;
            return `${attr}="${decoded}"`;
          }
          return match;
        });

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated links in: ${item.name}`);
        }
      } catch (error) {
        console.error(`Error updating ${item.name}: ${error.message}`);
      }
    }
  }
}

console.log('Starting to fix URL-encoded paths in output directory...\n');
decodePathNames(OUTPUT_DIR);
console.log('\n✓ Done! Output directory paths have been fixed for GitHub Pages.');

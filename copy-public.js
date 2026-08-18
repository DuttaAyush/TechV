const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'frontend', 'public');
const dest = path.join(__dirname, 'public');

if (fs.existsSync(src)) {
  fs.cpSync(src, dest, { recursive: true });
  console.log('Successfully copied frontend/public to public');
}

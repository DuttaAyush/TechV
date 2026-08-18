const fs = require('fs');
const path = require('path');

['.next', 'frontend/.next', 'out', 'frontend/out'].forEach((dir) => {
  const p = path.join(__dirname, dir);
  if (fs.existsSync(p)) {
    try {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(`Cleaned ${dir}`);
    } catch (err) {
      // Ignore if locked
    }
  }
});
